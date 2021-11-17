<template>
  <section id="services" class="services section-bg">
    <div id="listeServices" class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Mes Services</h2>
        <h3>Des prestations adaptées à vos besoins</h3>
      </div>

      <div class="row">
        <Service
          :key="service.id"
          v-for="service in services"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
     
    </div>
  </section>
</template>

<script>
import Service from "./Service.vue";
export default {
  name: "Services",
  components: {
    Service,
  },
  props: {
    services: Array,
  },
};
</script>

<style lang="scss">
.services {
  .row {
    margin-bottom: 15px;
  }
}
</style>
