import Vue from "vue";
import AOS from "aos";
import Isotope from "isotope-layout";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import "isotope-layout/dist/isotope.pkgd.min.js";
import App from "./App";
// import Vuex from "vuex";
// Vue.use(Vuex);
Vue.use(
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })
);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
