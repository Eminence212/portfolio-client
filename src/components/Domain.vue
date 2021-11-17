<template>
  <li
    :data-filter="[
      domain.value === 1 ? '*' : '.filter-' + domain.name.toLowerCase(),
    ]"
    :class="[domain.value === 1 && 'filter-active']"
  >
    {{ domain.name }}
  </li>
</template>

<script>
import Isotope from "../../node_modules/isotope-layout";
import AOS from "../../node_modules/aos";
import { select, on } from "../utils/Functions";
export default {
  name: "Domain",
  props: {
    domain: Object,
  },

  mounted() {
    window.addEventListener("load", () => {
      let _container = select(".portfolio-container");
      if (_container) {
        let portfolioIsotope = new Isotope(_container, {
          itemSelector: ".portfolio-item",
        });

        let portfolioFilters = select("#portfolio-flters li", true);

        on(
          "click",
          "#portfolio-flters li",
          function (e) {
            e.preventDefault();
            portfolioFilters.forEach(function (el) {
              el.classList.remove("filter-active");
            });
            this.classList.add("filter-active");

            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            portfolioIsotope.on("arrangeComplete", function () {
              AOS.refresh();
            });
          },
          true
        );
      }
    });
  },
};
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  display: inline-block;
  margin: 10px 5px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  color: #444444;
  transition: all 0.3s;
  padding: 8px 20px;
  border-radius: 50px;
  font-family: "Poppins", sans-serif;
  &:hover {
    background: #47b2e4;
    color: #fff;
    cursor: pointer;
  }
}
li.filter-active {
  background: #47b2e4;
  color: #fff;
}
</style>
