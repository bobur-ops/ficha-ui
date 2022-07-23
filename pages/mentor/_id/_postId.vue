<template>
  <PostPage />
</template>
<script lang="ts">
import Vue from 'vue'
import PostPage from '@/containers/Mentor/components/PostPage.vue'

export default Vue.extend({
  components: {
    PostPage,
  },
  layout: 'empty',
})
</script>
<style lang="scss" scoped></style>
