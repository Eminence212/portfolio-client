<template>
  <section id="hero" class="d-flex align-items-center accueil">
    <div class="container">
      <div class="row">
        <div
          class="
            col-lg-6
            d-flex
            flex-column
            justify-content-center
            pt-4 pt-lg-0
            order-2 order-lg-1
            identitie
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span class="accueil__title" id="text_accueil">
            Je suis Eminence MULEMA NOWA
          </span>
          <h2>
            <span>
              Développeur Full Stack, Doué à la création des applications
              Desktop, Web et Mobile.
            </span>
          </h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="./docs/cv.pdf" class="btn-get-started scrollto"
              >Télécharger le CV</a
            >
          </div>
        </div>
        <div
          class="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            id="imageAccueil"
            src="https://res.cloudinary.com/eminence/image/upload/v1637308716/portfolio/hero-img_fg7vwo.png"
            class="img-fluid"
            alt="Photo de Eminence Mulema nowa : développeur full stack"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { optimizeImage, select } from "../utils/Functions";
export default {
  // store: store,
  name: "Home",
  props: {
    identities: Object,
  },
  mounted() {
    optimizeImage("img");
  },
};
</script>

<style lang="scss">
@keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-6px);
  }
}
.accueil {
  width: 100%;
  height: 100vh;
  background: #37517e;
  .container {
    padding-top: 72px;
  }
  h1,
  &__title {
    margin: 0 0 10px 0;
    font-family: "Jost", sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
  }

  h2 {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 50px;
    font-size: 24px;
  }
  .btn-get-started {
    font-family: "Jost", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 28px 11px 28px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 10px 0 0 0;
    color: #fff;
    background: #47b2e4;
    text-decoration: none;
    &:hover {
      background: #209dd8;
    }
  }

  .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }
}
@media (max-width: 1024px) {
  .identitie {
    padding: 0 !important;
    span {
      padding-top: 5px;
    }
  }

  .accueil {
    &__title {
      margin: 0;
      // display: none;
       font-size: 10px;
    }
    h2 {
      color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
    }
    .btn-get-started {
      font-size: 1em;
      padding: 8px 24px 8px 24px;
    }
  }
}
@media (max-width: 991px) {
  .accueil {
    height: 100vh;
    text-align: center;
    .animated {
      -webkit-animation: none;
      animation: none;
    }
    .hero-img {
      text-align: center;
      img {
        width: 50%;
      }
    }
    &__title {
      font-size: 18px;
    }
    h2 {
      margin-bottom: 0;
    }
  }
  .btn-get-started {
    font-size: 16px;
    padding: 10px 24px 11px 24px;
    margin-bottom: 30px;
  }
}
@media (max-width: 768px) {
  .accueil {
    h1 {
      font-size: 1em;
      line-height: 30px;
    }
    h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
    .hero-img {
      img {
        width: 60%;
      }
    }
  }
  .btn-get-started {
    font-size: 16px;
    padding: 10px 24px 11px 24px;
  }
}
@media (max-width: 575px) {
  .accueil {
    .hero-img {
      img {
        width: 70%;
      }
    }
    .btn-get-started {
      font-size: 16px;
      padding: 10px 24px 11px 24px;
      margin-bottom: 30px;
    }
  }
}
</style>
