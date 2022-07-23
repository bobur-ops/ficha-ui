<template>
  <Admin />
</template>
<script lang="ts">
import Vue from 'vue'
import Admin from '@/containers/Admin/index.vue'

export default Vue.extend({
  components: {
    Admin,
  },
  layout: 'empty',
})
</script>
