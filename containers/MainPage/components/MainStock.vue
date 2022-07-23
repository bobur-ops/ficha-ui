<template>
  <div class="main-stock">
    <div class="main-stock__top">
      <div class="top-img">
        <mainStock />
      </div>
      <div class="top-title">
        <Title2 :color="redTextColor" is-upper>акция.</Title2>
        <Title2 :color="blueTextColor" is-upper
          >приведи друга и <br />
          заплати за друга тоже</Title2
        >
      </div>
    </div>
    <div class="main-stock__free">
      <div class="freebie-title">
        <Title2 is-upper :color="blueTextColor">халява</Title2>
      </div>
      <div
        v-for="(item, index) in stockFreebies"
        :key="index"
        class="freebie-item"
      >
        <div class="freebie-item__content">
          <div
            :class="`${item.leftPlace === 0 ? 'disabled-img' : ''}`"
            class="img"
          >
            <img
              :src="require(`@/assets/images/freebies/${item.img}.png`)"
              alt=""
            />
          </div>
          <div class="info">
            <div class="info-type">
              <Text4
                :color="item.leftPlace !== 0 ? redTextColor : grayTextColor"
                is-upper
                >{{ item.type }}</Text4
              >
            </div>
            <div class="info-title">
              <Text2
                :color="item.leftPlace !== 0 ? redTextColor : blackTextColor"
                is-upper
                >{{ item.title }}</Text2
              >
            </div>
            <div
              :class="`${item.leftPlace === 0 ? 'disabled-date' : ''}`"
              class="info-date"
            >
              <Text4
                :color="item.leftPlace !== 0 ? redTextColor : grayTextColor"
                is-upper
                >{{ item.date }}</Text4
              >
            </div>
            <div v-for="(feat, idx) in item.feats" :key="idx" class="info-feat">
              <Text3 :color="grayTextColor">- {{ feat.text }}</Text3>
            </div>
          </div>
        </div>
        <div class="freebie-item__action">
          <Button :color="item.leftPlace !== 0 ? buttonColor : grayButtonColor">
            <Text4
              :color="item.leftPlace !== 0 ? blackTextColor : grayTextColor"
              is-upper
              >участвовать</Text4
            >
          </Button>
          <div class="info-place">
            <Text4 v-if="item.leftPlace !== 0" :color="blueTextColor" is-upper
              >осталось {{ item.leftPlace }} мест</Text4
            >
            <Text4 v-else :color="grayTextColor" is-upper>нет мест</Text4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { STOCK_FREEBIE } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'

import mainStock from '@/assets/images/illustrations/svg/mainStock.vue'
import Title2 from '@/components/ui_components/Typography/Title2.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

export default Vue.extend({
  components: {
    mainStock,
    Title2,
    Text4,
    Text2,
    Text3,
    Button,
  },
  data() {
    return {
      redTextColor: TEXT_COLORS.RED,
      blackTextColor: TEXT_COLORS.BLACK,
      blueTextColor: TEXT_COLORS.BLUE,
      grayTextColor: TEXT_COLORS.GRAY,
      buttonColor: BUTTON_VARIANTS.PRIMARY,
      grayButtonColor: BUTTON_VARIANTS.GRAY,
      stockFreebies: STOCK_FREEBIE,
    }
  },
})
</script>
<style lang="scss" scoped>
.main-stock {
  max-width: calculateVw(1174);
  margin: 0 auto;
  &__top {
    @include justify-align-between;
    margin-bottom: calculateVw(313);
  }
  &__free {
    .freebie {
      &-title {
        text-align: center;
        margin-bottom: calculateVw(65);
      }
      &-item {
        @include justify-align-between;
        margin-bottom: calculateVw(22);
        &__content {
          @include align-center;
          margin-right: calculateVw(57);
          background: $deep-gray;
          width: 100%;
          .img {
            margin-right: calculateVw(40);
            img {
              width: calculateVw(310);
              height: calculateVw(310);
            }
          }
          .disabled-img {
            opacity: 0.2;
          }
          .info {
            &-type {
              margin-bottom: calculateVw(19);
            }
            &-title {
              margin-bottom: calculateVw(22);
            }
            &-date {
              @include justify-align-center;
              width: calculateVw(150);
              padding: calculateVw(9);
              background: $white;
              margin-bottom: calculateVw(28);
              border-radius: calculateVw(12);
            }
            .disabled-date {
              background: $dark;
            }
            &-feat {
              max-width: calculateVw(480);
            }
          }
        }
        &__action {
          .info-place {
            text-align: center;
            margin: calculateVw(13) auto 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .freebie-item__content .img img {
    width: calculateVw768(107);
    height: calculateVw768(113);
  }
  .freebie-item {
    flex-direction: column;
    gap: calculateVw768(20);
    margin-bottom: calculateVw768(40) !important;
  }
  .freebie-item__content {
    margin-right: calculateVw(0) !important;
  }

  .main-stock__free .freebie-item__content .info-feat[data-v-d0171408] {
    max-width: calculateVw768(480);
  }
  .main-stock__free .freebie-item__content .info-date[data-v-d0171408] {
    width: calculateVw768(120);
  }
}
</style>
