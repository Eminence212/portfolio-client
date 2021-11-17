<template>
  <div>
    <Header />
    <Home />
    <main id="main">
      <About />
      <Services :services="services" />
      <Projects :projects="projects" :domains="domains" />
      <Skills :skills="skills" />
      <Contact />
    </main>

    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Skills from "./components/Skills.vue";
import { select, scrollto } from "./utils/Functions";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
    About,
    Services,
    Projects,
    Contact,
    Skills,
  },
  data() {
    return {
      identities: [],
      services: [],
      projects: [],
      skills: [],
      domains: [],
    };
  },
  async created() {
    this.identities = await this.fetchIdentities();
    this.services = await this.fetchServices();
    this.projects = await this.fetchProjects();
    this.skills = await this.fetchSkills();
    this.domains = await this.fetchDomains();
  },
  methods: {
    async fetchServices() {
      const services = [
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
      return services;
    },
    async fetchProjects() {
      const projects = [
        {
          id: 1,
          title: "Application de gestion des correspondances",
          picture: "../assets/img/realisations/mobile/app1.jpg",
          domain: {
            id: 2,
            name: "MOBILE",
            value: 0,
          },
          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
          technologies: [
            {
              id: 1,
              name: "Flutter",
            },
            {
              id: 2,
              name: "Dart",
            },
          ],
        },
        {
          id: 2,
          title: "Gestion de l'Energie",
          picture: "../assets/img/realisations/design/design1.jpg",
          domain: {
            id: 3,
            name: "GRAPHIQUE",
            value: 0,
          },

          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
          technologies: [
            {
              id: 1,
              name: "Adobe",
            },
            {
              id: 2,
              name: "illustrator",
            },
          ],
        },
        {
          id: 3,
          title: "Géolocalisation des établissements scolaires en RDC",
          picture: "../assets/img/realisations/mobile/app2.jpg",
          domain: {
            id: 2,
            name: "MOBILE",
            value: 0,
          },

          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
          technologies: [
            {
              id: 1,
              name: "Flutter",
            },
            {
              id: 2,
              name: "Dart",
            },
          ],
        },
        {
          id: 4,
          title: "Site web de visite touristique",
          picture: "../assets/img/realisations/web/app1.jpg",
          domain: {
            id: 1,
            name: "WEB",
            value: 0,
          },

          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
          technologies: [
            {
              id: 1,
              name: "HTML",
            },
            {
              id: 2,
              name: "CSS",
            },
            {
              id: 3,
              name: "JavaScript",
            },
          ],
        },
        {
          id: 5,
          title: "Coneption graphique",
          picture: "../assets/img/realisations/design/design2.jpg",
          domain: {
            id: 3,
            name: "GRAPHIQUE",
            value: 0,
          },

          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
             technologies:[
              {
                id:1,
                name:"Adobe"
              },
              {
                id:2,
                name:"illustrator"
              }
            ]
        },
        {
          id: 6,
          title: "Suivi et évaluation",
          picture: "../assets/img/realisations/mobile/app3.jpg",
          domain: {
            id: 2,
            name: "MOBILE",
            value: 0,
          },

          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
             technologies:[
              {
                id:1,
                name:"Android studion"
              },
              {
                id:2,
                name:"Java"
              }
            ]
        },
        {
          id: 7,
          title: "Site web pour le parcours scolaire des apprenants en RDC",
          picture: "../assets/img/realisations/web/app2.jpg",
          domain: {
            id: 1,
            name: "WEB",
            value: 0,
          },

          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
             technologies:[
              {
                id:1,
                name:"Reactjs"
              },
              {
                id:2,
                name:"Nodejs"
              }
            ]
        },
        {
          id: 8,
          title: "Site de e-Commerce",
          picture: "../assets/img/realisations/web/app3.jpg",
          domain: {
            id: 1,
            name: "WEB",
            value: 0,
          },

          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
             technologies:[
              {
                id:1,
                name:"Vuejs"
              },
              {
                id:2,
                name:"Laravel 2"
              }
            ]
        },
        {
          id: 9,
          title: "UX Design",
          picture: "../assets/img/realisations/design/design3.jpg",
          domain: {
            id: 3,
            name: "GRAPHIQUE",
            value: 0,
          },

          resume:
            "Lorem tis corrupti, enim temporibus labore reprehenderit. Incidunt possimus atque nemo est.",
             technologies:[
              {
                id:1,
                name:"Figma"
              }
            ]
        },
      ];
      return projects;
    },
    async fetchSkills() {
      const skills = [
        {
          id: 1,
          name: "html-css",
          level: 90,
          type_id: 1,
        },
        {
          id: 2,
          name: "MySQL-SQL-PHP",
          level: 70,
          type_id: 1,
        },
        {
          id: 3,
          name: "SQLSERVER-HFSQL",
          level: 75,
          type_id: 1,
        },
        {
          id: 4,
          name: "Java-jee",
          level: 70,
          type_id: 1,
        },
        {
          id: 5,
          name: "Windev-wordpress",
          level: 65,
          type_id: 1,
        },
        {
          id: 6,
          name: "Reactjs-Nextjs-Vuejs",
          level: 75,
          type_id: 1,
        },
        {
          id: 7,
          name: "Nodejs-Express-Nestjs",
          level: 65,
          type_id: 1,
        },
        {
          id: 8,
          name: "Laravel",
          level: 50,
          type_id: 1,
        },
      ];
      return skills;
    },
    async fetchIdentities() {
      const identities = [];
      return identities;
    },
    async fetchDomains() {
      const domains = [
        {
          id: 1,
          name: "TOUS",
          value: 1,
        },
        {
          id: 2,
          name: "WEB",
          value: 0,
        },
        {
          id: 3,
          name: "MOBILE",
          value: 0,
        },
        {
          id: 4,
          name: "GRAPHIQUE",
          value: 0,
        },
      ];
      return domains;
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
  padding-bottom: 10px;
  h2 {
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
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
