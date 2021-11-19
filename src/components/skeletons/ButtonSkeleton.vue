<template>
  <li>
    <b-skeleton type="button"></b-skeleton>
  </li>
</template>

<script>
export default {
  name: "ButtonSkeleton",
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
}
</style>
