<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="login">
      <div class="login-input">
        <Input v-model="login" placeholder="логин" />
      </div>
      <div class="login-input">
        <Input v-model="password" placeholder="пароль" />
      </div>
      <div class="login-error">
        <Text3 v-if="issue" :color="errorTextColor"
          >Логин или пароль неправильный</Text3
        >
      </div>
      <div class="login-button" @click="loginUser">
        <Button>
          <Text3 :color="darkTextColor" is-upper>Войти</Text3>
        </Button>
      </div>
      <div class="login-option">
        <Text4 :color="grayTextColor">Нет Аккаунта?</Text4>
        <Text4 style="cursor: pointer" :color="redTextColor">
          <NuxtLink tag="div" to="/register"> Зарегистрироваться </NuxtLink>
        </Text4>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default Vue.extend({
  components: {
    Text3,
    Text4,
    Input,
    Button,
    Breadcrumbs,
  },
  data() {
    return {
      login: '',
      password: '',

      darkTextColor: TEXT_COLORS.BLACK,
      grayTextColor: TEXT_COLORS.GRAY,
      redTextColor: TEXT_COLORS.RED,
      errorTextColor: TEXT_COLORS.ERROR,

      crumbs: [{ name: 'login', path: '/login' }],
      issue: false,
    }
  },
  computed: {
    ...mapGetters('user', ['user', 'error']),
  },
  methods: {
    ...mapActions('user', ['userLogin']),
    async loginUser() {
      const data = {
        login: this.login,
        password: this.password,
      }
      await this.userLogin(data)
      if (this.user.login) {
        this.$router.push(`/user/${this.user.login}`)
      } else {
        this.issue = true
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.login {
  max-width: calculateVw(1174);
  width: 50%;
  margin: 0 auto;
  padding: calculateVw(20);
  &-input {
    margin-bottom: calculateVw(45);
  }
  &-button {
    @include justify-center;
    margin-bottom: calculateVw(50);
  }
  &-option {
    display: flex;
    justify-content: center;
    gap: calculateVw(5);
  }
  &-error {
    height: calculateVw(30);
  }
}
@media screen and (max-width: 768px) {
  .login {
    width: 100%;
    margin-top: 50%;
    transform: translateY(-50%);
  }
}
</style>
