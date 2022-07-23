<template>
  <CreatePost />
</template>
<script lang="ts">
import Vue from 'vue'
import CreatePost from '@/containers/CreatePost/index.vue'

export default Vue.extend({
  components: {
    CreatePost,
  },
  layout: 'empty',
})
</script>
