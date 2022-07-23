<template>
  <div class="wrapper">
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
import { mapActions, mapGetters } from 'vuex'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

export default Vue.extend({
  components: {
    Text3,
    Input,
    Button,
  },
  data() {
    return {
      login: '',
      password: '',

      darkTextColor: TEXT_COLORS.BLACK,
      grayTextColor: TEXT_COLORS.GRAY,
      redTextColor: TEXT_COLORS.RED,
    }
  },
  computed: {
    ...mapGetters('admins', ['admin', 'error']),
  },
  methods: {
    ...mapActions('admins', ['adminLogin']),
    async loginUser() {
      const data = {
        login: this.login,
        password: this.password,
      }
      await this.adminLogin(data)
      if (!this.error) {
        this.$router.push(`/admin/${this.admin.id}`)
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
  display: flex;
  flex-direction: column;
  gap: calculateVw(40);
  &-button {
    @include justify-center;
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
