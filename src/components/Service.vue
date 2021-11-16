<template>
  <div
    class="col-xl-3 col-md-6 d-flex mt-4 align-items-stretch"
    data-aos="zoom-in"
    data-aos-delay="100"
  >
    <div class="icon-box">
      <div class="icon"><i :class="icon"></i></div>
      <h4>
        <a href="#"> {{ title }} </a>
      </h4>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    icon: String,
    title: String,
    description: String,
  },
};
</script>
<style lang="scss">
.icon-box {
  box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 30px;
  transition: all ease-in-out 0.4s;
  background: #fff;
  cursor: pointer;
  .icon {
    margin-bottom: 10px;
    i {
      color: #47b2e4;
      font-size: 36px;
      transition: 0.3s;
    }
  }
  h4 {
    font-weight: 500;
    margin-bottom: 15px;
    font-size: 24px;
    a {
      text-decoration: none;
      color: #37517e;
      transition: ease-in-out 0.3s;
    }
  }
  p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }
  &:hover {
    transform: translateY(-10px);
    h4 {
      a {
        text-decoration: none;
        color: #47b2e4;
      }
    }
  }
}
@media (max-width: 1024px) {
  .align-items-stretch {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    .icon-box {
      width: 100%;
    }
  }
}
</style>
