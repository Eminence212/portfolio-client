<template>
  <div
    :class="[
      'col-lg-4 col-md-6 portfolio-item',
      'filter-' + project.domain.name.toLowerCase(),
    ]"
  >
    <div class="portfolio-img">
      <img :src="project.picture" class="img-fluid" :alt="project.title" />
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
import { select, on, optimizeImage } from "../utils/Functions";
export default {
  name: "Project",
  props: {
    project: Object,
  },
  mounted() {
    optimizeImage("img");
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
