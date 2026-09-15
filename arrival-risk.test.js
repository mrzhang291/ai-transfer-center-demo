"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const context = { document: { addEventListener() {} } };
vm.createContext(context);
vm.runInContext(fs.readFileSync("app.js", "utf8"), context);

function getRisk(record, inventoryPosition) {
  context.caseInput = { record, inventoryPosition };
  return vm.runInContext("getArrivalRisk(caseInput.record, caseInput.inventoryPosition)", context);
}

const lateInbound = getRisk(
  { target: { physical: 10, dailyDemand: 10 } },
  { onHand: 10, reservedOutbound: 0, confirmedEntries: [{ quantity: 100, etaDays: 3 }] }
);
assert.equal(lateInbound.hasRisk, true);
assert.equal(lateInbound.gapQuantity, 20);
assert.equal(lateInbound.deadlineDays, 1);

const timelyInbound = getRisk(
  { target: { physical: 10, dailyDemand: 10 } },
  { onHand: 10, reservedOutbound: 0, confirmedEntries: [{ quantity: 100, etaDays: 0.5 }] }
);
assert.equal(timelyInbound.hasRisk, false);
assert.equal(timelyInbound.gapQuantity, 0);

const lateRouteAlert = vm.runInContext(`
  (() => {
    const record = transferSeed.find((item) => item.id === "HZ-001");
    record.target.confirmedInbound = [{ quantity: 161, etaDays: 2 }];
    const calculated = getCalculatedRecords().find((item) => item.id === "HZ-001");
    return {
      decision: calculated.decision,
      arrivalRisk: calculated.arrivalRisk,
      gapQuantity: calculated.arrivalGapQuantity,
      uncoveredQuantity: calculated.arrivalGapRemaining
    };
  })()
`, context);
assert.equal(lateRouteAlert.arrivalRisk, true);
assert.equal(lateRouteAlert.gapQuantity, 11);
assert.equal(lateRouteAlert.uncoveredQuantity, 11);
assert.equal(lateRouteAlert.decision, "到货预警");

const dynamicTarget = vm.runInContext(`
  (() => {
    state.settings.demandBufferDays = 1;
    state.settings.strategicStore = "none";
    const profile = buildDemandProfile({
      sku: "TEST-SKU",
      price: 100,
      captureRate: 1,
      target: { code: "TEST-TARGET", city: "北京", physical: 0, inbound: 0, dailyDemand: 10 },
      sources: [{ code: "TEST-SOURCE", city: "北京", stock: 100, safety: 10, available: 90 }]
    });
    state.settings.sourceProtectionDays = 14;
    const protection = getSourceProtection({ code: "TEST-SOURCE-2", safety: 20 }, null);
    return { targetStock: profile.targetStock, effectiveCoverageDays: profile.effectiveCoverageDays, protectionStock: protection.protectionStock };
  })()
`, context);
assert.equal(dynamicTarget.targetStock, 80);
assert.equal(dynamicTarget.effectiveCoverageDays, 8);
assert.equal(dynamicTarget.protectionStock, 40);

const marginalCostCheck = vm.runInContext(`
  (() => {
    const records = getCalculatedRecords();
    const groups = getOrderGroups(records);
    return {
      recordCost: records.reduce((sum, record) => sum + record.logisticsCost, 0),
      routeCost: groups.reduce((sum, group) => sum + group.totalCost, 0)
    };
  })()
`, context);
assert.ok(Math.abs(marginalCostCheck.recordCost - marginalCostCheck.routeCost) < 1e-9);

const importedSnapshot = vm.runInContext(`
  (() => {
    const parsed = parseOperatingSnapshot([
      { "货号": "SR340225J5002K7", "门店编码": "BJSR04", "当前实物": "30", "日均动销": "20", "活动系数": "1.5", "确认在途数量": "100", "ETA（天）": "0.5" },
      { "货号": "SR340225J5002K7", "门店编码": "BJSR03", "当前实物": "210", "可用库存": "170", "安全库存": "40" }
    ]);
    const matches = applyOperatingSnapshot(parsed.records);
    const target = transferSeed.find((item) => item.id === "BJ-001");
    const source = target.sources.find((item) => item.code === "BJSR03");
    return {
      rowCount: parsed.records.size,
      matches,
      targetPhysical: target.target.physical,
      targetDailyDemand: target.target.dailyDemand,
      targetDemandMultiplier: target.target.demandMultiplier,
      targetInbound: target.target.confirmedInbound[0].quantity,
      targetEta: target.target.confirmedInbound[0].etaDays,
      sourceStock: source.stock,
      sourceAvailable: source.available,
      sourceSafety: source.safety
    };
  })()
`, context);
assert.equal(importedSnapshot.rowCount, 2);
assert.equal(importedSnapshot.targetPhysical, 30);
assert.equal(importedSnapshot.targetDailyDemand, 20);
assert.equal(importedSnapshot.targetDemandMultiplier, 1.5);
assert.equal(importedSnapshot.targetInbound, 100);
assert.equal(importedSnapshot.targetEta, 0.5);
assert.equal(importedSnapshot.sourceStock, 210);
assert.equal(importedSnapshot.sourceAvailable, 170);
assert.equal(importedSnapshot.sourceSafety, 40);

const correctedDemand = vm.runInContext(`
  (() => {
    const parsed = parseOperatingSnapshot([
      { "货号": "DEMAND-TEST", "门店编码": "STORE-1", "近28天销量": "280", "有货天数": "14" }
    ]);
    return parsed.records.get("DEMAND-TEST::STORE-1");
  })()
`, context);
assert.equal(correctedDemand.dailyDemand, 20);
assert.equal(correctedDemand.inStockDays, 14);

const cityRestriction = vm.runInContext(`
  (() => {
    state.productParameters.records.set("CITY-TEST", { grossMargin: null, parcelCapacity: null, lifecycle: "", allowedCities: ["北京"] });
    const profile = buildDemandProfile({
      id: "CITY-TEST-1",
      sku: "CITY-TEST",
      product: "北京限定测试商品",
      price: 100,
      captureRate: 1,
      target: { code: "SH-STORE", city: "上海", physical: 0, inbound: 0, dailyDemand: 10 },
      sources: [{ code: "BJ-STORE", city: "北京", stock: 100, safety: 10, available: 90 }]
    });
    return { preHoldReason: profile.preHoldReason, candidateCount: profile.candidates.length };
  })()
`, context);
assert.match(cityRestriction.preHoldReason, /不允许调入 上海/);
assert.equal(cityRestriction.candidateCount, 0);

const sourceOpportunitySelection = vm.runInContext(`
  (() => {
    state.settings.coverageDays = 7;
    state.settings.urgentCoverageDays = 2;
    state.settings.demandBufferDays = 0.5;
    state.settings.sourceProtectionDays = 7;
    state.settings.strategicStore = "none";
    state.rateCard = { fileName: "", routes: new Map(), skippedRows: 0 };
    const record = {
      id: "OPPORTUNITY-TEST",
      sku: "OPPORTUNITY-TEST",
      product: "来源机会成本测试",
      price: 100,
      captureRate: 1,
      target: { code: "TARGET-A", city: "北京", physical: 10, inbound: 0, dailyDemand: 10 },
      sources: [
        { code: "SOURCE-HIGH", city: "北京", stock: 200, safety: 10, available: 190, dailyDemand: 20 },
        { code: "SOURCE-LOW", city: "北京", stock: 200, safety: 10, available: 190, dailyDemand: 2 }
      ]
    };
    const profile = buildDemandProfile(record);
    const result = allocateAcrossNetwork([profile]);
    const allocation = result.allocations.get(record.id)[0];
    return {
      source: allocation.source.code,
      opportunityCost: allocation.sourceOpportunityCost,
      hasArrivalUrgency: profile.hasArrivalUrgency
    };
  })()
`, context);
assert.equal(sourceOpportunitySelection.source, "SOURCE-LOW");
assert.equal(sourceOpportunitySelection.opportunityCost, 0);
assert.equal(sourceOpportunitySelection.hasArrivalUrgency, true);

const stockConstrainedHold = vm.runInContext(`
  (() => {
    const record = {
      id: "STOCK-CONSTRAINT-TEST",
      sku: "STOCK-CONSTRAINT-TEST",
      product: "库存约束测试",
      price: 100,
      captureRate: 1,
      target: { code: "TARGET-STOCK", city: "北京", physical: 60, inbound: 0, dailyDemand: 10 },
      sources: [{ code: "SOURCE-STOCK", city: "北京", stock: 10, safety: 10, available: 0, dailyDemand: 2 }]
    };
    const profile = buildDemandProfile(record);
    const result = allocateAcrossNetwork([profile]);
    return {
      allocated: result.allocations.get(record.id).length,
      economicBlocked: Boolean(profile.economicBlocked)
    };
  })()
`, context);
assert.equal(stockConstrainedHold.allocated, 0);
assert.equal(stockConstrainedHold.economicBlocked, false);

const routeTiming = vm.runInContext(`
  (() => {
    state.calculationAt = new Date(2026, 0, 1, 18, 0, 0);
    state.rateCard.routes.set("TIME-SOURCE::TIME-TARGET", {
      parcelCost: 10,
      etaDays: null,
      etaHours: 2,
      cutoffHour: 17,
      cutoffDelayHours: 12,
      handlingHours: 1,
      receivingHours: 1,
      volatilityHours: 1
    });
    const quote = getRouteQuote(
      { code: "TIME-SOURCE", city: "北京" },
      { code: "TIME-TARGET", city: "北京" }
    );
    return { etaHours: quote.etaHours, cutoffWaitHours: quote.cutoffWaitHours, hasTimeBreakdown: quote.hasTimeBreakdown };
  })()
`, context);
assert.equal(routeTiming.etaHours, 17);
assert.equal(routeTiming.cutoffWaitHours, 12);
assert.equal(routeTiming.hasTimeBreakdown, true);

const snapshotContext = { document: { addEventListener() {} }, window: {} };
vm.createContext(snapshotContext);
vm.runInContext(fs.readFileSync("fr-demo-data.js", "utf8"), snapshotContext);
snapshotContext.FR_DEMO_DATA = snapshotContext.window.FR_DEMO_DATA;
vm.runInContext(fs.readFileSync("app.js", "utf8"), snapshotContext);
const realSnapshot = vm.runInContext(`
  (() => {
    const records = getCalculatedRecords();
    const groups = getOrderGroups(records);
    return {
      seedCount: transferSeed.length,
      pilotStoreCount: snapshotMetadata.pilotStoreCount,
      firstId: transferSeed[0].id,
      actionable: records.filter((record) => record.decision !== "暂不建议" && record.quantity > 0).length,
      groups: groups.length,
      safeSources: records.every((record) => record.sources.every((source) => source.stock >= source.safety)),
      sourceProtectionSatisfied: (() => {
        const allocationsBySource = new Map();
        records.forEach((record) => {
          record.allocations.forEach((allocation) => {
            const key = skuKey(record.sku) + "::" + allocation.source.code;
            const current = allocationsBySource.get(key) || { record, source: allocation.source, quantity: 0 };
            current.quantity += allocation.quantity;
            allocationsBySource.set(key, current);
          });
        });
        return [...allocationsBySource.values()].every(({ record, source, quantity }) => {
          const protection = getSourceProtection(source, record).protectionStock;
          return source.stock - getInTransitOutboundQuantity(record, source.code) - quantity >= protection;
        });
      })(),
      activeRoute: (() => {
        const group = groups[0];
        activateFlowGroup(group.key);
        state.flow.activeGroupKey = "route-removed-after-recalculation";
        state.flow.status = "已收货";
        const displayRoute = getActiveFlowGroup() || state.flow.activeRoute;
        return { source: displayRoute.source.name, target: displayRoute.target.name, status: state.flow.status };
      })()
    };
  })()
`, snapshotContext);
assert.equal(realSnapshot.seedCount, 80);
assert.equal(realSnapshot.pilotStoreCount, 15);
assert.match(realSnapshot.firstId, /^FR-/);
assert.ok(realSnapshot.actionable > 0);
assert.ok(realSnapshot.groups > 0);
assert.equal(realSnapshot.safeSources, true);
assert.equal(realSnapshot.sourceProtectionSatisfied, true);
assert.equal(realSnapshot.activeRoute.status, "已收货");
assert.ok(realSnapshot.activeRoute.source);
assert.ok(realSnapshot.activeRoute.target);

console.log("arrival-risk.test.js passed");
