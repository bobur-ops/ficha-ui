<template>
  <div class="page">
    <Header :items="NAIN_HEADER_NAVIGATION_ITEMS" />
    <Nuxt />
    <Footer />
    <div class="ellipses">
      <div class="img"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

import { NAIN_HEADER_NAVIGATION_ITEMS } from '@/components/Header/constants'
export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      NAIN_HEADER_NAVIGATION_ITEMS,
    }
  },
})
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  .ellipses {
    background-image: url('../assets/blur.svg');
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -50;
    opacity: 0.7;
  }
}
</style>
