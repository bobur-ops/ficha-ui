<template>
  <div class="main-reviews">
    <div class="main-reviews__title">
      <Text2 :color="blueTextColor" is-upper>отзывы</Text2>
      <div class="subtitle">
        <Text3 :color="grayTextColor" is-upper>
          Если ты считаешь, что это слишком классные отзывы, то ты можешь
          разбавить его своим из личного кабинета
        </Text3>
      </div>
    </div>
    <div class="main-reviews__items">
      <div
        v-for="(item, index) in reviewData"
        :key="index"
        class="main-reviews__item"
      >
        <div class="review-img">
          <img
            :src="require(`@/assets/images/reviews/${item.img}.png`)"
            alt="avatar"
          />
        </div>
        <div
          :class="`${
            item.profession === 'верстальщик'
              ? 'review-profession--blue'
              : 'review-profession--red'
          }`"
          class="review-profession"
        >
          <Text4
            is-upper
            :color="
              item.profession === 'верстальщик'
                ? blackTextColor
                : whiteTextColor
            "
            >{{ item.profession }}</Text4
          >
        </div>
        <div class="review-name">
          <Text3
            is-upper
            :color="
              item.profession === 'верстальщик' ? blueTextColor : redTextColor
            "
            >{{ `${item.name} ${item.lastName}` }}</Text3
          >
        </div>
        <div class="review-date">
          <Text4 :color="grayTextColor" is-upper>
            Зарегистрирован с {{ item.registeredAt }} <br />
            обучается год
          </Text4>
        </div>
        <div class="review-text">
          <Text2 :color="blueTextColor" is-upper> " {{ item.review }} " </Text2>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { REVIEWS } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'

export default Vue.extend({
  components: {
    Text2,
    Text3,
    Text4,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      grayTextColor: TEXT_COLORS.GRAY,
      blackTextColor: TEXT_COLORS.BLACK,
      whiteTextColor: TEXT_COLORS.WHITE,
      redTextColor: TEXT_COLORS.RED,
      reviewData: REVIEWS,
    }
  },
})
</script>
<style lang="scss" scoped>
.main-reviews {
  max-width: calculateVw(1174);
  margin: calculateVw(151) auto calculateVw(164);
  &__title {
    text-align: center;
    max-width: calculateVw(550);
    margin: 0 auto calculateVw(161);
    .subtitle {
      margin-top: calculateVw(26);
    }
  }
  &__items {
    @include justify-align-between;
  }
  &__item {
    @include justify-center;
    flex-direction: column;
    .review {
      &-img {
        width: calculateVw(131);
        height: calculateVw(131);
        border-radius: 50%;
        margin: 0 auto calculateVw(-10);
        img {
          object-fit: cover;
          object-position: center;
          width: calculateVw(131);
          height: calculateVw(131);
          border-radius: 50%;
        }
      }
      &-profession {
        @include justify-align-center;
        padding: calculateVw(15);
        width: calculateVw(148);
        border-radius: calculateVw(12);
        margin: 0 auto calculateVw(5);
      }
      &-profession--blue {
        background: $blue;
      }
      &-profession--red {
        background: $red;
      }
      &-name {
        margin: 0 auto calculateVw(5);
      }
      &-date {
        text-align: center;
        margin: 0 auto calculateVw(10);
      }
      &-text {
        max-width: calculateVw(368);
        text-align: center;
        margin: 0 auto;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .main-reviews__items {
    flex-wrap: wrap;
    justify-content: center;
    gap: calculateVw768(30);
  }
  .review-img {
    width: calculateVw768(131) !important;
    height: calculateVw768(131) !important;
    img {
      width: calculateVw768(131) !important;
      height: calculateVw768(131) !important;
    }
  }
  .main-reviews__item .review-profession[data-v-4384cd01] {
    width: calculateVw768(148);
  }
}
</style>
