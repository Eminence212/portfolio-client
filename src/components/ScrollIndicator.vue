<template>
  <div class="progress-container">
    <div class="progress-bar" id="scrollBar"></div>
  </div>
</template>

<script>
export default {
  name: "ScrollIndicator",
  mounted() {
    // When the user scrolls the page, execute scrollIndicator
    window.onscroll = function () {
      scrollIndicator();
    };

    function scrollIndicator() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("scrollBar").style.width = scrolled + "%";
    }
  },
};
</script>

<style lang="scss" scoped>
.progress-container {
  position: fixed;
  width: 100%;
  height: 5px;
  z-index: 999;
  top: 68px;
  transition: all 0.3s ease;
  .progress-bar {
    height: 100%;
    background: #47b2e4;
    width: 0%;
  }
}
@media (max-width: 768px) {
  .progress-container {
    top: 60px;
  }
}
</style>
