<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Contactez - Moi</h2>
      </div>
      <div class="row">
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <div class="address">
              <i class="bx bx-target-lock"></i>
              <h4>Adresse:</h4>
              <p>
                {{ identities.adresse }}
              </p>
            </div>
            <div class="email">
              <a href="mailto:mulemanowa@gmail.com"
                ><i class="bx bxs-envelope"></i
              ></a>
              <h4>Email:</h4>
              <p>{{ identities.email }}</p>
            </div>
            <div class="phone">
              <a :href="['tel:' + identities.phoneNumber]"
                ><i class="bx bxs-phone"></i
              ></a>
              <h4>Téléphone :</h4>
              <p>
                {{ identities.phoneNumber }}<br />
                00243 899 548 513
              </p>
            </div>
            <div class="phone">
              <i class="bi bx bx-time"></i>
              <h4>Horaire :</h4>
              <p>Lundi - Vendredi <br />09H00 - 18H00</p>
            </div>
            <h4>Mes réseaux sociaux</h4>
            <div class="social-links">
              <a :href="identities.twitter"><i class="bx bxl-twitter"></i></a>
              <a :href="identities.facebook"><i class="bx bxl-facebook"></i></a>
              <a :href="identities.instagram"
                ><i class="bx bxl-instagram"></i
              ></a>
              <a :href="identities.skype"><i class="bx bxl-skype"></i></a>
              <a :href="identities.linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <!-- action="https://formcarry.com/s/5QXD2KZC3Ap"
            method="post"
             accept-charset="UTF-8" -->
          <form class="formulaire" @submit="onSubmit">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">Nom</label>
                <input
                  type="text"
                  name="name"
                  v-model="name"
                  class="form-control"
                  id="name"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="name">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="name">Objet</label>
              <input
                type="text"
                class="form-control"
                name="object"
                v-model="object"
                id="object"
              />
            </div>
            <div class="form-group">
              <label for="name">Message</label>
              <textarea
                class="form-control"
                name="message"
                v-model="message"
                rows="10"
                required
              ></textarea>
            </div>
            <!-- <input type="hidden" name="_gotcha"> -->
            <div class="text-center">
              <button type="submit">
                {{ isLoading ? "Loding..." : "Envoyer" }}
              </button>
            </div>
          </form>
        </div>
      </div>
      <SnackBar :msg="msg" />
    </div>
  </section>
</template>

<script>
import SnackBar from "./SnackBar.vue";
import { select } from "../utils/Functions";
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      object: "",
      message: "",
      msg: "",
      isLoading: false,
    };
  },
  props: {
    identities: Object,
  },
  components: {
    SnackBar,
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const element = select("#snackbar");

      if (!this.name) {
        this.msg = "Saisir votre nom";
      }
      if (!this.email) {
        this.msg = "Saisir votre email";
      }
      if (!this.message) {
        this.msg = "Saisir un message";
      }
      const newMessage = {
        name: this.name,
        email: this.email,
        object: this.object,
        message: this.message,
      };
      //
      this.isLoading = true;
      const res = await fetch(
        "https://api-portfolio-eminence.herokuapp.com/api/opinion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newMessage),
        }
      );
      const data = await res.json();

      if (data) {
        this.msg = "Votre message a été envoyé avec succès !";
        this.name = "";
        this.email = "";
        this.object = "";
        this.message = "";
      } else {
        this.msg = "Votre message n'a pas été envoyé !"
        }
      //
     this.isLoading = false;
      element.className = "show";
      setTimeout(function () {
        element.className = element.className.replace("show", "");
      }, 3000);
    },
  },
};
</script>

<style lang="scss">
.contact {
  .info {
    border-top: 3px solid #47b2e4;
    border-bottom: 3px solid #47b2e4;
    padding: 30px;
    background: #fff;
    width: 100%;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
    i {
      font-size: 20px;
      color: #47b2e4;
      float: left;
      width: 44px;
      height: 44px;
      background: #e7f5fb;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
    }
    h4 {
      padding: 0 0 0 60px;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 5px;
      color: #37517e;
    }
    p {
      padding: 0 0 10px 60px;
      margin-bottom: 20px;
      font-size: 14px;
      color: #6182ba;
    }
    .email {
      p {
        padding-top: 5px;
      }
      &:hover {
        i {
          background: #47b2e4;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .social-links {
      padding-left: 60px;
      a {
        display: inline-block;
        margin-right: 5px;
        i {
          &:hover {
            background: #209dd8;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
    .address {
      &:hover {
        i {
          background: #47b2e4;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .phone {
      &:hover {
        i {
          background: #47b2e4;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .formulaire {
    width: 100%;
    border-top: 3px solid #47b2e4;
    border-bottom: 3px solid #47b2e4;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
    .form-group {
      padding-bottom: 8px;
      margin-bottom: 20px;
    }
    .validate {
      display: none;
      color: rgb(236, 109, 109);
      margin: 0 0 15px 0;
      font-weight: 400;
      font-size: 13px;
    }
    label {
      padding-bottom: 8px;
    }
    input {
      border-radius: 0;
      box-shadow: none;
      font-size: 14px;
      border-radius: 4px;
      height: 44px;
      &:focus {
        border-color: #47b2e4;
      }
    }
    textarea {
      border-radius: 0;
      box-shadow: none;
      font-size: 14px;
      border-radius: 4px;
      padding: 10px 12px;
      &:focus {
        border-color: #47b2e4;
      }
    }
    button[type="submit"] {
      background: #47b2e4;
      border: 0;
      padding: 12px 34px;
      color: #fff;
      transition: 0.4s;
      border-radius: 50px;
      &:hover {
        background: #209dd8;
      }
    }
  }
}
@media (max-width: 1024px) {
  .social-links {
    display: flex;
    justify-content: space-between;
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
