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
assert.equal(realSnapshot.activeRoute.status, "已收货");
assert.ok(realSnapshot.activeRoute.source);
assert.ok(realSnapshot.activeRoute.target);

console.log("arrival-risk.test.js passed");
