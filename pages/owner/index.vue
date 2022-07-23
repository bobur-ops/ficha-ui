<template>
  <Owner />
</template>
<script lang="ts">
import Vue from 'vue'
import Owner from '@/containers/Owner/index.vue'

export default Vue.extend({
  components: {
    Owner,
  },
  layout: 'empty',
})
</script>
