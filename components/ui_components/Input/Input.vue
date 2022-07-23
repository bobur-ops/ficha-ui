<template>
  <div class="input-wrapper">
    <input
      :type="type"
      class="input"
      :value="value"
      :placeholder="placeholder"
      :class="`${isUpper ? 'upper' : ''} ${size} ${isError ? 'error' : ''} ${
        disabled ? 'disabled' : ''
      } ${underline ? 'underline' : ''}`"
      @input="$emit('input', $event.target.value)"
    />
    <div class="input-icon">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: {
      default: 'text',
      type: String,
    },
    placeholder: {
      default: '',
      type: String,
    },
    isUpper: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'xs',
      type: String,
    },
    isError: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    value: {
      default: '',
      type: String,
    },
    underline: {
      default: false,
      type: Boolean,
    },
  },
})
</script>

<style lang="scss">
.input-wrapper {
  position: relative;
  display: flex;
}
.input {
  background: $deep-gray;
  width: 100%;
  border-radius: calculateVw(12);

  outline: none;
  border: none;
  color: white;
  font-family: 'Proxima Nova';
  font-size: calculateVw(16);
  &-icon {
    position: absolute;
    transition: 0.3s;
    top: 50%;
    transform: translateY(-50%);
    right: calculateVw(10);
    cursor: pointer;
    &:hover {
      opacity: 0.3;
    }
  }
}
.upper {
  text-transform: uppercase;
}
.error {
  background: rgba(255, 0, 0, 0.13);
  border: 1px solid #ff0000;
}
.disabled {
}
.underline {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0;
}
.xs {
  padding-top: calculateVw(10);
  padding-bottom: calculateVw(10);
  padding-left: calculateVw(14);
  padding-right: calculateVw(14);
}
.sm {
}
.md {
}
.lg {
  padding: calculateVw(42) calculateVw(22);
}

@media screen and (max-width: 768px) {
  .lg {
    padding: calculateVw768(22) calculateVw768(22);
  }
  .input {
    font-size: calculateVw768(18);
  }
  .xs {
    padding-top: calculateVw768(15);
    padding-bottom: calculateVw768(15);
    padding-left: calculateVw768(14);
    padding-right: calculateVw768(14);
  }
}
</style>
