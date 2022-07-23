<template>
  <User :login="$route.params.login" />
</template>
<script lang="ts">
import Vue from 'vue'
import User from '@/containers/User/components/User.vue'

export default Vue.extend({
  components: {
    User,
  },
  layout: 'empty',
})
</script>
