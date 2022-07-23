<template>
  <div class="main-content">
    <div class="main-form">
      <div class="main-form__title">
        <Title2 :color="blueTextColor" is-upper>оставить заявку</Title2>
      </div>
      <form class="form" @submit.prevent="submitForm">
        <div class="form-select">
          <div
            v-for="(item, index) in selectData"
            :key="index"
            class="form-select__item"
            :class="{ active: item.selected }"
            @click="selectItemFromSelect(item.label)"
          >
            <Text3
              is-upper
              :color="item.selected ? redTextColor : grayTextColor"
              >{{ item.label }}</Text3
            >
          </div>
        </div>
        <div class="form-select">
          <div
            v-for="(item, index) in tarifData"
            :key="index"
            class="form-select__item"
            :class="{ active: item.selected }"
            @click="selectTarifFromSelect(item.label)"
          >
            <Text3
              is-upper
              :color="item.selected ? redTextColor : grayTextColor"
              >{{ item.label }}</Text3
            >
          </div>
        </div>
        <div class="form-row">
          <div class="form-row__item">
            <div class="form-row__item--label">
              <Text4
                :color="nameError ? errorTextColor : blueTextColor"
                is-upper
                >имя</Text4
              >
              <span><Text4 :color="redTextColor">*</Text4></span>
            </div>
            <Input
              v-model="name"
              :is-error="nameError"
              :size="inputSize"
              placeholder="имя"
              is-upper
              @input="clearError"
            />
          </div>
          <div class="form-row__item">
            <div class="form-row__item--label flex-end">
              <Text4
                :color="surnameError ? errorTextColor : blueTextColor"
                is-upper
                >введите фамилию</Text4
              >
              <span><Text4 :color="redTextColor">*</Text4></span>
            </div>
            <Input
              v-model="surname"
              :is-error="surnameError"
              :size="inputSize"
              placeholder="фамилия"
              is-upper
              @input="clearError"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-row__item">
            <div class="form-row__item--label">
              <Text4 :color="blueTextColor" is-upper>почта</Text4>
            </div>
            <Input
              v-model="email"
              :size="inputSize"
              placeholder="введите почту"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-row__item">
            <div class="form-row__item--label">
              <Text4 :color="blueTextColor" is-upper>ссылка на портфолио</Text4>
            </div>
            <Input
              v-model="linkToPortfolio"
              :size="inputSize"
              placeholder="МОЖНО ОСТАВИТЬ ССЫЛКУ НА ГУГЛ ДИСК И ДРУГИЕ ВСЕМ ИЗВЕСТНЫЕ ИСТОЧНИКИ"
            />
          </div>
        </div>
        <div class="form-row flex-start">
          <div class="form-row__social">
            <behance />
          </div>
          <div class="form-row__social">
            <instagram />
          </div>
          <div class="form-row__social">
            <github />
          </div>
          <div class="form-row__social">
            <facebook />
          </div>
          <div class="form-row__social">
            <twitter />
          </div>
        </div>
        <div class="form-row">
          <div class="form-row__item textarea">
            <div class="form-row__item--label">
              <Text4 :color="blueTextColor" is-upper>что я уже умею</Text4>``
            </div>
            <TextArea
              v-model="additionalText"
              placeholder="НАпИСАТЬ ПОДРОБНО И ПРО ДИЗАЙН, А НЕ В ПРИНЦИПЕ."
            />
          </div>
        </div>
        <div class="form-error__text">
          <Text4 v-if="errors.length" :color="errorTextColor" is-upper
            >*Проверьте форму еще раз.
            <span v-for="(item, index) in errors" :key="index">{{
              `${item.message}. `
            }}</span>
            Данная информация необходима для выдачи диплома после прохождения
            курса</Text4
          >
          <Text4 v-if="successForm" :color="blueTextColor" is-upper>
            заявка успешно отправлена
          </Text4>
          <Text4 v-if="errorSuccessForm" :color="errorTextColor" is-upper>
            Ошибка при отправке заявки, попробуйте позже.
          </Text4>
        </div>
        <div class="form-buttons">
          <Button class="form-buttons__button" :color="greyButton">
            <Text4 is-upper :color="grayTextColor">я уже с вами</Text4>
          </Button>
          <Button type="submit" :color="blueButton">
            <Text4 is-upper :color="blackTextColor">отправить заявку</Text4>
          </Button>
        </div>
      </form>
    </div>
    <div class="main-content__img">
      <formImage />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { INPUT_SIZES } from '@/components/ui_components/Input/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'

import Input from '@/components/ui_components/Input/Input.vue'
import Title2 from '@/components/ui_components/Typography/Title2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'
import TextArea from '@/components/ui_components/TextArea.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

import behance from '@/components/svg-icons/socials/behance.vue'
import facebook from '@/components/svg-icons/socials/facebook.vue'
import github from '@/components/svg-icons/socials/github.vue'
import instagram from '@/components/svg-icons/socials/instagram.vue'
import twitter from '@/components/svg-icons/socials/twitter.vue'

import formImage from '@/assets/images/illustrations/svg/formImage.vue'
type ObjectType = {
  message: string
  type: string
}

export default Vue.extend({
  components: {
    Button,
    formImage,
    Text3,
    Text4,
    Title2,
    Input,
    instagram,
    twitter,
    github,
    facebook,
    behance,
    TextArea,
  },
  data() {
    return {
      professionType: 'код',
      tarif: 'дешман тариф',
      name: '',
      surname: '',
      email: '',
      linkToPortfolio: '',
      additionalText: '',

      successForm: false,
      errorSuccessForm: false,

      inputSize: INPUT_SIZES.LG,
      greyButton: BUTTON_VARIANTS.GRAY,
      blueButton: BUTTON_VARIANTS.PRIMARY,
      errors: [],
      selectData: [
        {
          label: 'Код',
          selected: true,
        },
        {
          label: 'вебдизайн',
          selected: false,
        },
      ],
      tarifData: [
        {
          label: 'дешман тариф',
          selected: true,
        },
        {
          label: 'поднакопил',
          selected: false,
        },
        {
          label: 'буржуй',
          selected: false,
        },
      ],
      grayTextColor: TEXT_COLORS.GRAY,
      redTextColor: TEXT_COLORS.RED,
      errorTextColor: TEXT_COLORS.ERROR,
      blueTextColor: TEXT_COLORS.BLUE,
      blackTextColor: TEXT_COLORS.BLACK,
    }
  },
  computed: {
    surnameError() {
      const result = this.errors.map((item: any) => {
        if (item.type === 'surname') {
          return true
        } else {
          return false
        }
      })

      if (result.includes(true)) {
        return true
      } else {
        return false
      }
    },
    nameError() {
      const result = this.errors.map((item: any) => {
        if (item.type === 'name') {
          return true
        } else {
          return false
        }
      })

      if (result.includes(true)) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    selectItemFromSelect(label: string) {
      this.selectData = this.selectData.map((item) => ({
        ...item,
        selected: label === item.label,
      }))
      this.professionType = label
    },
    selectTarifFromSelect(label: string) {
      this.tarifData = this.tarifData.map((item) => ({
        ...item,
        selected: label === item.label,
      }))

      this.tarif = label
    },
    clearError() {
      this.errors = []
      this.successForm = false
      this.errorSuccessForm = false
    },
    submitForm() {
      this.errors = []
      if (!this.name) {
        const obj: ObjectType = {
          message: 'Введите имя',
          type: 'name',
        }
        this.errors.push(obj)
      }
      if (!this.surname) {
        const obj: ObjectType = {
          message: 'Введите фамилию',
          type: 'surname',
        }
        this.errors.push(obj)
      }

      if (this.name && this.surname) {
        this.errors = []

        const today = new Date()

        const date =
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate()

        const data = {
          tarif: this.tarif,
          name: this.name,
          lastName: this.surname,
          email: this.email,
          link_to_portfolio: this.linkToPortfolio,
          text: this.additionalText,
          profession_type: this.professionType,
          sentAt: date,
        }
        this.$axios
          .post('http://127.0.0.1:8000/application', data)
          .then(() => {
            this.successForm = true

            this.name = ''
            this.surname = ''
            this.email = ''
            this.linkToPortfolio = ''
            this.additionalText = ''
            this.professionType = ''
          })
          .catch(() => {
            this.errorSuccessForm = true
          })
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.main-content {
  max-width: calculateVw(1174);
  position: relative;
  margin: 0 auto calculateVw(163);
  &__img {
    z-index: -1;
    position: absolute;
    width: calculateVw(751);
    bottom: calculateVw(102);
    right: calculateVw(-200);
  }
}
.main-form {
  &__title {
    margin-bottom: calculateVw(107);
    text-align: center;
  }
  .form {
    width: 60%;
    &-select {
      display: flex;
      margin-bottom: calculateVw(45);
      &__item {
        padding: calculateVw(12) calculateVw(15);
        background: $deep-gray;
        margin-right: calculateVw(16);
        cursor: pointer;
        border-radius: calculateVw(12);
      }
      .active {
        background: $white;
      }
    }
    &-row {
      @include justify-center;
      margin-bottom: calculateVw(10);
      .textarea {
        margin-bottom: calculateVw(30);
      }
      &__item {
        width: 100%;
        margin-right: calculateVw(26);

        &--label {
          @include justify-align-between;
          margin-bottom: calculateVw(4);
        }
        .flex-end {
          justify-content: flex-end;
        }
      }
      &__social {
        @include justify-align-center;
        width: calculateVw(31);
        height: calculateVw(31);
        border-radius: 50%;
        background: $deep-gray;
        margin-right: calculateVw(8);
        &:hover {
          background: $blue;
        }
      }
    }
    .flex-start {
      justify-content: flex-start;
    }
    &-error {
      &__text {
        height: calculateVw(25);
        margin-top: calculateVw(30);
        margin-bottom: calculateVw(30);
      }
    }
    &-buttons {
      display: flex;
      &__button {
        margin-right: calculateVw(32);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .main-content {
    display: flex;
    flex-direction: column;
    gap: calculateVw768(50);
    &__img {
      position: static;
      margin: 0 auto;
    }
  }
  .form {
    width: 90% !important;
    margin: 0 auto;
  }
}
.main-form .form-row {
  margin-bottom: calculateVw768(20);
}
</style>
