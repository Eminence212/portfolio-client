<template>
  <section id="services" class="services section-bg">
    <div id="listeServices" class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Mes Services</h2>
        <h3>Des prestations adaptées à vos besoins</h3>
      </div>
      <div class="row" v-if="isLoading">
        <ServiceSkeleton
          :key="service"
          v-for="service in [1, 2, 3, 4, 5, 6, 7, 8]"
        />
      </div>
      <div class="row" v-else>
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
import ServiceSkeleton from "./skeletons/ServiceSkeleton.vue";
export default {
  name: "Services",
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    Service,
    ServiceSkeleton,
  },
  props: {
    services: Array,
  },
  mounted() {
    let i = 1;
   const intervId = setInterval(() => {
      if (this.isLoading) {
        if (this.services.length > 0) {
          this.isLoading = false;
          clearInterval(intervId);
        } else {
          this.isLoading = true;
        }

      }

    }, 1000);
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
