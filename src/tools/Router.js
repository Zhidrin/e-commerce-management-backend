import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/login/Login.vue";
import Home from "../components/home/Home.vue";
import Order from "../components/order/Order.vue";
import Store from "../tools/Storage";
import Goods from "../component/goods/Goods.vue";
import AddGood from "../component/goods/AddGood.vue";

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
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
