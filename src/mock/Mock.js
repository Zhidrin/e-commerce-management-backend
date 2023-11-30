import mockjs from "mockjs";

export default {
  getOrder(type) {
    let arr = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      arr.push(
        mockjs.mock({
          name: type == 0 ? "普通订单" : "秒杀订单" + i,
          price: mockjs.Random.integer(20, 500) + "元",
          buyer: mockjs.Random.cname(),
          time: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
          role: mockjs.Random.boolean(),
          state: mockjs.Random.boolean(),
          payType: mockjs.Random.boolean(),
          source: mockjs.Random.url(),
          phone: mockjs.mock(/\d{11}/),
        })
      );
    }
    return arr;
  },
  getGoods(type) {
    let arr = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      arr.push(
        mockjs.mock({
          name:
            (type == 0 ? "普通商品" : type == 1 ? "秒杀商品" : "近日推荐") + i,
          img: mockjs.Random.dataImage("60x100", "商品示例图"),
          price: mockjs.Random.integer(20, 500) + "元",
          sellCount: mockjs.Random.integer(10, 100),
          count: mockjs.Random.integer(10, 100),
          back: mockjs.Random.integer(10, 100),
          backPrice: mockjs.Random.integer(0, 5000) + "元",
          owner: mockjs.Random.cname(),
          time: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
          state: mockjs.Random.boolean(),
        })
      );
    }
    return arr;
  },
  getManagerList() {
    let arr = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      arr.push(
        mockjs.mock({
          people: mockjs.Random.csentence(),
          weixin: mockjs.Random.string(7, 10),
          state: mockjs.Random.boolean(),
          income: mockjs.Random.integer(0, 500000) + "元",
          back: mockjs.Random.integer(0, 1000) + "元",
          backPrice: mockjs.Random.integer(0, 5000) + "元",
          source: "站内",
          customer: mockjs.Random.integer(0, 50),
          time: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
        })
      );
    }
    return arr;
  },
  getManagerOrder() {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(
        mockjs.mock({
          state: "店长订单",
          name: mockjs.Random.csentence(),
          id: mockjs.Random.string(11),
          manager: mockjs.Random.cname(),
          count: mockjs.Random.integer(20, 500),
          price: mockjs.Random.integer(2000, 50000000) + "元",
          coin: mockjs.Random.integer(200, 50000) + "元",
          payTime: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
          sendTime: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
        })
      );
    }
    return array;
  },
  getManagerReqList() {
    let arr = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      arr.push(
        mockjs.mock({
          userInfo: mockjs.Random.csentence(),
          state: mockjs.Random.boolean(),
          updateTime: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
          addTime: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
        })
      );
    }
    return arr;
  },
  getCharsData() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(mockjs.Random.integer(0, 100));
    }
    return arr;
  },
  getTradeData() {
    return mockjs.mock({
      allTra: mockjs.Random.integer(10000, 50000),
      speTra: mockjs.Random.integer(0, 5000),
      norTra: mockjs.Random.integer(0, 5000),
      userCount: mockjs.Random.integer(0, 1000),
      managerCount: mockjs.Random.integer(0, 100),
      time: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
    });
  },
  getTradeInfo() {
    let arr = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      arr.push(
        mockjs.mock({
          name: mockjs.Random.csentence(),
          code: mockjs.Random.string(20),
          user: mockjs.Random.cname(),
          payment: mockjs.Random.boolean() ? "支付宝" : "微信",
          payTime: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
        })
      );
    }
    return arr;
  },
};
