<template>
  <div class="main-tarifs">
    <div
      v-for="(item, index) in tarifs"
      :key="index"
      class="main-tarifs__tarif"
    >
      <div class="tarif-title">
        <Text2 :color="redTextColor" is-upper>{{ item.title }}</Text2>
      </div>
      <div class="tarif-price">
        <Text3 :color="blueTextColor" is-upper>
          {{ item.price }} <br />
          за месяц {{ item.lessonsCount }} уроков {{ item.hours }} часов
        </Text3>
      </div>
      <div class="tarif-desc">
        <Text3 is-upper>{{ item.desc }}</Text3>
      </div>
      <div class="tarif-btn">
        <Button>
          <Text4 :color="blackTextColor" is-upper> купить </Text4>
        </Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TARIFS } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

export default Vue.extend({
  components: {
    Text2,
    Text3,
    Text4,
    Button,
  },
  data() {
    return {
      redTextColor: TEXT_COLORS.RED,
      blueTextColor: TEXT_COLORS.BLUE,
      blackTextColor: TEXT_COLORS.BLACK,
      buttonColor: BUTTON_VARIANTS.PRIMARY,

      tarifs: TARIFS,
    }
  },
})
</script>
<style lang="scss" scoped>
.main-tarifs {
  max-width: calculateVw(1174);
  margin: 0 auto calculateVw(146);
  display: flex;
  justify-content: space-between;
  &__tarif {
    background: $deep-gray;
    width: calculateVw(368);
    padding: calculateVw(38) calculateVw(30);
    .tarif {
      &-title {
        margin-bottom: calculateVw(5);
        text-align: center;
      }
      &-price {
        text-align: center;
        max-width: calculateVw(130);
        margin: 0 auto calculateVw(58);
      }
      &-desc {
        margin: 0 auto calculateVw(75);
        max-width: calculateVw(200);
      }
      &-btn {
        @include justify-center;
        margin: 0 auto;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .main-tarifs {
    flex-direction: column;
    gap: calculateVw768(10);
    &__tarif {
      width: 60%;
      margin: 0 auto;
      .tarif {
        &-price {
          max-width: 100%;
        }
        &-desc {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
