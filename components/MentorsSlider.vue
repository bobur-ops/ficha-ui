<template>
  <div class="mentors-slider">
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          v-for="(item, index) in data"
          :key="index"
          class="swiper-slide mentor"
        >
          <div class="mentor-img">
            <img
              :src="require(`@/assets/images/mentors/${item.img}.png`)"
              alt=""
            />
          </div>
          <div class="mentor-info">
            <Text2 class="mentor-info__name" :color="redTextColor" is-upper>{{
              item.name
            }}</Text2>
            <Text3 is-upper>{{ item.desc }}</Text3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Autoplay } from 'swiper'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import 'swiper/swiper-bundle.css'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
Swiper.use([Autoplay])

type dataType = {
  name: string
  label: string
  desc: string
  img: string
}[]

export default Vue.extend({
  components: {
    Text2,
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
      redTextColor: TEXT_COLORS.RED,
    }
  },
  mounted() {
    this.swiper()
  },
  methods: {
    swiper() {
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        // spaceBetween: -400,
        autoplay: {
          delay: 5000,
        },
      })
      // const mentors = document.querySelectorAll('.mentor')
      // mentors.forEach((el: any, index) => {
      //   if (index === swiper.activeIndex) {
      //     el.style.opacity = '1'
      //   } else {
      //     el.style.opacity = '.1'
      //   }
      // })
      // swiper.on('slideChange', function () {
      //   const mentors = document.querySelectorAll('.mentor')
      //   mentors.forEach((el: any, index) => {
      //     if (index === swiper.activeIndex) {
      //       el.style.opacity = '1'
      //     } else {
      //       el.style.opacity = '.1'
      //     }
      //   })
      // })
      return swiper
    },
  },
})
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  margin-left: 30%;
  transform: translateX(-50%);
}
.mentor {
  transition: 0.3s;
  @include align-center;
  &-img {
    margin-right: calculateVw(54);
    img {
      width: calculateVw(240);
      height: calculateVw(240);
    }
  }
  &-info {
    max-width: calculateVw(350);
    &__name {
      margin-bottom: calculateVw(30);
    }
  }
}
@media screen and (max-width: 768px) {
  .swiper-wrapper {
    margin-left: 20%;
  }
  .mentor-img img {
    width: calculateVw768(220);
    height: calculateVw768(220);
  }
}
</style>
