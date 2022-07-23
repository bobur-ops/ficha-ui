<template>
  <div class="wrapper" @click="toggleSwitch">
    <div class="label" :class="{ active: isActive }"></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    defaultState: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      currentState: this.defaultState,
    }
  },
  computed: {
    isActive() {
      return this.currentState
    },
  },
  watch: {
    defaultState: function defaultState() {
      this.currentState = Boolean(this.defaultState)
    },
  },
  methods: {
    toggleSwitch() {
      this.currentState = !this.currentState
      this.$emit('change', this.currentState)
    },
  },
})
</script>
<style lang="scss" scoped>
.wrapper {
  width: calculateVw(45);
  height: calculateVw(25);
  background: $white;
  border-radius: calculateVw(2);
  padding: calculateVw(2);
  position: relative;
  cursor: pointer;
}
.label {
  position: absolute;
  top: calculateVw(2.5);
  bottom: calculateVw(2.5);
  left: calculateVw(2.5);
  width: calculateVw(20);
  border-radius: calculateVw(2);
  background: $red;
  transition: 0.3s;
  transform: translateX(calculateVw(0));
}
.label.active {
  background: $blue;
  transform: translateX(calculateVw(20));
}
@media screen and (max-width: 768px) {
  .wrapper {
    width: calculateVw768(45);
    height: calculateVw768(25);
    border-radius: calculateVw768(2);
    padding: calculateVw768(2);
  }
  .label {
    top: calculateVw768(2.5);
    bottom: calculateVw768(2.5);
    left: calculateVw768(2.5);
    width: calculateVw768(20);
  }
  .label.active {
    transform: translateX(calculateVw768(20));
  }
}
</style>
