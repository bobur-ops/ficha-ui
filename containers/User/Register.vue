<template>
  <client-only>
    <div class="wrapper">
      <Breadcrumbs :params="crumbs" />
      <div class="login">
        <div class="field">
          <div class="login-input">
            <Input v-model="name" placeholder="Имя" />
          </div>
          <div class="login-input">
            <Input v-model="lastName" placeholder="Фамилия" />
          </div>
        </div>
        <div class="login-input">
          <Input
            v-model="login"
            v-debounce:300ms="checkLogin"
            placeholder="логин"
            :disabled="isLoading"
          >
            <div v-if="isLoading" class="lds-dual-ring"></div>
          </Input>
        </div>
        <div class="login-input">
          <Input v-model="email" placeholder="e-mail" @input="isValidEmail" />
        </div>
        <div class="login-input">
          <Input v-model="password" placeholder="пароль" />
          <password
            v-model="password"
            :strength-meter-only="true"
            @score="showScore"
          />
        </div>
        <div class="login-error">
          <Text3 v-if="error" :color="errorTextColor"
            >Что то пошло не так , попробуйте заново</Text3
          >
          <Text3 v-if="!validEmail" :color="errorTextColor"
            >Адрес почты не действителен</Text3
          >
          <Text3 v-if="!isLoginUnique" :color="errorTextColor"
            >Этот логин используется другим пользователем</Text3
          >
        </div>
        <div class="login-button">
          <Button :disabled="isBtnDisabled" @click="registerUser">
            <Text3 :color="darkTextColor" is-upper>Зарегистрироваться</Text3>
          </Button>
        </div>
        <div class="login-option">
          <Text4 :color="grayTextColor">Уже есть аккаунт?</Text4>
          <Text4 style="cursor: pointer" :color="redTextColor">
            <NuxtLink tag="div" to="/login"> Войти </NuxtLink>
          </Text4>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import Password from 'vue-password-strength-meter'
import vueDebounce from 'vue-debounce'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

Vue.use(vueDebounce)

export default Vue.extend({
  components: {
    Text3,
    Text4,
    Input,
    Button,
    Breadcrumbs,
    Password,
  },
  data() {
    return {
      login: '',
      email: '',
      password: '',
      name: '',
      lastName: '',
      validEmail: true,
      isLoginUnique: true,

      darkTextColor: TEXT_COLORS.BLACK,
      grayTextColor: TEXT_COLORS.GRAY,
      redTextColor: TEXT_COLORS.RED,
      errorTextColor: TEXT_COLORS.ERROR,
      crumbs: [{ name: 'register', path: '/register' }],
      passwordScore: 0,
    }
  },
  computed: {
    ...mapGetters('user', ['user', 'error', 'isLoading', 'users']),
    isBtnDisabled() {
      if (
        !this.isLoginUnique ||
        !this.validEmail ||
        !this.email ||
        this.passwordScore === 0 ||
        !this.login
      ) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    if (localStorage.jwtoken) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions('user', ['register', 'getUsers']),

    showScore(score: number) {
      this.passwordScore = score
    },

    async checkLogin() {
      this.isLoginUnique = true

      await this.getUsers()
      type UserType = {
        name: string
        lastName: string
        login: string
        password: string
        email: string
      }
      this.users.forEach((user: UserType) => {
        if (user.login === this.login) {
          this.isLoginUnique = false
        }
      })
    },
    isValidEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (re.test(this.email)) {
        this.validEmail = true
      } else {
        this.validEmail = false
      }
    },
    async registerUser() {
      if (this.validEmail && this.isLoginUnique && this.passwordScore !== 0) {
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
          login: this.login,
          email: this.email,
          password: this.password,
          createdAt: date,
        }
        await this.register(data)
        this.$router.push(`/user/${this.user.login}`)
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.login {
  width: 50%;
  margin: 0 auto;
  padding: calculateVw(20);
  .field {
    display: flex;
    justify-content: space-between;
    gap: calculateVw(50);
    .login-input {
      width: 100%;
    }
  }
  &-input {
    margin-bottom: calculateVw(35);
  }
  &-button {
    @include justify-center;
    margin-bottom: calculateVw(15);
  }
  &-option {
    display: flex;
    justify-content: center;
    gap: calculateVw(5);
  }
  &-error {
    margin-bottom: calculateVw(10);
    height: calculateVw(30);
  }
}
.lds-dual-ring {
  display: inline-block;
  width: calculateVw(32);
  height: calculateVw(32);
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: calculateVw(28);
  height: calculateVw(28);
  margin: calculateVw(8);
  border-radius: 50%;
  border: calculateVw(6) solid $red;
  border-color: $red transparent $red transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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
