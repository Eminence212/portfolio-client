<template>
  <header id="header" class="fixed-top entete">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="#">EM</a></h1>
      <!-- NavBar -->
      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <a class="nav-link scrollto active" href="#hero">Accueil</a>
          </li>
          <li><a class="nav-link scrollto" href="#about">A propos</a></li>
          <li>
            <a class="nav-link scrollto" href="#services">Servives</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#portfolio">Réalisations</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#competences">Compétences</a>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li>
            <a class="getstarted scrollto" href="../assets/docs/cv.pdf" download
              >Télécharger le CV</a
            >
          </li>
        </ul>
        <i class="bx bx-menu mobile-nav-toggle" />
      </nav>
      <!-- NavBar -->
    </div>
  </header>
</template>

<script>
import {
  select,
  scrollto,
  navbarlinksActive,
  headerScrolled,
  on,
} from "../utils/Functions";
export default {
  name: "Header",
  data() {
    return {
      menuActif: 0,
    };
  },
  created() {},
  mounted() {
    /**
     * Défilement avec décalage lors du chargement de la page avec des liens de hachage dans l'url
     */
    window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
    /**
     * État actif des liens de la barre de navigation lors du défilement
     */
    let navbarlinks = select("#navbar .scrollto", true);
    window.addEventListener("load", navbarlinksActive(navbarlinks));
    document.addEventListener("scroll", navbarlinksActive(navbarlinks));
    /**
     * Basculer la classe .header-scrolled sur #header lorsque la page est défilée
     */
    let selectHeader = select("#header");
    if (selectHeader) {
      window.addEventListener("load", headerScrolled(selectHeader));
      document.addEventListener("scroll", headerScrolled(selectHeader));
    }
    /**
     * Bascule de navigation mobile
     */
    on("click", ".mobile-nav-toggle", function (e) {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bx-menu");
      this.classList.toggle("bx-x");
    });
    /**
     * Faites défiler avec décalage sur les liens avec un nom de classe .scrollto
     */
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();
          let navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bx-menu");
            navbarToggle.classList.toggle("bx-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );
    /**
     * Préchargement : preloager
     */
    let preloader = select("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Faster+One&family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap");

.entete {
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
  background: rgba(40, 58, 90, 0.9);
  &.header-scrolled,
  .header-inner-pages {
    background: rgba(40, 58, 90, 0.9);
  }
  & .logo {
    font-size: 30px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    a {
      color: #fff;
      text-decoration: none;
      font-family: "Faster One", cursive;
    }
  }
  // NavBar

  .navbar {
    padding: 0;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      align-items: center;
    }
    li {
      position: relative;
      text-transform: uppercase;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      padding: 10px 0 10px 30px;
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      white-space: nowrap;
      transition: 0.3s;

      &:hover {
        color: #47b2e4;
      }
      i {
        font-size: 12px;
        line-height: 0;
        margin-left: 5px;
        &:hover {
          > a {
            color: #47b2e4;
          }
        }
      }
    }
    .active {
      color: #47b2e4;
    }
    .getstarted {
      padding: 8px 20px;
      margin-left: 30px;
      border-radius: 50px;
      color: #fff;
      font-size: 14px;
      border: 2px solid #47b2e4;
      background: #47b2e4;
      font-weight: 600;
      &:hover {
        color: #47b2e4;
        background: #fff;
      }
    }
    .dropdown {
      ul {
        display: block;
        position: absolute;
        left: 14px;
        top: calc(100% + 30px);
        margin: 0;
        padding: 10px 0;
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        background: #fff;
        box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
        transition: all 0.3s ease;
        border-radius: 4px;
        li {
          min-width: 200px;
          :hover {
            > a {
              color: #47b2e4;
            }
          }
        }
        a {
          padding: 10px 20px;
          font-size: 14px;
          text-transform: none;
          font-weight: 500;
          color: #0c3c53;
          text-decoration: none;
          &:hover {
            color: #47b2e4;
          }
          i {
            font-size: 12px;
          }
        }
        .active {
          &:hover {
            color: #47b2e4;
          }
        }
      }
      &:hover {
        > ul {
          opacity: 1;
          top: 100%;
          visibility: visible;
        }
      }
      .dropdown {
        ul {
          top: 0;
          left: calc(100% - 30px);
          visibility: hidden;
        }
        &:hover {
          > ul {
            opacity: 1;
            top: 0;
            left: 100%;
            visibility: visible;
          }
        }
      }
    }
  }
  @media (max-width: 1366px) {
    .navbar {
      .dropdown {
        .dropdown {
          ul {
            left: -90%;
          }
          &:hover {
            > ul {
              left: -100%;
            }
          }
        }
      }
    }
  }
  /**
  * Navigation pour Mobile 
  */
  .mobile-nav-toggle {
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;
    &.bx-menu {
      color: #fff;
      font-size: 2.5em;
    }
  }
  @media (max-width: 991px) {
    .mobile-nav-toggle {
      display: block;
      &.bx-x {
        color: #fff;
        font-size: 1.8em;
        margin-top: 0.5em;
      }
    }
    .navbar {
      ul {
        display: none;
      }
    }
  }
  .navbar-mobile {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(40, 58, 90, 0.9);
    transition: 0.3s;
    z-index: 999;
    .mobile-nav-toggle {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    ul {
      display: block;
      position: absolute;
      top: 55px;
      right: 15px;
      bottom: 15px;
      left: 15px;
      padding: 10px 0;
      border-radius: 5px;
      background-color: #fff;
      overflow-y: auto;
    }
    a {
      padding: 10px 20px;
      font-size: 15px;
      color: #37517e;
      text-decoration: none;
      &:hover {
        color: #47b2e4;
      }
    }
    .active {
      color: #47b2e4;
    }
    li {
      &:hover {
        > a {
          color: #47b2e4;
          text-decoration: none;
        }
      }
    }
    .getstarted {
      margin: 15px;
      color: #37517e;
    }
    .dropdown {
      ul {
        position: static;
        display: none;
        margin: 10px 20px;
        padding: 10px 0;
        z-index: 99;
        opacity: 1;
        visibility: visible;
        background: #fff;
        box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
        a {
          &:hover {
            color: #47b2e4;
          }
        }
        .active {
          &:hover {
            color: #47b2e4;
          }
        }
        li {
          min-width: 200px;
          &:hover {
            > a {
              color: #47b2e4;
            }
          }
        }
        a {
          padding: 10px 20px;
          i {
            font-size: 12px;
          }
        }
      }
      > .dropdown-active {
        display: block;
      }
    }
  }
}
</style>
