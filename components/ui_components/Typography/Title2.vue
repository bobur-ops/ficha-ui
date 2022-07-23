<template>
  <div
    class="title-2"
    :class="{ bold: isBold, uppercase: isUpper }"
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
.title-2 {
  font-size: calculateVw($text-lg);
  letter-spacing: calculateVw(1.6);
  font-family: 'FuturisExtra';
  line-height: calculateVw(30);
  &.bold {
    font-weight: 700;
  }
  &.uppercase {
    text-transform: uppercase;
  }
}
</style>
