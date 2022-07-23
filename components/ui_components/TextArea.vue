<template>
  <textarea
    class="textarea"
    :class="`${isUpper ? 'upper' : ''}`"
    cols="30"
    rows="10"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isUpper: {
      default: false,
      type: Boolean,
    },
  },
})
</script>
<style lang="scss" scoped>
.textarea {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-family: 'Proxima Nova';
  font-size: calculateVw(14);
  color: $white;
  padding: calculateVw(22);
  background: $deep-gray;
  border-radius: calculateVw(12);
}
.textarea.upper {
  text-transform: uppercase;
}
@media screen and (max-width: 768px) {
  .textarea {
    font-size: calculateVw768(14);
  }
}
</style>
