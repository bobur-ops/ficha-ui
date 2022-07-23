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
      <div class="login-button" @click="loginUser">
        <Button>
          <Text3 :color="darkTextColor" is-upper>Войти</Text3>
        </Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default Vue.extend({
  components: {
    Text3,
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

      crumbs: [{ name: 'login', path: '/login' }],
    }
  },
  methods: {
    loginUser() {
      if (this.login === 'maksim' && this.password === 'maksim123') {
        localStorage.owner = true
        this.$router.push('/owner')
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
  }
}
</style>
