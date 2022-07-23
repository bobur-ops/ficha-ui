<template>
  <MentorApps />
</template>
<script lang="ts">
import Vue from 'vue'
import MentorApps from '@/containers/Owner/components/MentorApps.vue'

export default Vue.extend({
  components: {
    MentorApps,
  },
  layout: 'empty',
})
</script>
<style lang="scss" scoped></style>
