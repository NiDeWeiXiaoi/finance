import Vue from "vue";
import Vant from 'vant';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import "./mock/index";
import "@/assets/less/global.less"

import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
