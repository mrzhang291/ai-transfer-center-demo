"use strict";

window.FR_DEMO_DATA = {
  "metadata": {
    "source": "FR 测试库只读快照（北京门店组）",
    "scopeLabel": "北京门店组",
    "generatedAt": "2026-09-16T02:42:20.800Z",
    "salesWindowStart": "2026-08-04",
    "salesWindowEnd": "2026-08-31",
    "pilotStoreCount": 4,
    "pilotStores": [
      {
        "code": "BJSR02",
        "name": "北京合生汇三丽鸥",
        "city": "北京",
        "region": "north"
      },
      {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "region": "north"
      },
      {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "region": "north"
      },
      {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "region": "north"
      }
    ],
    "trialAssumptions": {
      "coverageDays": 7,
      "demandBufferDays": 0.5,
      "sourceProtectionDays": 7,
      "sourceSafetyFloor": 2,
      "grossMargin": 46,
      "captureRate": 0.85,
      "parcelCapacity": 60,
      "sameCityParcelCost": 10,
      "crossCityParcelCost": 22,
      "sameCityEtaDays": 0.5,
      "crossCityEtaDays": 2
    },
    "dataNotes": [
      "销售口径为近 28 天 t_satypes=0 的正常销售。",
      "库存使用 adb_shops_skus_invs_da.rnb_r；tempinnb 未提供 ETA 或确认状态，不计入确认在途。",
      "线路运价、ETA、门店库容、最低陈列、实际毛利和活动日历不在 FR 当前表中，继续以试点参数或本机上传资料补齐。"
    ]
  },
  "records": [
    {
      "id": "FR-BJSR01-SR34022687003K7",
      "group": "FR-BJSR01",
      "region": "north",
      "product": "摩登假日系列皮草挂件:凯蒂猫",
      "sku": "SR34022687003K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 12.535714285714286
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 46,
          "safety": 39,
          "available": 7
        }
      ]
    },
    {
      "id": "FR-BJSR04-SR340225J6008J7",
      "group": "FR-BJSR04",
      "region": "north",
      "product": "晚安好梦系列挂件:MP",
      "sku": "SR340225J6008J7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.5
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 21,
          "safety": 2,
          "available": 19
        }
      ]
    },
    {
      "id": "FR-BJSR02-SR15132477002M7BC",
      "group": "FR-BJSR02",
      "region": "north",
      "product": "快乐出游系列头型行李箱MM",
      "sku": "SR15132477002M7BC",
      "color": "999-MISC",
      "category": "配",
      "price": 899,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR02",
        "name": "北京合生汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.21428571428571427
      },
      "sources": [
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR04-SR340225J6006K7",
      "group": "FR-BJSR04",
      "region": "north",
      "product": "晚安好梦系列挂件:KT",
      "sku": "SR340225J6006K7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.3928571428571428
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 13,
          "safety": 4,
          "available": 9
        }
      ]
    },
    {
      "id": "FR-BJSR04-SR26072690009U7",
      "group": "FR-BJSR04",
      "region": "north",
      "product": "市场赠品：修学旅行系列金属徽章US",
      "sku": "SR26072690009U7",
      "color": "999-MISC",
      "category": "配",
      "price": 119,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.6785714285714286
      },
      "sources": [
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 16,
          "safety": 8,
          "available": 8
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 16,
          "safety": 8,
          "available": 8
        }
      ]
    },
    {
      "id": "FR-BJSR02-SR26072690009U7",
      "group": "FR-BJSR02",
      "region": "north",
      "product": "市场赠品：修学旅行系列金属徽章US",
      "sku": "SR26072690009U7",
      "color": "999-MISC",
      "category": "配",
      "price": 119,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR02",
        "name": "北京合生汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.5714285714285714
      },
      "sources": [
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 16,
          "safety": 8,
          "available": 8
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 16,
          "safety": 8,
          "available": 8
        }
      ]
    },
    {
      "id": "FR-BJSR02-SR34022535030I7",
      "group": "FR-BJSR02",
      "region": "north",
      "product": "收藏系列装饰物SI",
      "sku": "SR34022535030I7",
      "color": "999-MISC",
      "category": "配",
      "price": 89,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR02",
        "name": "北京合生汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.8928571428571428
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 9,
          "safety": 3,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-BJSR02-SR34022614001K7",
      "group": "FR-BJSR02",
      "region": "north",
      "product": "星愿瓶系列装饰物：KT",
      "sku": "SR34022614001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 129,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR02",
        "name": "北京合生汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.1071428571428572
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 10,
          "safety": 3,
          "available": 7
        }
      ]
    },
    {
      "id": "FR-BJSR04-SR34022644006C7",
      "group": "FR-BJSR04",
      "region": "north",
      "product": "春日露营系列挂件:CN",
      "sku": "SR34022644006C7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.9285714285714286
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 20,
          "safety": 2,
          "available": 18
        }
      ]
    },
    {
      "id": "FR-BJSR02-SR15022455002M7",
      "group": "FR-BJSR02",
      "region": "north",
      "product": "经典复刻大脸包MM",
      "sku": "SR15022455002M7",
      "color": "999-MISC",
      "category": "配",
      "price": 369,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR02",
        "name": "北京合生汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.35714285714285715
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 35,
          "safety": 2,
          "available": 33
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR01-SR152526C3014W7",
      "group": "FR-BJSR01",
      "region": "north",
      "product": "怀旧布丁狗系列盲盒小包：PN",
      "sku": "SR152526C3014W7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.857142857142857
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 20,
          "safety": 5,
          "available": 15
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 27,
          "safety": 13,
          "available": 14
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 27,
          "safety": 16,
          "available": 11
        }
      ]
    },
    {
      "id": "FR-BJSR02-SR340225J6008J7",
      "group": "FR-BJSR02",
      "region": "north",
      "product": "晚安好梦系列挂件:MP",
      "sku": "SR340225J6008J7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR02",
        "name": "北京合生汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.75
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 21,
          "safety": 2,
          "available": 19
        }
      ]
    },
    {
      "id": "FR-BJSR04-SR15022571010K5",
      "group": "FR-BJSR04",
      "region": "north",
      "product": "背包KT",
      "sku": "SR15022571010K5",
      "color": "999-MISC",
      "category": "配",
      "price": 299,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.2857142857142857
      },
      "sources": [
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 7,
          "safety": 4,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-BJSR04-SR15022571011M5",
      "group": "FR-BJSR04",
      "region": "north",
      "product": "背包MM",
      "sku": "SR15022571011M5",
      "color": "999-MISC",
      "category": "配",
      "price": 299,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.32142857142857145
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 10,
          "safety": 2,
          "available": 8
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 6,
          "safety": 5,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR01-SR34022699001K7",
      "group": "FR-BJSR01",
      "region": "north",
      "product": "千禧辣妹系列装饰物：KT",
      "sku": "SR34022699001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 129,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.5714285714285714
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 17,
          "safety": 2,
          "available": 15
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 15,
          "safety": 4,
          "available": 11
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 5,
          "safety": 4,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR01-SR340526C3015W7",
      "group": "FR-BJSR01",
      "region": "north",
      "product": "怀旧布丁狗系列盲盒钥匙扣：PN",
      "sku": "SR340526C3015W7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.7142857142857142
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 8,
          "safety": 6,
          "available": 2
        }
      ]
    },
    {
      "id": "FR-BJSR01-SR15022571012C5",
      "group": "FR-BJSR01",
      "region": "north",
      "product": "背包CN",
      "sku": "SR15022571012C5",
      "color": "999-MISC",
      "category": "配",
      "price": 299,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.21428571428571427
      },
      "sources": [
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 13,
          "safety": 2,
          "available": 11
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR01-SR34022604002K7",
      "group": "FR-BJSR01",
      "region": "north",
      "product": "绗缝第二弹系列装饰物：KT",
      "sku": "SR34022604002K7",
      "color": "999-MISC",
      "category": "配",
      "price": 99,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.7857142857142857
      },
      "sources": [
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 100,
          "safety": 11,
          "available": 89
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 59,
          "safety": 2,
          "available": 57
        }
      ]
    },
    {
      "id": "FR-BJSR03-SR280125J6003J7",
      "group": "FR-BJSR03",
      "region": "north",
      "product": "晚安好梦系列公仔:MP",
      "sku": "SR280125J6003J7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.14285714285714285
      },
      "sources": [
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 23,
          "safety": 3,
          "available": 20
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 16,
          "safety": 5,
          "available": 11
        }
      ]
    },
    {
      "id": "FR-BJSR03-SR044026B9009U7",
      "group": "FR-BJSR03",
      "region": "north",
      "product": "缤纷花小兔系列靠垫：US",
      "sku": "SR044026B9009U7",
      "color": "999-MISC",
      "category": "配",
      "price": 179,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.17857142857142858
      },
      "sources": [
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 6,
          "safety": 2,
          "available": 4
        }
      ]
    },
    {
      "id": "FR-BJSR03-SR08042689007Z7",
      "group": "FR-BJSR03",
      "region": "north",
      "product": "四叶茸茸拍拍灯:YB",
      "sku": "SR08042689007Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.14285714285714285
      },
      "sources": [
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 9,
          "safety": 2,
          "available": 7
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR03-SR280125A7017Z7",
      "group": "FR-BJSR03",
      "region": "north",
      "product": "公仔S HG",
      "sku": "SR280125A7017Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.14285714285714285
      },
      "sources": [
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 5,
          "safety": 2,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-BJSR03-SR19162694011J7",
      "group": "FR-BJSR03",
      "region": "north",
      "product": "必爱诺甜美乐章系列随身镜：MP",
      "sku": "SR19162694011J7",
      "color": "999-MISC",
      "category": "配",
      "price": 79,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.4642857142857143
      },
      "sources": [
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 14,
          "safety": 6,
          "available": 8
        }
      ]
    },
    {
      "id": "FR-BJSR03-SR20492521001K7",
      "group": "FR-BJSR03",
      "region": "north",
      "product": "笔包KT",
      "sku": "SR20492521001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 99,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.2857142857142857
      },
      "sources": [
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 11,
          "safety": 6,
          "available": 5
        }
      ]
    }
  ]
};
