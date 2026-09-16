"use strict";

const moneyFormatter = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  maximumFractionDigits: 0
});

const numberFormatter = new Intl.NumberFormat("zh-CN", {
  maximumFractionDigits: 0
});

const fallbackTransferSeed = [
  {
    id: "BJ-001",
    group: "BJ-APM-01",
    region: "north",
    product: "北京限定糖葫芦系列挂件:KT",
    sku: "SR340225J5002K7",
    color: "999-MISC",
    category: "挂件",
    price: 137.21,
    captureRate: 0.86,
    target: {
      code: "BJSR04",
      name: "北京东城东华门街 apm 三丽鸥",
      city: "北京",
      physical: 28,
      inbound: 0,
      dailyDemand: 675 / 28
    },
    sources: [
      { code: "BJSR03", name: "北京海淀清河中路万象汇三丽鸥", city: "北京", stock: 201, safety: 37, available: 164 },
      { code: "BJSR01", name: "北京荟聚三丽鸥", city: "北京", stock: 155, safety: 44, available: 111 }
    ]
  },
  {
    id: "BJ-002",
    group: "BJ-APM-01",
    region: "north",
    product: "北京限定糖葫芦系列挂件:KT",
    sku: "SR340225J5003K7",
    color: "999-MISC",
    category: "挂件",
    price: 97.58,
    captureRate: 0.83,
    target: {
      code: "BJSR04",
      name: "北京东城东华门街 apm 三丽鸥",
      city: "北京",
      physical: 58,
      inbound: 0,
      dailyDemand: 465 / 28
    },
    sources: [
      { code: "BJSR03", name: "北京海淀清河中路万象汇三丽鸥", city: "北京", stock: 161, safety: 34, available: 127 },
      { code: "BJSR01", name: "北京荟聚三丽鸥", city: "北京", stock: 141, safety: 31, available: 110 }
    ]
  },
  {
    id: "BJ-003",
    group: "BJ-APM-01",
    region: "north",
    product: "心意礼愿系列盲盒手机挂链：MX",
    sku: "SR340426B8015Z7",
    color: "999-MISC",
    category: "盲盒挂件",
    price: 148.86,
    captureRate: 0.8,
    target: {
      code: "BJSR04",
      name: "北京东城东华门街 apm 三丽鸥",
      city: "北京",
      physical: 4,
      inbound: 0,
      dailyDemand: 148 / 28
    },
    sources: [
      { code: "BJSR03", name: "北京海淀清河中路万象汇三丽鸥", city: "北京", stock: 84, safety: 10, available: 74 },
      { code: "BJSR01", name: "北京荟聚三丽鸥", city: "北京", stock: 65, safety: 13, available: 52 }
    ]
  },
  {
    id: "BJ-004",
    group: "BJ-APM-01",
    region: "north",
    product: "收藏系列装饰物 KT",
    sku: "SR34022535001K7",
    color: "999-MISC",
    category: "装饰物",
    price: 88.43,
    captureRate: 0.76,
    target: {
      code: "BJSR04",
      name: "北京东城东华门街 apm 三丽鸥",
      city: "北京",
      physical: 1,
      inbound: 0,
      dailyDemand: 90 / 28
    },
    sources: [
      { code: "BJSR03", name: "北京海淀清河中路万象汇三丽鸥", city: "北京", stock: 36, safety: 8, available: 28 },
      { code: "BJSR01", name: "北京荟聚三丽鸥", city: "北京", stock: 42, safety: 10, available: 32 }
    ]
  },
  {
    id: "FJ-001",
    group: "FJ-XM-01",
    region: "south",
    product: "摩登假日系列皮草挂件:凯蒂猫",
    sku: "SR34022687003K7",
    color: "999-MISC",
    category: "挂件",
    price: 168.23,
    captureRate: 0.82,
    target: {
      code: "FJSR01",
      name: "厦门思明湖滨东路万象城三丽鸥",
      city: "厦门",
      physical: 15,
      inbound: 0,
      dailyDemand: 383 / 28
    },
    sources: [
      { code: "FJSR02", name: "福州仓山烟台山商业漫步街区三丽鸥", city: "福州", stock: 250, safety: 51, available: 199 },
      { code: "NBSR01", name: "宁波天一广场三丽鸥", city: "宁波", stock: 230, safety: 49, available: 181 }
    ]
  },
  {
    id: "HZ-001",
    group: "HZ-XS-01",
    region: "east",
    product: "摩登假日系列皮草挂件:凯蒂猫",
    sku: "SR34022687003K7",
    color: "999-MISC",
    category: "挂件",
    price: 167.52,
    captureRate: 0.79,
    target: {
      code: "HZSR03",
      name: "杭州萧山万象汇三丽鸥",
      city: "杭州",
      physical: 0,
      inbound: 161,
      dailyDemand: 149 / 28
    },
    sources: [
      { code: "HZSR01", name: "杭州湖滨 in77 C1 区 B1 层三丽鸥", city: "杭州", stock: 215, safety: 55, available: 160 },
      { code: "NBSR01", name: "宁波天一广场三丽鸥", city: "宁波", stock: 230, safety: 49, available: 181 }
    ]
  },
  {
    id: "NB-001",
    group: "NB-BJ-01",
    region: "north",
    product: "摩登假日系列皮草挂件:凯蒂猫",
    sku: "SR34022687003K7",
    color: "999-MISC",
    category: "挂件",
    price: 167.51,
    captureRate: 0.84,
    target: {
      code: "BJSR02",
      name: "北京合生汇三丽鸥",
      city: "北京",
      physical: 1,
      inbound: 80,
      dailyDemand: 503 / 28
    },
    sources: [
      { code: "NBSR01", name: "宁波天一广场三丽鸥", city: "宁波", stock: 230, safety: 49, available: 181 },
      { code: "FJSR02", name: "福州仓山烟台山商业漫步街区三丽鸥", city: "福州", stock: 250, safety: 51, available: 199 }
    ]
  },
  {
    id: "HOLD-001",
    group: "BJ-HOLD-01",
    region: "north",
    product: "市场赠品美酷爱心双面镜",
    sku: "SR260772574017Z7",
    color: "999-MISC",
    category: "赠品",
    price: 0.33,
    captureRate: 0.92,
    forceHold: true,
    target: {
      code: "BJSR03",
      name: "北京海淀清河中路万象汇三丽鸥",
      city: "北京",
      physical: 44,
      inbound: 0,
      dailyDemand: 275 / 28
    },
    sources: [
      { code: "BJSR01", name: "北京荟聚三丽鸥", city: "北京", stock: 78, safety: 30, available: 48 },
      { code: "BJSR02", name: "北京合生汇三丽鸥", city: "北京", stock: 52, safety: 27, available: 25 }
    ]
  }
];

const frDemoData = typeof globalThis !== "undefined" ? globalThis.FR_DEMO_DATA : null;
const hasFrSnapshot = Array.isArray(frDemoData?.records) && frDemoData.records.length > 0;
const snapshotMetadata = hasFrSnapshot ? (frDemoData.metadata || {}) : {};
const transferSeed = JSON.parse(JSON.stringify(hasFrSnapshot ? frDemoData.records : fallbackTransferSeed));
const initialTransferSeed = JSON.parse(JSON.stringify(transferSeed));
const initialSelectedId = transferSeed[0]?.id || "";

function createInitialFlow() {
  return {
    status: "待总部审核",
    activeGroupKey: null,
    activeRoute: null,
    events: [
      { title: "补调方案已生成", detail: hasFrSnapshot ? `已按 FR 测试库只读快照、试点参数与${snapshotMetadata.scopeLabel || "试点范围"}分配规则完成本轮计算。` : "按默认库存、毛利、物流试算和审批规则完成本轮模拟。", time: "09:00", type: "normal" },
      { title: "调出店保护库存已锁定", detail: "每个调出来源均保留动态保护库存，分配不会突破安全边界。", time: "09:00", type: "normal" }
    ]
  };
}

const state = {
  activeTab: "overview",
  scope: "all",
  statusFilter: "all",
  selectedId: initialSelectedId,
  role: "hq",
  settings: {
    coverageDays: 7,
    urgentCoverageDays: 2,
    demandBufferDays: 0.5,
    sourceProtectionDays: 7,
    minimumTransferQuantity: 2,
    minimumNetContribution: 0,
    grossMargin: 46,
    sameCityCost: 10,
    crossCityCost: 22,
    parcelCapacity: 60,
    approvalThreshold: 5000,
    strategicStore: "BJSR04",
    allowFallbackRates: true
  },
  rateCard: {
    fileName: "",
    routes: new Map(),
    skippedRows: 0
  },
  productParameters: {
    fileName: "",
    records: new Map(),
    skippedRows: 0
  },
  operatingSnapshot: {
    fileName: "",
    records: new Map(),
    skippedRows: 0,
    matchedTargets: 0,
    matchedSources: 0
  },
  storeConstraints: {
    fileName: "",
    records: new Map(),
    skippedRows: 0
  },
  statuses: {},
  sourceOverrides: {},
  inTransitTransfers: new Map(),
  flow: createInitialFlow(),
  pendingChanges: [],
  lastRun: "已按当前规则完成本轮计算",
  calculationAt: new Date()
};

const initialSettings = { ...state.settings };

const roleNames = {
  hq: "总部运营",
  source: "调出店",
  target: "调入店",
  admin: "管理员"
};

const pageLabels = {
  overview: { kicker: "经营工作台", title: "运营总览" },
  plans: { kicker: "方案审核", title: "补调方案" },
  orders: { kicker: "执行输出", title: "合并调拨单" },
  fulfillment: { kicker: "运营闭环", title: "履约中心" },
  data: { kicker: "数据接入", title: "试点资料" },
  rules: { kicker: "策略治理", title: "策略中心" }
};

let toastTimer;

function getSnapshotContext() {
  if (!hasFrSnapshot) {
    return {
      title: "FR 测试库快照",
      copy: "仅本机演示，不回写源库",
      tag: "读取快照，不回写源库",
      network: "当前快照：仅本机演示数据",
      operatingSource: "演示经营快照"
    };
  }
  const salesWindow = snapshotMetadata.salesWindowStart && snapshotMetadata.salesWindowEnd
    ? `${snapshotMetadata.salesWindowStart} 至 ${snapshotMetadata.salesWindowEnd}`
    : "近 28 天";
  const pilotStoreCount = Number(snapshotMetadata.pilotStoreCount) || new Set(transferSeed.map((record) => record.target.code)).size;
  const scopeLabel = snapshotMetadata.scopeLabel || "试点门店组";
  return {
    title: "FR 测试库只读快照",
    copy: `${scopeLabel} · 本机计算，不回写源库`,
    tag: `销量口径 ${salesWindow}`,
    network: `当前范围：${scopeLabel} · ${formatNumber(pilotStoreCount)} 家试点门店 · ${formatNumber(transferSeed.length)} 条待补调 SKU`,
    operatingSource: `FR 只读快照：${scopeLabel} ${formatNumber(pilotStoreCount)} 家门店，销量 ${salesWindow}`
  };
}

function getImportedDataTypeCount() {
  return [
    hasFrSnapshot || state.operatingSnapshot.records.size > 0,
    state.rateCard.routes.size > 0,
    state.productParameters.records.size > 0,
    state.storeConstraints.records.size > 0,
  ].filter(Boolean).length;
}

function renderSnapshotContext() {
  const context = getSnapshotContext();
  const title = document.querySelector("#snapshotTitle");
  const copy = document.querySelector("#snapshotCopy");
  const tag = document.querySelector("#snapshotTag");
  const network = document.querySelector("#networkContext");
  if (title) title.textContent = context.title;
  if (copy) copy.textContent = context.copy;
  if (tag) tag.innerHTML = `<i data-lucide="lock-keyhole" aria-hidden="true"></i>${escapeHtml(context.tag)}`;
  if (network) network.textContent = context.network;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMoney(value) {
  return moneyFormatter.format(Math.max(0, Math.round(value)));
}

function formatNumber(value) {
  return numberFormatter.format(Math.round(value));
}

function isStrategicStore(storeCode) {
  return state.settings.strategicStore !== "none"
    && String(storeCode).trim().toUpperCase() === state.settings.strategicStore;
}

function isStrategic(record) {
  return isStrategicStore(record.target.code);
}

function routeKey(sourceCode, targetCode) {
  return `${String(sourceCode).trim().toUpperCase()}::${String(targetCode).trim().toUpperCase()}`;
}

function skuKey(sku) {
  return String(sku).trim().toUpperCase();
}

function normalizeCity(value) {
  return String(value || "").trim();
}

function parseCityScope(value) {
  const normalized = String(value || "").trim();
  if (!normalized) return null;
  if (/^(全国|不限|全部|全量|all|\*)$/i.test(normalized)) return [];
  return [...new Set(normalized
    .split(/[、,，;；|/\s]+/)
    .map(normalizeCity)
    .filter(Boolean))];
}

function inferCityScope(record) {
  const productName = String(record.product || "");
  const cities = [...new Set([record.target?.city, ...(record.sources || []).map((source) => source.city)])]
    .map(normalizeCity)
    .filter(Boolean)
    .sort((left, right) => right.length - left.length);
  const matchedCity = cities.find((city) => productName.includes(`${city}限定`) || productName.includes(`${city}城市限定`));
  return matchedCity ? [matchedCity] : null;
}

function isCityAllowed(productParameters, city) {
  const normalizedCity = normalizeCity(city);
  return !productParameters.allowedCities?.length || productParameters.allowedCities.includes(normalizedCity);
}

function getCityScopeLabel(productParameters) {
  return productParameters.allowedCities?.length ? productParameters.allowedCities.join("、") : "不限城市";
}

function getStorePriorityMultiplier(storeCode) {
  const constraint = getStoreConstraint(storeCode);
  const strategicMultiplier = isStrategicStore(storeCode) ? 1.15 : 1;
  return Math.max(0.1, strategicMultiplier * (1 + constraint.priorityAdjustment / 100));
}

function getProductParameters(record) {
  const imported = state.productParameters.records.get(skuKey(record.sku));
  return {
    grossMargin: Number.isFinite(imported?.grossMargin) ? imported.grossMargin : state.settings.grossMargin,
    parcelCapacity: Number.isFinite(imported?.parcelCapacity) ? imported.parcelCapacity : state.settings.parcelCapacity,
    lifecycle: imported?.lifecycle || "未维护",
    allowedCities: imported?.allowedCities ?? inferCityScope(record),
    isImported: Boolean(imported)
  };
}

function getStoreConstraint(storeCode) {
  const imported = state.storeConstraints.records.get(String(storeCode).trim().toUpperCase());
  return {
    maxCapacity: Number.isFinite(imported?.maxCapacity) ? imported.maxCapacity : Number.POSITIVE_INFINITY,
    minDisplay: Number.isFinite(imported?.minDisplay) ? imported.minDisplay : 0,
    priorityAdjustment: Number.isFinite(imported?.priorityAdjustment) ? imported.priorityAdjustment : 0,
    allowInbound: imported?.allowInbound ?? true,
    allowOutbound: imported?.allowOutbound ?? true,
    isImported: Boolean(imported)
  };
}

function canSourceSend(source) {
  return getStoreConstraint(source.code).allowOutbound;
}

function getFallbackRouteQuote(source, target) {
  const isSameCity = source.city === target.city;
  return {
    parcelCost: isSameCity ? state.settings.sameCityCost : state.settings.crossCityCost,
    etaDays: isSameCity ? 0.5 : 2,
    etaHours: isSameCity ? 12 : 48,
    handlingHours: 0,
    receivingHours: 0,
    cutoffHour: null,
    cutoffDelayHours: 0,
    volatilityHours: 0,
    rateSource: "演示试算价",
    isFallback: true
  };
}

function getCalculationHour() {
  const calculationAt = state.calculationAt instanceof Date ? state.calculationAt : new Date();
  return calculationAt.getHours() + calculationAt.getMinutes() / 60;
}

function addRouteTiming(quote) {
  const etaHours = Number.isFinite(quote.etaHours)
    ? quote.etaHours
    : (Number.isFinite(quote.etaDays) ? quote.etaDays * 24 : null);
  if (!Number.isFinite(etaHours)) {
    return { ...quote, etaDays: null, etaHours: null, cutoffWaitHours: 0, hasTimeBreakdown: false };
  }
  const cutoffHour = Number.isFinite(quote.cutoffHour) ? quote.cutoffHour : null;
  const cutoffWaitHours = cutoffHour !== null && getCalculationHour() > cutoffHour
    ? Math.max(0, Number(quote.cutoffDelayHours) || 24)
    : 0;
  const handlingHours = Math.max(0, Number(quote.handlingHours) || 0);
  const receivingHours = Math.max(0, Number(quote.receivingHours) || 0);
  const volatilityHours = Math.max(0, Number(quote.volatilityHours) || 0);
  const totalEtaHours = etaHours + handlingHours + receivingHours + volatilityHours + cutoffWaitHours;
  return {
    ...quote,
    etaHours: totalEtaHours,
    etaDays: totalEtaHours / 24,
    cutoffWaitHours,
    hasTimeBreakdown: Boolean(cutoffHour !== null || handlingHours || receivingHours || volatilityHours)
  };
}

function getRouteQuote(source, target) {
  const importedQuote = state.rateCard.routes.get(routeKey(source.code, target.code));
  if (importedQuote) {
    return addRouteTiming({
      ...importedQuote,
      rateSource: "上传运价表",
      isFallback: false
    });
  }
  return addRouteTiming(getFallbackRouteQuote(source, target));
}

function formatEta(etaDays) {
  if (!Number.isFinite(etaDays)) return "待维护";
  if (etaDays === 0) return "当日";
  if (etaDays < 1) return `${Math.round(etaDays * 24)} 小时`;
  return `${etaDays.toFixed(1)} 天`;
}

function formatCoverageDays(value) {
  if (!Number.isFinite(value)) return "无动销基准";
  return `${value.toFixed(1)} 天`;
}

function formatRouteTiming(quote) {
  const parts = [];
  if (quote.cutoffWaitHours) parts.push(`截单顺延 ${formatEta(quote.cutoffWaitHours / 24)}`);
  if (quote.handlingHours) parts.push(`出库 ${formatEta(quote.handlingHours / 24)}`);
  if (quote.receivingHours) parts.push(`收货 ${formatEta(quote.receivingHours / 24)}`);
  if (quote.volatilityHours) parts.push(`缓冲 ${formatEta(quote.volatilityHours / 24)}`);
  return parts.length ? `${formatEta(quote.etaDays)}（${parts.join(" · ")}）` : formatEta(quote.etaDays);
}

function getInTransitOutboundQuantity(record, sourceCode) {
  const sku = skuKey(record.sku);
  const normalizedSourceCode = String(sourceCode).trim().toUpperCase();
  let committedQuantity = 0;
  state.inTransitTransfers.forEach((transfer) => {
    if (transfer.sku !== sku) return;
    transfer.allocations.forEach((allocation) => {
      if (allocation.sourceCode === normalizedSourceCode) committedQuantity += allocation.quantity;
    });
  });
  return committedQuantity;
}

function getInventoryPosition(record, protectionDays) {
  const onHand = Math.max(0, Number(record.target.physical) || 0);
  const scheduledInbound = Array.isArray(record.target.confirmedInbound) ? record.target.confirmedInbound : [];
  const dispatchedInbound = [...state.inTransitTransfers.values()]
    .filter((transfer) => transfer.recordId === record.id)
    .flatMap((transfer) => transfer.inbounds || []);
  const confirmedEntries = [...scheduledInbound, ...dispatchedInbound]
    .map((entry) => ({ quantity: Number(entry.quantity), etaDays: Number(entry.etaDays) }))
    .filter((entry) => Number.isFinite(entry.quantity) && entry.quantity > 0 && Number.isFinite(entry.etaDays) && entry.etaDays >= 0);
  const confirmedWithinProtection = confirmedEntries
    .filter((entry) => entry.etaDays <= protectionDays)
    .sort((left, right) => left.etaDays - right.etaDays);
  const confirmedInbound = confirmedWithinProtection.reduce((sum, entry) => sum + entry.quantity, 0);
  const confirmedInboundLater = confirmedEntries
    .filter((entry) => entry.etaDays > protectionDays)
    .reduce((sum, entry) => sum + entry.quantity, 0);
  const reservedOutbound = getInTransitOutboundQuantity(record, record.target.code);
  const unconfirmedInbound = Math.max(0, Number(record.target.inbound) || 0);

  return {
    onHand,
    confirmedInbound,
    confirmedInboundLater,
    confirmedEntries: confirmedWithinProtection,
    reservedOutbound,
    unconfirmedInbound,
    total: Math.max(0, onHand - reservedOutbound + confirmedInbound)
  };
}

function getArrivalRisk(record, inventoryPosition, demandOverride = record.target.dailyDemand) {
  const dailyDemand = Math.max(0, Number(demandOverride) || 0);
  const availableOnHand = Math.max(0, inventoryPosition.onHand - inventoryPosition.reservedOutbound);
  const stockoutDays = dailyDemand ? availableOnHand / dailyDemand : Number.POSITIVE_INFINITY;
  const confirmedEntries = inventoryPosition.confirmedEntries || [];
  if (!dailyDemand || !confirmedEntries.length) {
    return {
      hasRisk: false,
      gapQuantity: 0,
      deadlineDays: null,
      stockoutDays,
      firstInboundEtaDays: null
    };
  }

  let available = availableOnHand;
  let previousEta = 0;
  let firstGapDay = null;
  let gapQuantity = 0;
  confirmedEntries.forEach((entry) => {
    const demandUntilArrival = dailyDemand * Math.max(0, entry.etaDays - previousEta);
    if (available < demandUntilArrival) {
      gapQuantity += demandUntilArrival - available;
      if (firstGapDay === null) firstGapDay = previousEta + available / dailyDemand;
      available = 0;
    } else {
      available -= demandUntilArrival;
    }
    available += entry.quantity;
    previousEta = entry.etaDays;
  });

  return {
    hasRisk: gapQuantity > 0,
    gapQuantity: Math.ceil(gapQuantity),
    deadlineDays: firstGapDay,
    stockoutDays,
    firstInboundEtaDays: confirmedEntries[0].etaDays
  };
}

function getOperatingSnapshotEntry(sku, storeCode) {
  return state.operatingSnapshot.records.get(`${skuKey(sku)}::${String(storeCode).trim().toUpperCase()}`);
}

function getSourceDemandProfile(source, record, productParameters) {
  const staticSafety = Math.max(0, Number(source.safety) || 0);
  const sourceConstraint = getStoreConstraint(source.code);
  const sourceDemandRecord = record
    ? transferSeed.find((item) => skuKey(item.sku) === skuKey(record.sku) && item.target.code === source.code)
    : null;
  const snapshotEntry = record ? getOperatingSnapshotEntry(record.sku, source.code) : null;
  const demandValues = [snapshotEntry?.dailyDemand, source.dailyDemand, sourceDemandRecord?.target.dailyDemand]
    .map(Number)
    .filter((value) => Number.isFinite(value) && value >= 0);
  const dailyDemand = demandValues[0] ?? staticSafety / 7;
  const multiplierValues = [snapshotEntry?.demandMultiplier, source.demandMultiplier, sourceDemandRecord?.target.demandMultiplier]
    .map(Number)
    .filter((value) => Number.isFinite(value) && value > 0);
  const demandMultiplier = multiplierValues[0] ?? 1;
  const forecastDailyDemand = dailyDemand * demandMultiplier;
  const sourceProductParameters = productParameters || (record ? getProductParameters(record) : {
    grossMargin: state.settings.grossMargin,
    lifecycle: "未维护"
  });
  const sourceProtectionDays = state.settings.sourceProtectionDays * (isStrategicStore(source.code) ? 1.5 : 1);
  const demandProtection = Math.ceil(forecastDailyDemand * sourceProtectionDays);
  const protectionStock = Math.max(staticSafety, sourceConstraint.minDisplay, demandProtection);
  const sourcePriorityMultiplier = getStorePriorityMultiplier(source.code);
  const lifecycleCoverageDays = getLifecycleCoverageDays(sourceProductParameters.lifecycle);
  const demandBufferDays = getDemandBufferDays(sourceProductParameters.lifecycle);
  const desiredTargetStock = Math.ceil(forecastDailyDemand * (lifecycleCoverageDays + demandBufferDays) * sourcePriorityMultiplier);
  const maxCapacity = Number.isFinite(sourceConstraint.maxCapacity) ? sourceConstraint.maxCapacity : Number.POSITIVE_INFINITY;
  const targetStock = Math.max(protectionStock, Math.min(Math.max(desiredTargetStock, sourceConstraint.minDisplay), maxCapacity));
  const sourceBasis = sourceDemandRecord || record;
  const unitContribution = sourceBasis
    ? sourceBasis.price * sourceBasis.captureRate * (sourceProductParameters.grossMargin / 100)
    : null;
  return {
    staticSafety,
    dailyDemand,
    demandMultiplier,
    forecastDailyDemand,
    sourceProtectionDays,
    protectionStock,
    targetStock,
    sourcePriorityMultiplier,
    unitContribution,
    hasObservedDemand: demandValues.length > 0,
    isStrategicSource: isStrategicStore(source.code)
  };
}

function getSourceProtection(source, record, productParameters) {
  const profile = getSourceDemandProfile(source, record, productParameters);
  return {
    ...profile,
    isDynamic: profile.protectionStock > profile.staticSafety
  };
}

function getSourceSafeAvailable(source, record) {
  const stock = Number(source.stock);
  const protection = getSourceProtection(source, record);
  const protectedAvailable = Math.max(0, (Number.isFinite(stock) ? stock : 0) - protection.protectionStock);
  const reportedAvailable = Number(source.available);
  const committedOutbound = record ? getInTransitOutboundQuantity(record, source.code) : 0;
  return Math.max(0, Math.min(protectedAvailable, Number.isFinite(reportedAvailable) ? reportedAvailable : protectedAvailable) - committedOutbound);
}

function getLifecycleCoverageDays(lifecycle) {
  const normalized = String(lifecycle || "").replace(/\s/g, "");
  if (/(清仓|退市|停售|下架|淘汰|终止)/.test(normalized)) {
    return Math.min(state.settings.coverageDays, 3);
  }
  if (/(新品|上新|首发|预售)/.test(normalized)) {
    return state.settings.coverageDays + 1;
  }
  return state.settings.coverageDays;
}

function getDemandBufferDays(lifecycle) {
  const normalized = String(lifecycle || "").replace(/\s/g, "");
  if (/(清仓|退市|停售|下架|淘汰|终止)/.test(normalized)) return 0;
  return state.settings.demandBufferDays + (/(新品|上新|首发|预售)/.test(normalized) ? 0.5 : 0);
}

function getRiskLevel(currentCoverageDays) {
  if (currentCoverageDays < state.settings.urgentCoverageDays) return "高";
  if (currentCoverageDays < state.settings.coverageDays) return "中";
  return "低";
}

function sourcePoolKey(record, source) {
  return `${skuKey(record.sku)}::${String(source.code).trim().toUpperCase()}`;
}

function getSourceCandidates(record, productParameters) {
  const overrideIndex = state.sourceOverrides[record.id];
  const sourceEntries = Number.isInteger(overrideIndex) && record.sources[overrideIndex]
    ? [{ source: record.sources[overrideIndex], sourceIndex: overrideIndex }]
    : record.sources.map((source, sourceIndex) => ({ source, sourceIndex }));

  return sourceEntries
    .filter(({ source }) => canSourceSend(source))
    .filter(({ source }) => isCityAllowed(productParameters, source.city))
    .map(({ source, sourceIndex }) => {
      const routeQuote = getRouteQuote(source, record.target);
      return {
        source,
        sourceIndex,
        sourceConstraint: getStoreConstraint(source.code),
        sourceDemand: getSourceDemandProfile(source, record, productParameters),
        routeQuote,
        isSameCity: source.city === record.target.city,
        poolKey: sourcePoolKey(record, source)
      };
    })
    .filter((candidate) => state.settings.allowFallbackRates || !candidate.routeQuote.isFallback)
    .sort((left, right) => left.routeQuote.parcelCost - right.routeQuote.parcelCost
      || (left.routeQuote.etaDays ?? Number.MAX_SAFE_INTEGER) - (right.routeQuote.etaDays ?? Number.MAX_SAFE_INTEGER)
      || left.sourceDemand.forecastDailyDemand - right.sourceDemand.forecastDailyDemand
      || left.sourceIndex - right.sourceIndex);
}

function getNetworkPriority(profile) {
  const arrivalRiskWeight = profile.hasArrivalUrgency ? 2_000_000 : 0;
  const riskWeight = profile.risk === "高" ? 1_000_000 : profile.risk === "中" ? 100_000 : 0;
  const strategicWeight = isStrategic(profile.record) ? 250_000 : 0;
  const customPriority = profile.targetConstraint.priorityAdjustment * 1_000;
  const shortageValue = profile.shortage * profile.unitContribution * profile.priorityMultiplier;
  return arrivalRiskWeight + riskWeight + strategicWeight + customPriority + shortageValue;
}

function buildDemandProfile(record) {
  const productParameters = getProductParameters(record);
  const targetConstraint = getStoreConstraint(record.target.code);
  const lifecycleCoverageDays = getLifecycleCoverageDays(productParameters.lifecycle);
  const demandBufferDays = getDemandBufferDays(productParameters.lifecycle);
  const demandMultiplier = Math.max(0.1, Number(record.target.demandMultiplier) || 1);
  const forecastDailyDemand = record.target.dailyDemand * demandMultiplier;
  const priorityMultiplier = getStorePriorityMultiplier(record.target.code);
  const effectiveCoverageDays = (lifecycleCoverageDays + demandBufferDays) * priorityMultiplier;
  const desiredTargetStock = Math.ceil(forecastDailyDemand * effectiveCoverageDays);
  const maxCapacity = Math.max(record.target.physical, targetConstraint.maxCapacity);
  const targetStock = Math.max(record.target.physical, Math.min(Math.max(desiredTargetStock, targetConstraint.minDisplay), maxCapacity));
  const inventoryPosition = getInventoryPosition(record, lifecycleCoverageDays);
  const arrivalRisk = getArrivalRisk(record, inventoryPosition, forecastDailyDemand);
  const regularShortage = Math.max(0, targetStock - inventoryPosition.total);
  const shortage = Math.max(regularShortage, arrivalRisk.gapQuantity);
  const currentCoverageDays = Math.max(0, inventoryPosition.onHand - inventoryPosition.reservedOutbound) / Math.max(forecastDailyDemand, 1);
  const baseRisk = getRiskLevel(currentCoverageDays);
  const arrivalDeadlineDays = arrivalRisk.hasRisk ? arrivalRisk.deadlineDays : currentCoverageDays;
  const arrivalUrgentQuantity = arrivalRisk.hasRisk
    ? arrivalRisk.gapQuantity
    : (baseRisk === "高" ? shortage : 0);
  const hasArrivalUrgency = Number.isFinite(arrivalDeadlineDays) && arrivalUrgentQuantity > 0;
  const risk = hasArrivalUrgency ? "高" : baseRisk;
  let preHoldReason = "";
  if (record.forceHold) preHoldReason = "该商品被经营策略标记为暂不调拨。";
  if (!preHoldReason && !targetConstraint.allowInbound) preHoldReason = "调入门店当前被设置为禁止调入。";
  if (!preHoldReason && !isCityAllowed(productParameters, record.target.city)) {
    preHoldReason = `商品城市范围为 ${getCityScopeLabel(productParameters)}，不允许调入 ${record.target.city}。`;
  }
  const candidates = preHoldReason ? [] : getSourceCandidates(record, productParameters);
  if (!preHoldReason && !candidates.length) {
    const hasCityBlockedSource = record.sources.some((source) => !isCityAllowed(productParameters, source.city));
    preHoldReason = hasCityBlockedSource
      ? `商品城市范围为 ${getCityScopeLabel(productParameters)}，没有符合范围的可调来源。`
      : state.settings.allowFallbackRates
        ? "没有满足调出限制的可用来源。"
        : "没有命中已维护运价的可用线路。";
  }

  const profile = {
    record,
    productParameters,
    targetConstraint,
    lifecycleCoverageDays,
    demandBufferDays,
    effectiveCoverageDays,
    demandMultiplier,
    forecastDailyDemand,
    priorityMultiplier,
    desiredTargetStock,
    targetStock,
    regularShortage,
    shortage,
    inventoryPosition,
    arrivalRisk,
    arrivalDeadlineDays,
    arrivalUrgentQuantity,
    hasArrivalUrgency,
    currentCoverageDays,
    risk,
    unitContribution: record.price * record.captureRate * (productParameters.grossMargin / 100),
    candidates,
    preHoldReason
  };
  profile.priorityScore = getNetworkPriority(profile);
  return profile;
}

function buildSourcePools(profiles) {
  const pools = new Map();
  profiles.forEach((profile) => {
    profile.candidates.forEach((candidate) => {
      const available = getSourceSafeAvailable(candidate.source, profile.record);
      const existing = pools.get(candidate.poolKey);
      if (existing) {
        existing.initialAvailable = Math.min(existing.initialAvailable, available);
        return;
      }
      pools.set(candidate.poolKey, {
        key: candidate.poolKey,
        source: candidate.source,
        sourceConstraint: candidate.sourceConstraint,
        initialAvailable: available,
        allocated: 0,
        remaining: available
      });
    });
  });
  return pools;
}

function getIncrementalRouteImpact(profile, candidate, quantity, routeLoads) {
  const routeLoadKey = routeKey(candidate.source.code, profile.record.target.code);
  const currentLoad = routeLoads.get(routeLoadKey) || 0;
  const addedLoad = quantity / profile.productParameters.parcelCapacity;
  const incrementalPackages = Math.max(0, Math.ceil(currentLoad + addedLoad) - Math.ceil(currentLoad));
  return {
    packages: incrementalPackages,
    cost: incrementalPackages * candidate.routeQuote.parcelCost
  };
}

function getSourceOpportunityImpact(profile, candidate, pool, quantity) {
  const sourceDemand = candidate.sourceDemand;
  const sourceStock = Math.max(0, Number(candidate.source.stock) || 0);
  const committedOutbound = getInTransitOutboundQuantity(profile.record, candidate.source.code);
  const sourcePositionBefore = Math.max(0, sourceStock - committedOutbound - (pool?.allocated || 0));
  const sourcePositionAfter = Math.max(0, sourcePositionBefore - quantity);
  const shortageBefore = Math.max(0, sourceDemand.targetStock - sourcePositionBefore);
  const shortageAfter = Math.max(0, sourceDemand.targetStock - sourcePositionAfter);
  const incrementalShortage = Math.max(0, shortageAfter - shortageBefore);
  const unitContribution = Number.isFinite(sourceDemand.unitContribution)
    ? sourceDemand.unitContribution
    : profile.unitContribution;
  const opportunityCost = incrementalShortage * unitContribution * sourceDemand.sourcePriorityMultiplier;
  const sourcePostCoverageDays = sourceDemand.forecastDailyDemand > 0
    ? sourcePositionAfter / sourceDemand.forecastDailyDemand
    : Number.POSITIVE_INFINITY;
  return {
    sourcePositionBefore,
    sourcePositionAfter,
    incrementalShortage,
    opportunityCost,
    sourcePostCoverageDays,
    unitContribution
  };
}

function getTimingRiskCost(profile, candidate, quantity) {
  const etaDays = candidate.routeQuote.etaDays;
  if (!Number.isFinite(etaDays)) {
    return profile.hasArrivalUrgency ? Number.POSITIVE_INFINITY : profile.unitContribution * quantity * 10;
  }
  const deadlineDays = profile.arrivalDeadlineDays;
  if (!Number.isFinite(deadlineDays) || etaDays <= deadlineDays) return 0;
  const lateDays = etaDays - deadlineDays;
  const urgencyWeight = profile.hasArrivalUrgency ? 100 : 1;
  return lateDays * profile.forecastDailyDemand * profile.unitContribution * urgencyWeight;
}

function canArriveBeforeStockout(profile, candidate) {
  const deadlineDays = profile.arrivalDeadlineDays;
  return !profile.hasArrivalUrgency
    || (Number.isFinite(deadlineDays)
      && Number.isFinite(candidate.routeQuote.etaDays)
      && candidate.routeQuote.etaDays <= deadlineDays + 0.01);
}

function allocateAcrossNetwork(profiles) {
  const pools = buildSourcePools(profiles);
  const allocations = new Map();
  const routeLoads = new Map();
  const prioritizedProfiles = profiles
    .filter((profile) => !profile.preHoldReason && profile.shortage > 0 && profile.candidates.length)
    .sort((left, right) => right.priorityScore - left.priorityScore
      || left.candidates.length - right.candidates.length
      || left.record.id.localeCompare(right.record.id));

  prioritizedProfiles.forEach((profile) => {
    let remainingNeed = profile.shortage;
    const recordAllocations = [];

    while (remainingNeed > 0) {
      const onTimeQuantity = recordAllocations
        .filter((allocation) => Number.isFinite(profile.arrivalDeadlineDays) && allocation.etaDays <= profile.arrivalDeadlineDays + 0.01)
        .reduce((sum, allocation) => sum + allocation.quantity, 0);
      const remainingArrivalGap = Math.max(0, profile.arrivalUrgentQuantity - onTimeQuantity);
      const requiresOnTimeSource = profile.hasArrivalUrgency && remainingArrivalGap > 0;
      const rawChoices = profile.candidates
        .map((candidate) => {
          const pool = pools.get(candidate.poolKey);
          const isOnTime = canArriveBeforeStockout(profile, candidate);
          const quantityLimit = requiresOnTimeSource && isOnTime
            ? remainingArrivalGap
            : remainingNeed;
          const quantity = Math.min(remainingNeed, pool?.remaining || 0, quantityLimit);
          const incrementalImpact = quantity
            ? getIncrementalRouteImpact(profile, candidate, quantity, routeLoads)
            : { packages: Number.POSITIVE_INFINITY, cost: Number.POSITIVE_INFINITY };
          const sourceImpact = quantity
            ? getSourceOpportunityImpact(profile, candidate, pool, quantity)
            : { opportunityCost: Number.POSITIVE_INFINITY, sourcePostCoverageDays: 0 };
          const timingRiskCost = quantity ? getTimingRiskCost(profile, candidate, quantity) : Number.POSITIVE_INFINITY;
          const targetProtectedMargin = quantity * profile.unitContribution;
          const pairContribution = targetProtectedMargin - sourceImpact.opportunityCost - incrementalImpact.cost - timingRiskCost;
          return {
            candidate,
            pool,
            quantity,
            isOnTime,
            incrementalCost: incrementalImpact.cost,
            incrementalPackages: incrementalImpact.packages,
            sourceImpact,
            timingRiskCost,
            targetProtectedMargin,
            pairContribution
          };
        })
        .filter((choice) => choice.quantity > 0);
      const choices = rawChoices
        .filter((choice) => profile.hasArrivalUrgency || choice.pairContribution >= 0)
        .sort((left, right) => {
          if (requiresOnTimeSource && left.isOnTime !== right.isOnTime) {
            return left.isOnTime ? -1 : 1;
          }
          return right.pairContribution - left.pairContribution
            || left.sourceImpact.opportunityCost - right.sourceImpact.opportunityCost
            || left.timingRiskCost - right.timingRiskCost
            || left.incrementalCost - right.incrementalCost
            || left.candidate.routeQuote.parcelCost - right.candidate.routeQuote.parcelCost
            || (left.candidate.routeQuote.etaDays ?? Number.MAX_SAFE_INTEGER) - (right.candidate.routeQuote.etaDays ?? Number.MAX_SAFE_INTEGER)
            || right.sourceImpact.sourcePostCoverageDays - left.sourceImpact.sourcePostCoverageDays
            || left.candidate.sourceDemand.forecastDailyDemand - right.candidate.sourceDemand.forecastDailyDemand
            || left.candidate.sourceIndex - right.candidate.sourceIndex;
        });

      if (!choices.length) {
        profile.economicBlocked = !profile.hasArrivalUrgency
          && rawChoices.length > 0
          && rawChoices.every((choice) => choice.pairContribution < 0);
        break;
      }
      const selected = choices[0];
      const routeLoadKey = routeKey(selected.candidate.source.code, profile.record.target.code);
      const packageEquivalent = selected.quantity / profile.productParameters.parcelCapacity;
      selected.pool.remaining -= selected.quantity;
      selected.pool.allocated += selected.quantity;
      routeLoads.set(routeLoadKey, (routeLoads.get(routeLoadKey) || 0) + packageEquivalent);
      recordAllocations.push({
        source: selected.candidate.source,
        recordSku: profile.record.sku,
        sourceConstraint: selected.candidate.sourceConstraint,
        sourceAvailable: selected.pool.initialAvailable,
        sourceRemaining: selected.pool.remaining,
        sourceAllocated: selected.pool.allocated,
        poolKey: selected.candidate.poolKey,
        quantity: selected.quantity,
        packageEquivalent,
        incrementalPackageCount: selected.incrementalPackages,
        incrementalLogisticsCost: selected.incrementalCost,
        sourceOpportunityCost: selected.sourceImpact.opportunityCost,
        sourceIncrementalShortage: selected.sourceImpact.incrementalShortage,
        sourcePositionAfter: selected.sourceImpact.sourcePositionAfter,
        sourcePostCoverageDays: selected.sourceImpact.sourcePostCoverageDays,
        sourceForecastDailyDemand: selected.candidate.sourceDemand.forecastDailyDemand,
        sourceDemandObserved: selected.candidate.sourceDemand.hasObservedDemand,
        sourceIsStrategic: selected.candidate.sourceDemand.isStrategicSource,
        timingRiskCost: selected.timingRiskCost,
        pairContribution: selected.pairContribution,
        parcelCost: selected.candidate.routeQuote.parcelCost,
        etaDays: selected.candidate.routeQuote.etaDays,
        etaHours: selected.candidate.routeQuote.etaHours,
        cutoffWaitHours: selected.candidate.routeQuote.cutoffWaitHours,
        hasTimeBreakdown: selected.candidate.routeQuote.hasTimeBreakdown,
        rateSource: selected.candidate.routeQuote.rateSource,
        usingFallbackRate: selected.candidate.routeQuote.isFallback,
        isSameCity: selected.candidate.isSameCity
      });
      remainingNeed -= selected.quantity;
    }
    allocations.set(profile.record.id, recordAllocations);
  });

  allocations.forEach((recordAllocations) => {
    recordAllocations.forEach((allocation) => {
      const pool = pools.get(allocation.poolKey);
      allocation.sourceRemaining = pool?.remaining ?? allocation.sourceRemaining;
      allocation.sourceAllocated = pool?.allocated ?? allocation.sourceAllocated;
      const sourcePostPosition = Math.max(0, Number(allocation.source.stock) - getInTransitOutboundQuantity({ sku: allocation.recordSku }, allocation.source.code) - (pool?.allocated || 0));
      allocation.sourcePostCoverageDays = allocation.sourceForecastDailyDemand > 0
        ? sourcePostPosition / allocation.sourceForecastDailyDemand
        : Number.POSITIVE_INFINITY;
    });
  });

  return { allocations, pools };
}

function applyGroupedEconomics(records) {
  const groups = new Map();
  records.forEach((record) => {
    record.allocations.forEach((allocation) => {
      const key = routeKey(allocation.source.code, record.target.code);
      if (!groups.has(key)) {
        groups.set(key, {
          key,
          parcelCost: allocation.parcelCost,
          legs: []
        });
      }
      allocation.groupKey = key;
      groups.get(key).legs.push({ record, allocation });
    });
  });

  groups.forEach((group) => {
    group.totalPackageEquivalent = group.legs.reduce((sum, leg) => sum + leg.allocation.packageEquivalent, 0);
    group.totalPackages = group.totalPackageEquivalent ? Math.ceil(group.totalPackageEquivalent) : 0;
    group.totalCost = group.totalPackages * group.parcelCost;
    group.totalSalesMargin = group.legs.reduce((sum, leg) => sum + leg.allocation.quantity * leg.record.price * leg.record.captureRate * (leg.record.productMargin / 100), 0);
    group.totalSourceOpportunityCost = group.legs.reduce((sum, leg) => sum + leg.allocation.sourceOpportunityCost, 0);
    group.totalContribution = group.totalSalesMargin - group.totalCost - group.totalSourceOpportunityCost;
    group.isEconomic = group.totalContribution >= state.settings.minimumNetContribution;
    group.legs.forEach(({ record, allocation }) => {
      const costShare = group.totalPackageEquivalent
        ? group.totalCost * (allocation.packageEquivalent / group.totalPackageEquivalent)
        : 0;
      allocation.sharedLogisticsCost = costShare;
      allocation.logisticsCost = allocation.incrementalLogisticsCost;
      allocation.salesProtected = allocation.quantity * record.price * record.captureRate;
      allocation.contribution = allocation.salesProtected * (record.productMargin / 100) - allocation.sourceOpportunityCost - allocation.logisticsCost;
    });
  });

  records.forEach((record) => {
    record.packageEquivalent = record.allocations.reduce((sum, allocation) => sum + allocation.packageEquivalent, 0);
    record.packageCount = record.packageEquivalent ? Math.ceil(record.packageEquivalent) : 0;
    record.sharedLogisticsCost = record.allocations.reduce((sum, allocation) => sum + allocation.sharedLogisticsCost, 0);
    record.logisticsCost = record.allocations.reduce((sum, allocation) => sum + allocation.logisticsCost, 0);
    record.sourceOpportunityCost = record.allocations.reduce((sum, allocation) => sum + allocation.sourceOpportunityCost, 0);
    record.salesProtected = record.allocations.reduce((sum, allocation) => sum + allocation.salesProtected, 0);
    record.contribution = record.allocations.reduce((sum, allocation) => sum + allocation.contribution, 0);
    record.hasEconomicRoute = record.contribution >= state.settings.minimumNetContribution;
    if (record.allocations.length) {
      const etaValues = record.allocations.map((allocation) => allocation.etaDays).filter(Number.isFinite);
      record.etaDays = etaValues.length ? Math.max(...etaValues) : null;
      record.usingFallbackRate = record.allocations.some((allocation) => allocation.usingFallbackRate);
      record.rateSource = record.usingFallbackRate
        ? (record.allocations.every((allocation) => allocation.usingFallbackRate) ? "演示试算价" : "混合运价试算")
        : "上传运价表";
      record.isSameCity = record.allocations.every((allocation) => allocation.isSameCity);
    }
  });

  return groups;
}

function getCalculatedRecords() {
  const profiles = transferSeed.map(buildDemandProfile);
  const { allocations, pools } = allocateAcrossNetwork(profiles);
  const records = profiles.map((profile) => {
    const recordAllocations = allocations.get(profile.record.id) || [];
    const allocatedQuantity = recordAllocations.reduce((sum, allocation) => sum + allocation.quantity, 0);
    const onTimeQuantity = profile.hasArrivalUrgency && Number.isFinite(profile.arrivalDeadlineDays)
      ? recordAllocations
        .filter((allocation) => Number.isFinite(allocation.etaDays) && allocation.etaDays <= profile.arrivalDeadlineDays + 0.01)
        .reduce((sum, allocation) => sum + allocation.quantity, 0)
      : 0;
    const arrivalGapRemaining = Math.max(0, profile.arrivalUrgentQuantity - onTimeQuantity);
    const primaryAllocation = recordAllocations[0];
    const fallbackCandidate = profile.candidates[0];
    const source = primaryAllocation?.source || fallbackCandidate?.source || profile.record.sources[0];
    const sourceConstraint = primaryAllocation?.sourceConstraint || fallbackCandidate?.sourceConstraint || getStoreConstraint(source.code);
    const sourcePool = pools.get(sourcePoolKey(profile.record, source));
    return {
      ...profile.record,
      source,
      targetStock: profile.targetStock,
      desiredTargetStock: profile.desiredTargetStock,
      lifecycleCoverageDays: profile.lifecycleCoverageDays,
      demandBufferDays: profile.demandBufferDays,
      effectiveCoverageDays: profile.effectiveCoverageDays,
      demandMultiplier: profile.demandMultiplier,
      forecastDailyDemand: profile.forecastDailyDemand,
      targetConstraint: profile.targetConstraint,
      productCityScope: getCityScopeLabel(profile.productParameters),
      hasCityRestriction: Boolean(profile.productParameters.allowedCities?.length),
      candidates: profile.candidates,
      sourceConstraint,
      sourceAvailable: primaryAllocation?.sourceAvailable ?? sourcePool?.initialAvailable ?? getSourceSafeAvailable(source, profile.record),
      sourceRemaining: primaryAllocation?.sourceRemaining ?? sourcePool?.remaining ?? getSourceSafeAvailable(source, profile.record),
      regularShortage: profile.regularShortage,
      shortage: profile.shortage,
      inventoryPosition: profile.inventoryPosition.total,
      confirmedInbound: profile.inventoryPosition.confirmedInbound,
      confirmedInboundLater: profile.inventoryPosition.confirmedInboundLater,
      reservedOutbound: profile.inventoryPosition.reservedOutbound,
      arrivalRisk: profile.hasArrivalUrgency,
      arrivalGapQuantity: profile.arrivalUrgentQuantity,
      arrivalGapRemaining,
      arrivalDeadlineDays: profile.arrivalDeadlineDays,
      stockoutDays: profile.arrivalRisk.stockoutDays,
      firstInboundEtaDays: profile.arrivalRisk.firstInboundEtaDays,
      quantity: allocatedQuantity,
      allocations: recordAllocations,
      allocationGap: profile.shortage - allocatedQuantity,
      parcelCost: primaryAllocation?.parcelCost ?? fallbackCandidate?.routeQuote.parcelCost ?? getFallbackRouteQuote(source, profile.record.target).parcelCost,
      productMargin: profile.productParameters.grossMargin,
      productParcelCapacity: profile.productParameters.parcelCapacity,
      productLifecycle: profile.productParameters.lifecycle,
      usingImportedProductParameters: profile.productParameters.isImported,
      etaDays: primaryAllocation?.etaDays ?? fallbackCandidate?.routeQuote.etaDays ?? null,
      etaHours: primaryAllocation?.etaHours ?? fallbackCandidate?.routeQuote.etaHours ?? null,
      hasTimeBreakdown: recordAllocations.some((allocation) => allocation.hasTimeBreakdown)
        || fallbackCandidate?.routeQuote.hasTimeBreakdown
        || false,
      rateSource: primaryAllocation?.rateSource ?? fallbackCandidate?.routeQuote.rateSource ?? "待维护",
      usingFallbackRate: primaryAllocation?.usingFallbackRate ?? fallbackCandidate?.routeQuote.isFallback ?? true,
      logisticsCost: 0,
      sharedLogisticsCost: 0,
      sourceOpportunityCost: 0,
      salesProtected: 0,
      contribution: 0,
      packageEquivalent: 0,
      packageCount: 0,
      risk: profile.risk,
      currentCoverageDays: profile.currentCoverageDays,
      priorityMultiplier: profile.priorityMultiplier,
      preHoldReason: profile.preHoldReason,
      economicBlocked: Boolean(profile.economicBlocked),
      hasUnconfirmedInbound: profile.inventoryPosition.unconfirmedInbound > 0,
      isSameCity: primaryAllocation?.isSameCity ?? fallbackCandidate?.isSameCity ?? false
    };
  });

  applyGroupedEconomics(records);
  records.forEach((record) => {
    let holdReason = record.preHoldReason;
    const hasUncoveredArrivalGap = record.arrivalRisk && record.arrivalGapRemaining > 0;
    if (!holdReason && record.shortage > 0 && !record.quantity && !hasUncoveredArrivalGap) {
      holdReason = record.economicBlocked
        ? "可调来源会造成更高的来源销售损失或物流成本，本轮不建议占用货源。"
        : "全网同 SKU 的可调余量不足，无法在不突破来源安全库存的前提下补货。";
    }
    if (!holdReason && record.shortage > 0 && record.quantity < state.settings.minimumTransferQuantity && record.risk !== "高") {
      holdReason = `建议量低于 ${formatNumber(state.settings.minimumTransferQuantity)} 件，且未达到紧急缺货风险，等待后续合单窗口。`;
    }
    if (!holdReason && record.shortage > 0 && !record.hasEconomicRoute && !hasUncoveredArrivalGap) {
      holdReason = `合单后的预计净贡献低于 ${formatMoney(state.settings.minimumNetContribution)}，建议不单独发货。`;
    }
    const isHold = Boolean(holdReason);
    const existingStatus = state.statuses[record.id];
    record.holdReason = holdReason;
    record.isHold = isHold;
    record.decision = isHold ? "暂不建议" : hasUncoveredArrivalGap ? "到货预警" : existingStatus || "待审核";
    record.requiresEscalation = !isHold && (isStrategic(record)
      || record.arrivalRisk
      || record.allocations.some((allocation) => allocation.sourceIsStrategic)
      || record.allocations.some((allocation) => !allocation.isSameCity)
      || record.contribution >= state.settings.approvalThreshold
      || record.allocationGap > 0
      || record.allocations.length > 1);
  });

  return records;
}

function getAllocationLegs(records) {
  return records
    .filter((record) => record.decision !== "暂不建议" && record.quantity > 0)
    .flatMap((record) => record.allocations
      .filter((allocation) => allocation.quantity > 0)
      .map((allocation) => ({
        ...record,
        allocationId: `${record.id}::${allocation.source.code}`,
        source: allocation.source,
        sourceConstraint: allocation.sourceConstraint,
        sourceAvailable: allocation.sourceAvailable,
        sourceRemaining: allocation.sourceRemaining,
        quantity: allocation.quantity,
        packageEquivalent: allocation.packageEquivalent,
        packageCount: Math.ceil(allocation.packageEquivalent),
        parcelCost: allocation.parcelCost,
        logisticsCost: allocation.logisticsCost,
        salesProtected: allocation.salesProtected,
        contribution: allocation.contribution,
        etaDays: allocation.etaDays,
        rateSource: allocation.rateSource,
        usingFallbackRate: allocation.usingFallbackRate,
        isSameCity: allocation.isSameCity
      })));
}

function getOrderGroups(records = getCalculatedRecords()) {
  const groups = new Map();
  getAllocationLegs(records).forEach((record) => {
      const key = `${record.source.code}-${record.target.code}`;
      if (!groups.has(key)) {
        groups.set(key, {
          key,
          id: key,
          source: record.source,
          target: record.target,
          records: []
        });
      }
      groups.get(key).records.push(record);
    });

  return [...groups.values()].map((group) => {
    const totalQuantity = group.records.reduce((sum, record) => sum + record.quantity, 0);
    const totalPackageEquivalent = group.records.reduce((sum, record) => sum + record.packageEquivalent, 0);
    const totalPackages = totalPackageEquivalent ? Math.ceil(totalPackageEquivalent) : 0;
    const separatePackages = group.records.reduce((sum, record) => sum + record.packageCount, 0);
    const totalCost = totalPackages * group.records[0].parcelCost;
    const totalContribution = group.records.reduce((sum, record) => sum + record.contribution, 0);
    const statuses = group.records.map((record) => record.decision);
    const groupStatus = statuses.includes("待二次审核")
      ? "待二次审核"
      : statuses.includes("待审核")
        ? "待总部审核"
        : statuses.includes("待调出店发货")
          ? "待调出店发货"
          : statuses.includes("在途")
            ? "在途"
            : statuses.every((status) => status === "已收货")
              ? "已收货"
              : statuses[0];
    return {
      ...group,
      totalQuantity,
      totalPackages,
      separatePackages,
      savedPackages: Math.max(0, separatePackages - totalPackages),
      totalCost,
      totalContribution,
      status: groupStatus
    };
  });
}

function getStatusPresentation(status) {
  const mapping = {
    "暂不建议": { label: "暂不建议", className: "status-hold" },
    "到货预警": { label: "到货预警", className: "status-hold" },
    "待审核": { label: "待审核", className: "status-recommend" },
    "待总部审核": { label: "待总部审核", className: "status-recommend" },
    "待二次审核": { label: "待二次审核", className: "status-recommend" },
    "待调出店发货": { label: "待发货", className: "status-flow" },
    "在途": { label: "在途", className: "status-flow" },
    "已收货": { label: "已收货", className: "status-done" }
  };
  return mapping[status] || { label: status, className: "status-flow" };
}

function isInFlow(status) {
  return ["待调出店发货", "在途", "已收货"].includes(status);
}

function matchesFilters(record) {
  if (state.scope !== "all" && record.region !== state.scope) {
    return false;
  }
  if (state.statusFilter === "pending") {
    return ["待审核", "待二次审核"].includes(record.decision);
  }
  if (state.statusFilter === "hold") {
    return record.decision === "暂不建议";
  }
  if (state.statusFilter === "arrival") {
    return record.decision === "到货预警";
  }
  if (state.statusFilter === "flow") {
    return isInFlow(record.decision);
  }
  return true;
}

function getOptimizationSummary(records) {
  const actionable = records.filter((record) => record.decision !== "暂不建议" && record.quantity > 0);
  const actionableLegs = getAllocationLegs(actionable);
  const urgent = records.filter((record) => record.risk === "高" && (record.decision !== "暂不建议" || record.arrivalRisk));
  const salesProtected = actionable.reduce((sum, record) => sum + record.salesProtected, 0);
  const contribution = actionable.reduce((sum, record) => sum + record.contribution, 0);
  const groups = getOrderGroups(records);
  const packages = groups.reduce((sum, group) => sum + group.totalPackages, 0);
  const separatePackages = groups.reduce((sum, group) => sum + group.separatePackages, 0);
  const savedPackages = Math.max(0, separatePackages - packages);
  const logisticsCost = groups.reduce((sum, group) => sum + group.totalCost, 0);
  const separateLogisticsCost = actionableLegs.reduce((sum, record) => sum + record.packageCount * record.parcelCost, 0);
  const highRiskBefore = records.filter((record) => record.risk === "高" && (record.shortage > 0 || record.arrivalGapQuantity > 0)).length;
  const highRiskAfter = records.filter((record) => record.risk === "高" && (Math.max(0, record.shortage - record.quantity) > 0 || record.arrivalGapRemaining > 0)).length;
  const awaitingApproval = groups.filter((group) => ["待总部审核", "待二次审核"].includes(group.status)).length;

  return {
    actionable,
    urgent,
    salesProtected,
    contribution,
    groups,
    packages,
    separatePackages,
    savedPackages,
    logisticsCost,
    separateLogisticsCost,
    highRiskBefore,
    highRiskAfter,
    awaitingApproval,
  };
}

function renderWorkflow(summary) {
  const importedTypes = getImportedDataTypeCount();

  document.querySelector("#dataWorkflowStatus").textContent = importedTypes
    ? `已接入 ${formatNumber(importedTypes)} 类经营资料`
    : "库存与销量快照已就绪";
  document.querySelector("#rulesWorkflowStatus").textContent = `${state.settings.coverageDays} 天覆盖 + ${state.settings.demandBufferDays} 天缓冲 · 北京试点 SKU 协同分配`;
  document.querySelector("#optimizationWorkflowStatus").textContent = `${formatNumber(summary.actionable.length)} 条可执行建议`;
  document.querySelector("#executionWorkflowStatus").textContent = summary.awaitingApproval
    ? `${formatNumber(summary.awaitingApproval)} 单待审核`
    : "查看合并调拨单";
}

function renderComparison(summary) {
  const comparison = document.querySelector("#optimizationComparison");
  const items = [
    {
      label: "高风险缺货 SKU",
      before: `${formatNumber(summary.highRiskBefore)} 个`,
      after: `${formatNumber(summary.highRiskAfter)} 个`,
      caption: "方案执行前后风险",
    },
    {
      label: "预计守住销售额",
      before: "¥0",
      after: formatMoney(summary.salesProtected),
      caption: "不执行调拨 / 执行调拨",
    },
    {
      label: "预计包裹",
      before: `${formatNumber(summary.separatePackages)} 个`,
      after: `${formatNumber(summary.packages)} 个`,
      caption: "逐 SKU 发货 -> 合单发货",
    },
    {
      label: "物流成本试算",
      before: formatMoney(summary.separateLogisticsCost),
      after: formatMoney(summary.logisticsCost),
      caption: "逐 SKU 发货 -> 合单发货",
    },
  ];

  comparison.innerHTML = items.map((item) => `
    <div class="comparison-item">
      <span class="comparison-label">${item.label}</span>
      <div class="comparison-values">
        <strong>${item.before}</strong>
        <i class="comparison-arrow" data-lucide="arrow-right" aria-hidden="true"></i>
        <strong class="is-improved">${item.after}</strong>
      </div>
      <span class="comparison-caption">${item.caption}</span>
    </div>`).join("");
}

function renderDataReadiness() {
  const readiness = [
    {
      label: "库存与销量",
      source: state.operatingSnapshot.records.size
        ? `已接入 ${formatNumber(state.operatingSnapshot.records.size)} 条门店 SKU 快照`
        : getSnapshotContext().operatingSource,
      ready: true,
    },
    {
      label: "线路成本",
      source: state.rateCard.routes.size
        ? `已接入 ${formatNumber(state.rateCard.routes.size)} 条线路报价`
        : state.settings.allowFallbackRates ? "未接入，暂用演示回退值" : "未接入，严格模式下不生成线路建议",
      ready: state.rateCard.routes.size > 0,
    },
    {
      label: "商品参数",
      source: state.productParameters.records.size ? `已接入 ${formatNumber(state.productParameters.records.size)} 个 SKU 参数` : "未接入，暂用默认毛利与包裹容量",
      ready: state.productParameters.records.size > 0,
    },
    {
      label: "门店约束",
      source: state.storeConstraints.records.size ? `已接入 ${formatNumber(state.storeConstraints.records.size)} 家门店约束` : "未接入，暂用库存安全线",
      ready: state.storeConstraints.records.size > 0,
    },
  ];
  const readyCount = readiness.filter((item) => item.ready).length;
  const pendingCount = readiness.length - readyCount;

  document.querySelector("#dataReadiness").innerHTML = `
    <div class="readiness-overview">
      <span class="readiness-overview-count"><b>${readyCount}</b> / ${readiness.length} 类已接入</span>
      <span class="readiness-overview-note">${pendingCount ? `${pendingCount} 类暂按试点参数试算` : "全部使用已接入数据"}</span>
    </div>
    ${readiness.map((item) => `
      <div class="readiness-item ${item.ready ? "is-ready" : "is-fallback"}">
        <div class="readiness-item-main">
          <span class="readiness-dot ${item.ready ? "is-ready" : "is-fallback"}" aria-hidden="true"></span>
          <div class="readiness-copy">
            <strong>${escapeHtml(item.label)}</strong>
            <span class="readiness-source">${escapeHtml(item.source)}</span>
          </div>
        </div>
        <span class="readiness-state ${item.ready ? "is-ready" : "is-fallback"}">${item.ready ? "已接入" : "待接入"}</span>
      </div>`).join("")}`;
}

function setNavCount(id, count, label) {
  const badge = document.querySelector(`#${id}`);
  const safeCount = Math.max(0, Number(count) || 0);
  badge.hidden = safeCount === 0;
  badge.textContent = formatNumber(safeCount);
  badge.setAttribute("aria-label", `${formatNumber(safeCount)} ${label}`);
}

function renderNavigationSummary(summary) {
  const importedTypes = getImportedDataTypeCount();
  const inProgress = summary.groups.filter((group) => ["待调出店发货", "在途"].includes(group.status)).length;

  setNavCount("plansNavCount", summary.urgent.length, "项高风险建议");
  setNavCount("ordersNavCount", summary.awaitingApproval, "张待审核调拨单");
  setNavCount("fulfillmentNavCount", inProgress, "张履约中的调拨单");
  setNavCount("dataNavCount", 4 - importedTypes, "类经营资料待补充");
}

function renderActionHub(summary) {
  const importedTypes = getImportedDataTypeCount();
  const missingTypes = 4 - importedTypes;

  document.querySelector("#priorityActionValue").textContent = `${formatNumber(summary.urgent.length)} 个`;
  document.querySelector("#priorityActionNote").textContent = summary.urgent.length
    ? "高风险缺货，进入方案审核"
    : "当前没有高风险缺货";
  document.querySelector("#approvalActionValue").textContent = `${formatNumber(summary.awaitingApproval)} 单`;
  document.querySelector("#approvalActionNote").textContent = summary.awaitingApproval
    ? "调拨单等待总部审核"
    : "当前没有待审核调拨单";
  document.querySelector("#dataActionValue").textContent = `${formatNumber(missingTypes)} 类`;
  document.querySelector("#dataActionNote").textContent = missingTypes
    ? "经营资料待补充"
    : "试点经营资料已接齐";
}

function renderMetrics(summary) {
  const {
    actionable,
    urgent,
    salesProtected,
    contribution,
    packages,
    savedPackages,
  } = summary;

  document.querySelector("#metricUrgent").textContent = formatNumber(urgent.length);
  document.querySelector("#metricUrgentNote").textContent = `${formatNumber(actionable.length)} 条可执行建议，按风险等级排序`;
  document.querySelector("#metricSales").textContent = formatMoney(salesProtected);
  document.querySelector("#metricContribution").textContent = formatMoney(contribution);
  document.querySelector("#metricPackages").textContent = formatNumber(packages);
  document.querySelector("#metricPackagesNote").textContent = `相较逐 SKU 调拨可减少 ${formatNumber(savedPackages)} 个`;
}

function getFilteredRecommendations(records) {
  return records
    .filter(matchesFilters)
    .sort((left, right) => right.contribution - left.contribution || right.quantity - left.quantity);
}

function getTransferLegs(record) {
  return record.allocations.length
    ? record.allocations
    : [{ source: record.source, quantity: 0 }];
}

function renderPlanCommandStrip(records) {
  const strip = document.querySelector("#planCommandStrip");
  const actionable = records.filter((record) => record.decision !== "暂不建议" && record.quantity > 0);
  const urgent = actionable.filter((record) => record.risk === "高" || record.arrivalRisk);
  const salesProtected = actionable.reduce((sum, record) => sum + record.salesProtected, 0);
  const contribution = actionable.reduce((sum, record) => sum + record.contribution, 0);
  const escalationCount = actionable.filter((record) => record.requiresEscalation).length;

  if (!records.length) {
    strip.innerHTML = `
      <div class="plan-command-lead">
        <span>当前范围</span>
        <strong>没有匹配的补调建议</strong>
      </div>`;
    return;
  }

  strip.innerHTML = `
    <div class="plan-command-lead">
      <span>本轮优先</span>
      <strong>${urgent.length ? `${formatNumber(urgent.length)} 项高风险建议` : `${formatNumber(actionable.length)} 项可执行建议`}</strong>
      <small>${formatNumber(records.length)} 条建议已按预计增量贡献排序</small>
    </div>
    <div class="plan-command-stat">
      <span>预计守住销售额</span>
      <strong>${formatMoney(salesProtected)}</strong>
    </div>
    <div class="plan-command-stat">
      <span>预计增量贡献</span>
      <strong>${formatMoney(contribution)}</strong>
    </div>
    <div class="plan-command-stat">
      <span>升级审批</span>
      <strong>${formatNumber(escalationCount)} 项</strong>
    </div>`;
}

function renderRecommendationRows(records) {
  const filtered = getFilteredRecommendations(records);
  const body = document.querySelector("#recommendationBody");
  document.querySelector("#resultCount").textContent = `${formatNumber(filtered.length)} 条建议`;

  if (!filtered.length) {
    body.innerHTML = `<tr><td colspan="4" class="empty-row">当前筛选条件下没有建议</td></tr>`;
    return filtered;
  }

  body.innerHTML = filtered.map((record) => {
    const status = getStatusPresentation(record.decision);
    const approvalClass = record.requiresEscalation ? "high" : "normal";
    const approvalLabel = record.decision === "暂不建议" ? "无需审批" : record.requiresEscalation ? "升级审批" : "常规审核";
    const transferLegs = getTransferLegs(record);
    const sourceStoreList = transferLegs.map((allocation) => {
      const label = record.decision === "暂不建议" || !allocation.quantity
        ? allocation.source.name
        : `${allocation.source.name} · ${formatNumber(allocation.quantity)} 件`;
      return `<span>${escapeHtml(label)}</span>`;
    }).join("");
    const sourceMeta = record.decision === "暂不建议"
      ? "本轮不占用来源安全余量"
      : `${transferLegs.length > 1 ? "分源补足" : record.isSameCity ? "同城" : "跨城"} · 分配后余 ${formatNumber(record.sourceRemaining)} 件`;
    const contributionMeta = record.decision === "暂不建议"
      ? "已进入等待或不调拨规则"
      : record.decision === "到货预警"
        ? `到货前仍缺 ${formatNumber(record.arrivalGapRemaining)} 件`
        : `调拨 ${formatNumber(record.quantity)} 件 · 新增物流 ${formatMoney(record.logisticsCost)}`;
    const riskLabel = record.decision === "到货预警" ? "到货预警" : `${record.risk}风险`;
    const riskClass = record.decision === "到货预警" || record.risk === "高"
      ? "is-high"
      : record.risk === "中" ? "is-medium" : "is-low";
    const routeLabel = record.decision === "暂不建议"
      ? "本轮不发货"
      : transferLegs.length > 1
        ? `${formatNumber(transferLegs.length)} 家门店协同调出`
        : record.isSameCity ? "同城直调" : "跨城直调";
    return `
      <tr data-action="select-record" data-id="${record.id}" class="${record.id === state.selectedId ? "is-selected" : ""}">
        <td class="product-cell plan-item-cell">
          <div class="plan-row-flags">
            <span class="priority-tag ${riskClass}">${riskLabel}</span>
            <span class="row-status">${status.label}</span>
          </div>
          <span class="product-name">${escapeHtml(record.product)}</span>
          <span class="product-meta">${escapeHtml(record.sku)}</span>
        </td>
        <td class="plan-target-cell">
          <span class="store-role is-inbound">调入门店</span>
          <span class="shop-name">${escapeHtml(record.target.name)}</span>
          <span class="shop-meta">库存位置 ${formatNumber(record.inventoryPosition)} / 目标 ${formatNumber(record.targetStock)}</span>
          <span class="plan-quantity">建议调入 <strong>${formatNumber(record.quantity)} 件</strong></span>
        </td>
        <td class="plan-route-cell">
          <span class="store-role">调出门店</span>
          <div class="plan-source-list">${sourceStoreList}</div>
          <span class="plan-route-meta">${routeLabel} · ETA ${formatEta(record.etaDays)}</span>
          <span class="source-meta">${sourceMeta}</span>
        </td>
        <td class="number plan-economics">
          <strong class="plan-contribution">${formatMoney(record.contribution)}</strong>
          <span class="plan-contribution-label">预计增量贡献</span>
          <span class="plan-economics-meta">${contributionMeta}</span>
          <span class="approval-label ${approvalClass}">${approvalLabel}</span>
        </td>
      </tr>`;
  }).join("");
  return filtered;
}

function renderDetail(records) {
  const panel = document.querySelector("#detailPanel");
  const record = records.find((item) => item.id === state.selectedId) || records[0];
  if (!record) {
    panel.innerHTML = `<div class="detail-empty">选择一条调拨建议，查看库存、来源与收益说明。</div>`;
    return;
  }

  state.selectedId = record.id;
  const status = getStatusPresentation(record.decision);
  const currentPercent = Math.min(100, Math.round((record.target.physical / Math.max(record.targetStock, 1)) * 100));
  const inboundPercent = Math.max(0, Math.min(100 - currentPercent, Math.round((record.confirmedInbound / Math.max(record.targetStock, 1)) * 100)));
  const needPercent = Math.max(0, 100 - currentPercent - inboundPercent);
  const productParameters = getProductParameters(record);
  const sources = record.sources.map((source) => {
    const allocations = record.allocations.filter((allocation) => allocation.source.code === source.code);
    const allocatedQuantity = allocations.reduce((sum, allocation) => sum + allocation.quantity, 0);
    const incrementalPackages = allocations.reduce((sum, allocation) => sum + allocation.incrementalPackageCount, 0);
    const incrementalCost = allocations.reduce((sum, allocation) => sum + allocation.incrementalLogisticsCost, 0);
    const sourceOpportunityCost = allocations.reduce((sum, allocation) => sum + allocation.sourceOpportunityCost, 0);
    const route = source.city === record.target.city ? "同城" : "跨城";
    const quote = getRouteQuote(source, record.target);
    const constraint = getStoreConstraint(source.code);
    const cityAllowed = isCityAllowed(productParameters, source.city);
    const candidate = record.candidates.find((item) => item.source.code === source.code);
    const sourceDemand = candidate?.sourceDemand || getSourceDemandProfile(source, record, productParameters);
    const protection = getSourceProtection(source, record, productParameters);
    const available = constraint.allowOutbound ? getSourceSafeAvailable(source, record) : 0;
    const sourceRemaining = allocations[0]?.sourceRemaining ?? available;
    const postCoverageDays = allocations[0]?.sourcePostCoverageDays ?? (sourceDemand.forecastDailyDemand > 0
      ? Math.max(0, Number(source.stock) || 0) / sourceDemand.forecastDailyDemand
      : Number.POSITIVE_INFINITY);
    const sourceDecision = !cityAllowed
      ? "城市范围禁止"
      : !constraint.allowOutbound
        ? "禁止调出"
        : allocatedQuantity
          ? `本轮分配 ${formatNumber(allocatedQuantity)} 件 · 新增 ${formatNumber(incrementalPackages)} 包 / ${formatMoney(incrementalCost)}`
          : "备选来源";
    const sourceMeta = !cityAllowed
      ? `商品仅允许在 ${record.productCityScope} 销售`
      : `预测日销 ${sourceDemand.forecastDailyDemand.toFixed(1)} 件 · 调后覆盖 ${formatCoverageDays(postCoverageDays)}${sourceDemand.hasObservedDemand ? "" : "（按保护库存估算）"}`;
    return `<div class="source-row${cityAllowed && constraint.allowOutbound ? "" : " is-blocked"}">
      <div>
        <strong>${escapeHtml(source.name)}</strong>
        <span>实物 ${formatNumber(source.stock)} · 保护库存 ${formatNumber(protection.protectionStock)}${protection.isDynamic ? "（动态）" : ""} · ${route} · ETA ${formatRouteTiming(quote)} · ${formatMoney(quote.parcelCost)}/包 ${quote.isFallback ? "试算" : "运价表"}</span>
        <span>${escapeHtml(sourceMeta)}</span>
      </div>
      <div class="source-right">${sourceDecision}<br>${cityAllowed && constraint.allowOutbound ? `来源机会成本 ${formatMoney(sourceOpportunityCost)} · 试点余量 ${formatNumber(sourceRemaining)}` : "不占用来源库存"}</div>
    </div>`;
  }).join("");

  const arrivalCoverageQuantity = Math.max(0, record.arrivalGapQuantity - record.arrivalGapRemaining);
  const salesDays = Number(record.target.inStockDays) > 0 ? Number(record.target.inStockDays) : 28;
  const salesVolume = Math.round(record.target.dailyDemand * salesDays);
  const salesFact = `近 ${formatNumber(salesDays)} 天销量 ${formatNumber(salesVolume)} 件，折算日销 ${record.target.dailyDemand.toFixed(1)} 件${record.demandMultiplier !== 1 ? `；活动系数 ${record.demandMultiplier.toFixed(2)}，预测日销 ${record.forecastDailyDemand.toFixed(1)} 件` : ""}。当前实物 ${formatNumber(record.target.physical)} 件，仅能覆盖 ${record.currentCoverageDays.toFixed(1)} 天。`;
  const targetFact = `预测日销 ${record.forecastDailyDemand.toFixed(1)} 件 × 有效覆盖 ${record.effectiveCoverageDays.toFixed(1)} 天 = ${formatNumber(record.desiredTargetStock)} 件；结合当前实物${record.targetConstraint.minDisplay ? `、最低陈列 ${formatNumber(record.targetConstraint.minDisplay)} 件` : ""}${Number.isFinite(record.targetConstraint.maxCapacity) ? `、库容上限 ${formatNumber(record.targetConstraint.maxCapacity)} 件` : ""}后，目标库存为 ${formatNumber(record.targetStock)} 件。`;
  const inventoryFact = `库存位置 ${formatNumber(record.inventoryPosition)} 件 = 实物 ${formatNumber(record.target.physical)} 件 - 已锁定调出 ${formatNumber(record.reservedOutbound)} 件 + 保护期内确认在途 ${formatNumber(record.confirmedInbound)} 件。${record.confirmedInboundLater ? `另有 ${formatNumber(record.confirmedInboundLater)} 件确认在途到货较晚，未计入。` : ""}${record.hasUnconfirmedInbound ? `另有 ${formatNumber(record.target.inbound)} 件在途没有 ETA 或确认状态，未计入。` : ""}`;
  const sourceFact = record.allocations.length
    ? record.allocations.map((allocation) => {
      const protection = getSourceProtection(allocation.source, record, productParameters);
      return `${escapeHtml(allocation.source.name)}：实物 ${formatNumber(allocation.source.stock)} 件，保护库存 ${formatNumber(protection.protectionStock)} 件，安全可调 ${formatNumber(allocation.sourceAvailable)} 件；本轮调出 ${formatNumber(allocation.quantity)} 件，调后覆盖 ${formatCoverageDays(allocation.sourcePostCoverageDays)}。`;
    }).join(" ")
    : "没有可在来源保护库存之上调出的货，本轮未占用任何来源库存。";
  const allocationEtas = record.allocations.map((allocation) => allocation.etaDays).filter(Number.isFinite);
  const earliestEta = allocationEtas.length ? Math.min(...allocationEtas) : record.etaDays;
  const timingFact = record.arrivalRisk
    ? `当前库存将在第 ${record.arrivalDeadlineDays.toFixed(1)} 天前断货；最快常规 ETA 为 ${formatEta(earliestEta)}，断货前可到店 ${formatNumber(arrivalCoverageQuantity)} 件，仍有 ${formatNumber(record.arrivalGapRemaining)} 件无法由常规调拨及时覆盖。`
    : `当前库存可覆盖 ${record.currentCoverageDays.toFixed(1)} 天；所选路线 ETA 为 ${formatEta(record.etaDays)}，未产生到货前断供预警。`;
  const economicsFact = record.allocations.length
    ? `预计保护销售额 ${formatMoney(record.salesProtected)} × 毛利率 ${record.productMargin}% = 毛利 ${formatMoney(record.salesProtected * record.productMargin / 100)}；扣除来源机会成本 ${formatMoney(record.sourceOpportunityCost)} 和新增物流 ${formatMoney(record.logisticsCost)} 后，预计增量贡献 ${formatMoney(record.contribution)}。`
    : "本轮未形成调拨，不计物流成本和预计增量贡献。";
  const trialFact = record.usingFallbackRate
    ? `本笔 ETA 和物流成本按北京同城演示参数 ${formatEta(record.etaDays)}、${formatMoney(record.parcelCost)}/包试算；毛利率 ${record.productMargin}%、单包容量 ${formatNumber(record.productParcelCapacity)} 件同为试点参数。`
    : `本笔 ETA 和物流成本来自上传运价表；毛利率 ${record.productMargin}% ${record.usingImportedProductParameters ? "来自商品参数" : "仍使用试点参数"}。`;
  const decisionFact = record.decision === "到货预警"
    ? `本轮安排 ${formatNumber(record.quantity)} 件作为后续补充，但不能消除断货前缺口，因此进入加急审核。`
    : record.decision === "暂不建议"
      ? record.holdReason
      : record.decision === "在途"
        ? "本笔已发货并计入确认在途，下一轮不会重复占用同一来源库存。"
        : record.decision === "已收货"
          ? "本笔已收货，库存位置已更新，下一轮将按新库存重新计算。"
          : `来源保护、时效和经济性校验均通过，本轮建议 ${formatNumber(record.quantity)} 件进入审核。`;
  const routeLabel = record.allocations.length > 1 ? "多来源补足" : record.isSameCity ? "同城直调" : "跨城直调";
  const transferLegs = getTransferLegs(record);
  const transferSourceMarkup = transferLegs.map((allocation) => {
    const label = record.decision === "暂不建议" || !allocation.quantity
      ? allocation.source.name
      : `${allocation.source.name} · ${formatNumber(allocation.quantity)} 件`;
    return `<span class="transfer-store-name">${escapeHtml(label)}</span>`;
  }).join("");
  panel.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">建议详情</p>
        <h3>为什么这样调</h3>
      </div>
      <span class="status-pill ${status.className}">${status.label}</span>
    </div>
    <div class="detail-body">
      <div class="detail-title-row">
        <div>
          <h3>${escapeHtml(record.product)}</h3>
          <span class="detail-code">${escapeHtml(record.sku)} · ${escapeHtml(record.color)}</span>
        </div>
        <span class="route-label">${routeLabel}</span>
      </div>

      <div class="transfer-route-strip" aria-label="调拨方向">
        <div class="transfer-stop">
          <span>调出门店</span>
          <div class="transfer-store-list">${transferSourceMarkup}</div>
        </div>
        <i class="transfer-route-arrow" data-lucide="arrow-right" aria-hidden="true"></i>
        <div class="transfer-stop is-inbound">
          <span>调入门店</span>
          <div class="transfer-store-list"><span class="transfer-store-name">${escapeHtml(record.target.name)}</span></div>
        </div>
      </div>

      <div class="decision-brief" aria-label="本次调拨摘要">
        <div class="decision-brief-primary">
          <span>本次建议</span>
          <strong>${formatNumber(record.quantity)} 件</strong>
          <small>${routeLabel} · ETA ${formatEta(record.etaDays)}</small>
        </div>
        <div class="decision-brief-stat">
          <span>预计增量</span>
          <strong>${formatMoney(record.contribution)}</strong>
        </div>
        <div class="decision-brief-stat">
          <span>新增物流</span>
          <strong>${formatMoney(record.logisticsCost)}</strong>
        </div>
      </div>

      <div class="stock-steps">
        <div class="stock-step"><span>当前实物</span><strong>${formatNumber(record.target.physical)} 件</strong></div>
        <div class="stock-step"><span>库存位置</span><strong>${formatNumber(record.inventoryPosition)} 件</strong></div>
        <div class="stock-step"><span>目标库存</span><strong>${formatNumber(record.targetStock)} 件</strong></div>
        <div class="stock-step"><span>建议调拨${record.allocationGap ? ` · 尚缺 ${formatNumber(record.allocationGap)}` : ""}</span><strong>${formatNumber(record.quantity)} 件</strong></div>
      </div>
      <div class="stock-rail" aria-label="库存位置与目标库存关系"><span class="current" style="width:${currentPercent}%"></span><span class="arrival" style="width:${inboundPercent}%"></span><span class="need" style="width:${needPercent}%"></span></div>
      <p class="inventory-position-note">库存位置 = 当前实物 ${formatNumber(record.target.physical)} ${record.reservedOutbound ? `- 已锁定调出 ${formatNumber(record.reservedOutbound)} ` : ""}+ 保护期内已确认在途 ${formatNumber(record.confirmedInbound)} 件。</p>

      <div class="detail-section">
        <h4>来源比较</h4>
        ${sources}
      </div>

      <div class="detail-section">
        <h4>预计影响</h4>
        <div class="impact-list">
          <div><span>预计增量贡献</span><strong>${formatMoney(record.contribution)}</strong></div>
          <div><span>预计守住销售额</span><strong>${formatMoney(record.salesProtected)}</strong></div>
          <div><span>来源机会成本</span><strong>${formatMoney(record.sourceOpportunityCost)}</strong></div>
          <div><span>本笔新增物流</span><strong>${formatMoney(record.logisticsCost)}</strong></div>
          <div><span>预计时效</span><strong>${formatEta(record.etaDays)}</strong></div>
          <div><span>成本依据</span><strong>${record.rateSource}</strong></div>
          <div><span>毛利依据</span><strong>${record.productMargin}% ${record.usingImportedProductParameters ? "商品参数" : "试点参数"}</strong></div>
          <div><span>单包容量</span><strong>${formatNumber(record.productParcelCapacity)} 件</strong></div>
          <div><span>合单包位</span><strong>${record.packageEquivalent.toFixed(1)} 包</strong></div>
        </div>
      </div>

      <div class="detail-section">
        <h4>本笔事实依据</h4>
        <ul class="reason-list">
          <li><strong>销售与库存：</strong>${salesFact}</li>
          <li><strong>补货目标：</strong>${targetFact}</li>
          <li><strong>库存位置：</strong>${inventoryFact}</li>
          <li><strong>来源事实：</strong>${sourceFact}</li>
          <li class="${record.arrivalRisk ? "arrival-risk-note" : ""}"><strong>时效判断：</strong>${timingFact}</li>
          <li><strong>经济账：</strong>${economicsFact}</li>
          <li><strong>试算口径：</strong>${trialFact}</li>
          <li><strong>结论：</strong>${decisionFact}</li>
        </ul>
      </div>

      <div class="detail-actions">
        ${record.decision === "暂不建议"
          ? `<button class="secondary-button" type="button" data-action="open-rules"><i data-lucide="sliders-horizontal" aria-hidden="true"></i>调整规则</button>`
          : `<button class="primary-button" type="button" data-action="approve-record" data-id="${record.id}"><i data-lucide="check" aria-hidden="true"></i>${record.decision === "到货预警" ? "提交加急审核" : "提交审核"}</button>`}
        <button class="secondary-button" type="button" data-action="open-ai"><i data-lucide="sparkles" aria-hidden="true"></i>用 AI 改规则</button>
      </div>
    </div>`;
}

function renderOverview() {
  const records = getCalculatedRecords();
  const summary = getOptimizationSummary(records);
  renderNavigationSummary(summary);
  renderActionHub(summary);
  renderWorkflow(summary);
  renderMetrics(summary);
  renderComparison(summary);
  renderDataReadiness();
  document.querySelector("#lastRunLabel").textContent = state.lastRun;
  refreshIcons();
}

function renderPlans(records = getCalculatedRecords()) {
  const filtered = renderRecommendationRows(records);
  renderPlanCommandStrip(filtered);
  renderDetail(records);
  refreshIcons();
}

function renderOrders() {
  const groups = getOrderGroups();
  const container = document.querySelector("#ordersList");
  if (!groups.length) {
    container.innerHTML = `<section class="panel"><div class="detail-empty">当前没有可执行的调拨单。</div></section>`;
    return;
  }

  container.innerHTML = groups.map((group) => {
    const status = getStatusPresentation(group.status);
    const skuCount = new Set(group.records.map((record) => record.id)).size;
    const rateLabel = group.records.some((record) => record.usingFallbackRate) ? "演示运价试算" : "运价表试算";
    const rows = group.records.map((record) => `
      <tr>
        <td class="product-cell"><span class="product-name">${escapeHtml(record.product)}</span><span class="product-meta">${escapeHtml(record.sku)}</span></td>
        <td>${escapeHtml(record.color)}</td>
        <td class="number">${formatNumber(record.quantity)}</td>
        <td class="number">${formatMoney(record.contribution)}</td>
      </tr>`).join("");
    return `
      <section class="panel order-panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">${escapeHtml(group.id)}</p>
            <h3>${escapeHtml(group.source.name)} <span aria-hidden="true">→</span> ${escapeHtml(group.target.name)}</h3>
          </div>
          <span class="status-pill ${status.className}">${status.label}</span>
        </div>
        <div class="order-summary">
          <span><strong>${formatNumber(skuCount)}</strong> 个 SKU 合单</span>
          <span><strong>${formatNumber(group.totalQuantity)}</strong> 件</span>
          <span><strong>${formatNumber(group.totalPackages)}</strong> 个预计包裹</span>
          <span>较逐 SKU 发货少 <strong>${formatNumber(group.savedPackages)}</strong> 个</span>
          <span>${rateLabel} <strong>${formatMoney(group.totalCost)}</strong></span>
        </div>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>商品</th><th>色尺</th><th class="number">数量</th><th class="number">预计贡献</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="order-footer">
          <button class="secondary-button" type="button" data-action="export-group" data-key="${group.key}"><i data-lucide="download" aria-hidden="true"></i>导出</button>
          ${["待总部审核", "待二次审核"].includes(group.status)
            ? `<button class="primary-button" type="button" data-action="approve-group" data-key="${group.key}"><i data-lucide="check-check" aria-hidden="true"></i>审核通过</button>`
            : `<button class="secondary-button" type="button" data-action="open-flow" data-key="${group.key}"><i data-lucide="route" aria-hidden="true"></i>查看履约</button>`}
        </div>
      </section>`;
  }).join("");
  refreshIcons();
}

function lifecycleIndex(status) {
  const map = {
    "待总部审核": 1,
    "待二次审核": 1,
    "待调出店发货": 2,
    "在途": 3,
    "已收货": 5
  };
  return map[status] ?? 1;
}

function renderFulfillment() {
  const flow = state.flow;
  let activeGroup = getActiveFlowGroup();
  if (activeGroup && !flow.activeGroupKey) {
    activeGroup = activateFlowGroup(activeGroup.key);
  }
  const displayRoute = activeGroup || flow.activeRoute;
  const index = lifecycleIndex(flow.status);
  const steps = [
    { title: "方案生成", detail: "AI 解析经营规则，优化器生成全网调拨方案。" },
    { title: "总部审核", detail: flow.status === "待二次审核" ? "来源变更已触发升级审批。" : "总部按金额、风险和门店优先级审核。" },
    { title: "调出店发货", detail: "调出店核对可发数量后确认发货。" },
    { title: "运输在途", detail: "按同城或跨城预计时效跟踪。" },
    { title: "调入店收货", detail: "调入店确认实际到货数量。" },
    { title: "库存重算", detail: "收货后刷新缺货风险和下一轮补调建议。" }
  ];
  const status = getStatusPresentation(flow.status);
  const heading = document.querySelector("#lifecycleHeading");
  if (heading) {
    heading.textContent = displayRoute
      ? `${displayRoute.source.name} 至 ${displayRoute.target.name}`
      : "暂无待履约调拨单";
  }
  document.querySelector("#lifecycleStatus").className = `status-pill ${status.className}`;
  document.querySelector("#lifecycleStatus").textContent = status.label;
  document.querySelector("#lifecycleSteps").innerHTML = steps.map((step, stepIndex) => {
    const className = stepIndex < index ? "is-complete" : stepIndex === index ? "is-active" : "";
    const icon = stepIndex < index ? "check" : stepIndex === index ? "circle-dot" : "circle";
    return `<li class="lifecycle-step ${className}">
      <span class="step-marker"><i data-lucide="${icon}" aria-hidden="true"></i></span>
      <span class="step-content"><strong>${step.title}</strong><span>${step.detail}</span></span>
    </li>`;
  }).join("");

  const actions = [];
  if (activeGroup && state.role === "hq" && ["待总部审核", "待二次审核"].includes(flow.status)) {
    actions.push(`<button class="primary-button" type="button" data-action="flow-approve"><i data-lucide="check-check" aria-hidden="true"></i>${flow.status === "待二次审核" ? "确认替代方案" : "审核并生成调拨单"}</button>`);
  }
  if (activeGroup && state.role === "source" && flow.status === "待调出店发货") {
    actions.push(`<button class="primary-button" type="button" data-action="flow-dispatch"><i data-lucide="package-open" aria-hidden="true"></i>确认发货</button>`);
    actions.push(`<button class="secondary-button" type="button" data-action="flow-exception"><i data-lucide="triangle-alert" aria-hidden="true"></i>模拟少发异常</button>`);
  }
  if (activeGroup && state.role === "target" && flow.status === "在途") {
    actions.push(`<button class="primary-button" type="button" data-action="flow-receive"><i data-lucide="package-check" aria-hidden="true"></i>确认收货</button>`);
  }
  if (state.role === "admin") {
    actions.push(`<button class="secondary-button" type="button" data-action="flow-recalculate"><i data-lucide="refresh-cw" aria-hidden="true"></i>按规则重算</button>`);
  }
  if (!actions.length) {
    actions.push(`<span class="product-meta">当前角色无待处理动作</span>`);
  }
  document.querySelector("#lifecycleActions").innerHTML = actions.join("");

  document.querySelector("#eventList").innerHTML = flow.events.map((event) => `
    <div class="event-item ${event.type === "exception" ? "exception" : ""}">
      <span class="event-dot" aria-hidden="true"></span>
      <div><strong>${escapeHtml(event.title)}</strong><span>${escapeHtml(event.detail)} · ${escapeHtml(event.time)}</span></div>
    </div>`).join("");
  refreshIcons();
}

function renderRateCardStatus() {
  const status = document.querySelector("#rateCardStatus");
  if (!status) return;
  const routeCount = state.rateCard.routes.size;
  if (!routeCount) {
    status.textContent = state.settings.allowFallbackRates
      ? `未上传，当前按同城 ${formatMoney(state.settings.sameCityCost)}/包、跨城 ${formatMoney(state.settings.crossCityCost)}/包进行演示试算。`
      : "未上传，当前仅接受已维护运价的线路，暂不生成调拨建议。";
    status.classList.remove("is-loaded");
    return;
  }
  const skipped = state.rateCard.skippedRows ? `；已忽略 ${state.rateCard.skippedRows} 行不完整数据` : "";
  status.textContent = `已在本机读取 ${state.rateCard.fileName}：${formatNumber(routeCount)} 条有效线路参与计算；可维护 ETA、截单、出库、收货与时效缓冲，未覆盖线路仍采用演示试算价${skipped}。`;
  status.classList.add("is-loaded");
}

function renderOperatingSnapshotStatus() {
  const status = document.querySelector("#operatingSnapshotStatus");
  if (!status) return;
  const recordCount = state.operatingSnapshot.records.size;
  if (!recordCount) {
    if (hasFrSnapshot) {
      status.textContent = `${getSnapshotContext().operatingSource}；库存取 rnb_r，tempinnb 因无 ETA 未计入确认在途。`;
      status.classList.add("is-loaded");
    } else {
      status.textContent = "未上传，当前采用演示经营快照。";
      status.classList.remove("is-loaded");
    }
    return;
  }
  const skipped = state.operatingSnapshot.skippedRows ? `；已忽略 ${state.operatingSnapshot.skippedRows} 行不完整数据` : "";
  status.textContent = `已在本机读取 ${state.operatingSnapshot.fileName}：${formatNumber(recordCount)} 条门店 SKU 快照，匹配调入 ${formatNumber(state.operatingSnapshot.matchedTargets)} 处、调出 ${formatNumber(state.operatingSnapshot.matchedSources)} 处${skipped}。`;
  status.classList.add("is-loaded");
}

function renderProductParametersStatus() {
  const status = document.querySelector("#productParametersStatus");
  if (!status) return;
  const recordCount = state.productParameters.records.size;
  if (!recordCount) {
    status.textContent = `未上传，当前按 ${state.settings.grossMargin}% 试点毛利率与 ${formatNumber(state.settings.parcelCapacity)} 件单包容量试算。`;
    status.classList.remove("is-loaded");
    return;
  }
  const skipped = state.productParameters.skippedRows ? `；已忽略 ${state.productParameters.skippedRows} 行不完整数据` : "";
  status.textContent = `已在本机读取 ${state.productParameters.fileName}：${formatNumber(recordCount)} 个商品参与毛利、装箱或城市范围计算${skipped}。`;
  status.classList.add("is-loaded");
}

function renderStoreConstraintsStatus() {
  const status = document.querySelector("#storeConstraintsStatus");
  if (!status) return;
  const recordCount = state.storeConstraints.records.size;
  if (!recordCount) {
    status.textContent = "未上传，当前仅按来源安全库存与统一目标库存计算。";
    status.classList.remove("is-loaded");
    return;
  }
  const skipped = state.storeConstraints.skippedRows ? `；已忽略 ${state.storeConstraints.skippedRows} 行不完整数据` : "";
  status.textContent = `已在本机读取 ${state.storeConstraints.fileName}：${formatNumber(recordCount)} 家门店约束参与优化${skipped}。`;
  status.classList.add("is-loaded");
}

function normalizeUploadHeader(value) {
  return String(value || "")
    .replace(/^\uFEFF/, "")
    .trim()
    .toLowerCase()
    .replace(/[\s_()（）-]/g, "");
}

function getUploadValue(row, aliases) {
  const normalizedAliases = aliases.map(normalizeUploadHeader);
  const entry = Object.entries(row).find(([header]) => normalizedAliases.includes(normalizeUploadHeader(header)));
  return entry ? entry[1] : "";
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  const pushValue = () => {
    row.push(value);
    value = "";
  };
  const pushRow = () => {
    if (row.some((cell) => String(cell).trim())) rows.push(row);
    row = [];
  };

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === '"') {
      if (quoted && text[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }
    if (character === "," && !quoted) {
      pushValue();
      continue;
    }
    if (character === "\n" && !quoted) {
      pushValue();
      pushRow();
      continue;
    }
    if (character !== "\r") value += character;
  }
  pushValue();
  pushRow();

  if (rows.length < 2) return [];
  const headers = rows.shift().map((header) => String(header).trim());
  return rows.map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""])));
}

function parseUploadNumber(value) {
  const parsed = Number(String(value).replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function parseOptionalUploadNumber(value) {
  return String(value ?? "").trim() ? parseUploadNumber(value) : null;
}

function parseOptionalClockHour(value) {
  const normalized = String(value ?? "").trim();
  if (!normalized) return null;
  const matched = normalized.match(/^(\d{1,2})(?::(\d{1,2}))?$/);
  if (!matched) return Number.NaN;
  const hour = Number(matched[1]);
  const minute = matched[2] === undefined ? 0 : Number(matched[2]);
  if (!Number.isInteger(hour) || !Number.isInteger(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) return Number.NaN;
  return hour + minute / 60;
}

async function readTabularRows(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith(".csv")) return parseCsvRows(await file.text());
  if (!name.endsWith(".xlsx") && !name.endsWith(".xls")) {
    throw new Error("请上传 CSV、XLSX 或 XLS 格式的资料文件。");
  }
  if (!window.XLSX) {
    throw new Error("Excel 解析组件未加载，请先用下载模板导出 CSV 后上传。");
  }
  const workbook = window.XLSX.read(await file.arrayBuffer(), { type: "array" });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  return window.XLSX.utils.sheet_to_json(firstSheet, { defval: "" });
}

function parseRateCard(rows) {
  const routes = new Map();
  let skippedRows = 0;
  rows.forEach((row) => {
    const sourceCode = String(getUploadValue(row, ["来源门店编码", "调出门店编码", "来源编码", "来源门店", "调出门店", "source", "source_code", "from"]) || "").trim();
    const targetCode = String(getUploadValue(row, ["目的门店编码", "调入门店编码", "目标门店编码", "目的编码", "调入门店", "目的门店", "target", "target_code", "to"]) || "").trim();
    const parcelCost = parseUploadNumber(getUploadValue(row, ["单包成本", "每包成本", "运费", "物流成本", "成本", "parcel_cost", "cost"]));
    const etaValue = getUploadValue(row, ["预计时效（天）", "预计时效天", "时效（天）", "时效天", "eta_days", "eta", "lead_time"]);
    const etaDays = String(etaValue).trim() ? parseUploadNumber(etaValue) : null;
    const etaHours = parseOptionalUploadNumber(getUploadValue(row, ["预计时效（小时）", "预计时效小时", "运输时长（小时）", "运输时长", "时效（小时）", "eta_hours", "transit_hours"]));
    const handlingHours = parseOptionalUploadNumber(getUploadValue(row, ["出库揽收时长（小时）", "出库时长（小时）", "揽收时长（小时）", "handling_hours", "pickup_hours"]));
    const receivingHours = parseOptionalUploadNumber(getUploadValue(row, ["收货上架时长（小时）", "收货时长（小时）", "receiving_hours", "putaway_hours"]));
    const cutoffHour = parseOptionalClockHour(getUploadValue(row, ["截单时间", "发运截单时间", "cutoff_time", "cutoff"]));
    const cutoffDelayHours = parseOptionalUploadNumber(getUploadValue(row, ["截单后顺延小时", "截单顺延（小时）", "cutoff_delay_hours"]));
    const volatilityHours = parseOptionalUploadNumber(getUploadValue(row, ["时效波动缓冲（小时）", "时效缓冲（小时）", "路况缓冲（小时）", "volatility_hours", "buffer_hours"]));
    const routeNumbers = [etaDays, etaHours, handlingHours, receivingHours, cutoffDelayHours, volatilityHours];
    if (!sourceCode || !targetCode || !Number.isFinite(parcelCost) || parcelCost < 0
      || routeNumbers.some((value) => value !== null && (!Number.isFinite(value) || value < 0))
      || (cutoffHour !== null && (!Number.isFinite(cutoffHour) || cutoffHour < 0 || cutoffHour >= 24))) {
      skippedRows += 1;
      return;
    }
    routes.set(routeKey(sourceCode, targetCode), { parcelCost, etaDays, etaHours, handlingHours, receivingHours, cutoffHour, cutoffDelayHours, volatilityHours });
  });
  if (!routes.size) {
    throw new Error("没有识别到有效线路。请检查必填字段：来源门店编码、目的门店编码、单包成本。");
  }
  return { routes, skippedRows };
}

function parseProductParameters(rows) {
  const records = new Map();
  let skippedRows = 0;
  rows.forEach((row) => {
    const sku = String(getUploadValue(row, ["货号", "商品货号", "商品编码", "产品编码", "sku", "sku_id", "款号"]) || "").trim();
    const grossMarginValue = getUploadValue(row, ["毛利率", "实际毛利率", "gross_margin", "grossmargin"]);
    const parcelCapacityValue = getUploadValue(row, ["单包容量", "每包件数", "装箱件数", "包装容量", "parcel_capacity", "pack_capacity"]);
    const lifecycle = String(getUploadValue(row, ["商品生命周期", "生命周期", "商品状态", "life_cycle", "lifecycle"]) || "").trim();
    const cityScopeValue = getUploadValue(row, ["可售城市", "允许销售城市", "城市范围", "城市限定", "allowed_cities", "city_scope"]);
    const grossMargin = String(grossMarginValue).trim() ? parseUploadNumber(grossMarginValue) : null;
    const parcelCapacity = String(parcelCapacityValue).trim() ? parseUploadNumber(parcelCapacityValue) : null;
    const allowedCities = parseCityScope(cityScopeValue);
    const isInvalid = !sku
      || (grossMargin !== null && (!Number.isFinite(grossMargin) || grossMargin < 0 || grossMargin > 100))
      || (parcelCapacity !== null && (!Number.isFinite(parcelCapacity) || parcelCapacity <= 0))
      || (grossMargin === null && parcelCapacity === null && !lifecycle && allowedCities === null);
    if (isInvalid) {
      skippedRows += 1;
      return;
    }
    records.set(skuKey(sku), { grossMargin, parcelCapacity, lifecycle, allowedCities });
  });
  if (!records.size) {
    throw new Error("没有识别到有效商品参数。请检查货号及毛利率、单包容量或生命周期字段。");
  }
  return { records, skippedRows };
}

function parseOptionalBoolean(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized) return undefined;
  if (["是", "允许", "1", "true", "yes", "y"].includes(normalized)) return true;
  if (["否", "禁止", "0", "false", "no", "n"].includes(normalized)) return false;
  return undefined;
}

function parseStoreConstraints(rows) {
  const records = new Map();
  let skippedRows = 0;
  rows.forEach((row) => {
    const storeCode = String(getUploadValue(row, ["门店编码", "仓店编码", "门店代码", "store", "store_code", "shop_code"]) || "").trim();
    const maxCapacityValue = getUploadValue(row, ["库容上限", "库存上限", "最大库存", "max_capacity", "capacity"]);
    const minDisplayValue = getUploadValue(row, ["最低陈列量", "最低库存", "最小陈列", "min_display", "minimum_display"]);
    const priorityValue = getUploadValue(row, ["优先级调整（%）", "优先级调整", "门店优先级", "priority_adjustment", "priority"]);
    const allowInboundValue = getUploadValue(row, ["允许调入", "可调入", "allow_inbound", "inbound_allowed"]);
    const allowOutboundValue = getUploadValue(row, ["允许调出", "可调出", "allow_outbound", "outbound_allowed"]);
    const maxCapacity = String(maxCapacityValue).trim() ? parseUploadNumber(maxCapacityValue) : null;
    const minDisplay = String(minDisplayValue).trim() ? parseUploadNumber(minDisplayValue) : null;
    const priorityAdjustment = String(priorityValue).trim() ? parseUploadNumber(priorityValue) : null;
    const allowInbound = parseOptionalBoolean(allowInboundValue);
    const allowOutbound = parseOptionalBoolean(allowOutboundValue);
    const isInvalid = !storeCode
      || (maxCapacity !== null && (!Number.isFinite(maxCapacity) || maxCapacity < 0))
      || (minDisplay !== null && (!Number.isFinite(minDisplay) || minDisplay < 0))
      || (priorityAdjustment !== null && !Number.isFinite(priorityAdjustment))
      || (String(allowInboundValue).trim() && allowInbound === undefined)
      || (String(allowOutboundValue).trim() && allowOutbound === undefined)
      || (maxCapacity === null && minDisplay === null && priorityAdjustment === null && allowInbound === undefined && allowOutbound === undefined);
    if (isInvalid) {
      skippedRows += 1;
      return;
    }
    records.set(String(storeCode).toUpperCase(), { maxCapacity, minDisplay, priorityAdjustment, allowInbound, allowOutbound });
  });
  if (!records.size) {
    throw new Error("没有识别到有效门店约束。请检查门店编码及至少一项运营限制字段。");
  }
  return { records, skippedRows };
}

function parseOperatingSnapshot(rows) {
  const records = new Map();
  let skippedRows = 0;
  rows.forEach((row) => {
    const sku = String(getUploadValue(row, ["货号", "商品货号", "商品编码", "产品编码", "sku", "sku_id", "款号"]) || "").trim();
    const storeCode = String(getUploadValue(row, ["门店编码", "仓店编码", "门店代码", "store", "store_code", "shop_code"]) || "").trim();
    const physical = parseOptionalUploadNumber(getUploadValue(row, ["当前实物", "实物库存", "现存库存", "当前库存", "physical", "on_hand", "stock"]));
    const sales28 = parseOptionalUploadNumber(getUploadValue(row, ["近28天销量", "28天销量", "近四周销量", "sales_28d", "sales28"]));
    const inStockDays = parseOptionalUploadNumber(getUploadValue(row, ["有货天数", "可售天数", "在售天数", "有库存天数", "in_stock_days", "available_days"]));
    const dailyDemandInput = parseOptionalUploadNumber(getUploadValue(row, ["日均动销", "日均销量", "日销", "daily_demand", "daily_sales"]));
    const demandMultiplier = parseOptionalUploadNumber(getUploadValue(row, ["活动系数", "节假日系数", "预测动销系数", "demand_multiplier", "seasonal_multiplier"]));
    const confirmedInbound = parseOptionalUploadNumber(getUploadValue(row, ["确认在途数量", "已确认在途", "确认在途", "在途数量", "confirmed_inbound", "in_transit"]));
    const etaDays = parseOptionalUploadNumber(getUploadValue(row, ["ETA（天）", "eta天", "到货天数", "预计到货天数", "eta_days", "eta"]));
    const available = parseOptionalUploadNumber(getUploadValue(row, ["可用库存", "可调库存", "available", "available_stock"]));
    const safety = parseOptionalUploadNumber(getUploadValue(row, ["安全库存", "保护库存", "safety", "safety_stock"]));
    const salesDays = inStockDays ?? 28;
    const dailyDemand = dailyDemandInput ?? (sales28 === null ? null : sales28 / salesDays);
    const hasInvalidNumber = [physical, sales28, inStockDays, dailyDemandInput, confirmedInbound, etaDays, available, safety]
      .some((value) => value !== null && (!Number.isFinite(value) || value < 0));
    const hasOperatingValue = [physical, dailyDemand, demandMultiplier, confirmedInbound, available, safety].some((value) => value !== null);
    if (!sku || !storeCode || hasInvalidNumber || (sales28 !== null && salesDays <= 0) || (demandMultiplier !== null && (!Number.isFinite(demandMultiplier) || demandMultiplier <= 0 || demandMultiplier > 10)) || !hasOperatingValue || (etaDays !== null && confirmedInbound === null)) {
      skippedRows += 1;
      return;
    }
    records.set(`${skuKey(sku)}::${String(storeCode).toUpperCase()}`, {
      sku: skuKey(sku),
      storeCode: String(storeCode).toUpperCase(),
      physical,
      sales28,
      inStockDays,
      dailyDemand,
      demandMultiplier,
      confirmedInbound,
      etaDays,
      available,
      safety
    });
  });
  if (!records.size) {
    throw new Error("没有识别到有效经营快照。请检查货号、门店编码及库存、销量或在途字段。");
  }
  return { records, skippedRows };
}

function countOperatingSnapshotMatches(records) {
  let matches = 0;
  records.forEach((entry) => {
    transferSeed.forEach((record) => {
      if (skuKey(record.sku) !== entry.sku) return;
      if (record.target.code === entry.storeCode) matches += 1;
      matches += record.sources.filter((source) => source.code === entry.storeCode).length;
    });
  });
  return matches;
}

function applyOperatingSnapshot(records) {
  let matchedTargets = 0;
  let matchedSources = 0;
  records.forEach((entry) => {
    transferSeed.forEach((record) => {
      if (skuKey(record.sku) !== entry.sku) return;
      if (record.target.code === entry.storeCode) {
        if (entry.physical !== null) record.target.physical = entry.physical;
        if (entry.inStockDays !== null) record.target.inStockDays = entry.inStockDays;
        if (entry.dailyDemand !== null) record.target.dailyDemand = entry.dailyDemand;
        if (entry.demandMultiplier !== null) record.target.demandMultiplier = entry.demandMultiplier;
        if (entry.confirmedInbound !== null) {
          if (entry.confirmedInbound > 0 && entry.etaDays !== null) {
            record.target.confirmedInbound = [{ quantity: entry.confirmedInbound, etaDays: entry.etaDays }];
            record.target.inbound = 0;
          } else {
            record.target.confirmedInbound = [];
            record.target.inbound = entry.confirmedInbound;
          }
        }
        matchedTargets += 1;
      }
      record.sources.forEach((source) => {
        if (source.code !== entry.storeCode) return;
        if (entry.physical !== null) source.stock = entry.physical;
        if (entry.inStockDays !== null) source.inStockDays = entry.inStockDays;
        if (entry.dailyDemand !== null) source.dailyDemand = entry.dailyDemand;
        if (entry.demandMultiplier !== null) source.demandMultiplier = entry.demandMultiplier;
        if (entry.safety !== null) source.safety = entry.safety;
        if (entry.available !== null) {
          source.available = entry.available;
        } else if (entry.physical !== null) {
          source.available = Math.max(0, source.stock - source.safety);
        }
        matchedSources += 1;
      });
    });
  });
  return { matchedTargets, matchedSources };
}

async function handleOperatingSnapshotFile(event) {
  const input = event.currentTarget;
  const file = input.files?.[0];
  if (!file) return;
  try {
    const result = parseOperatingSnapshot(await readTabularRows(file));
    if (!countOperatingSnapshotMatches(result.records)) {
      throw new Error("快照中的货号和门店编码未匹配当前试点范围，请下载模板后核对编码。");
    }
    transferSeed.splice(0, transferSeed.length, ...JSON.parse(JSON.stringify(initialTransferSeed)));
    state.statuses = {};
    state.sourceOverrides = {};
    state.inTransitTransfers = new Map();
    state.flow = createInitialFlow();
    const matches = applyOperatingSnapshot(result.records);
    state.operatingSnapshot = { fileName: file.name, records: result.records, skippedRows: result.skippedRows, ...matches };
    applyOptimization(`已读取本机经营快照 ${file.name}，库存、动销与确认在途已参与本轮测算`);
    showToast(`已应用经营快照：匹配调入 ${formatNumber(matches.matchedTargets)} 处、调出 ${formatNumber(matches.matchedSources)} 处；文件未上传到服务器。`);
  } catch (error) {
    showToast(error instanceof Error ? error.message : "经营快照读取失败。请检查文件格式。");
  } finally {
    input.value = "";
  }
}

async function importLocalData(event, parser, stateKey, collectionKey, label) {
  const input = event.currentTarget;
  const file = input.files?.[0];
  if (!file) return;
  try {
    const result = parser(await readTabularRows(file));
    state[stateKey] = { fileName: file.name, [collectionKey]: result[collectionKey], skippedRows: result.skippedRows };
    applyOptimization(`已读取本机${label} ${file.name}，${formatNumber(result[collectionKey].size)} 条记录参与本轮测算`);
    showToast(`已应用 ${formatNumber(result[collectionKey].size)} 条${label}记录；文件未上传到服务器。`);
  } catch (error) {
    showToast(error instanceof Error ? error.message : `${label}读取失败。请检查文件格式。`);
  } finally {
    input.value = "";
  }
}

function handleRateCardFile(event) {
  return importLocalData(event, parseRateCard, "rateCard", "routes", "运价表");
}

function handleProductParametersFile(event) {
  return importLocalData(event, parseProductParameters, "productParameters", "records", "商品参数");
}

function handleStoreConstraintsFile(event) {
  return importLocalData(event, parseStoreConstraints, "storeConstraints", "records", "门店约束");
}

function downloadCsv(rows, fileName) {
  const csv = "\ufeff" + rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function downloadOperatingSnapshotTemplate() {
  const rows = new Map();
  const addRow = (sku, storeCode, values) => {
    rows.set(`${skuKey(sku)}::${String(storeCode).toUpperCase()}`, [sku, storeCode, ...values]);
  };
  transferSeed.forEach((record) => {
    const confirmedInbound = record.target.confirmedInbound?.[0];
    addRow(record.sku, record.target.code, [
      record.target.physical,
      Math.round(record.target.dailyDemand * 28),
      28,
      record.target.dailyDemand,
      record.target.demandMultiplier ?? 1,
      confirmedInbound?.quantity ?? record.target.inbound ?? "",
      confirmedInbound?.etaDays ?? "",
      "",
      ""
    ]);
    record.sources.forEach((source) => {
      addRow(record.sku, source.code, [
        source.stock,
        source.dailyDemand ? Math.round(source.dailyDemand * 28) : "",
        source.dailyDemand ? 28 : "",
        source.dailyDemand ?? "",
        source.demandMultiplier ?? "",
        "",
        "",
        source.available,
        source.safety
      ]);
    });
  });
  downloadCsv([
    ["货号", "门店编码", "当前实物", "近28天销量", "有货天数", "日均动销", "活动系数", "确认在途数量", "ETA（天）", "可用库存", "安全库存"],
    ...rows.values()
  ], "经营快照模板.csv");
  showToast("已生成经营快照模板，可填写后上传到本机 Demo。");
}

function downloadRateCardTemplate() {
  const routes = new Map();
  transferSeed.forEach((record) => {
    record.sources.forEach((source) => {
      const key = routeKey(source.code, record.target.code);
      if (!routes.has(key)) {
        const fallback = getFallbackRouteQuote(source, record.target);
        routes.set(key, [source.code, record.target.code, fallback.parcelCost, fallback.etaDays, fallback.etaHours, "", "", "", "", ""]);
      }
    });
  });
  downloadCsv([
    ["来源门店编码", "目的门店编码", "单包成本", "预计时效（天）", "预计时效（小时）", "截单时间", "截单后顺延小时", "出库揽收时长（小时）", "收货上架时长（小时）", "时效波动缓冲（小时）"],
    ...routes.values()
  ], "线路运价表模板.csv");
  showToast("已生成线路运价表模板，可修改后上传到本机 Demo。");
}

function downloadProductParametersTemplate() {
  const seenSkus = new Set();
  const rows = transferSeed
    .filter((record) => {
      const key = skuKey(record.sku);
      if (seenSkus.has(key)) return false;
      seenSkus.add(key);
      return true;
    })
    .map((record) => [record.sku, "", "", "", inferCityScope(record)?.join("、") || ""]);
  downloadCsv([
    ["货号", "毛利率", "单包容量", "商品生命周期", "可售城市"],
    ...rows
  ], "商品经营参数模板.csv");
  showToast("已生成商品经营参数模板，可填写后上传到本机 Demo。");
}

function downloadStoreConstraintsTemplate() {
  const storeCodes = new Set();
  transferSeed.forEach((record) => {
    storeCodes.add(record.target.code);
    record.sources.forEach((source) => storeCodes.add(source.code));
  });
  downloadCsv([
    ["门店编码", "库容上限", "最低陈列量", "优先级调整（%）", "允许调入", "允许调出"],
    ...[...storeCodes].sort().map((storeCode) => [storeCode, "", "", "", "", ""])
  ], "门店运营约束模板.csv");
  showToast("已生成门店运营约束模板，可填写后上传到本机 Demo。");
}

function syncSettingsControls() {
  const settings = state.settings;
  const controls = {
    coverageDays: settings.coverageDays,
    urgentCoverageDays: settings.urgentCoverageDays,
    demandBufferDays: settings.demandBufferDays,
    sourceProtectionDays: settings.sourceProtectionDays,
    minimumTransferQuantity: settings.minimumTransferQuantity,
    minimumNetContribution: settings.minimumNetContribution,
    grossMargin: settings.grossMargin,
    sameCityCost: settings.sameCityCost,
    crossCityCost: settings.crossCityCost,
    parcelCapacity: settings.parcelCapacity,
    approvalThreshold: settings.approvalThreshold,
    strategicStore: settings.strategicStore,
    allowFallbackRates: settings.allowFallbackRates
  };
  Object.entries(controls).forEach(([id, value]) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      if (element.type === "checkbox") {
        element.checked = Boolean(value);
      } else {
        element.value = value;
      }
    }
  });
}

function readBoundedNumber(id, fallback, min, max) {
  const element = document.querySelector(`#${id}`);
  const value = Number(element.value);
  const normalized = Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
  element.value = normalized;
  return normalized;
}

function readRuleInputs() {
  state.settings.coverageDays = readBoundedNumber("coverageDays", state.settings.coverageDays, 1, 60);
  state.settings.urgentCoverageDays = readBoundedNumber("urgentCoverageDays", state.settings.urgentCoverageDays, 0.5, 30);
  state.settings.demandBufferDays = readBoundedNumber("demandBufferDays", state.settings.demandBufferDays, 0, 14);
  state.settings.sourceProtectionDays = readBoundedNumber("sourceProtectionDays", state.settings.sourceProtectionDays, 1, 60);
  state.settings.minimumTransferQuantity = readBoundedNumber("minimumTransferQuantity", state.settings.minimumTransferQuantity, 1, 10000);
  state.settings.minimumNetContribution = readBoundedNumber("minimumNetContribution", state.settings.minimumNetContribution, 0, 1000000);
  state.settings.grossMargin = readBoundedNumber("grossMargin", state.settings.grossMargin, 0, 100);
  state.settings.sameCityCost = readBoundedNumber("sameCityCost", state.settings.sameCityCost, 0, 10000);
  state.settings.crossCityCost = readBoundedNumber("crossCityCost", state.settings.crossCityCost, 0, 10000);
  state.settings.parcelCapacity = readBoundedNumber("parcelCapacity", state.settings.parcelCapacity, 1, 10000);
  state.settings.approvalThreshold = readBoundedNumber("approvalThreshold", state.settings.approvalThreshold, 0, 1000000);
  state.settings.strategicStore = document.querySelector("#strategicStore").value;
  state.settings.allowFallbackRates = document.querySelector("#allowFallbackRates").checked;
  syncSettingsControls();
}

function renderRules() {
  syncSettingsControls();
  const status = document.querySelector("#allocationRuleStatus");
  if (status) {
    const records = getCalculatedRecords();
    const actionable = records.filter((record) => record.decision !== "暂不建议" && record.quantity > 0);
    const splitSourceCount = actionable.filter((record) => record.allocations.length > 1).length;
    const rateMode = state.settings.allowFallbackRates ? "未维护线路按演示回退价试算" : "仅采用已维护运价的线路";
    status.textContent = `本轮 ${formatNumber(actionable.length)} 条建议已先锁定同 SKU 共享余量；候选来源已通过城市范围与来源保护校验，再按机会成本、时效和合单增量成本排序。${splitSourceCount ? `${formatNumber(splitSourceCount)} 条建议使用多来源补足；` : ""}${rateMode}。`;
  }
  refreshIcons();
}

function renderData() {
  renderOperatingSnapshotStatus();
  renderRateCardStatus();
  renderProductParametersStatus();
  renderStoreConstraintsStatus();
  refreshIcons();
}

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({ attrs: { width: 17, height: 17, "stroke-width": 1.8 } });
  }
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setActiveTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    const isActive = panel.dataset.panel === tab;
    panel.hidden = !isActive;
    panel.classList.toggle("is-visible", isActive);
  });
  document.querySelectorAll(".nav-item").forEach((button) => {
    const isActive = button.dataset.tab === tab;
    button.classList.toggle("is-active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  const label = pageLabels[tab];
  document.querySelector("#pageKicker").textContent = label.kicker;
  document.querySelector("#pageTitle").textContent = label.title;
  if (tab === "overview") renderOverview();
  if (tab === "plans") renderPlans();
  if (tab === "orders") renderOrders();
  if (tab === "fulfillment") renderFulfillment();
  if (tab === "data") renderData();
  if (tab === "rules") renderRules();
}

function renderAllPanels() {
  renderOverview();
  renderPlans();
  renderOrders();
  renderFulfillment();
  renderData();
  renderRules();
}

function resetDemo() {
  transferSeed.splice(0, transferSeed.length, ...JSON.parse(JSON.stringify(initialTransferSeed)));
  state.activeTab = "overview";
  state.scope = "all";
  state.statusFilter = "all";
  state.selectedId = initialSelectedId;
  state.role = "hq";
  state.settings = { ...initialSettings };
  state.rateCard = { fileName: "", routes: new Map(), skippedRows: 0 };
  state.productParameters = { fileName: "", records: new Map(), skippedRows: 0 };
  state.operatingSnapshot = { fileName: "", records: new Map(), skippedRows: 0, matchedTargets: 0, matchedSources: 0 };
  state.storeConstraints = { fileName: "", records: new Map(), skippedRows: 0 };
  state.statuses = {};
  state.sourceOverrides = {};
  state.inTransitTransfers = new Map();
  state.flow = createInitialFlow();
  state.pendingChanges = [];
  state.calculationAt = new Date();
  state.lastRun = hasFrSnapshot ? "已恢复 FR 测试库只读快照" : "已恢复默认演示快照";
  ["#operatingSnapshotFile", "#rateCardFile", "#productParametersFile", "#storeConstraintsFile"].forEach((selector) => {
    const input = document.querySelector(selector);
    if (input) input.value = "";
  });
  ["#aiCommand", "#rulesCommand"].forEach((selector) => {
    const input = document.querySelector(selector);
    if (input) input.value = "";
  });
  document.querySelector("#aiInterpretation").hidden = true;
  closeAiDrawer();
  renderAllPanels();
  setActiveTab("overview");
  showToast(`${hasFrSnapshot ? "已恢复 FR 测试库只读快照" : "已恢复默认演示快照"}；所有操作始终只在本机浏览器中模拟。`);
}

function applyOptimization(message) {
  readRuleInputs();
  state.calculationAt = new Date();
  state.lastRun = message || `已按 ${state.settings.coverageDays} 天覆盖、来源机会成本、线路时效与合单成本完成本轮计算`;
  renderAllPanels();
  showToast("本机优化已完成，原始 FR 测试库未发生任何写入。");
}

function openAiDrawer() {
  document.querySelector("#aiDrawer").classList.add("is-open");
  document.querySelector("#aiDrawer").setAttribute("aria-hidden", "false");
  document.querySelector("#drawerBackdrop").hidden = false;
  setTimeout(() => document.querySelector("#aiCommand").focus(), 180);
}

function closeAiDrawer() {
  document.querySelector("#aiDrawer").classList.remove("is-open");
  document.querySelector("#aiDrawer").setAttribute("aria-hidden", "true");
  document.querySelector("#drawerBackdrop").hidden = true;
}

function parseAiCommand(command) {
  const text = command.trim();
  const changes = [];
  if (!text) return changes;

  if (/apm|北京\s*apm|东城/i.test(text)) {
    changes.push({ key: "strategicStore", label: "战略门店", value: "BJSR04", display: "北京 apm 三丽鸥" });
  }
  if (/合生汇/i.test(text)) {
    changes.push({ key: "strategicStore", label: "战略门店", value: "BJSR02", display: "北京合生汇三丽鸥" });
  }
  const crossCityMatch = text.match(/跨城[^\d]{0,12}(\d+)\s*元?/i);
  if (crossCityMatch) {
    changes.push({ key: "crossCityCost", label: "跨城单包成本", value: Number(crossCityMatch[1]), display: `${crossCityMatch[1]} 元` });
  }
  const sameCityMatch = text.match(/同城[^\d]{0,12}(\d+)\s*元?/i);
  if (sameCityMatch) {
    changes.push({ key: "sameCityCost", label: "同城单包成本", value: Number(sameCityMatch[1]), display: `${sameCityMatch[1]} 元` });
  }
  const coverageMatch = text.match(/(?:覆盖|库存)[^\d]{0,12}(\d+)\s*天/i);
  if (coverageMatch) {
    changes.push({ key: "coverageDays", label: "目标覆盖天数", value: Number(coverageMatch[1]), display: `${coverageMatch[1]} 天` });
  }
  const demandBufferMatch = text.match(/(?:波动缓冲|动销缓冲|缓冲)[^\d]{0,12}(\d+(?:\.\d+)?)\s*天/i);
  if (demandBufferMatch) {
    changes.push({ key: "demandBufferDays", label: "动销波动缓冲", value: Number(demandBufferMatch[1]), display: `${demandBufferMatch[1]} 天` });
  }
  const sourceProtectionMatch = text.match(/(?:调出店保护|来源保护|保护库存)[^\d]{0,12}(\d+(?:\.\d+)?)\s*天/i);
  if (sourceProtectionMatch) {
    changes.push({ key: "sourceProtectionDays", label: "调出店保护天数", value: Number(sourceProtectionMatch[1]), display: `${sourceProtectionMatch[1]} 天` });
  }
  const marginMatch = text.match(/毛利(?:率)?[^\d]{0,12}(\d+)\s*%?/i);
  if (marginMatch) {
    changes.push({ key: "grossMargin", label: "试点毛利率", value: Number(marginMatch[1]), display: `${marginMatch[1]}%` });
  }
  const urgentRiskMatch = text.match(/(?:紧急风险线|风险线)[^\d]{0,12}(\d+(?:\.\d+)?)\s*天/i);
  if (urgentRiskMatch) {
    changes.push({ key: "urgentCoverageDays", label: "紧急风险线", value: Number(urgentRiskMatch[1]), display: `${urgentRiskMatch[1]} 天` });
  }
  const minTransferMatch = text.match(/(?:最小调拨量|非紧急(?:少于|小于)|(?:少于|小于))[^\d]{0,12}(\d+)\s*件/i);
  if (minTransferMatch) {
    changes.push({ key: "minimumTransferQuantity", label: "非紧急最小调拨量", value: Number(minTransferMatch[1]), display: `${minTransferMatch[1]} 件` });
  }
  const contributionMatch = text.match(/(?:最低(?:净)?贡献|净贡献)[^\d]{0,12}(\d+)\s*元?/i);
  if (contributionMatch) {
    changes.push({ key: "minimumNetContribution", label: "合单最低净贡献", value: Number(contributionMatch[1]), display: `${contributionMatch[1]} 元` });
  }
  if (/(不允许|禁用|关闭).{0,10}(?:演示运价|回退运价|回退线路)|(?:仅|只).{0,10}已维护运价/i.test(text)) {
    changes.push({ key: "allowFallbackRates", label: "演示回退运价", value: false, display: "关闭" });
  }
  return changes;
}

function showAiInterpretation(changes, target = "drawer") {
  if (target === "rules") {
    const output = document.querySelector("#rulesCommandStatus");
    output.textContent = changes.length ? `已识别 ${changes.length} 项规则，已打开 AI 助手确认。` : "未识别到可执行规则，请换一种表达。";
    if (changes.length) {
      state.pendingChanges = changes;
      document.querySelector("#aiCommand").value = document.querySelector("#rulesCommand").value;
      renderAiInterpretation(changes);
      openAiDrawer();
    }
    return;
  }
  state.pendingChanges = changes;
  renderAiInterpretation(changes);
}

function renderAiInterpretation(changes) {
  const container = document.querySelector("#aiInterpretation");
  container.hidden = false;
  if (!changes.length) {
    container.innerHTML = `<div class="interpretation-row"><span>没有识别到可执行的规则。</span><strong>请尝试包含门店、金额、天数或毛利率。</strong></div>`;
    return;
  }
  container.innerHTML = `
    <p class="eyebrow">解析结果</p>
    ${changes.map((change) => `<div class="interpretation-row"><span>${escapeHtml(change.label)}</span><strong>${escapeHtml(change.display)}</strong></div>`).join("")}
    <div class="interpretation-actions">
      <button class="primary-button" type="button" data-action="apply-ai"><i data-lucide="check" aria-hidden="true"></i>确认并重算</button>
      <button class="secondary-button" type="button" data-action="cancel-ai">取消</button>
    </div>`;
  refreshIcons();
}

function applyPendingChanges() {
  if (!state.pendingChanges.length) return;
  state.pendingChanges.forEach((change) => {
    state.settings[change.key] = change.value;
  });
  syncSettingsControls();
  applyOptimization("AI 已将确认后的业务要求转成规则并完成重算");
  closeAiDrawer();
}

function addFlowEvent(title, detail, type = "normal") {
  const now = new Date();
  const time = now.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
  state.flow.events.unshift({ title, detail, type, time });
}

function getActiveFlowGroup() {
  const groups = getOrderGroups();
  if (state.flow.activeGroupKey) return groups.find((group) => group.key === state.flow.activeGroupKey) || null;
  return groups[0] || null;
}

function activateFlowGroup(groupKey) {
  const group = getOrderGroups().find((item) => item.key === groupKey);
  if (!group) return null;
  state.flow.activeGroupKey = group.key;
  state.flow.activeRoute = {
    key: group.key,
    source: { code: group.source.code, name: group.source.name },
    target: { code: group.target.code, name: group.target.name }
  };
  state.flow.status = group.status;
  return group;
}

function updateGroupStatus(groupKey, status) {
  const group = getOrderGroups().find((item) => item.key === groupKey);
  group?.records.forEach((record) => {
    if (!record.forceHold) state.statuses[record.id] = status;
  });
}

function captureInTransitTransfers(groupKey) {
  const group = getOrderGroups().find((item) => item.key === groupKey);
  const records = group?.records || [];
  records.forEach((record) => {
    state.inTransitTransfers.set(record.allocationId, {
      groupKey,
      recordId: record.id,
      sku: skuKey(record.sku),
      quantity: record.quantity,
      inbounds: [{ quantity: record.quantity, etaDays: record.etaDays }],
      allocations: [{ sourceCode: record.source.code, quantity: record.quantity }]
    });
  });
  return records.reduce((sum, record) => sum + record.quantity, 0);
}

function receiveInTransitTransfers(groupKey) {
  const completedIds = [];
  let receivedQuantity = 0;
  state.inTransitTransfers.forEach((transfer, transferId) => {
    if (transfer.groupKey !== groupKey) return;
    const targetRecord = transferSeed.find((record) => record.id === transfer.recordId);
    if (targetRecord) {
      targetRecord.target.physical += transfer.quantity;
      transfer.allocations.forEach((allocation) => {
        const sourceCopies = transferSeed.flatMap((record) => record.sources
          .filter((source) => skuKey(record.sku) === transfer.sku && source.code === allocation.sourceCode));
        const currentStock = Math.max(0, Number(sourceCopies[0]?.stock) || 0);
        const nextStock = Math.max(0, currentStock - allocation.quantity);
        sourceCopies.forEach((source) => {
          source.stock = nextStock;
          source.available = Math.max(0, Math.min(nextStock - Number(source.safety || 0), Number(source.available || 0) - allocation.quantity));
        });
      });
      receivedQuantity += transfer.quantity;
    }
    completedIds.push(transferId);
  });
  completedIds.forEach((transferId) => state.inTransitTransfers.delete(transferId));
  return receivedQuantity;
}

function handleFlowAction(action) {
  const group = getActiveFlowGroup();
  if (!group && action !== "flow-recalculate") {
    showToast("当前没有可履约的调拨单。");
    return;
  }
  const groupKey = group?.key;
  if (action === "flow-approve") {
    state.flow.status = "待调出店发货";
    updateGroupStatus(groupKey, "待调出店发货");
    addFlowEvent("总部审核通过", `${group.source.name} 至 ${group.target.name} 已生成合并调拨单，等待调出店确认发货。`);
    showToast("审核通过，调拨单已进入调出店待发货队列。");
  }
  if (action === "flow-dispatch") {
    const dispatchedQuantity = captureInTransitTransfers(groupKey);
    state.flow.status = "在途";
    updateGroupStatus(groupKey, "在途");
    addFlowEvent("调出店确认发货", `${group.source.name} 已按合单清单发出 ${formatNumber(dispatchedQuantity)} 件；该批货已计入调入店的确认在途库存。`);
    showToast("发货已确认，确认在途已计入库存位置。");
  }
  if (action === "flow-receive") {
    const receivedQuantity = receiveInTransitTransfers(groupKey);
    state.flow.status = "已收货";
    updateGroupStatus(groupKey, "已收货");
    addFlowEvent("调入店确认收货", `${group.target.name} 已确认收到 ${formatNumber(receivedQuantity)} 件，本机库存快照与缺货风险已重算。`);
    showToast("收货完成，本机库存位置已更新。");
  }
  if (action === "flow-exception") {
    const leg = group.records.find((record) => record.quantity > 0);
    const seedRecord = transferSeed.find((record) => record.id === leg?.id);
    const alternativeIndex = seedRecord?.sources.findIndex((source) => source.code !== leg.source.code && getSourceSafeAvailable(source, seedRecord) > 0) ?? -1;
    if (alternativeIndex < 0) {
      showToast("当前调拨单没有符合安全库存条件的替代来源。");
      return;
    }
    const alternative = seedRecord.sources[alternativeIndex];
    state.flow.status = "待二次审核";
    state.sourceOverrides[seedRecord.id] = alternativeIndex;
    state.statuses[seedRecord.id] = "待二次审核";
    activateFlowGroup(routeKey(alternative.code, seedRecord.target.code));
    state.flow.status = "待二次审核";
    addFlowEvent("调出店报告少发异常", `${leg.source.name} 的 ${seedRecord.sku} 实际可发不足，系统已切换为 ${alternative.name} 并等待二次审核。`, "exception");
    showToast("已模拟少发异常：替代来源已重算，等待总部二次审核。");
  }
  if (action === "flow-recalculate") {
    applyOptimization("管理员按当前规则重新计算了本机补调方案");
    addFlowEvent("管理员手动重算", "已按当前库存、毛利、物流试算和审批规则完成方案刷新。");
  }
  renderOverview();
  renderPlans();
  renderOrders();
  renderFulfillment();
}

function exportOrders(groups) {
  const rows = [["调拨单号", "调出门店", "调入门店", "货号", "色尺", "商品名称", "数量", "预计包裹", "物流成本测算", "成本依据", "状态"]];
  groups.forEach((group) => {
    group.records.forEach((record) => {
      rows.push([
        group.id,
        group.source.name,
        group.target.name,
        record.sku,
        record.color,
        record.product,
        record.quantity,
        group.totalPackages,
        group.totalCost,
        record.rateSource,
        group.status
      ]);
    });
  });
  downloadCsv(rows, "AI补调单_20260831.csv");
  showToast("已生成本机调拨单导出文件。");
}

function handleClick(event) {
  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    setActiveTab(tabButton.dataset.tab);
    return;
  }

  const roleButton = event.target.closest("[data-role]");
  if (roleButton) {
    state.role = roleButton.dataset.role;
    document.querySelectorAll("[data-role]").forEach((button) => button.classList.toggle("is-selected", button.dataset.role === state.role));
    renderFulfillment();
    return;
  }

  const suggestion = event.target.closest("[data-command]");
  if (suggestion) {
    document.querySelector("#aiCommand").value = suggestion.dataset.command;
    document.querySelector("#aiCommand").focus();
    return;
  }

  const actionNode = event.target.closest("[data-action]");
  if (!actionNode) return;
  const action = actionNode.dataset.action;
  if (action === "select-record") {
    state.selectedId = actionNode.dataset.id;
    renderPlans();
  }
  if (action === "approve-record") {
    const record = getCalculatedRecords().find((item) => item.id === actionNode.dataset.id);
    state.statuses[actionNode.dataset.id] = "待调出店发货";
    if (record?.allocations[0]) activateFlowGroup(routeKey(record.allocations[0].source.code, record.target.code));
    state.flow.status = "待调出店发货";
    addFlowEvent("建议已提交审核", "总部已将单条建议放入调出店待发货队列。");
    renderOverview();
    renderPlans();
    renderOrders();
    renderFulfillment();
    showToast("建议已进入调出店待发货队列。");
  }
  if (action === "open-rules") setActiveTab("rules");
  if (action === "open-data") setActiveTab("data");
  if (action === "open-plans") setActiveTab("plans");
  if (action === "open-orders") setActiveTab("orders");
  if (action === "run-optimization") applyOptimization("已按当前数据与经营规则刷新本轮方案");
  if (action === "open-ai") openAiDrawer();
  if (action === "download-snapshot-template") downloadOperatingSnapshotTemplate();
  if (action === "download-rate-template") downloadRateCardTemplate();
  if (action === "download-product-template") downloadProductParametersTemplate();
  if (action === "download-store-template") downloadStoreConstraintsTemplate();
  if (action === "approve-group") {
    const group = getOrderGroups().find((item) => item.key === actionNode.dataset.key);
    if (group) {
      activateFlowGroup(group.key);
      updateGroupStatus(group.key, "待调出店发货");
      state.flow.status = "待调出店发货";
      addFlowEvent("总部审核通过", `${group.id} 已进入调出店待发货队列。`);
      renderOverview();
      renderPlans();
      renderOrders();
      renderFulfillment();
      showToast("合并调拨单已审核通过。");
    }
  }
  if (action === "export-group") {
    const group = getOrderGroups().find((item) => item.key === actionNode.dataset.key);
    if (group) exportOrders([group]);
  }
  if (action === "open-flow") {
    activateFlowGroup(actionNode.dataset.key);
    setActiveTab("fulfillment");
  }
  if (["flow-approve", "flow-dispatch", "flow-receive", "flow-exception", "flow-recalculate"].includes(action)) handleFlowAction(action);
  if (action === "apply-ai") applyPendingChanges();
  if (action === "cancel-ai") {
    state.pendingChanges = [];
    document.querySelector("#aiInterpretation").hidden = true;
  }
}

function bindEvents() {
  document.body.addEventListener("click", handleClick);
  document.querySelector("#scopeSelect").addEventListener("change", (event) => {
    state.scope = event.target.value;
    renderPlans();
  });
  document.querySelector("#statusSelect").addEventListener("change", (event) => {
    state.statusFilter = event.target.value;
    renderPlans();
  });
  document.querySelector("#runOptimization").addEventListener("click", () => applyOptimization());
  document.querySelector("#resetDemo").addEventListener("click", resetDemo);
  document.querySelector("#openOrders").addEventListener("click", () => setActiveTab("orders"));
  document.querySelector("#openAi").addEventListener("click", openAiDrawer);
  document.querySelector("#closeAi").addEventListener("click", closeAiDrawer);
  document.querySelector("#drawerBackdrop").addEventListener("click", closeAiDrawer);
  document.querySelector("#interpretAi").addEventListener("click", () => {
    showAiInterpretation(parseAiCommand(document.querySelector("#aiCommand").value));
  });
  document.querySelector("#interpretRulesCommand").addEventListener("click", () => {
    showAiInterpretation(parseAiCommand(document.querySelector("#rulesCommand").value), "rules");
  });
  document.querySelector("#applyRules").addEventListener("click", () => applyOptimization());
  document.querySelector("#exportAllOrders").addEventListener("click", () => exportOrders(getOrderGroups()));
  document.querySelector("#operatingSnapshotFile").addEventListener("change", handleOperatingSnapshotFile);
  document.querySelector("#rateCardFile").addEventListener("change", handleRateCardFile);
  document.querySelector("#productParametersFile").addEventListener("change", handleProductParametersFile);
  document.querySelector("#storeConstraintsFile").addEventListener("change", handleStoreConstraintsFile);
  ["coverageDays", "urgentCoverageDays", "demandBufferDays", "sourceProtectionDays", "minimumTransferQuantity", "minimumNetContribution", "grossMargin", "sameCityCost", "crossCityCost", "parcelCapacity", "approvalThreshold", "strategicStore", "allowFallbackRates"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("change", readRuleInputs);
  });
}

function init() {
  bindEvents();
  renderSnapshotContext();
  syncSettingsControls();
  renderOverview();
  renderPlans();
  renderOrders();
  renderFulfillment();
  renderData();
  renderRules();
  refreshIcons();
}

document.addEventListener("DOMContentLoaded", init);
