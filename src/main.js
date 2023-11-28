import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import VueCookies from "vue-cookies";
import Store from "./tools/Storage";
import Router from "./tools/Router";

const app = createApp(App);
app.use(Router);
app.use(Store);
app.use(ElementPlus);
app.use(VueCookies);
app.mount("#app");
