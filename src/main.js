import Vue from "vue";
import App from "./App.vue";
import AOS from "aos";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
Vue.use(AOS.init());
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
