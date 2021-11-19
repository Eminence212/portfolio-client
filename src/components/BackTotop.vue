<template>
  <a
    href="#"
    class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bx bx-up-arrow-alt"></i
  ></a>
</template>

<script>
import { select, onscroll } from "../utils/Functions";
export default {
  name: "BackTotop",
  mounted() {
    let backtotop = select(".back-to-top");

    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      document.addEventListener("scroll", toggleBacktotop);
    }
  },
};
</script>

<style lang="scss">
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #47b2e4;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
  i {
    font-size: 24px;
    color: #fff;
    line-height: 0;
  }
  &:hover {
    background: #6bc1e9;
    color: #fff;
  }
}
.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
</style>
