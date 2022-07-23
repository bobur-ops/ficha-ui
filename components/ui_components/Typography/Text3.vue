<template>
  <div
    class="text-3"
    :class="{ bold: isBold, uppercase: isUpper, shadow: isShadow }"
    :style="`color: ${color}; ${
      isShadow ? `text-shadow: 0px 0px 3.5px ${color};` : ''
    }`"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TEXT_COLORS } from './constants'

export default Vue.extend({
  props: {
    color: {
      default: TEXT_COLORS.WHITE,
      type: String,
    },
    isBold: {
      default: false,
      type: Boolean,
    },
    isUpper: {
      default: false,
      type: Boolean,
    },
    isShadow: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      TEXT_COLORS,
    }
  },
})
</script>

<style lang="scss" scoped>
.text-3 {
  font-size: calculateVw($text-sm);
  font-family: 'FuturisExtra';
  &.bold {
    font-weight: 700;
  }
  &.uppercase {
    text-transform: uppercase;
  }
}
@media screen and (max-width: 768px) {
  .text-3 {
    font-size: calculateVw768($text-sm);
  }
}
</style>
