<template>
  <div>
    <Header />
    <Accueil />
    <About />
    <Services :services="services" />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Accueil from "./components/Accueil.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import { select, scrollto } from "./utils/Functions";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Accueil,
    About,
    Services,
  },
  data() {
    return {
      services: [],
      showAddTask: false,
    };
  },
  async created() {
    this.services = await this.fetchServices();
  },
  methods: {
    async fetchServices() {
      const data = [
        {
          id: 1,
          title: "GESTION DE PROJETS WEB & MOBILE",
          icon: "bx bx-globe",
          description:
            "Site vitrine, corporate, évènementiel, e-commerce, intranet, application mobile.",
        },
        {
          id: 2,
          title: "INTÉGRATION WEB",
          icon: "bx bxs-edit",
          description:
            "Des intégrations HTML / CSS respectueuses des standards du Web.",
        },
        {
          id: 3,
          title: "DÉVELOPPEMENTS SPÉCIFIQUES",
          icon: "bx bxs-wrench",
          description:
            "Des outils adaptés à votre coeur de métier, applications et solutions personnalisées.",
        },
        {
          id: 4,
          title: "RÉFÉRENCEMENT NATUREL",
          icon: "bx bx-check-square",
          description:
            "Affichage sémantique des informations, des pages propres pour un référencement optimal.",
        },
        {
          id: 5,
          title: "CONCEPTION GRAPHIQUE ET WEBDESIGN",
          icon: "bx bx-edit-alt",
          description:
            "Logos, templates Web, plaquettes publicitaires, cartes de visite, newsletters...",
        },
        {
          id: 6,
          title: "DYNAMISME DES PAGES",
          icon: "bx bx-sync",
          description:
            "Des animations de contenu non intrusives pour embellir votre projet.",
        },
        {
          id: 7,
          title: "INTERFACE D'ADMINISTRATION",
          icon: "bx bxs-cog",
          description:
            "Outils spécifiques au bon fonctionnement  de votre entreprise.",
        },
        {
          id: 8,
          title: "RESPONSIVE DESIGN",
          icon: "bx bx-repost",
          description: "Compatible à tous supports : tablette, mobile...",
        },
      ];
      return data;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #47b2e4;
  text-decoration: none;
  &:hover {
    color: #73c5eb;
    // text-decoration: none;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Jost", sans-serif;
}

section {
  padding: 30px 0;
  overflow: hidden;
}
.section-bg {
  background-color: #f3f5fa;
}

.section-title {
  text-align: center;
  // padding-bottom: 10px;
  h2 {
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    // margin-bottom: 10px;
    padding-bottom: 10px;
    position: relative;
    color: #37517e;
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 120px;
      height: 1px;
      background: #ddd;
      bottom: 1px;
      left: calc(50% - 60px);
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 40px;
      height: 3px;
      background: #47b2e4;
      bottom: 0;
      left: calc(50% - 20px);
    }
  }
  p {
    margin-bottom: 0;
  }
}
</style>
