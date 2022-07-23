<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="form">
      <div class="form-field flex-between">
        <div class="form-field__input">
          <Input v-model="name" placeholder="Имя" />
        </div>
        <div class="form-field__input">
          <Input v-model="lastName" placeholder="Фамилия" />
        </div>
      </div>
      <div class="form-field">
        <Input v-model="email" placeholder="e-mail" />
      </div>
      <div class="form-field">
        <Input v-model="linkToPortfolio" placeholder="Ссылка на резюме" />
      </div>
      <div class="form-field">
        <TextArea
          v-model="text"
          placeholder="Расскажите о себе и о своем опыте"
        />
      </div>
      <div v-if="isError" class="form-error">
        <Text3 :color="errorTextColor" is-upper>что-то пошло не так</Text3>
      </div>
      <div class="form-btn" @click="submitApplication">
        <Button>Отправить заявку</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import TextArea from '@/components/ui_components/TextArea.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

export default Vue.extend({
  components: {
    Breadcrumbs,
    Text3,
    Input,
    TextArea,
    Button,
  },
  data() {
    return {
      errorTextColor: TEXT_COLORS.ERROR,
      crumbs: [{ name: 'Become Mentor', path: '/becomeMentor' }],
      name: '',
      lastName: '',
      email: '',
      linkToPortfolio: '',
      text: '',
    }
  },
  computed: {
    ...mapGetters('becomeMentor', ['isError']),
  },
  methods: {
    ...mapActions('becomeMentor', ['postApplication']),
    async submitApplication() {
      const today = new Date()
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate()

      const data = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        linkToCv: this.linkToPortfolio,
        text: this.text,
        sentAt: date,
        id: Date.now(),
      }

      await this.postApplication(data)
      this.$router.push('/')
    },
  },
})
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: calculateVw(1174);
  margin: 0 auto;
  .form {
    width: 60%;
    &-field {
      margin-bottom: calculateVw(25);
      &__input {
        width: 45%;
      }
    }
    .flex-between {
      display: flex;
      justify-content: space-between;
    }
    &-error {
      height: calculateVw(30);
    }
    &-btn {
      margin-top: calculateVw(25);
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper .form[data-v-43159c9a] {
    width: 100%;
  }
  .wrapper .form-field[data-v-43159c9a] {
    margin-bottom: calculateVw768(40);
  }
}
</style>
