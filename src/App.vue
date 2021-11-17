<template>
  <div>
    <Header />
    <Home :identities="identities" />
    <main id="main">
      <About :identities="identities" />
      <Services :services="services" />
      <Projects :projects="projects" :domains="domains" />
      <Skills :skills="skills" />
      <Contact :identities="identities" />
    </main>
    <Footer />
    <Preload />
    <BackTotop />
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
import BackTotop from "./components/BackTotop.vue";
import Preload from "./components/Preload.vue";
import { select, scrollto } from "./utils/Functions";
import Axios from "axios";
export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    Services,
    Projects,
    Skills,
    Contact,
    Footer,
    BackTotop,
    Preload,
  },
  data() {
    return {
      identities: {},
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
      const res = await Axios.get("http://localhost:8000/api/services");
      const services = await res.data;
      return services;
    },
    async fetchProjects() {
      const res = await Axios.get("http://localhost:8000/api/projects");
      const projects = await res.data;
      return projects;
    },
    async fetchSkills() {
      const res = await Axios.get("http://localhost:8000/api/skills");
      const skills = await res.data;
      return skills;
    },
    async fetchIdentities() {
      const res = await Axios.get("http://localhost:8000/api/identities");
      const identities = await res.data[0];
      return identities;
    },
    async fetchDomains() {
      const res = await Axios.get("http://localhost:8000/api/domains");
      const domains = await res.data;
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
