<template>
  <button
    :type="type"
    :class="`${isRound ? 'round' : ''} ${isUpper ? 'uppercase' : ''} ${
      disabled ? 'disabled' : ''
    } button-${color} ${disabled ? '' : `button-glitch-${color}`}`"
    class="button"
    @click="click"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { BUTTON_VARIANTS } from './constants'

export default Vue.extend({
  props: {
    type: {
      default: 'button',
      type: String,
    },
    color: {
      default: BUTTON_VARIANTS.PRIMARY,
      type: String,
    },
    isRound: {
      default: false,
      type: Boolean,
    },
    isUpper: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      BUTTON_VARIANTS,
    }
  },
  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('click')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  @include justify-align-center;
  padding: calculateVw(15) calculateVw(29);
  font-family: 'FuturisExtra';
  font-size: calculateVw(14);
  border: 0;
  outline: none;
  position: relative;
  text-decoration: none;
  cursor: pointer;
}
.button {
  &-secondary {
    background-color: $red;
  }
  &-primary {
    background-color: $blue;
  }
  &-gray {
    background-color: $deep-gray;
  }
  &-error {
    background-color: $error;
  }
  .round-md {
    border-radius: calculateVw(12);
  }
  .uppercase {
    text-transform: uppercase;
  }
}
.button.disabled {
  background-color: $dark-light;
}
.button-glitch-primary {
  &:hover {
    &:before,
    &:after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0.8;
    }
    &:after {
      background: $red;
      z-index: -2;
      animation: glitch-button 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
        both infinite;
    }
    &:before {
      background: $blue;
      z-index: -1;
      animation: glitch-button 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        infinite;
    }
  }
}
.button-glitch-secondary {
  &:hover {
    &:before,
    &:after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0.8;
    }
    &:after {
      background: $blue;
      z-index: -2;
      animation: glitch-button 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
        both infinite;
    }
    &:before {
      background: $red;
      z-index: -1;
      animation: glitch-button 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        infinite;
    }
  }
}

@media screen and (max-width: 768px) {
  .button {
    font-size: calculateVw768(14);
    padding: calculateVw768(15) calculateVw768(29);
  }
}
</style>
