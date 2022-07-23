<template>
  <div class="main-stats">
    <div
      v-for="(item, index) in progressData"
      :key="index"
      class="main-stats__item"
    >
      <div class="progress-bar">
        <vue-ellipse-progress
          :progress="item.progress"
          font-color="#23f6f0"
          :size="134"
          line="square"
          font-size="24px"
          empty-color="transparent"
          thickness="20"
          angle="180"
          color="#23f6f0"
          :reverse="true"
        >
          <span slot="legend-value">%</span>
        </vue-ellipse-progress>
      </div>
      <Title2 style="text-align: center" :color="blueTextColor" is-upper>
        {{ item.count }}
      </Title2>
      <div class="progress-info">
        <Title2 :color="blueTextColor" is-upper>{{ item.info }}</Title2>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { PROGRESS_BAR_DATA } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Title2 from '@/components/ui_components/Typography/Title2.vue'
export default Vue.extend({
  components: {
    Title2,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      progressData: PROGRESS_BAR_DATA,
    }
  },
  mounted() {
    this.scrollAnimation()
  },
  methods: {
    scrollAnimation() {
      const gsap = this.$gsap
      const ScrollTrigger = this.$ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      const els = document.querySelectorAll('.progress-bar')

      els.forEach((el) => {
        gsap.fromTo(
          el,
          {
            display: 'none',
          },
          {
            display: 'block',
            scrollTrigger: {
              trigger: el,
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    },
  },
})
</script>
<style lang="scss" scoped>
.main-stats {
  max-width: calculateVw(1174);
  margin: 0 auto calculateVw(220);
  @include justify-align-between;
  &__item {
    @include justify-center;
    flex-direction: column;
    .progress {
      &-bar {
        // margin-bottom: calculateVw(35);
        margin: 0 auto calculateVw(35);
      }
      &-info {
        margin-top: calculateVw(42);
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .main-stats {
    flex-direction: column;
    gap: calculateVw768(25);
  }
}
</style>
