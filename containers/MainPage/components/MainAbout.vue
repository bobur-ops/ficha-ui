<template>
  <div class="main-about">
    <div class="main-about__title">
      <Text2 :color="blueTextColor" is-upper>что я могу потерять</Text2>
      <div class="main-about__subtitle">
        <Text3 :color="grayTextColor" is-upper
          >здесь тереяем время мы, но пока нам это не перестало нравиться, ты
          можешь этим воспользоваться</Text3
        >
      </div>
    </div>
    <div class="main-about__content">
      <div class="content__img">
        <graphSectionImage />
      </div>
      <div class="content-trajectory">
        <Trajectory :data="trajectoryData" />
      </div>
    </div>
    <div class="main-about__feats">
      <div v-for="(item, index) in featsData" :key="index" class="feats-item">
        <div class="feats-item__img">
          <img
            :src="require(`@/assets/images/aboutFeats/${item.img}.svg`)"
            alt=""
          />
        </div>
        <div class="feats-item__text">
          <Text2 :color="blueTextColor" is-upper>
            {{ item.text }}
          </Text2>
        </div>
      </div>
    </div>
    <div class="main-about__info">
      <div class="info-img">
        <img src="@/assets/images/illustrations/aboutBottom.svg" alt="" />
      </div>
      <div class="info-text">
        <Text2 :color="blueTextColor" is-upper>
          удобный интерфейс личного кабинета с психоустойчивым куратором,
          который сможет отвечать на одни и те же вопросы.
        </Text2>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TRAJECTORY_DATA, ABOUT_FEATS } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import graphSectionImage from '@/assets/images/illustrations/svg/graphSectionImage.vue'
import Trajectory from '@/components/Trajectory.vue'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'

export default Vue.extend({
  components: {
    Text3,
    Text2,
    graphSectionImage,
    Trajectory,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      grayTextColor: TEXT_COLORS.GRAY,
      trajectoryData: TRAJECTORY_DATA,
      featsData: ABOUT_FEATS,
    }
  },
})
</script>
<style lang="scss" scoped>
.main-about {
  max-width: calculateVw(1174);
  margin: 0 auto calculateVw(112);
  &__title {
    text-align: center;
    margin-bottom: calculateVw(162);
  }
  &__subtitle {
    max-width: calculateVw(500);
    margin: calculateVw(26) auto 0;
  }
  &__content {
    @include justify-end;
    position: relative;
    .content__img {
      position: absolute;
      left: calculateVw(-200);
    }
    .content-trajectory {
      margin-left: calculateVw(124);
    }
  }
  &__feats {
    @include justify-align-between;
    margin-top: calculateVw(282);
    margin-bottom: calculateVw(158);
    .feats-item {
      &__img {
        margin-bottom: calculateVw(84);
      }
      &__text {
        text-align: center;
        max-width: calculateVw(200);
      }
    }
  }
  &__info {
    @include justify-align-center;
    padding: calculateVw(60);
    background: $deep-gray;
    .info-text {
      max-width: calculateVw(580);
    }
  }
}

@media screen and (max-width: 768px) {
  .content__img {
    position: static !important;
    display: flex;
    justify-content: center;
    margin-top: calculateVw768(50);
  }
  .content-trajectory {
    display: flex;
    justify-content: center;
  }
  .main-about__content {
    flex-direction: column-reverse;
  }
  .feats-item__img img {
    width: calculateVw768(341);
    height: calculateVw768(234);
  }
  .main-about__feats {
    flex-direction: column;
    gap: calculateVw768(50);
  }
  .feats-item__text {
    margin: 0 auto;
  }
  .feats-item__img {
    margin-bottom: calculateVw768(10) !important;
  }
  .info-img img {
    width: calculateVw768(150);
    height: calculateVw768(150);
  }
  .main-about__info {
    padding: calculateVw768(10);
  }
  .info-text {
    max-width: calculateVw768(560) !important;
  }
  .feats-item__text {
    max-width: 100% !important;
  }

  .main-about__feats .feats-item__img {
    margin: 0 auto;
  }
  .main-about__feats .feats-item__text {
    margin: 0 auto;
  }
}
</style>
