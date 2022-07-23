<template>
  <div class="main-mentors">
    <div class="main-mentors__title">
      <Text2 :color="textBlueColor" is-upper>куратор этого курса</Text2>
    </div>
    <div class="main-mentors__subtitle">
      <Text3 is-upper :color="textGrayColor"
        >это те, кто тут главный. пока.но, скоро им станешь и ты.
      </Text3>
    </div>
    <div class="main-mentors__content">
      <MentorsSlider :data="mentors" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { MENTORS } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'

import MentorsSlider from '@/components/MentorsSlider.vue'

export default Vue.extend({
  components: {
    Text2,
    Text3,
    MentorsSlider,
  },
  data() {
    return {
      textBlueColor: TEXT_COLORS.BLUE,
      textGrayColor: TEXT_COLORS.GRAY,
      textBlackColor: TEXT_COLORS.BLACK,
      mentors: MENTORS,
    }
  },
})
</script>
<style lang="scss" scoped>
.main-mentors {
  max-width: calculateVw(1174);
  margin: 0 auto calculateVw(234);
  &__title {
    text-align: center;
  }
  &__subtitle {
    margin: calculateVw(26) auto calculateVw(162);
    text-align: center;
    max-width: calculateVw(500);
  }
  &__content {
  }
}
</style>
