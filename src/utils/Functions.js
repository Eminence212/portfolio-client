import Isotope from "isotope-layout";
import AOS from "aos";
/**
 * Fonction pour sélectionner les objets sur le DOM à l'aide des sélecteur
 *    */
const select = (el, all = false) => {
  if (el) {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  }
};

/**
 * Fonction d'écoute d'événement
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Écouteur l'événement au défilement
 */
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};
/**
 * Fait défiler jusqu'à un élément avec un décalage d'en-tête
 */
const scrollto = (el) => {
  let header = select("#header");
  let offset = header.offsetHeight;

  let elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos - offset,
    behavior: "smooth",
  });
};
const navbarlinksActive = (navbarlinks) => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};
const headerScrolled = (selectHeader) => {
  if (window.scrollY > 100) {
    selectHeader.classList.add("header-scrolled");
  } else {
    selectHeader.classList.remove("header-scrolled");
  }
};
const toggleBacktotop = (backtotop) => {
  if (window.scrollY > 100) {
    backtotop.classList.add("active");
  } else {
    backtotop.classList.remove("active");
  }
};

// Gestion images

const optimizeImage = (selector) => {
  const images = document.querySelectorAll(selector);
  function preloadImage(img) {
    const src = img.getAttribute(selector);
    if (!src) {
      return;
    }
    img.src = src;
  }
  const imgOptions = {
    threshod: 0,
    rootMargin: "0px 0px 300px 0px",
  };

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);

  images.forEach((image) => {
    imgObserver.observe(image);
  });
};

/**
 * Filtrer les réalisations (isotope et filter)
 */
const addFilter = () => {
  let portfolioContainer = select(".portfolio-container");

  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
    });

    let portfolioFilters = select("#portfolio-flters li", true);
    portfolioFilters.forEach((element) =>
      element.addEventListener("click", (e) => {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove("filter-active");
        });
        e.target.classList.add("filter-active");
        portfolioIsotope.arrange({
          filter: e.target.getAttribute("data-filter"),
        });
        // portfolioIsotope.on("arrangeComplete", function () {
        //   AOS.refresh();
        // });
      })
    );
  }
};

export {
  select,
  on,
  onscroll,
  scrollto,
  navbarlinksActive,
  headerScrolled,
  toggleBacktotop,
  optimizeImage,
  addFilter,
};
