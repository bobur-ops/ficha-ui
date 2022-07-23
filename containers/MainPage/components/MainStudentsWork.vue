<template>
  <div class="main-students">
    <div class="main-students__title">
      <Text2 :color="blueTextColor" is-upper>работы наших учеников</Text2>
      <div class="subtitle">
        <Text3 :color="grayTextColor" is-upper>
          они тоже начинали с нуля и сомневались, что у них не получится, но
          рискнули
        </Text3>
      </div>
    </div>
    <div class="main-students__works">
      <div
        v-for="(work, index) in worksData"
        :key="index"
        class="main-students__work"
      >
        <div class="work-img">
          <img
            :src="require(`@/assets/images/studentsWorks/${work.img}.png`)"
            alt=""
          />
          <div class="work-img__layer"></div>
        </div>
        <div
          :class="`${
            work.label === 'дизайнер' ? 'work-label--red' : 'work-label--blue'
          }`"
          class="work-label"
        >
          <Text4
            :color="work.label === 'дизайнер' ? whiteTextColor : blackTextColor"
            is-upper
            >{{ work.label }}</Text4
          >
        </div>
        <div
          v-if="work.authorRegisteredAt && work.timeLearning && work.author"
          class="work-info"
        >
          <Text4 :color="whiteTextColor" is-upper>
            {{ work.author }} <br />
            зарегистрирован с {{ work.authorRegisteredAt }}
          </Text4>
          <Text4
            :color="work.label === 'дизайнер' ? redTextColor : blueTextColor"
            is-upper
          >
            обучается
            {{
              `${work.timeLearning === 1 ? `год` : `${work.timeLearning} лет`}`
            }}
          </Text4>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { STUDENTS_WORKS } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'

export default Vue.extend({
  components: {
    Text4,
    Text2,
    Text3,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      grayTextColor: TEXT_COLORS.GRAY,
      blackTextColor: TEXT_COLORS.BLACK,
      whiteTextColor: TEXT_COLORS.WHITE,
      redTextColor: TEXT_COLORS.RED,
      worksData: STUDENTS_WORKS,
    }
  },
})
</script>
<style lang="scss" scoped>
.main-students {
  max-width: calculateVw(1440);
  margin: 0 auto calculateVw(220);
  &__title {
    text-align: center;
    max-width: calculateVw(550);
    margin: 0 auto calculateVw(79);
    .subtitle {
      margin-top: calculateVw(26);
    }
  }
  &__works {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: calculateVw(22);
  }
  &__work {
    position: relative;
    height: calculateVw(308);
    .work-img {
      position: relative;
      transition: 0.3s ease-in-out;
      img {
        object-fit: cover;
        object-position: center;
        width: calculateVw(410);
        height: calculateVw(308);
      }
      &__layer {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: $dark;
        opacity: 0.7;
        transition: opacity 0.3s ease-in-out;
      }
      &:hover {
        transform: scale(1.1);
        z-index: 2;
        .work-img__layer {
          opacity: 0;
        }
      }
    }
    &:hover {
      .work-label {
        opacity: 0;
      }
      .work-info {
        opacity: 0;
      }
    }
    .work-label {
      @include justify-align-center;
      padding: calculateVw(15) calculateVw(30);
      position: absolute;
      z-index: 2;
      left: calculateVw(22);
      top: calculateVw(22);
      border-radius: calculateVw(12);
      transition: 0.3s ease-in-out;
    }
    .work-label--blue {
      background: $blue;
    }
    .work-label--red {
      background: $red;
    }
    .work-info {
      position: absolute;
      z-index: 3;
      right: calculateVw(10);
      bottom: calculateVw(22);
      text-align: center;
    }
  }
}
@media screen and (max-width: 768px) {
  .work-img img {
    width: calculateVw768(250) !important;
  }
}
</style>
