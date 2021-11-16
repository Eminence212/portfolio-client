<template>
  <section id="competences" class="skills section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Mes Compétences</h2>
        <h3>Des compétences à votre service</h3>
      </div>
      <div class="row">
        <div
          class="col-lg-6 d-flex align-items-center"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img
            src="../assets/img/competences.jpg"
            class="img-fluid"
            alt="photo compétences"
          />
        </div>
        <div
          class="col-lg-6 pt-4 pt-lg-0 content"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h3>Compétences en développement</h3>
          <p class="fst-italic">
            Du site vitrine au projet plus complexe, je vous propose une
            expertise et un développement web qui correspond à vos attentes et à
            vos besoins.
          </p>

          <div class="skills-content">
            <Skill
              :key="skill.id"
              v-for="skill in skills"
              :name="skill.name"
              :level="skill.level"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Skill from "./skill.vue";
export default {
  name: "Skills",
  props: {
    skills: Array,
  },
  components: {
    Skill,
  },
};
</script>

<style lang="scss">
.skills {
  .content {
    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      color: #37517e;
      font-family: "Poppins", sans-serif;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        padding-bottom: 10px;
      }
      i {
        font-size: 1.25rem;
        padding-right: 4px;
        color: #47b2e4;
      }
    }
    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
