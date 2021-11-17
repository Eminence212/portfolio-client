<template>
  <a
    href="#"
    class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bx bx-up-arrow-alt"></i
  ></a>
</template>

<script>
export default {
  name: "BackTotop",
};
</script>

<style lang="scss">
.back-to-top {
  position: fixed;
  visibility: visible;
  opacity: 1;
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
