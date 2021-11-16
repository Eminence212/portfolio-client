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
      >
        <li data-filter="*" class="filter-active">TOUS</li>
        <li data-filter=".filter-app">MOBILE</li>
        <li data-filter=".filter-card">WEB</li>
        <li data-filter=".filter-web">GRAPHIQUE</li>
      </ul>

      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
      

       Projects

        <!-- <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-img">
            <img
              src="/assets/img/portfolio/appmobile/app2.jpg"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="portfolio-info">
            <h4>Géolocalisation des établissements scolaires en RDC</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              molestias vel fugit minus ullam sed, veniam suscipit illo
              perferendis ab beatae, eveniet odio nesciunt consectetur odit.
              Recusandae quos unde omnis?
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/appweb/app1.jpg"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="portfolio-info">
            <h4>Site web de visite touristique</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis aspernatur doloribus officia ipsam nisi eum dicta
              veniam natus quisquam eligendi aliquam, facilis quod, iure unde
              tempora ipsa praesentium vero maiores.
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/design/design2.jpg"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="portfolio-info">
            <h4>Coneption graphique</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ab
              dignissimos dolorem, accusamus recusandae mollitia soluta
              blanditiis porro, sapiente fuga at perspiciatis magnam excepturi,
              aspernatur eaque nostrum doloribus debitis odit.
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/appmobile/app3.jpg"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="portfolio-info">
            <h4>Suivi et évaluation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              repudiandae adipisci beatae necessitatibus nam, omnis deserunt
              iste eveniet et incidunt eos expedita illo magni, praesentium in,
              consectetur quis magnam dignissimos.
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/appweb/app2.jpg"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="portfolio-info">
            <h4>Site web pour le parcours scolaire des apprenants en RDC</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus enim in blanditiis possimus earum saepe aperiam ipsum?
              Aliquam consequatur doloremque soluta tenetur quibusdam eaque,
              repudiandae dolorem quis sapiente, quaerat incidunt.
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/appweb/app3.jpg"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="portfolio-info">
            <h4>Site de e-Commerce</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              distinctio facilis deserunt nesciunt ipsa quaerat, debitis
              temporibus dolor corrupti vero ad quos incidunt illo dolore
              molestias. Pariatur vel porro commodi?
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/design/design3.jpg"
              class="img-fluid"
              alt="..."
            />
          </div>
          <div class="portfolio-info">
            <h4>UX Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium quisquam ut, nemo quos ea dolorum animi sequi
              dignissimos similique temporibus beatae blanditiis rem adipisci
              consequuntur omnis repellat non magni accusamus.
            </p>
          </div>
        </div>
         -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  props: {
    projects: Array,
  },
};
</script>

<style lang="scss">
.portfolio {
  #portfolio-flters {
    list-style: none;
    margin-bottom: 20px;
    li {
      cursor: pointer;
      display: inline-block;
      margin: 10px 5px;
      font-size: 15px;
      font-weight: 500;
      line-height: 1;
      color: #444444;
      transition: all 0.3s;
      padding: 8px 20px;
      border-radius: 50px;
      font-family: "Poppins", sans-serif;
      &:hover {
        background: #47b2e4;
        color: #fff;
        cursor: pointer;
      }
    }
    li.filter-active {
      background: #47b2e4;
      color: #fff;
    }
  }
  .portfolio-item {
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
