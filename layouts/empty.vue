<template>
  <div class="page">
    <Nuxt />
    <div class="ellipses"></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  min-height: 100vh;
  .ellipses {
    background-image: url('../assets/blur.svg');
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -50;
    opacity: 0.6;
  }
}
</style>
