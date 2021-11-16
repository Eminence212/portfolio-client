<template>
  <section id="services" class="services section-bg">
    <div id="listeServices" class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Mes Services</h2>
        <h3>Des prestations adaptées à vos besoins</h3>
      </div>

      <div class="row">
        
        <Service
        :key="service.id" v-for="service in services"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
        <!-- <div
          class="col-xl-3 col-md-6 d-flex mt-4 align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="icon-box">
            <div class="icon"><i class="bx bx-globe"></i></div>
            <h4><a href="">GESTION DE PROJETS WEB & MOBILE</a></h4>
            <p>
              Site vitrine, corporate, évènementiel, e-commerce, intranet,
              application mobile.
            </p>
          </div>
        </div> -->

        <!--       <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="bx bxs-edit"></i></div>
            <h4><a href="">INTÉGRATION WEB</a></h4>
            <p>
              Des intégrations HTML / CSS respectueuses des standards du Web.
            </p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="bx bxs-wrench"></i></div>
            <h4><a href="">DÉVELOPPEMENTS SPÉCIFIQUES</a></h4>
            <p>
              Des outils adaptés à votre coeur de métier, applications et solutions personnalisées.
            </p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-check-square"></i></div>
            <h4><a href="">RÉFÉRENCEMENT NATUREL</a></h4>
            <p>
              Affichage sémantique des informations, des pages propres pour un référencement optimal.
            </p>
          </div>
        </div>

      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box"> 
       
            <div class="icon"><i class="bx bx-edit-alt"></i></div>
            <h4><a href="">CONCEPTION GRAPHIQUE ET WEBDESIGN</a></h4>
            <p>
              Logos, templates Web, plaquettes publicitaires, cartes de visite, newsletters...
            </p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-sync"></i></div>
            <h4><a href="">DYNAMISME DES PAGES</a></h4>
            <p>
              Des animations de contenu non intrusives pour embellir votre projet.
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="bx bxs-cog"></i></div>
            <h4><a href="">INTERFACE D'ADMINISTRATION</a></h4>
            <p>
              Outils spécifiques au bon fonctionnement  de votre entreprise.
            </p>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-repost"></i></div>
            <h4><a href="">RESPONSIVE DESIGN</a></h4>
            <p>
                      Compatible à tous supports : tablette, mobile...
            </p>
          </div>
        </div>
        -->
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
  }
};
</script>

<style lang="scss" scoped>
.services {
  .row {
    margin-bottom: 15px;
  }
 
}
</style>
