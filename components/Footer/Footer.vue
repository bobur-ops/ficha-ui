<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-logo"></div>
      <div class="footer-content">
        <div class="footer-content__col">
          <Text3 is-upper>
            ficha.school <br />
            ficha.school@gmail.com
          </Text3>
          <Text4 is-upper> школа актуальных профессий </Text4>
          <NuxtLink tag="div" to="/becomeMentor">
            <Text3 :color="blueTextColor">Стать преподавателем</Text3>
          </NuxtLink>
        </div>
        <div class="footer-content__col">
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> код </Text4>
          </NuxtLink>
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> дизайн</Text4>
          </NuxtLink>
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> индивидуально </Text4>
          </NuxtLink>
        </div>
        <div class="footer-content__col">
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> халява </Text4>
          </NuxtLink>
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> тарифы</Text4>
          </NuxtLink>
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> работа учеников </Text4>
          </NuxtLink>
        </div>
        <div class="footer-content__col">
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> вакансии </Text4>
          </NuxtLink>
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> инстаграм </Text4>
          </NuxtLink>
          <NuxtLink tag="div" to="/">
            <Text4 :color="grayTextColor" is-upper> телеграм </Text4>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'
export default Vue.extend({
  components: {
    Text3,
    Text4,
  },
  data() {
    return {
      grayTextColor: TEXT_COLORS.GRAY,
      blueTextColor: TEXT_COLORS.BLUE,
    }
  },
})
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  margin: calculateVw(68) auto 0;
  background: $deep-gray;
  &-container {
    margin: 0 auto;
    max-width: calculateVw(1174);
    padding: calculateVw(37);
  }
  &-logo {
    width: calculateVw(55);
    height: calculateVw(55);
    background: $red;
    position: relative;
    &::after {
      content: '';
      width: calculateVw(55);
      position: absolute;
      height: calculateVw(55);
      background: $blue;
      left: calculateVw(-14);
      top: calculateVw(-9);
    }
  }
  &-content {
    padding-top: calculateVw(8);
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    &__col {
      display: flex;
      flex-direction: column;
      div {
        margin-bottom: calculateVw(5);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .footer-content[data-v-0c60b038] {
    flex-wrap: wrap;
    gap: calculateVw768(10);
  }
  .footer-content__col div[data-v-0c60b038] {
    margin-bottom: calculateVw768(5);
  }
}
</style>
