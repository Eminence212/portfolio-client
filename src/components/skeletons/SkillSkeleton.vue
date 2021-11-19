<template>
  <div>
    <b-skeleton animation="throb" width="100%" class="progress"></b-skeleton>
  </div>
</template>

<script>
export default {
  name: "SkillSkeleton",
};
</script>

<style lang="scss" scoped>
.progress {
  height: 22px !important;
  display: block;
  margin: 20px;
}
</style>
