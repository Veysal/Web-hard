import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

new Vue({
  el: "#admin-app",
  router,
  store,
  render: h => h(App)
});
