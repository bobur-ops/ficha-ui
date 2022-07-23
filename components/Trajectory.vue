<template>
  <div class="trajectory">
    <div class="trajectory-numbers">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="trajectory-numbers__item"
      >
        <div class="item-number">{{ item.id }}</div>
        <div v-if="item.id !== 5" class="item-line"></div>
      </div>
    </div>
    <div class="trajectory-texts">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="trajectory-texts__item"
      >
        <Text3 class="item-text" is-upper>{{ item.text }}</Text3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text3 from '@/components/ui_components/Typography/Text3.vue'

type dataType = {
  id: number
  text: string
}[]
export default Vue.extend({
  components: {
    Text3,
  },
  props: {
    data: {
      default(): dataType {
        return []
      },
      type: Array,
    },
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
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

      const elNums = document.querySelectorAll('.item-number')
      const elLines = document.querySelectorAll('.item-line')
      const elTexts = document.querySelectorAll('.item-text')

      elNums.forEach((el) => {
        gsap.fromTo(
          el,
          {
            backgroundColor: '#2D2B2B',
          },
          {
            backgroundColor: '#23F6F0',
            duration: 0.1,
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: 'top 70%',
              end: 'bottom 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
      elLines.forEach((el) => {
        gsap.fromTo(
          el,
          {
            backgroundColor: '#2D2B2B',
          },
          {
            backgroundColor: '#23F6F0',
            duration: 0.1,
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: 'top 70%',
              end: 'bottom 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
      elTexts.forEach((el) => {
        gsap.fromTo(
          el,
          {
            color: '#2D2B2B',
          },
          {
            color: '#23F6F0',
            duration: 0.1,
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: 'top 70%',
              end: 'bottom 70%',
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
.trajectory {
  @include align-center;
  &-numbers {
    margin-right: calculateVw(39);
    &__item {
      .item-number {
        @include justify-align-center;
        width: calculateVw(33);
        height: calculateVw(33);
        border-radius: 50%;
        background: $blue;
        font-family: 'FuturisExtra';
        font-size: calculateVw(24);
      }
      .item-line {
        width: calculateVw(5);
        height: calculateVw(90);
        background: $blue;
        margin: 0 auto;
      }
    }
  }
  &-texts {
    &__item {
      max-width: calculateVw(420);
      margin-bottom: calculateVw(40);
    }
  }
}
@media screen and (max-width: 768px) {
  .trajectory {
    align-items: flex-start;
  }
  .trajectory-numbers__item .item-number {
    width: calculateVw768(40);
    height: calculateVw768(40);
    font-size: calculateVw768(28);
  }
  .trajectory-numbers__item .item-line {
    height: calculateVw768(130);
  }
  .trajectory-texts .trajectory-texts__item {
    margin-bottom: calculateVw768(60);
  }
  .trajectory-numbers {
    margin-right: calculateVw768(60);
  }
}
</style>
