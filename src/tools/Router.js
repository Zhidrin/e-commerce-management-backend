import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/login/Login.vue";
import Home from "../components/home/Home.vue";
import Order from "../components/order/Order.vue";
import Store from "../tools/Storage";
import Goods from "../components/goods/Goods.vue";
import AddGood from "../components/goods/AddGood.vue";
import GoodCategory from "../components/goods/GoodCategory.vue";
import ManagerList from "../components/manager/ManagerList.vue";
import ManagerOrder from "../components/manager/ManagerOrder.vue";
import ManagerReqList from "../components/manager/ManagerReqList.vue";
import DataCom from "../components/financial/DataCom.vue";
import TradeInfo from "../components/financial/TradeInfo.vue";

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
      children: [
        {
          // 0: 普通订单； 1： 秒杀订单；
          path: "order/:type",
          component: Order,
          name: "Order",
        },
        {
          // 0： 普通商品； 1： 秒杀商品； 2： 今日推荐；
          path: "goods/:type",
          component: Goods,
          name: "Goods",
        },
        {
          // 0： 普通商品； 1： 秒杀商品； 2： 今日推荐；
          path: "addGood/:type",
          component: AddGood,
          name: "AddGood",
        },
        {
          path: "category",
          component: GoodCategory,
          name: "GoodCategory",
        },
        {
          path: "ownerlist",
          component: ManagerList,
          name: "ManagerList",
        },
        {
          path: "ownerreq",
          component: ManagerReqList,
          name: "ManagerReqList",
        },
        {
          path: "ownerorder",
          component: ManagerOrder,
          name: "ManagerOrder",
        },
        {
          path: "data",
          component: DataCom,
          name: "DataCom",
        },
        {
          path: "tradeInfo",
          component: TradeInfo,
          name: "TradeInfo",
        },
      ],
      redirect: "/home/order/0",
    },
  ],
});

Router.beforeEach((from) => {
  let isLogin = Store.getters.isLogin;
  if (isLogin || from.name === "login") {
    return true;
  } else {
    return { name: "login" };
  }
});

export default Router;
