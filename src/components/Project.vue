<template>
  <div
    :class="[
      'col-lg-4 col-md-6 portfolio-item',
      'filter-' + project.domain.name.toLowerCase(),
    ]"
  >
    <div class="portfolio-img">
      <img
        src="../assets/img/realisations/mobile/app1.jpg"
        class="img-fluid"
        :alt="project.title"
      />
    </div>
    <div class="portfolio-info">
      <h4>{{ project.title }}</h4>
      <p>
        {{ project.resume }}
      </p>
      <p class="technos">
        <span
          :key="technologie.id"
          v-for="technologie in project.technologies"
          >{{ technologie.name }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import Isotope from "../../node_modules/isotope-layout";
import AOS from "../../node_modules/aos";
import { select, on } from "../utils/Functions";
export default {
  name: "Project",
  props: {
    project: Object,
  },
  mounted() {
    window.addEventListener("load", () => {
      let portfolioContainer = select(".portfolio-container");
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
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

<style lang="scss">
.technos {
  display: flex;
  align-items: center;
  span {
    background: #47b2e4bd;
    padding: 3px 5px;
    margin-right: 3px;
    font-size: 12px;
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
