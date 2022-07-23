<template>
  <div class="main-hero">
    <div class="main-hero__left">
      <div class="main-hero__top">
        <Text1 is-upper :color="TEXT_COLORS.BLUE">
          Да! это еще один сайт с курсами,
        </Text1>
        <Text1 is-upper :color="TEXT_COLORS.RED"> но зато какой! </Text1>
      </div>
      <div class="main-hero__input">
        <Input is-upper :placeholder="inputePlaceholder">
          <searchIcon />
        </Input>
      </div>
      <div class="main-hero__select">
        <MultiSelect
          :data="multiSelectData"
          @selectItemFromSelect="selectItemFromSelect"
        />
      </div>
    </div>
    <div class="main-hero__right">
      <headerImage />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MULTI_SELECT_DATA } from './constants'
import { TEXT_COLORS } from '~/components/ui_components/Typography/constants'
import {
  SELECTED_BUTTON_COLORS,
  SELECT_TEXT_COLORS,
} from '~/components/ui_components/MultiSelect/constants'

import Text1 from '@/components/ui_components/Typography/Text1.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import MultiSelect from '@/components/ui_components/MultiSelect/MultiSelect.vue'
import searchIcon from '~/components/svg-icons/searchIcon.vue'
import headerImage from '@/assets/images/illustrations/svg/headerImage.vue'

export default Vue.extend({
  components: {
    Text1,
    Input,
    MultiSelect,
    searchIcon,
    headerImage,
  },
  data() {
    return {
      TEXT_COLORS,
      SELECTED_BUTTON_COLORS,
      SELECT_TEXT_COLORS,
      multiSelectData: MULTI_SELECT_DATA,
      inputePlaceholder:
        'Мой парень говорит моя грудь в стиле флэт, я не понимаю, что смешн',
    }
  },
  methods: {
    selectItemFromSelect(name: string) {
      this.multiSelectData = this.multiSelectData.map((item) => ({
        ...item,
        selected: name === item.name ? !item.selected : item.selected,
      }))
    },
  },
})
</script>

<style lang="scss" scoped>
.main-hero {
  @include align-center;
  position: relative;
  margin: 0 auto;
  max-width: calculateVw(1174);
  &__left {
    width: calculateVw(714);
    z-index: 2;
  }
  &__top {
    margin-bottom: calculateVw(20);
  }
  &__right {
    position: absolute;
    top: calculateVw(-52);
    right: calculateVw(-62);
  }
  &__input {
    margin-bottom: calculateVw(35);
  }
}

@media screen and (max-width: 768px) {
  .main-hero {
    display: flex;
    flex-direction: column;
    gap: calculateVw768(25);
  }
  .main-hero__left {
    width: 80%;
  }
  .main-hero__right {
    position: static;
  }
}
</style>
