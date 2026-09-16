"use strict";

const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const { writeFileSync } = require("node:fs");
const path = require("node:path");

const WINDOW_DAYS = 28;
const TARGET_COVERAGE_DAYS = 7.5;
const SOURCE_PROTECTION_DAYS = 7;
const SOURCE_SAFETY_FLOOR = 2;
const MAX_RECORDS = 24;
const MAX_RECORDS_PER_TARGET = 6;
const PILOT_CITY = "北京";
const PILOT_STORE_LIMIT = 4;
const mysqlBin = process.env.MYSQL_BIN || "C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\mysql.exe";
const db = {
  host: process.env.FR_DB_HOST,
  port: process.env.FR_DB_PORT,
  name: process.env.FR_DB_NAME,
  user: process.env.FR_DB_USER
};

for (const [key, value] of Object.entries(db)) {
  assert.ok(value, `Missing ${key}. Set FR_DB_HOST, FR_DB_PORT, FR_DB_NAME, and FR_DB_USER.`);
}
assert.ok(process.env.MYSQL_PWD, "Missing MYSQL_PWD.");

function sqlString(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function toDateNumber(date) {
  return Number(`${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`);
}

function getWindowStart(endDate) {
  const text = String(endDate);
  const date = new Date(Date.UTC(Number(text.slice(0, 4)), Number(text.slice(4, 6)) - 1, Number(text.slice(6, 8))));
  date.setUTCDate(date.getUTCDate() - (WINDOW_DAYS - 1));
  return toDateNumber(date);
}

function toIsoDate(value) {
  const text = String(value);
  return `${text.slice(0, 4)}-${text.slice(4, 6)}-${text.slice(6, 8)}`;
}

function mysqlQuery(sql) {
  const output = execFileSync(mysqlBin, [
    `--host=${db.host}`,
    `--port=${db.port}`,
    `--user=${db.user}`,
    `--database=${db.name}`,
    "--protocol=tcp",
    "--batch",
    "--raw",
    "--skip-column-names",
    "--default-character-set=utf8mb4",
    `--execute=${sql}`
  ], {
    encoding: "utf8",
    env: process.env,
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"]
  });
  return output.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}

function number(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function cityName(value) {
  return String(value || "").trim().replace(/市$/, "");
}

function regionForCity(city) {
  if (["北京", "天津", "沈阳"].includes(city)) return "north";
  if (["上海", "杭州", "宁波", "温州"].includes(city)) return "east";
  if (["长沙", "武汉"].includes(city)) return "central";
  if (["福州", "厦门"].includes(city)) return "south";
  return "other";
}

function storeSkuKey(storeCode, sku) {
  return `${String(storeCode).toUpperCase()}::${String(sku).toUpperCase()}`;
}

function chooseRecords(candidates) {
  const chosen = [];
  const perTarget = new Map();
  candidates.forEach((candidate) => {
    const count = perTarget.get(candidate.target.code) || 0;
    if (count >= MAX_RECORDS_PER_TARGET || chosen.length >= MAX_RECORDS) return;
    chosen.push(candidate);
    perTarget.set(candidate.target.code, count + 1);
  });
  return chosen;
}

function queryProducts(skus) {
  const rows = [];
  for (let index = 0; index < skus.length; index += 300) {
    const skuChunk = skus.slice(index, index + 300).map(sqlString).join(", ");
    rows.push(...mysqlQuery(`
      SELECT JSON_OBJECT(
        'sku', colthno,
        'product', MAX(COALESCE(NULLIF(colthname, ''), colthno)),
        'category', MAX(COALESCE(NULLIF(dalei_name, ''), '未分类')),
        'price', MAX(COALESCE(sprice, 0))
      )
      FROM rl_coloth_t
      WHERE colthno IN (${skuChunk})
      GROUP BY colthno
    `));
  }
  return rows;
}

const [{ endDate }] = mysqlQuery(`
  SELECT JSON_OBJECT('endDate', MAX(t_outdate))
  FROM adb_shops_skus_sales_da
  WHERE t_satypes = 0
`);
const salesWindowEnd = number(endDate);
const salesWindowStart = getWindowStart(salesWindowEnd);

const pilotStores = mysqlQuery(`
  SELECT JSON_OBJECT(
    'code', s.t_cusno,
    'name', COALESCE(NULLIF(d.names_col, ''), s.t_cusno),
    'city', COALESCE(NULLIF(d.shi, ''), NULLIF(d.sheng, ''), ''),
    'units', SUM(s.s_nb)
  )
  FROM adb_shops_skus_sales_da s
  LEFT JOIN rl_db d ON d.dbno = s.t_cusno
  WHERE s.t_satypes = 0
    AND s.t_outdate BETWEEN ${salesWindowStart} AND ${salesWindowEnd}
    AND COALESCE(d.names_col, '') LIKE '%三丽鸥%'
    AND COALESCE(d.names_col, '') NOT REGEXP '仓|WH'
    AND COALESCE(NULLIF(d.shi, ''), NULLIF(d.sheng, ''), '') IN ('北京', '北京市')
  GROUP BY s.t_cusno, d.names_col, d.shi, d.sheng
  ORDER BY SUM(s.s_nb) DESC, s.t_cusno
  LIMIT ${PILOT_STORE_LIMIT}
`).map((store) => ({
  ...store,
  code: String(store.code).toUpperCase(),
  city: cityName(store.city),
  region: regionForCity(cityName(store.city)),
  units: number(store.units)
}));

assert.equal(pilotStores.length, PILOT_STORE_LIMIT, `Expected ${PILOT_STORE_LIMIT} active ${PILOT_CITY} retail pilot stores.`);
const storeCodes = pilotStores.map((store) => store.code);
const storeCodeList = storeCodes.map(sqlString).join(", ");
const storesByCode = new Map(pilotStores.map((store) => [store.code, store]));

const inventoryRows = mysqlQuery(`
  SELECT JSON_OBJECT(
    'storeCode', cusno,
    'sku', colthno,
    'color', MAX(COALESCE(color, '')),
    'stock', SUM(COALESCE(rnb_r, 0)),
    'temporaryInbound', SUM(COALESCE(tempinnb, 0))
  )
  FROM adb_shops_skus_invs_da
  WHERE cusno IN (${storeCodeList})
  GROUP BY cusno, colthno
`).map((row) => ({
  ...row,
  storeCode: String(row.storeCode).toUpperCase(),
  sku: String(row.sku).toUpperCase(),
  stock: number(row.stock),
  temporaryInbound: number(row.temporaryInbound)
}));

const salesRows = mysqlQuery(`
  SELECT JSON_OBJECT(
    'storeCode', t_cusno,
    'sku', s_colthno,
    'color', MAX(COALESCE(s_color, '')),
    'units', SUM(s_nb),
    'lastPrice', CASE WHEN SUM(s_nb) > 0 THEN SUM(COALESCE(s_endprice, 0) * s_nb) / SUM(s_nb) ELSE 0 END
  )
  FROM adb_shops_skus_sales_da
  WHERE t_satypes = 0
    AND t_outdate BETWEEN ${salesWindowStart} AND ${salesWindowEnd}
    AND t_cusno IN (${storeCodeList})
  GROUP BY t_cusno, s_colthno
`).map((row) => ({
  ...row,
  storeCode: String(row.storeCode).toUpperCase(),
  sku: String(row.sku).toUpperCase(),
  units: number(row.units),
  lastPrice: number(row.lastPrice)
}));

const skuList = [...new Set(salesRows.map((row) => row.sku))];
const productRows = queryProducts(skuList).map((row) => ({
  ...row,
  sku: String(row.sku).toUpperCase(),
  price: number(row.price)
}));

const inventoryByStoreSku = new Map(inventoryRows.map((row) => [storeSkuKey(row.storeCode, row.sku), row]));
const salesByStoreSku = new Map(salesRows.map((row) => [storeSkuKey(row.storeCode, row.sku), row]));
const productsBySku = new Map(productRows.map((row) => [row.sku, row]));

const candidates = salesRows.map((sales) => {
  const targetStore = storesByCode.get(sales.storeCode);
  const inventory = inventoryByStoreSku.get(storeSkuKey(sales.storeCode, sales.sku));
  const product = productsBySku.get(sales.sku);
  const dailyDemand = sales.units / WINDOW_DAYS;
  const physical = Math.max(0, inventory?.stock || 0);
  const targetStock = Math.ceil(dailyDemand * TARGET_COVERAGE_DAYS);
  const shortage = Math.max(0, targetStock - physical);
  const sources = pilotStores
    .filter((store) => store.code !== sales.storeCode)
    .map((store) => {
      const sourceInventory = inventoryByStoreSku.get(storeSkuKey(store.code, sales.sku));
      const sourceSales = salesByStoreSku.get(storeSkuKey(store.code, sales.sku));
      const stock = Math.max(0, sourceInventory?.stock || 0);
      const safety = Math.max(SOURCE_SAFETY_FLOOR, Math.ceil((number(sourceSales?.units) / WINDOW_DAYS) * SOURCE_PROTECTION_DAYS));
      return {
        code: store.code,
        name: store.name,
        city: store.city,
        stock,
        safety,
        available: Math.max(0, stock - safety)
      };
    })
    .filter((source) => source.available > 0)
    .sort((left, right) => Number(left.city !== targetStore.city) - Number(right.city !== targetStore.city)
      || right.available - left.available
      || left.code.localeCompare(right.code))
    .slice(0, 5);
  const price = Math.max(0, number(product?.price) || sales.lastPrice);
  return {
    id: `FR-${sales.storeCode}-${sales.sku}`,
    group: `FR-${sales.storeCode}`,
    region: targetStore.region,
    product: String(product?.product || sales.sku),
    sku: sales.sku,
    color: String(sales.color || inventory?.color || "未维护"),
    category: String(product?.category || "未分类"),
    price,
    captureRate: 0.85,
    target: {
      code: targetStore.code,
      name: targetStore.name,
      city: targetStore.city,
      physical,
      inbound: 0,
      dailyDemand
    },
    sources,
    currentCoverageDays: physical / Math.max(dailyDemand, 0.01),
    shortage
  };
}).filter((record) => record.shortage > 0 && record.sources.length > 0 && record.price > 0)
  .sort((left, right) => left.currentCoverageDays - right.currentCoverageDays
    || right.shortage * right.price - left.shortage * left.price
    || left.id.localeCompare(right.id));

const records = chooseRecords(candidates).map(({ currentCoverageDays, shortage, ...record }) => record);

assert.ok(records.length > 0, "No actionable records were found in the read-only snapshot.");
assert.ok(records.every((record) => record.sources.length > 0 && record.target.dailyDemand > 0));
assert.ok(records.every((record) => record.sources.every((source) => source.available >= 0 && source.stock >= source.safety)));

const data = {
  metadata: {
    source: `FR 测试库只读快照（${PILOT_CITY}门店组）`,
    scopeLabel: `${PILOT_CITY}门店组`,
    generatedAt: new Date().toISOString(),
    salesWindowStart: toIsoDate(salesWindowStart),
    salesWindowEnd: toIsoDate(salesWindowEnd),
    pilotStoreCount: pilotStores.length,
    pilotStores: pilotStores.map(({ code, name, city, region }) => ({ code, name, city, region })),
    trialAssumptions: {
      coverageDays: 7,
      demandBufferDays: 0.5,
      sourceProtectionDays: SOURCE_PROTECTION_DAYS,
      sourceSafetyFloor: SOURCE_SAFETY_FLOOR,
      grossMargin: 46,
      captureRate: 0.85,
      parcelCapacity: 60,
      sameCityParcelCost: 10,
      crossCityParcelCost: 22,
      sameCityEtaDays: 0.5,
      crossCityEtaDays: 2
    },
    dataNotes: [
      "销售口径为近 28 天 t_satypes=0 的正常销售。",
      "库存使用 adb_shops_skus_invs_da.rnb_r；tempinnb 未提供 ETA 或确认状态，不计入确认在途。",
      "线路运价、ETA、门店库容、最低陈列、实际毛利和活动日历不在 FR 当前表中，继续以试点参数或本机上传资料补齐。"
    ]
  },
  records
};

const outputPath = path.join(__dirname, "fr-demo-data.js");
writeFileSync(outputPath, `"use strict";\n\nwindow.FR_DEMO_DATA = ${JSON.stringify(data, null, 2)};\n`, "utf8");
console.log(`Generated ${records.length} actionable records for ${pilotStores.length} pilot stores: ${outputPath}`);
