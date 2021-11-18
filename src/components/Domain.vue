<template>
  <li
    :data-filter="[index === 0 ? '*' : '.filter-' + domain.name.toLowerCase()]"
    :class="[index === 0 && 'filter-active']"
    @click="toggleDomain(domain)"
  >
    {{ domain.name }}
  </li>
</template>

<script>
import Isotope from "../../node_modules/isotope-layout";
import AOS from "../../node_modules/aos";
import { select, on } from "../utils/Functions";
export default {
  name: "Domain",
  props: {
    domain: Object,
    index: Number,
  },
  methods: {
    toggleDomain(domain) {
      this.$emit("show-project", domain);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
