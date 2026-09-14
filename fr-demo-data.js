"use strict";

window.FR_DEMO_DATA = {
  "metadata": {
    "source": "FR 测试库只读快照",
    "generatedAt": "2026-09-14T00:34:05.311Z",
    "salesWindowStart": "2026-08-04",
    "salesWindowEnd": "2026-08-31",
    "pilotStoreCount": 15,
    "pilotStores": [
      {
        "code": "NBSR01",
        "name": "宁波天一广场三丽鸥",
        "city": "宁波",
        "region": "east"
      },
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
        "code": "HZSR01",
        "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
        "city": "杭州",
        "region": "east"
      },
      {
        "code": "HZSR03",
        "name": "杭州萧山金城路萧山万象汇三丽鸥",
        "city": "杭州",
        "region": "east"
      },
      {
        "code": "FJSR01",
        "name": "厦门思明湖滨东路万象城三丽鸥",
        "city": "厦门",
        "region": "south"
      },
      {
        "code": "SYSR01",
        "name": "沈阳万象城三丽鸥",
        "city": "沈阳",
        "region": "north"
      },
      {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "region": "north"
      },
      {
        "code": "TJSR01",
        "name": "天津南开大悦城三丽鸥",
        "city": "天津",
        "region": "north"
      },
      {
        "code": "SHSR01",
        "name": "上海金山爱琴海三丽鸥",
        "city": "上海",
        "region": "east"
      },
      {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "region": "north"
      },
      {
        "code": "WZSR01",
        "name": "温州瓯海万象城三丽鸥",
        "city": "温州",
        "region": "east"
      },
      {
        "code": "WHSR02",
        "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
        "city": "长沙",
        "region": "central"
      },
      {
        "code": "WHSR01",
        "name": "武汉X118三丽鸥",
        "city": "武汉",
        "region": "central"
      },
      {
        "code": "WHBR01",
        "name": "武汉X118三丽鸥 B",
        "city": "武汉",
        "region": "central"
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
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 230,
          "safety": 49,
          "available": 181
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 215,
          "safety": 55,
          "available": 160
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 107,
          "safety": 15,
          "available": 92
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 45,
          "safety": 30,
          "available": 15
        }
      ]
    },
    {
      "id": "FR-TJSR01-SR34022687003K7",
      "group": "FR-TJSR01",
      "region": "north",
      "product": "摩登假日系列皮草挂件:凯蒂猫",
      "sku": "SR34022687003K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "TJSR01",
        "name": "天津南开大悦城三丽鸥",
        "city": "天津",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 9.5
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 230,
          "safety": 49,
          "available": 181
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 215,
          "safety": 55,
          "available": 160
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 107,
          "safety": 15,
          "available": 92
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 45,
          "safety": 30,
          "available": 15
        },
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
      "id": "FR-SYSR01-SR34022687005K7",
      "group": "FR-SYSR01",
      "region": "north",
      "product": "摩登假日系列风衣挂件:凯蒂猫",
      "sku": "SR34022687005K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "SYSR01",
        "name": "沈阳万象城三丽鸥",
        "city": "沈阳",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 7.285714285714286
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 111,
          "safety": 10,
          "available": 101
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 112,
          "safety": 23,
          "available": 89
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 95,
          "safety": 8,
          "available": 87
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 90,
          "safety": 13,
          "available": 77
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 98,
          "safety": 41,
          "available": 57
        }
      ]
    },
    {
      "id": "FR-HZSR03-SR34022644001K7",
      "group": "FR-HZSR03",
      "region": "east",
      "product": "春日露营系列长腿挂件:KT",
      "sku": "SR34022644001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR03",
        "name": "杭州萧山金城路萧山万象汇三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 5.25
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 203,
          "safety": 20,
          "available": 183
        }
      ]
    },
    {
      "id": "FR-HZSR03-SR34022687003K7",
      "group": "FR-HZSR03",
      "region": "east",
      "product": "摩登假日系列皮草挂件:凯蒂猫",
      "sku": "SR34022687003K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR03",
        "name": "杭州萧山金城路萧山万象汇三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 5.321428571428571
      },
      "sources": [
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 215,
          "safety": 55,
          "available": 160
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 230,
          "safety": 49,
          "available": 181
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 107,
          "safety": 15,
          "available": 92
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 45,
          "safety": 30,
          "available": 15
        },
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
      "id": "FR-WHBR01-SR34022687003K7",
      "group": "FR-WHBR01",
      "region": "central",
      "product": "摩登假日系列皮草挂件:凯蒂猫",
      "sku": "SR34022687003K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "WHBR01",
        "name": "武汉X118三丽鸥 B",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 4.678571428571429
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 230,
          "safety": 49,
          "available": 181
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 215,
          "safety": 55,
          "available": 160
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 107,
          "safety": 15,
          "available": 92
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 45,
          "safety": 30,
          "available": 15
        },
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
      "id": "FR-HZSR01-SR280125J6002M7",
      "group": "FR-HZSR01",
      "region": "east",
      "product": "晚安好梦系列公仔:MM",
      "sku": "SR280125J6002M7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR01",
        "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.5
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 65,
          "safety": 11,
          "available": 54
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 24,
          "safety": 2,
          "available": 22
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 32,
          "safety": 11,
          "available": 21
        },
        {
          "code": "TJSR01",
          "name": "天津南开大悦城三丽鸥",
          "city": "天津",
          "stock": 20,
          "safety": 6,
          "available": 14
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 18,
          "safety": 4,
          "available": 14
        }
      ]
    },
    {
      "id": "FR-FJSR01-SR280125J6001K7",
      "group": "FR-FJSR01",
      "region": "south",
      "product": "晚安好梦系列公仔:KT",
      "sku": "SR280125J6001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "FJSR01",
        "name": "厦门思明湖滨东路万象城三丽鸥",
        "city": "厦门",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.25
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 58,
          "safety": 12,
          "available": 46
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 21,
          "safety": 8,
          "available": 13
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 10,
          "safety": 6,
          "available": 4
        }
      ]
    },
    {
      "id": "FR-SYSR01-SR280125J6001K7",
      "group": "FR-SYSR01",
      "region": "north",
      "product": "晚安好梦系列公仔:KT",
      "sku": "SR280125J6001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "SYSR01",
        "name": "沈阳万象城三丽鸥",
        "city": "沈阳",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.9642857142857142
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 58,
          "safety": 12,
          "available": 46
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 21,
          "safety": 8,
          "available": 13
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 10,
          "safety": 6,
          "available": 4
        }
      ]
    },
    {
      "id": "FR-NBSR01-SR34022671008M7",
      "group": "FR-NBSR01",
      "region": "east",
      "product": "芭蕾舞系列挂件:美乐蒂",
      "sku": "SR34022671008M7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "NBSR01",
        "name": "宁波天一广场三丽鸥",
        "city": "宁波",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.892857142857143
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 77,
          "safety": 18,
          "available": 59
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 30,
          "safety": 5,
          "available": 25
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 23,
          "safety": 5,
          "available": 18
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 30,
          "safety": 16,
          "available": 14
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 4,
          "safety": 2,
          "available": 2
        }
      ]
    },
    {
      "id": "FR-WZSR01-SR280125J6001K7",
      "group": "FR-WZSR01",
      "region": "east",
      "product": "晚安好梦系列公仔:KT",
      "sku": "SR280125J6001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "WZSR01",
        "name": "温州瓯海万象城三丽鸥",
        "city": "温州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.6428571428571428
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 58,
          "safety": 12,
          "available": 46
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 21,
          "safety": 8,
          "available": 13
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 10,
          "safety": 6,
          "available": 4
        }
      ]
    },
    {
      "id": "FR-HZSR03-SR34022687004K7",
      "group": "FR-HZSR03",
      "region": "east",
      "product": "摩登假日系列斗篷挂件:凯蒂猫",
      "sku": "SR34022687004K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR03",
        "name": "杭州萧山金城路萧山万象汇三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.107142857142857
      },
      "sources": [
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 193,
          "safety": 23,
          "available": 170
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 204,
          "safety": 19,
          "available": 185
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 149,
          "safety": 28,
          "available": 121
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 109,
          "safety": 3,
          "available": 106
        },
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 108,
          "safety": 24,
          "available": 84
        }
      ]
    },
    {
      "id": "FR-WHBR01-SR280125J6001K7",
      "group": "FR-WHBR01",
      "region": "central",
      "product": "晚安好梦系列公仔:KT",
      "sku": "SR280125J6001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "WHBR01",
        "name": "武汉X118三丽鸥 B",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.2142857142857142
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 58,
          "safety": 12,
          "available": 46
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 21,
          "safety": 8,
          "available": 13
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 10,
          "safety": 6,
          "available": 4
        }
      ]
    },
    {
      "id": "FR-BJSR02-SR20582698025Z7",
      "group": "FR-BJSR02",
      "region": "north",
      "product": "迷你商店系列盲盒冰箱贴：MX",
      "sku": "SR20582698025Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR02",
        "name": "北京合生汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 6.964285714285714
      },
      "sources": [
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 20,
          "safety": 13,
          "available": 7
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 28,
          "safety": 22,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-HZSR01-SR34022671007K7",
      "group": "FR-HZSR01",
      "region": "east",
      "product": "芭蕾舞系列挂件黑款:凯蒂猫",
      "sku": "SR34022671007K7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR01",
        "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.0357142857142856
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 63,
          "safety": 10,
          "available": 53
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 25,
          "safety": 2,
          "available": 23
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 22,
          "safety": 3,
          "available": 19
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 24,
          "safety": 9,
          "available": 15
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 7,
          "safety": 4,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-FJSR01-SR280125J6003J7",
      "group": "FR-FJSR01",
      "region": "south",
      "product": "晚安好梦系列公仔:MP",
      "sku": "SR280125J6003J7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "FJSR01",
        "name": "厦门思明湖滨东路万象城三丽鸥",
        "city": "厦门",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.0357142857142858
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 29,
          "safety": 6,
          "available": 23
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 23,
          "safety": 3,
          "available": 20
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 28,
          "safety": 8,
          "available": 20
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 20,
          "safety": 2,
          "available": 18
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
      "id": "FR-NBSR01-SR340225J6010N7",
      "group": "FR-NBSR01",
      "region": "east",
      "product": "晚安好梦系列挂件:MN",
      "sku": "SR340225J6010N7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "NBSR01",
        "name": "宁波天一广场三丽鸥",
        "city": "宁波",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.6071428571428572
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 12,
          "safety": 7,
          "available": 5
        }
      ]
    },
    {
      "id": "FR-SYSR01-SR340426B8015Z7",
      "group": "FR-SYSR01",
      "region": "north",
      "product": "心意礼愿系列盲盒手机挂链：MX",
      "sku": "SR340426B8015Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "SYSR01",
        "name": "沈阳万象城三丽鸥",
        "city": "沈阳",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 5.357142857142857
      },
      "sources": [
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 109,
          "safety": 11,
          "available": 98
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 84,
          "safety": 10,
          "available": 74
        }
      ]
    },
    {
      "id": "FR-FJSR01-SR34022535001K7",
      "group": "FR-FJSR01",
      "region": "south",
      "product": "收藏系列装饰物KT",
      "sku": "SR34022535001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 89,
      "captureRate": 0.85,
      "target": {
        "code": "FJSR01",
        "name": "厦门思明湖滨东路万象城三丽鸥",
        "city": "厦门",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.9285714285714284
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 47,
          "safety": 14,
          "available": 33
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 36,
          "safety": 8,
          "available": 28
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 29,
          "safety": 5,
          "available": 24
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 49,
          "safety": 34,
          "available": 15
        },
        {
          "code": "TJSR01",
          "name": "天津南开大悦城三丽鸥",
          "city": "天津",
          "stock": 28,
          "safety": 15,
          "available": 13
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
      "id": "FR-SYSR01-SR280125J6003J7",
      "group": "FR-SYSR01",
      "region": "north",
      "product": "晚安好梦系列公仔:MP",
      "sku": "SR280125J6003J7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "SYSR01",
        "name": "沈阳万象城三丽鸥",
        "city": "沈阳",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.8571428571428571
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 29,
          "safety": 6,
          "available": 23
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 23,
          "safety": 3,
          "available": 20
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 28,
          "safety": 8,
          "available": 20
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 20,
          "safety": 2,
          "available": 18
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
      "id": "FR-NBSR01-SR34022699002K7",
      "group": "FR-NBSR01",
      "region": "east",
      "product": "千禧辣妹系列装饰物：KT",
      "sku": "SR34022699002K7",
      "color": "999-MISC",
      "category": "配",
      "price": 129,
      "captureRate": 0.85,
      "target": {
        "code": "NBSR01",
        "name": "宁波天一广场三丽鸥",
        "city": "宁波",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.7857142857142858
      },
      "sources": [
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 23,
          "safety": 4,
          "available": 19
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 22,
          "safety": 5,
          "available": 17
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 20,
          "safety": 9,
          "available": 11
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 11,
          "safety": 5,
          "available": 6
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 7,
          "safety": 6,
          "available": 1
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
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 6,
          "safety": 2,
          "available": 4
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 5,
          "safety": 2,
          "available": 3
        },
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-FJSR01-SR15132477002M7BC",
      "group": "FR-FJSR01",
      "region": "south",
      "product": "快乐出游系列头型行李箱MM",
      "sku": "SR15132477002M7BC",
      "color": "999-MISC",
      "category": "配",
      "price": 899,
      "captureRate": 0.85,
      "target": {
        "code": "FJSR01",
        "name": "厦门思明湖滨东路万象城三丽鸥",
        "city": "厦门",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.14285714285714285
      },
      "sources": [
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 6,
          "safety": 2,
          "available": 4
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 5,
          "safety": 2,
          "available": 3
        },
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 3,
          "safety": 2,
          "available": 1
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
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
      "id": "FR-NBSR01-SR340225J6009F7",
      "group": "FR-NBSR01",
      "region": "east",
      "product": "晚安好梦系列挂件:KU",
      "sku": "SR340225J6009F7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "NBSR01",
        "name": "宁波天一广场三丽鸥",
        "city": "宁波",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.4285714285714286
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 19,
          "safety": 2,
          "available": 17
        }
      ]
    },
    {
      "id": "FR-BJSR04-SR28012406020M7",
      "group": "FR-BJSR04",
      "region": "north",
      "product": "公仔3LMM",
      "sku": "SR28012406020M7",
      "color": "999-MISC",
      "category": "配",
      "price": 1699,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.07142857142857142
      },
      "sources": [
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 5,
          "safety": 2,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-HZSR03-SR28012406018K7",
      "group": "FR-HZSR03",
      "region": "east",
      "product": "公仔3LKT",
      "sku": "SR28012406018K7",
      "color": "999-MISC",
      "category": "配",
      "price": 1699,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR03",
        "name": "杭州萧山金城路萧山万象汇三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.07142857142857142
      },
      "sources": [
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 6,
          "safety": 2,
          "available": 4
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
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
      "id": "FR-WZSR01-SR28012406020M7",
      "group": "FR-WZSR01",
      "region": "east",
      "product": "公仔3LMM",
      "sku": "SR28012406020M7",
      "color": "999-MISC",
      "category": "配",
      "price": 1699,
      "captureRate": 0.85,
      "target": {
        "code": "WZSR01",
        "name": "温州瓯海万象城三丽鸥",
        "city": "温州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.03571428571428571
      },
      "sources": [
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 5,
          "safety": 2,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-WHBR01-SR34022687004K7",
      "group": "FR-WHBR01",
      "region": "central",
      "product": "摩登假日系列斗篷挂件:凯蒂猫",
      "sku": "SR34022687004K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "WHBR01",
        "name": "武汉X118三丽鸥 B",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.3214285714285714
      },
      "sources": [
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 85,
          "safety": 7,
          "available": 78
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 204,
          "safety": 19,
          "available": 185
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 193,
          "safety": 23,
          "available": 170
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 149,
          "safety": 28,
          "available": 121
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 109,
          "safety": 3,
          "available": 106
        }
      ]
    },
    {
      "id": "FR-HZSR03-SR26072690009U7",
      "group": "FR-HZSR03",
      "region": "east",
      "product": "市场赠品：修学旅行系列金属徽章US",
      "sku": "SR26072690009U7",
      "color": "999-MISC",
      "category": "配",
      "price": 119,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR03",
        "name": "杭州萧山金城路萧山万象汇三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.75
      },
      "sources": [
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 11,
          "safety": 9,
          "available": 2
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 20,
          "safety": 3,
          "available": 17
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 14,
          "safety": 4,
          "available": 10
        },
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
      "id": "FR-NBSR01-SR26072690009U7",
      "group": "FR-NBSR01",
      "region": "east",
      "product": "市场赠品：修学旅行系列金属徽章US",
      "sku": "SR26072690009U7",
      "color": "999-MISC",
      "category": "配",
      "price": 119,
      "captureRate": 0.85,
      "target": {
        "code": "NBSR01",
        "name": "宁波天一广场三丽鸥",
        "city": "宁波",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.8214285714285714
      },
      "sources": [
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 20,
          "safety": 3,
          "available": 17
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 14,
          "safety": 4,
          "available": 10
        },
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
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 11,
          "safety": 5,
          "available": 6
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
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 20,
          "safety": 3,
          "available": 17
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 14,
          "safety": 4,
          "available": 10
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 11,
          "safety": 5,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-WHBR01-SR34022686005M7",
      "group": "FR-WHBR01",
      "region": "central",
      "product": "职业梦想家系列挂件:美乐蒂",
      "sku": "SR34022686005M7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "WHBR01",
        "name": "武汉X118三丽鸥 B",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.1785714285714286
      },
      "sources": [
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 64,
          "safety": 20,
          "available": 44
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 205,
          "safety": 45,
          "available": 160
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 160,
          "safety": 56,
          "available": 104
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 110,
          "safety": 33,
          "available": 77
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 95,
          "safety": 20,
          "available": 75
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
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 20,
          "safety": 3,
          "available": 17
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 14,
          "safety": 4,
          "available": 10
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 11,
          "safety": 5,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-NBSR01-SR34022535008Z7",
      "group": "FR-NBSR01",
      "region": "east",
      "product": "收藏系列装饰物HG",
      "sku": "SR34022535008Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 89,
      "captureRate": 0.85,
      "target": {
        "code": "NBSR01",
        "name": "宁波天一广场三丽鸥",
        "city": "宁波",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.0714285714285716
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 26,
          "safety": 6,
          "available": 20
        },
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 14,
          "safety": 3,
          "available": 11
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 26,
          "safety": 15,
          "available": 11
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 12,
          "safety": 2,
          "available": 10
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 19,
          "safety": 11,
          "available": 8
        }
      ]
    },
    {
      "id": "FR-HZSR03-SR15022694004J7",
      "group": "FR-HZSR03",
      "region": "east",
      "product": "必爱诺甜美乐章系列背包：MP",
      "sku": "SR15022694004J7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR03",
        "name": "杭州萧山金城路萧山万象汇三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.5357142857142857
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 5,
          "safety": 4,
          "available": 1
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
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 44,
          "safety": 13,
          "available": 31
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 6,
          "safety": 3,
          "available": 3
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 9,
          "safety": 7,
          "available": 2
        }
      ]
    },
    {
      "id": "FR-HZSR01-SR34022699002K7",
      "group": "FR-HZSR01",
      "region": "east",
      "product": "千禧辣妹系列装饰物：KT",
      "sku": "SR34022699002K7",
      "color": "999-MISC",
      "category": "配",
      "price": 129,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR01",
        "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.2857142857142858
      },
      "sources": [
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 23,
          "safety": 4,
          "available": 19
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 22,
          "safety": 5,
          "available": 17
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 20,
          "safety": 9,
          "available": 11
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 11,
          "safety": 5,
          "available": 6
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 7,
          "safety": 6,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-WHBR01-SR34022687005K7",
      "group": "FR-WHBR01",
      "region": "central",
      "product": "摩登假日系列风衣挂件:凯蒂猫",
      "sku": "SR34022687005K7",
      "color": "999-MISC",
      "category": "配",
      "price": 169,
      "captureRate": 0.85,
      "target": {
        "code": "WHBR01",
        "name": "武汉X118三丽鸥 B",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.8214285714285714
      },
      "sources": [
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 95,
          "safety": 8,
          "available": 87
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 111,
          "safety": 10,
          "available": 101
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 112,
          "safety": 23,
          "available": 89
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 90,
          "safety": 13,
          "available": 77
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 98,
          "safety": 41,
          "available": 57
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
      "id": "FR-SYSR01-SR34022535001K7",
      "group": "FR-SYSR01",
      "region": "north",
      "product": "收藏系列装饰物KT",
      "sku": "SR34022535001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 89,
      "captureRate": 0.85,
      "target": {
        "code": "SYSR01",
        "name": "沈阳万象城三丽鸥",
        "city": "沈阳",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.7142857142857142
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 47,
          "safety": 14,
          "available": 33
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 36,
          "safety": 8,
          "available": 28
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 29,
          "safety": 5,
          "available": 24
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 49,
          "safety": 34,
          "available": 15
        },
        {
          "code": "TJSR01",
          "name": "天津南开大悦城三丽鸥",
          "city": "天津",
          "stock": 28,
          "safety": 15,
          "available": 13
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
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 16,
          "safety": 9,
          "available": 7
        }
      ]
    },
    {
      "id": "FR-TJSR01-SR34022686008C7",
      "group": "FR-TJSR01",
      "region": "north",
      "product": "职业梦想家系列挂件:CN",
      "sku": "SR34022686008C7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "TJSR01",
        "name": "天津南开大悦城三丽鸥",
        "city": "天津",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.9285714285714286
      },
      "sources": [
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 22,
          "safety": 7,
          "available": 15
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 17,
          "safety": 3,
          "available": 14
        },
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 13,
          "safety": 4,
          "available": 9
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 20,
          "safety": 12,
          "available": 8
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 11,
          "safety": 4,
          "available": 7
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
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 46,
          "safety": 2,
          "available": 44
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 21,
          "safety": 4,
          "available": 17
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 14,
          "safety": 2,
          "available": 12
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
        },
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 54,
          "safety": 7,
          "available": 47
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 49,
          "safety": 10,
          "available": 39
        }
      ]
    },
    {
      "id": "FR-TJSR01-SR20582698025Z7",
      "group": "FR-TJSR01",
      "region": "north",
      "product": "迷你商店系列盲盒冰箱贴：MX",
      "sku": "SR20582698025Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "TJSR01",
        "name": "天津南开大悦城三丽鸥",
        "city": "天津",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.892857142857143
      },
      "sources": [
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 20,
          "safety": 13,
          "available": 7
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 28,
          "safety": 22,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-WHBR01-SR280125J6002M7",
      "group": "FR-WHBR01",
      "region": "central",
      "product": "晚安好梦系列公仔:MM",
      "sku": "SR280125J6002M7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "WHBR01",
        "name": "武汉X118三丽鸥 B",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.4642857142857143
      },
      "sources": [
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 18,
          "safety": 4,
          "available": 14
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 65,
          "safety": 11,
          "available": 54
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 24,
          "safety": 2,
          "available": 22
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 32,
          "safety": 11,
          "available": 21
        },
        {
          "code": "TJSR01",
          "name": "天津南开大悦城三丽鸥",
          "city": "天津",
          "stock": 20,
          "safety": 6,
          "available": 14
        }
      ]
    },
    {
      "id": "FR-SHSR01-SR280125B6001K7",
      "group": "FR-SHSR01",
      "region": "east",
      "product": "竞速赛车系列公仔KT",
      "sku": "SR280125B6001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 499,
      "captureRate": 0.85,
      "target": {
        "code": "SHSR01",
        "name": "上海金山爱琴海三丽鸥",
        "city": "上海",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.21428571428571427
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 15,
          "safety": 2,
          "available": 13
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 14,
          "safety": 3,
          "available": 11
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 12,
          "safety": 2,
          "available": 10
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 12,
          "safety": 2,
          "available": 10
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 13,
          "safety": 8,
          "available": 5
        }
      ]
    },
    {
      "id": "FR-WZSR01-SR20582698025Z7",
      "group": "FR-WZSR01",
      "region": "east",
      "product": "迷你商店系列盲盒冰箱贴：MX",
      "sku": "SR20582698025Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "WZSR01",
        "name": "温州瓯海万象城三丽鸥",
        "city": "温州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.5714285714285716
      },
      "sources": [
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 20,
          "safety": 13,
          "available": 7
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 28,
          "safety": 22,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-BJSR04-SR34022696003M7",
      "group": "FR-BJSR04",
      "region": "north",
      "product": "闪闪海豚系列装饰物：MM",
      "sku": "SR34022696003M7",
      "color": "999-MISC",
      "category": "配",
      "price": 139,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR04",
        "name": "北京东城东华门街apm三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.8928571428571429
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 16,
          "safety": 2,
          "available": 14
        }
      ]
    },
    {
      "id": "FR-HZSR01-SR34022674010U7",
      "group": "FR-HZSR01",
      "region": "east",
      "product": "绮梦冰激凌系列装饰物：US",
      "sku": "SR34022674010U7",
      "color": "999-MISC",
      "category": "配",
      "price": 139,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR01",
        "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.8928571428571429
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 21,
          "safety": 2,
          "available": 19
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 15,
          "safety": 2,
          "available": 13
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 12,
          "safety": 3,
          "available": 9
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 7,
          "safety": 2,
          "available": 5
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 5,
          "safety": 2,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-HZSR01-SR34022696003M7",
      "group": "FR-HZSR01",
      "region": "east",
      "product": "闪闪海豚系列装饰物：MM",
      "sku": "SR34022696003M7",
      "color": "999-MISC",
      "category": "配",
      "price": 139,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR01",
        "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.9285714285714286
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 16,
          "safety": 2,
          "available": 14
        }
      ]
    },
    {
      "id": "FR-WHSR02-SR34022686008C7",
      "group": "FR-WHSR02",
      "region": "central",
      "product": "职业梦想家系列挂件:CN",
      "sku": "SR34022686008C7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "WHSR02",
        "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
        "city": "长沙",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.75
      },
      "sources": [
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 22,
          "safety": 7,
          "available": 15
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 17,
          "safety": 3,
          "available": 14
        },
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 13,
          "safety": 4,
          "available": 9
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 20,
          "safety": 12,
          "available": 8
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 11,
          "safety": 4,
          "available": 7
        }
      ]
    },
    {
      "id": "FR-SYSR01-SR15022571010K5",
      "group": "FR-SYSR01",
      "region": "north",
      "product": "背包KT",
      "sku": "SR15022571010K5",
      "color": "999-MISC",
      "category": "配",
      "price": 299,
      "captureRate": 0.85,
      "target": {
        "code": "SYSR01",
        "name": "沈阳万象城三丽鸥",
        "city": "沈阳",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.2857142857142857
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 7,
          "safety": 3,
          "available": 4
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 7,
          "safety": 4,
          "available": 3
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 6,
          "safety": 3,
          "available": 3
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-FJSR01-SR28012660006Z7",
      "group": "FR-FJSR01",
      "region": "south",
      "product": "咪咪沐沐系列公仔:IM",
      "sku": "SR28012660006Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 149,
      "captureRate": 0.85,
      "target": {
        "code": "FJSR01",
        "name": "厦门思明湖滨东路万象城三丽鸥",
        "city": "厦门",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.6785714285714286
      },
      "sources": [
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 16,
          "safety": 2,
          "available": 14
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 13,
          "safety": 2,
          "available": 11
        },
        {
          "code": "TJSR01",
          "name": "天津南开大悦城三丽鸥",
          "city": "天津",
          "stock": 9,
          "safety": 2,
          "available": 7
        },
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 8,
          "safety": 2,
          "available": 6
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 8,
          "safety": 2,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-FJSR01-SR28012660007Z7",
      "group": "FR-FJSR01",
      "region": "south",
      "product": "咪咪沐沐系列公仔:IM",
      "sku": "SR28012660007Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 149,
      "captureRate": 0.85,
      "target": {
        "code": "FJSR01",
        "name": "厦门思明湖滨东路万象城三丽鸥",
        "city": "厦门",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.75
      },
      "sources": [
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 14,
          "safety": 2,
          "available": 12
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 8,
          "safety": 2,
          "available": 6
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 4,
          "safety": 2,
          "available": 2
        }
      ]
    },
    {
      "id": "FR-HZSR01-SR34022603002M7",
      "group": "FR-HZSR01",
      "region": "east",
      "product": "心跳星球系列装饰物：MM",
      "sku": "SR34022603002M7",
      "color": "999-MISC",
      "category": "配",
      "price": 149,
      "captureRate": 0.85,
      "target": {
        "code": "HZSR01",
        "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
        "city": "杭州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.7142857142857143
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 103,
          "safety": 2,
          "available": 101
        },
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 120,
          "safety": 2,
          "available": 118
        },
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 83,
          "safety": 2,
          "available": 81
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 80,
          "safety": 2,
          "available": 78
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 76,
          "safety": 2,
          "available": 74
        }
      ]
    },
    {
      "id": "FR-TJSR01-SR34022616017M7",
      "group": "FR-TJSR01",
      "region": "north",
      "product": "奶油猫咪系列装饰物：MM",
      "sku": "SR34022616017M7",
      "color": "999-MISC",
      "category": "配",
      "price": 149,
      "captureRate": 0.85,
      "target": {
        "code": "TJSR01",
        "name": "天津南开大悦城三丽鸥",
        "city": "天津",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.7857142857142857
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 62,
          "safety": 3,
          "available": 59
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 3,
          "safety": 2,
          "available": 1
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 6,
          "safety": 5,
          "available": 1
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-TJSR01-SR34022604002K7",
      "group": "FR-TJSR01",
      "region": "north",
      "product": "绗缝第二弹系列装饰物：KT",
      "sku": "SR34022604002K7",
      "color": "999-MISC",
      "category": "配",
      "price": 99,
      "captureRate": 0.85,
      "target": {
        "code": "TJSR01",
        "name": "天津南开大悦城三丽鸥",
        "city": "天津",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.0714285714285714
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 194,
          "safety": 6,
          "available": 188
        },
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
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 54,
          "safety": 2,
          "available": 52
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 5,
          "safety": 2,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-WHSR01-SR340426B8015Z7",
      "group": "FR-WHSR01",
      "region": "central",
      "product": "心意礼愿系列盲盒手机挂链：MX",
      "sku": "SR340426B8015Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "WHSR01",
        "name": "武汉X118三丽鸥",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 2.142857142857143
      },
      "sources": [
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 109,
          "safety": 11,
          "available": 98
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 84,
          "safety": 10,
          "available": 74
        }
      ]
    },
    {
      "id": "FR-WHSR01-SR280125J6001K7",
      "group": "FR-WHSR01",
      "region": "central",
      "product": "晚安好梦系列公仔:KT",
      "sku": "SR280125J6001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 269,
      "captureRate": 0.85,
      "target": {
        "code": "WHSR01",
        "name": "武汉X118三丽鸥",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.39285714285714285
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 58,
          "safety": 12,
          "available": 46
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 21,
          "safety": 8,
          "available": 13
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 10,
          "safety": 6,
          "available": 4
        }
      ]
    },
    {
      "id": "FR-WHSR02-SR28012406023F7",
      "group": "FR-WHSR02",
      "region": "central",
      "product": "公仔2LKU",
      "sku": "SR28012406023F7",
      "color": "999-MISC",
      "category": "配",
      "price": 799,
      "captureRate": 0.85,
      "target": {
        "code": "WHSR02",
        "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
        "city": "长沙",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.03571428571428571
      },
      "sources": [
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 3,
          "safety": 2,
          "available": 1
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 3,
          "safety": 2,
          "available": 1
        },
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR03-SR34022671007K7",
      "group": "FR-BJSR03",
      "region": "north",
      "product": "芭蕾舞系列挂件黑款:凯蒂猫",
      "sku": "SR34022671007K7",
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
        "dailyDemand": 0.6428571428571429
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 63,
          "safety": 10,
          "available": 53
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 25,
          "safety": 2,
          "available": 23
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 22,
          "safety": 3,
          "available": 19
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 24,
          "safety": 9,
          "available": 15
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 7,
          "safety": 4,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-WHSR01-SR34022686008C7",
      "group": "FR-WHSR01",
      "region": "central",
      "product": "职业梦想家系列挂件:CN",
      "sku": "SR34022686008C7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "WHSR01",
        "name": "武汉X118三丽鸥",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.6071428571428571
      },
      "sources": [
        {
          "code": "BJSR04",
          "name": "北京东城东华门街apm三丽鸥",
          "city": "北京",
          "stock": 22,
          "safety": 7,
          "available": 15
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 17,
          "safety": 3,
          "available": 14
        },
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 13,
          "safety": 4,
          "available": 9
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 20,
          "safety": 12,
          "available": 8
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 11,
          "safety": 4,
          "available": 7
        }
      ]
    },
    {
      "id": "FR-TJSR01-SR34022699002K7",
      "group": "FR-TJSR01",
      "region": "north",
      "product": "千禧辣妹系列装饰物：KT",
      "sku": "SR34022699002K7",
      "color": "999-MISC",
      "category": "配",
      "price": 129,
      "captureRate": 0.85,
      "target": {
        "code": "TJSR01",
        "name": "天津南开大悦城三丽鸥",
        "city": "天津",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.75
      },
      "sources": [
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 23,
          "safety": 4,
          "available": 19
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 22,
          "safety": 5,
          "available": 17
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 20,
          "safety": 9,
          "available": 11
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 11,
          "safety": 5,
          "available": 6
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 7,
          "safety": 6,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-WHSR01-SR34022699002K7",
      "group": "FR-WHSR01",
      "region": "central",
      "product": "千禧辣妹系列装饰物：KT",
      "sku": "SR34022699002K7",
      "color": "999-MISC",
      "category": "配",
      "price": 129,
      "captureRate": 0.85,
      "target": {
        "code": "WHSR01",
        "name": "武汉X118三丽鸥",
        "city": "武汉",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.75
      },
      "sources": [
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 23,
          "safety": 4,
          "available": 19
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 22,
          "safety": 5,
          "available": 17
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 20,
          "safety": 9,
          "available": 11
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 11,
          "safety": 5,
          "available": 6
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 7,
          "safety": 6,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-WHSR02-SR26072690009U7",
      "group": "FR-WHSR02",
      "region": "central",
      "product": "市场赠品：修学旅行系列金属徽章US",
      "sku": "SR26072690009U7",
      "color": "999-MISC",
      "category": "配",
      "price": 119,
      "captureRate": 0.85,
      "target": {
        "code": "WHSR02",
        "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
        "city": "长沙",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.7857142857142857
      },
      "sources": [
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 20,
          "safety": 3,
          "available": 17
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 14,
          "safety": 4,
          "available": 10
        },
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
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 11,
          "safety": 5,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-SHSR01-SR340526C1010K7",
      "group": "FR-SHSR01",
      "region": "east",
      "product": "晒一夏系列钥匙扣：KT",
      "sku": "SR340526C1010K7",
      "color": "999-MISC",
      "category": "配",
      "price": 69,
      "captureRate": 0.85,
      "target": {
        "code": "SHSR01",
        "name": "上海金山爱琴海三丽鸥",
        "city": "上海",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.2142857142857142
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 48,
          "safety": 8,
          "available": 40
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 46,
          "safety": 9,
          "available": 37
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 28,
          "safety": 3,
          "available": 25
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 39,
          "safety": 16,
          "available": 23
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 18,
          "safety": 6,
          "available": 12
        }
      ]
    },
    {
      "id": "FR-SHSR01-SR20582698025Z7",
      "group": "FR-SHSR01",
      "region": "east",
      "product": "迷你商店系列盲盒冰箱贴：MX",
      "sku": "SR20582698025Z7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "SHSR01",
        "name": "上海金山爱琴海三丽鸥",
        "city": "上海",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.75
      },
      "sources": [
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 20,
          "safety": 13,
          "available": 7
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 28,
          "safety": 22,
          "available": 6
        }
      ]
    },
    {
      "id": "FR-BJSR01-SR152526C1009K7",
      "group": "FR-BJSR01",
      "region": "north",
      "product": "晒一夏系列小包：KT",
      "sku": "SR152526C1009K7",
      "color": "999-MISC",
      "category": "配",
      "price": 109,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.7142857142857143
      },
      "sources": [
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 4,
          "safety": 3,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR03-SR152526C1009K7",
      "group": "FR-BJSR03",
      "region": "north",
      "product": "晒一夏系列小包：KT",
      "sku": "SR152526C1009K7",
      "color": "999-MISC",
      "category": "配",
      "price": 109,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR03",
        "name": "北京海淀清河中路万象汇三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.7857142857142857
      },
      "sources": [
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 4,
          "safety": 3,
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
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 31,
          "safety": 2,
          "available": 29
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 25,
          "safety": 2,
          "available": 23
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
        },
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 12,
          "safety": 11,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-BJSR01-SR34022671007K7",
      "group": "FR-BJSR01",
      "region": "north",
      "product": "芭蕾舞系列挂件黑款:凯蒂猫",
      "sku": "SR34022671007K7",
      "color": "999-MISC",
      "category": "配",
      "price": 159,
      "captureRate": 0.85,
      "target": {
        "code": "BJSR01",
        "name": "北京荟聚三丽鸥",
        "city": "北京",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.5
      },
      "sources": [
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 63,
          "safety": 10,
          "available": 53
        },
        {
          "code": "WHSR01",
          "name": "武汉X118三丽鸥",
          "city": "武汉",
          "stock": 25,
          "safety": 2,
          "available": 23
        },
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 22,
          "safety": 3,
          "available": 19
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 24,
          "safety": 9,
          "available": 15
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 7,
          "safety": 4,
          "available": 3
        }
      ]
    },
    {
      "id": "FR-SHSR01-SR15022571010K5",
      "group": "FR-SHSR01",
      "region": "east",
      "product": "背包KT",
      "sku": "SR15022571010K5",
      "color": "999-MISC",
      "category": "配",
      "price": 299,
      "captureRate": 0.85,
      "target": {
        "code": "SHSR01",
        "name": "上海金山爱琴海三丽鸥",
        "city": "上海",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.17857142857142858
      },
      "sources": [
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 7,
          "safety": 3,
          "available": 4
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 7,
          "safety": 4,
          "available": 3
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 6,
          "safety": 3,
          "available": 3
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
        {
          "code": "WZSR01",
          "name": "温州瓯海万象城三丽鸥",
          "city": "温州",
          "stock": 3,
          "safety": 2,
          "available": 1
        }
      ]
    },
    {
      "id": "FR-SHSR01-SR15022571013F5",
      "group": "FR-SHSR01",
      "region": "east",
      "product": "背包KU",
      "sku": "SR15022571013F5",
      "color": "999-MISC",
      "category": "配",
      "price": 299,
      "captureRate": 0.85,
      "target": {
        "code": "SHSR01",
        "name": "上海金山爱琴海三丽鸥",
        "city": "上海",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.14285714285714285
      },
      "sources": [
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 8,
          "safety": 2,
          "available": 6
        },
        {
          "code": "NBSR01",
          "name": "宁波天一广场三丽鸥",
          "city": "宁波",
          "stock": 8,
          "safety": 2,
          "available": 6
        },
        {
          "code": "BJSR02",
          "name": "北京合生汇三丽鸥",
          "city": "北京",
          "stock": 5,
          "safety": 2,
          "available": 3
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 4,
          "safety": 2,
          "available": 2
        },
        {
          "code": "WHSR02",
          "name": "长沙岳麓银盆岭街道长沙万象城三丽鸥",
          "city": "长沙",
          "stock": 4,
          "safety": 2,
          "available": 2
        }
      ]
    },
    {
      "id": "FR-WZSR01-SR15022571011M5",
      "group": "FR-WZSR01",
      "region": "east",
      "product": "背包MM",
      "sku": "SR15022571011M5",
      "color": "999-MISC",
      "category": "配",
      "price": 299,
      "captureRate": 0.85,
      "target": {
        "code": "WZSR01",
        "name": "温州瓯海万象城三丽鸥",
        "city": "温州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.14285714285714285
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
      "id": "FR-WZSR01-SR34022622001K7",
      "group": "FR-WZSR01",
      "region": "east",
      "product": "堆雪人系列挂件:KT",
      "sku": "SR34022622001K7",
      "color": "999-MISC",
      "category": "配",
      "price": 139,
      "captureRate": 0.85,
      "target": {
        "code": "WZSR01",
        "name": "温州瓯海万象城三丽鸥",
        "city": "温州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 0.4642857142857143
      },
      "sources": [
        {
          "code": "SHSR01",
          "name": "上海金山爱琴海三丽鸥",
          "city": "上海",
          "stock": 70,
          "safety": 2,
          "available": 68
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 66,
          "safety": 2,
          "available": 64
        },
        {
          "code": "TJSR01",
          "name": "天津南开大悦城三丽鸥",
          "city": "天津",
          "stock": 68,
          "safety": 5,
          "available": 63
        },
        {
          "code": "BJSR01",
          "name": "北京荟聚三丽鸥",
          "city": "北京",
          "stock": 45,
          "safety": 3,
          "available": 42
        },
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 18,
          "safety": 2,
          "available": 16
        }
      ]
    },
    {
      "id": "FR-WZSR01-SR152526C3014W7",
      "group": "FR-WZSR01",
      "region": "east",
      "product": "怀旧布丁狗系列盲盒小包：PN",
      "sku": "SR152526C3014W7",
      "color": "999-MISC",
      "category": "配",
      "price": 49,
      "captureRate": 0.85,
      "target": {
        "code": "WZSR01",
        "name": "温州瓯海万象城三丽鸥",
        "city": "温州",
        "physical": 0,
        "inbound": 0,
        "dailyDemand": 1.4285714285714286
      },
      "sources": [
        {
          "code": "SYSR01",
          "name": "沈阳万象城三丽鸥",
          "city": "沈阳",
          "stock": 54,
          "safety": 7,
          "available": 47
        },
        {
          "code": "HZSR01",
          "name": "杭州上城延安路湖滨in77 C1区B1层三丽鸥",
          "city": "杭州",
          "stock": 49,
          "safety": 10,
          "available": 39
        },
        {
          "code": "HZSR03",
          "name": "杭州萧山金城路萧山万象汇三丽鸥",
          "city": "杭州",
          "stock": 34,
          "safety": 12,
          "available": 22
        },
        {
          "code": "FJSR01",
          "name": "厦门思明湖滨东路万象城三丽鸥",
          "city": "厦门",
          "stock": 33,
          "safety": 12,
          "available": 21
        },
        {
          "code": "BJSR03",
          "name": "北京海淀清河中路万象汇三丽鸥",
          "city": "北京",
          "stock": 20,
          "safety": 5,
          "available": 15
        }
      ]
    }
  ]
};
