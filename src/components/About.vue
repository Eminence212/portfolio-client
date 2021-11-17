<template>
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2 id="titreApropos">A PROPOS</h2>
        <h3 id="sousTitreApropos">
          Je suis développeur Full Stack et j'aime ça
        </h3>
      </div>
      <div class="row">
        <div class="row row-cols-1 row-cols-md-2 g-4 about">
          <div class="col">
            <div class="card">
              <img
                id="imageApropos"
                src="../assets/img/hero-img.png"
                class="card-img-top"
                alt="photo de Eminence Mulema nowa : développeur Full-Stack passionné "
              />
              <div class="card-body">
                <div class="social-links card-text">
                  <a :href="['tel:'+identities.phoneNumber]"><i class="bx bxs-phone"></i></a>
                  <a :href="['mailto:' + identities.email]"
                    ><i class="bx bxs-envelope"></i
                  ></a>
                  <a :href="identities.twitter"><i class="bx bxl-twitter"></i></a>
                  <a :href="identities.facebook"
                    ><i class="bx bxl-facebook"></i
                  ></a>
                  <a :href="identities.instagram"><i class="bx bxl-instagram"></i></a>
                  <a :href="identities.skype"><i class="bx bxl-skype"></i></a>
                  <a :href="identities.linkedin"
                    ><i class="bx bxl-linkedin"></i
                  ></a>
                </div>
                <br />
                <h5 class="card-title" id="descriptionAbout3">
                  Un tarif adapté à votre projet
                </h5>
                <p class="card-text" id="description3_detail1">
                  Travaillant régulièrement avec des PME, associations ou
                  particuliers, je vous propose des solutions à votre portée et
                  adaptée à votre budget.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  Un développeur Full-Stack passionné !
                </h5>
                <p class="card-text">
                  Ma passion pour le développement web commence en 2003 et m'a
                  demandé un changement radical de cursus afin de pouvoir
                  pleinement l'exploiter.
                </p>
                <p class="card-text">
                  Dès lors, je mis tout en oeuvre pour percer dans cette voie,
                  tout en prenant du plaisir sur les divers projets développés.
                </p>
                <h5 class="card-title">Expérience en développement</h5>
                <p class="card-text">
                  Mon expérience acquise au fil des projets me permet de mieux
                  comprendre les attentes d'un client et de répondre précisement
                  au besoin demandé en fonction du domaine d'activité.
                </p>
                <p class="card-text">
                  Du site vitrine au projet plus complexe, je vous propose une
                  expertise et un développement web qui correspond à vos
                  attentes et à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: {
    identities: Object,
  },
};
</script>

<style lang="scss">
.about {
  img {
    height: 300px;
    object-fit: contain;
    object-position: 50% 50%;
  }
  .social-links {
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-size: 20px;
      color: #47b2e4;
      float: left;
      width: 44px;
      height: 44px;
      text-decoration: none;
      background: #e7f5fb;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-left: 10px;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: #47b2e4;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .card {
    border: 0;
    border-radius: 0.25em;
    box-shadow: 0 10px 20px 0 rgba(109, 109, 109, 0.1);
  }
}
@media (max-width: 1024px) {
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    & .card {
      margin-left: 1.5em;
    }
  }
  .social-links {
    a {
      width: 30px !important;
      height: 30px !important;
      i {
        font-size: 0.9em;
      }
    }
  }
}
</style>
