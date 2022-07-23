<template>
  <Login />
</template>
<script lang="ts">
import Vue from 'vue'
import Login from '@/containers/Mentor/Login.vue'

export default Vue.extend({
  components: {
    Login,
  },
  layout: 'empty',
})
</script>
<style lang="scss" scoped></style>
