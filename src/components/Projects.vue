<template>
  <section id="portfolio" class="portfolio">
    <div id="portfolio-flters" class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Mes réalisations</h2>
        <h3>Une partie des projets sur lesquels j'ai travaillé</h3>
        <p>Ici, la différence est dans la qualité des services</p>
      </div>

      <ul
        class="d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
        v-if="domainLoading"
      >
        <ButtonSkeleton :key="btn" v-for="btn in [1, 2, 3, 4]" />
      </ul>
      <ul
        class="d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
        v-else
      >
        <!-- Filter -->
        <Domain
          :key="domain.id"
          v-for="(domain, index) in domains"
          :domain="domain"
          :index="index"
        />
      </ul>
      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="200"
        v-if="isLoading"
      >
        <ProjectSkeleton :key="project" v-for="project in [1, 2, 3, 4, 5, 6]" />
      </div>
      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="200"
        v-else
      >
        <Project
          :key="project.id"
          v-for="project in projects"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Domain from "./Domain.vue";
import Project from "./Project.vue";
import ProjectSkeleton from "./skeletons/ProjectSkeleton.vue";
import ButtonSkeleton from "./skeletons/ButtonSkeleton.vue";
import { addFilter } from "../utils/Functions";

export default {
  name: "Projects",
  data() {
    return {
      isAll: true,
      projectFilter: [],
      isLoading: true,
      domainLoading: true,
    };
  },
  props: {
    projects: Array,
    domains: Array,
  },
  components: {
    Domain,
    Project,
    ProjectSkeleton,
    ButtonSkeleton,
  },
  mounted() {
    const intervId = setInterval(() => {
      if (this.isLoading) {
        if (this.projects.length > 0) {
          this.isLoading = false;
          clearInterval(intervId);
          addFilter();
        } else {
          this.isLoading = true;
        }
      }
    }, 1000);

    const intervId2 = setInterval(() => {
      if (this.domainLoading) {
        if (this.domains.length > 0) {
          this.domainLoading = false;
          clearInterval(intervId2);
          addFilter();
        } else {
          this.domainLoading = true;
        }
      }
    }, 1000);
  },
};
</script>

<style lang="scss">
.portfolio {
  #portfolio-flters {
    list-style: none;
    margin-bottom: 20px;
    ul {
      flex-wrap: wrap;
    }
  }
  .portfolio-item {
    position: relative;
    margin: 15px 0;
    .portfolio-img {
      overflow: hidden;
      img {
        width: 50rem;
        height: 16rem;
        object-fit: cover;
        transition: all 0.6s;
      }
    }
    .portfolio-info {
      opacity: 1;
      position: absolute;
      left: 15px;
      bottom: 0;
      z-index: 3;
      right: 15px;
      background: rgba(55, 81, 126, 0.8);
      padding: 10px 15px;
      h4 {
        font-size: 18px;
        color: #fff;
        font-weight: 600;
        color: #fff;
        margin-bottom: 0px;
      }
      p {
        color: #f9fcfe;
        font-size: 14px;
        margin-bottom: 0;
      }
      .preview-link {
        position: absolute;
        right: 40px;
        font-size: 24px;
        top: calc(50% - 18px);
        color: #fff;
        transition: 0.3s;
        &:hover {
          color: #47b2e4;
        }
      }
    }
    &:hover {
      .portfolio-img {
        img {
          transform: scale(1.15);
          object-fit: cover;
          cursor: pointer;
        }
      }
      .portfolio-info {
        opacity: 0;
        cursor: pointer;
        transition: all 1s;
        background: rgba(66, 99, 155, 0.8);
      }
    }
  }
}
</style>
