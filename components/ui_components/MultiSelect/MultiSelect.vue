<template>
  <div class="multi-select">
    <button
      v-for="(item, index) in data"
      :key="index"
      :class="`multi-select__item ${item.selected ? 'selected' : ''} ${
        item.selected ? buttonColor : ''
      } `"
      @click="$emit('selectItemFromSelect', item.name)"
    >
      <Text3
        :color="`${item.selected ? textColor : SELECT_TEXT_COLORS.WHITE}`"
        >{{ item.name }}</Text3
      >
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SELECTED_BUTTON_COLORS, SELECT_TEXT_COLORS } from './constants'
import Text3 from '@/components/ui_components/Typography/Text3.vue'

export default Vue.extend({
  components: {
    Text3,
  },
  props: {
    data: {
      default() {
        return []
      },
      type: Array,
    },
    textColor: {
      default: SELECT_TEXT_COLORS.RED,
      type: String,
    },
    buttonColor: {
      default: SELECTED_BUTTON_COLORS.WHITE,
      type: String,
    },
  },
  data() {
    return {
      SELECTED_BUTTON_COLORS,
      SELECT_TEXT_COLORS,
    }
  },
})
</script>

<style lang="scss" scoped>
.multi-select {
  display: flex;
  &__item {
    @include justify-align-center;
    padding: calculateVw(12) calculateVw(13);
    background: $dark-light;
    border-radius: calculateVw(12);
    margin-right: calculateVw(12);
    border: none;
    outline: none;
    cursor: pointer;
    opacity: 0.4;
    &:last-child {
      margin-right: 0;
    }
    &.selected {
      opacity: 1;
    }
    &.white {
      background: $white;
    }
    &.red {
      background: $red;
    }
    &.blue {
      background: $blue;
    }
  }
}
</style>
