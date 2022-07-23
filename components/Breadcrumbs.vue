<template>
  <div class="crumbs">
    <NuxtLink tag="div" to="/">
      <Text2 class="crumbs-item" is-upper>Main &nbsp;</Text2>
    </NuxtLink>
    <NuxtLink
      v-for="(crumb, idx) in params"
      :key="idx"
      tag="div"
      :to="crumb.path"
    >
      <Text2
        class="crumbs-item"
        :color="idx === params.length - 1 ? redTextColor : whiteTextColor"
        is-upper
        >/ &nbsp;{{ crumb.name }} &nbsp;</Text2
      >
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
export default Vue.extend({
  components: {
    Text2,
  },
  props: {
    params: {
      default: [],
      type: Array,
    },
  },
  data() {
    return {
      whiteTextColor: TEXT_COLORS.WHITE,
      redTextColor: TEXT_COLORS.RED,
    }
  },
})
</script>
<style lang="scss" scoped>
.crumbs {
  max-width: calculateVw(1174);
  margin: 0 auto;
  display: flex;
  padding: calculateVw(50) calculateVw(20);
  &-item {
    cursor: pointer;
    transition: 0.3s;
    font-style: italic;
    &:hover {
      text-shadow: 0px 0px 3.5px $blue;
      color: $blue !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .crumbs {
    padding: calculateVw768(50) calculateVw768(20);
  }
}
</style>
