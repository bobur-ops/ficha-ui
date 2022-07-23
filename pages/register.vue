<template>
  <Register />
</template>
<script lang="ts">
import Vue from 'vue'
import Register from '@/containers/User/Register.vue'

export default Vue.extend({
  components: {
    Register,
  },
  layout: 'empty',
})
</script>
