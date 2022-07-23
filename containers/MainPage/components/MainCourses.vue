<template>
  <div class="main-courses">
    <div class="main-courses__title">
      <Text2 :is-upper="true" is-shadow :color="titleColor">Курсы</Text2>
      <Text3 :color="subTitleColor" :is-upper="true"
        >тут должны были быть курсы, но получилось, то что получилось.</Text3
      >
    </div>
    <div class="main-courses__content">
      <div class="main-courses__side">
        <Text1 is-upper
          >Иллюстра <br />
          нутый курс</Text1
        >
        <div class="main-courses__select">
          <MultiSelect
            :data="multiSelectData1"
            @selectItemFromSelect="selectItemFromSelect1"
          />
        </div>
        <Text2 class="main-courses__side--subtitle" is-upper>
          стань дизайнером за 7 дней
        </Text2>
        <Text3 class="main-courses__side--text" is-upper>
          Дизайнер - сверхприспосабливаемые <br />
          аэробные живые организмы, cпособные <br />
          долгое время обходиться без сна, пищи и <br />
          денег. Теряют сознание при виде зеленых букв <br />
          на красном фоне.
        </Text3>
        <div class="main-courses__side--btn">
          <Button :color="buttonColor">ИЛЛЮСТРАНУТЬСЯ</Button>
        </div>
      </div>
      <div class="main-courses__side">
        <coursesImage class="illustration" />
      </div>
    </div>
    <div style="justify-content: flex-end" class="main-courses__content">
      <div class="main-courses__side position-absolute">
        <coursesImage2 class="illustration" />
      </div>
      <div
        class="main-courses__side"
        style="justify-content: flex-end; text-align: right"
      >
        <Text1 style="text-align: right">
          Курс - в любой <br />
          непонятной ситуации <br />
          вали все на дизайнера
        </Text1>
        <div class="main-courses__select" style="justify-content: flex-end">
          <MultiSelect
            :data="multiSelectData2"
            @selectItemFromSelect="selectItemFromSelect2"
          />
        </div>
        <Text2 class="main-courses__side--subtitle" is-upper>
          Наверстаем упущенное
        </Text2>
        <Text3 class="main-courses__side--text" is-upper>
          Здесь тоже должно было быть <br />
          Описание, но дизайнер не захотел <br />
          делать его бесплатно
        </Text3>
        <div
          class="main-courses__side--btn"
          style="display: flex; justify-content: flex-end"
        >
          <Button :color="buttonColor">ТЫК</Button>
        </div>
      </div>
    </div>
    <div class="main-courses__bottom">
      <div class="main-courses__bottom-side">
        <Text4
          class="main-courses__bottom-subtitle"
          :color="TEXT_COLORS.RED"
          is-upper
          >в режиме реального времени</Text4
        >
        <Text2
          class="main-courses__bottom-title"
          :color="TEXT_COLORS.BLUE"
          is-upper
          >приобретай курсы или индивидуальные часы</Text2
        >
        <Text3 class="main-courses__bottom-text" :color="TEXT_COLORS.GRAY"
          >Здесь вы не найдете записанные уроки, мы будем вести вас от начала и
          до конца в режиме реального времени.</Text3
        >
      </div>
      <div class="main-courses__bottom-side">
        <div class="main-courses__bottom-side__text">
          <Text2 is-upper :color="TEXT_COLORS.BLUE"
            >60 <br />
            первых минут бесплатно</Text2
          >
        </div>
        <div class="main-courses__bottom-btn">
          <Button>
            <Text3 :color="TEXT_COLORS.BLACK" is-upper>Попробовать</Text3>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {
  COURSES_MULTI_SELECT_DATA1,
  COURSES_MULTI_SELECT_DATA2,
} from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'

import coursesImage from '@/assets/images/illustrations/svg/coursesImage.vue'
import coursesImage2 from '@/assets/images/illustrations/svg/coursesImage2.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text1 from '@/components/ui_components/Typography/Text1.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'
import MultiSelect from '@/components/ui_components/MultiSelect/MultiSelect.vue'

export default Vue.extend({
  components: {
    Text2,
    Text1,
    Text3,
    Text4,
    MultiSelect,
    coursesImage,
    Button,
    coursesImage2,
  },
  data() {
    return {
      multiSelectData1: COURSES_MULTI_SELECT_DATA1,
      multiSelectData2: COURSES_MULTI_SELECT_DATA2,
      titleColor: TEXT_COLORS.BLUE,
      subTitleColor: TEXT_COLORS.GRAY,
      buttonColor: BUTTON_VARIANTS.PRIMARY,
      TEXT_COLORS,
    }
  },
  methods: {
    selectItemFromSelect1(name: string) {
      this.multiSelectData1 = this.multiSelectData1.map((item) => ({
        ...item,
        selected: name === item.name ? !item.selected : item.selected,
      }))
    },
    selectItemFromSelect2(name: string) {
      this.multiSelectData2 = this.multiSelectData2.map((item) => ({
        ...item,
        selected: name === item.name ? !item.selected : item.selected,
      }))
    },
  },
})
</script>
<style lang="scss" scoped>
.main-courses {
  max-width: calculateVw(1174);
  margin: calculateVw(152) auto calculateVw(169);
  &__title {
    text-align: center;
    margin: 0 auto calculateVw(178);
    max-width: calculateVw(580);
  }
  .position-absolute {
    position: absolute;
    left: calculateVw(-200);
    top: calculateVw(-200);
  }
  &__side {
    display: flex;
    flex-direction: column;
    &--subtitle {
      margin-bottom: calculateVw(15);
    }
    &--text {
      margin-bottom: calculateVw(44);
    }
  }
  &__select {
    margin-top: calculateVw(72);
    margin-bottom: calculateVw(19);
    display: flex;
  }
  &__content {
    display: flex;
    position: relative;
    margin-bottom: calculateVw(240);
  }
  &__bottom {
    @include justify-align-between;
    padding: calculateVw(30) calculateVw(51);
    background: $deep-gray;
    &-subtitle,
    &-title {
      margin-bottom: calculateVw(9);
    }
    &-subtitle,
    &-title,
    &-text {
      max-width: calculateVw(482);
    }
    &-btn {
      display: flex;
      justify-content: center;
      margin-top: 31px;
    }
    &-side {
      &__text {
        max-width: calculateVw(300);
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .illustration {
    transform: translateY(calculateVw768(150));
  }
}
</style>
