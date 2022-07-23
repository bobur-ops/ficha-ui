<template>
  <MainPage />
</template>

<script lang="ts">
import Vue from 'vue'
import MainPage from '@/containers/MainPage/index.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    MainPage,
  },
})
</script>
