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
};
