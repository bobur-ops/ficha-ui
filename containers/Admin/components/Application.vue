<template>
  <div class="selected-app">
    <div class="selected-app__top">
      <Text2 :color="redTextColor" is-upper>
        {{ application.sentAt }}
      </Text2>
      <Text2 :color="redTextColor" is-upper
        >{{ application.name }}
        {{ application.lastName }}
      </Text2>
    </div>
    <div class="selected-app__info">
      <div class="field">
        <Text2>{{ application.email }}</Text2>
      </div>
      <div v-if="application.tarif" class="field">
        <Text2>{{ application.tarif }}</Text2>
      </div>
      <div class="field">
        <Text2>{{ application.linkToCv }}</Text2>
      </div>
      <div class="text">
        <Text3 :color="redTextColor">{{ application.text }}</Text3>
      </div>
    </div>
    <div class="selected-app__textarea">
      <Text2 :color="blueTextColor" is-upper> Ответить на почту </Text2>
      <div class="area">
        <Textarea v-model="answer" style="background: #1f1f1f" />
      </div>
      <div class="btn">
        <Button :color="secondaryButton" @click="$emit('closeApplication')"
          >Закрыть</Button
        >
        <Button @click="answerToApp">Отправить</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Textarea from '@/components/ui_components/TextArea.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

export default Vue.extend({
  components: {
    Text2,
    Text3,
    Textarea,
    Button,
  },
  props: {
    application: {
      default: {},
      type: Object,
    },
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      redTextColor: TEXT_COLORS.RED,
      secondaryButton: BUTTON_VARIANTS.SECONDARY,
    }
  },
})
</script>
<style lang="scss" scoped>
.selected-app {
  margin-bottom: calculateVw(150);
  background: $deep-gray;
  padding: calculateVw(20);
  border-radius: calculateVw(12);
  .selected-app {
    &__top {
      display: flex;
      gap: calculateVw(20);
    }
    &__info {
      padding-left: 35%;
      margin-bottom: calculateVw(90);
      .text {
        margin-top: calculateVw(45);
        width: calculateVw(446);
        padding: calculateVw(8) calculateVw(15);
        background: $white;
        border-radius: calculateVw(8);
      }
    }
    &__textarea {
      display: flex;
      flex-direction: column;
      gap: calculateVw(20);
      width: 60%;
      .btn {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
