import Vue from "vue";
import App from "./App.vue";

import vueForm from "vue-form";
import { router } from "../src/router";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(vueForm);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
