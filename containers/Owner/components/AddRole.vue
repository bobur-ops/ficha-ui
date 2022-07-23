<template>
  <div class="add-role">
    <Text2 is-upper>Add Role</Text2>
    <div class="form">
      <div class="field flex">
        <div
          v-for="item in selectData"
          :key="item.value"
          class="select-button"
          :class="{ active: item.selected }"
          @click="selectItem(item.value)"
        >
          <Text3 :color="item.selected ? redTextColor : whiteTextColor">
            {{ item.label }}
          </Text3>
        </div>
      </div>
      <div class="field flex">
        <div class="field-input">
          <Input v-model="name" placeholder="Имя" />
        </div>
        <div class="field-input">
          <Input v-model="lastName" placeholder="Фамилия" />
        </div>
      </div>
      <div class="field">
        <Input v-model="login" placeholder="Логин" />
      </div>
      <div class="field">
        <Input v-model="email" placeholder="E-mail" />
      </div>
      <div class="field">
        <Input v-model="password" placeholder="Пароль" />
      </div>
      <div class="field-message">
        <Text2 :color="result.success ? blueTextColor : errorTextColor">{{
          result.message
        }}</Text2>
      </div>
      <div class="form-btn" @click="addRole">
        <Button> Создать </Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'
export default Vue.extend({
  components: {
    Text2,
    Input,
    Button,
    Text3,
  },
  data() {
    return {
      redTextColor: TEXT_COLORS.RED,
      whiteTextColor: TEXT_COLORS.WHITE,
      errorTextColor: TEXT_COLORS.ERROR,
      blueTextColor: TEXT_COLORS.BLUE,
      selectData: [
        {
          label: 'Админ',
          selected: true,
          value: 'admins',
        },
        {
          label: 'Модератор',
          selected: false,
          value: 'moders',
        },
        {
          label: 'Преподаватель',
          selected: false,
          value: 'mentors',
        },
      ],

      // Form data
      roleRoute: 'admins',
      name: '',
      lastName: '',
      login: '',
      email: '',
      password: '',

      // status
      result: {
        message: '',
        success: true,
      },
    }
  },
  methods: {
    selectItem(value: string) {
      this.selectData = this.selectData.map((item) => ({
        ...item,
        selected: value === item.value,
      }))
      this.roleRoute = value
    },
    async addRole() {
      const data = {
        name: this.name,
        lastName: this.lastName,
        login: this.login,
        email: this.email,
        password: this.password,
        id: Date.now(),
      }

      try {
        const url = `/${this.roleRoute}/create`

        await this.$axios.post(url, data)
        this.result = {
          message: 'Успешно создано!',
          success: true,
        }
        this.name = ''
        this.lastName = ''
        this.login = ''
        this.email = ''
        this.password = ''
      } catch (error) {
        this.result = {
          message: 'Что-то пошло не так, повторите позже.',
          success: false,
        }
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.add-role {
  margin-top: calculateVw(100);
  margin-bottom: calculateVw(100);
  .form {
    margin-top: calculateVw(35);
    width: 50%;
    .field {
      &-message {
        height: calculateVw(30);
      }
      margin-bottom: calculateVw(20);
      .select-button {
        padding: calculateVw(5);
        background: $deep-gray;
        border-radius: calculateVw(8);
        width: 30%;
        text-align: center;
        cursor: pointer;
      }
      .select-button.active {
        background: $white;
      }
    }
    .flex {
      display: flex;
      justify-content: space-between;
      gap: calculateVw(20);
      .field-input {
        width: 100%;
      }
      .field-message {
        margin-bottom: calculateVw(15);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .add-role .form[data-v-7b3d0159] {
    width: 100%;
  }
}
</style>
