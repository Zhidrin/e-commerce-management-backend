import { parseWidth } from "element-plus/es/components/table/src/util";
import { createStore } from "vuex";

const Store = createStore({
  state() {
    return {
      username: "",
      password: "",
    };
  },
  getters: {
    isLogin: () => {
      return JSON.parse(localStorage.getItem("login"));
    },
  },
  mutations: {
    // 用户登出状态
    clearUserInfo(state) {
      state.username = "";
      state.password = "";
      localStorage.removeItem("login");
    },
    // 用户登录状态
    registUserInfo(state, { name, password }) {
      state.username = name;
      state.password = password;
      localStorage.setItem(
        "login",
        JSON.stringify({ name: name, password: password })
      );
    },
  },
});

export default Store;
