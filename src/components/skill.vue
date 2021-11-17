<template>
  <div>
    <h5 class="skill">{{ name }}</h5>
    <b-progress :max="max">
      <b-progress-bar
        :value="level"
        :label="`${(level / max) * 100}%`"
      ></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
import { select } from "../utils/Functions";
export default {
  name: "Skill",
  data() {
    return {
      value: 10,
      max: 100,
    };
  },
  props: {
    level: Number,
    name: String,
    
  },
};
</script>

<style lang="scss" scoped>
.skill {
  padding: 0 !important;
  margin: 0 0 6px 0 !important;
  text-transform: uppercase !important;
  display: block !important;
  font-weight: 600 !important;
  font-size: 15px;
  font-family: "Poppins", sans-serif !important;
  color: #37517e !important;
}
.progress {
  height: 22px !important;
  display: block;
  background: #e8edf5;
  border-radius: 0;

  & .progress-bar {
    width: 1px;
    height: 20px;
    transition: all 0.9s ease;
    background-color: #4668a2 !important;
  }
}
</style>
