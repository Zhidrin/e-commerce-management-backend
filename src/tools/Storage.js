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
    isLogin: (state) => {
      return state.username.length > 0;
    },
  },
  mutationsL: {
    clearUserInfo(state) {
      state.username = "";
      state.password = "";
    },
    registUserInfo(state, { name, password }) {
      state.username = name;
      state.password = password;
    },
  },
});

export default Store;
