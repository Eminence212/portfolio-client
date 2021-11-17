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
        {{ project.picture }}
        {{ project.resume }}
      </p>
    </div>
  </div>
</template>

<script>
import Isotope from "../../node_modules/isotope-layout";
import AOS from "../../node_modules/aos";
export default {
  name: "Project",
  props: {
    project: Object,
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

<style lang="scss"></style>
