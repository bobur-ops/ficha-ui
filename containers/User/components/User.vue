<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="user-page">
      <div class="user-page__img">
        <img src="@/assets/images/user_img.png" alt="avatar" />
      </div>
      <div v-if="!isLoading" class="user-page__info">
        <div class="field">
          <div class="field-col">
            <div class="text">
              <Text2 is-upper :color="redTextColor">Имя:</Text2>
              <Text2 v-if="!isNameEditing" :color="blueTextColor">{{
                user.name
              }}</Text2>
              <Input
                v-else
                v-model="newName"
                :size="smallInput"
                underline
                @input="editName"
              />
            </div>
            <div
              v-if="!isNameEditing"
              class="edit-btn"
              @click="isNameEditing = true"
            >
              Edit
            </div>
            <div v-else class="edit-btn" @click="submitNameEditing">
              сохранить
            </div>
          </div>
          <div class="field-col">
            <div class="text">
              <Text2 is-upper :color="redTextColor">фамилия:</Text2>
              <Text2 v-if="!isLastNameEditing" :color="blueTextColor">{{
                user.lastName
              }}</Text2>
              <Input
                v-else
                v-model="newLastName"
                :size="smallInput"
                underline
                @input="editLastName"
              />
            </div>

            <div
              v-if="!isLastNameEditing"
              class="edit-btn"
              @click="isLastNameEditing = true"
            >
              Edit
            </div>
            <div v-else class="edit-btn" @click="submitLastNameEditing">
              сохранить
            </div>
          </div>
        </div>
        <div class="field">
          <div class="text">
            <Text2 is-upper :color="redTextColor">Логин:</Text2>
            <Text2 :color="blueTextColor">{{ user.login }}</Text2>
          </div>
        </div>
        <div class="field">
          <div class="text">
            <Text2 is-upper :color="redTextColor">почтa:</Text2>
            <Text2 v-if="!isEmailEditing" :color="blueTextColor">{{
              user.email
            }}</Text2>
            <Input v-else v-model="newEmail" underline :size="smallInput" />
          </div>
          <div
            v-if="!isEmailEditing"
            class="edit-btn"
            @click="isEmailEditing = true"
          >
            Edit
          </div>
          <div v-else class="edit-btn" @click="submitEmailEditing">
            сохранить
          </div>
        </div>
        <div class="field">
          <div class="start">
            <Text2 is-upper :color="redTextColor">зарегистрирован:</Text2>
          </div>
          <div>
            <Text2 :color="blueTextColor">{{ user.createdAt }}</Text2>
          </div>
        </div>
        <div class="field switcher">
          <div class="text">
            <Text2 :color="redTextColor"> Показывать посты: </Text2>
          </div>
          <Switcher :defaultState="switcherDefault" @change="switcherChange" />
        </div>
        <div class="logout">
          <Button :color="secondaryButton" @click="userLogout">
            <Text3 is-upper>Выйти</Text3>
          </Button>
        </div>
      </div>
      <Spinner v-else />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'
import { INPUT_SIZES } from '@/components/ui_components/Input/constants'

import Button from '@/components/ui_components/Buttons/Button.vue'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Switcher from '@/components/ui_components/Switcher/Switcher.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import Spinner from '@/components/Spinner.vue'

export default Vue.extend({
  components: {
    Text2,
    Text3,
    Button,
    Breadcrumbs,
    Switcher,
    Input,
    Spinner,
  },
  props: {
    login: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      secondaryButton: BUTTON_VARIANTS.SECONDARY,
      grayTextColor: TEXT_COLORS.GRAY,
      blueTextColor: TEXT_COLORS.BLUE,
      redTextColor: TEXT_COLORS.RED,
      switcherDefault: true,
      smallInput: INPUT_SIZES.XS,
      newName: '',
      newLastName: '',
      newEmail: '',

      isNameEditing: false,
      isLastNameEditing: false,
      isEmailEditing: false,

      crumbs: [{ name: 'profile', path: `/user/${this.login}` }],
    }
  },
  computed: {
    ...mapGetters('user', ['user', 'isLoggedIn', 'isLoading']),
  },
  mounted() {
    this.mountedActions()
  },
  methods: {
    ...mapActions('user', ['getUser', 'logout', 'updateUser']),
    async mountedActions() {
      await this.getUser(this.login)
      if (localStorage.loggedUserLogin !== this.login) {
        this.$router.push('/login')
      }
      if (localStorage.showPosts) {
        localStorage.showPosts === 'false'
          ? (this.switcherDefault = false)
          : (this.switcherDefault = true)
      } else {
        this.switcherDefault = true
      }
      this.newName = this.user.name
      this.newLastName = this.user.lastName
      this.newEmail = this.user.email
    },
    userLogout() {
      this.$router.push('/')
      this.logout()
    },
    switcherChange(status: boolean) {
      this.switcherDefault = status
      localStorage.showPosts = status
    },
    async submitEmailEditing() {
      if (this.newEmail && this.newEmail !== this.user.email) {
        const data = {
          name: this.user.name,
          lastName: this.user.lastName,
          login: this.user.login,
          email: this.newEmail,
          password: this.user.password,
          createdAt: this.user.createdAt,
        }
        await this.updateUser(data)
        this.isEmailEditing = false
        this.$router.go()
      } else {
        this.isNameEditing = false
      }
    },
    async submitNameEditing() {
      if (this.newName && this.newName !== this.user.name) {
        const data = {
          name: this.newName,
          lastName: this.user.lastName,
          login: this.user.login,
          email: this.user.email,
          password: this.user.password,
          createdAt: this.user.createdAt,
        }
        await this.updateUser(data)
        this.isNameEditing = false
        this.$router.go()
      } else {
        this.isNameEditing = false
      }
    },
    async submitLastNameEditing() {
      if (this.newLastName && this.newLastName !== this.user.lastName) {
        const data = {
          name: this.user.name,
          lastName: this.newLastName,
          login: this.user.login,
          email: this.user.email,
          password: this.user.password,
          createdAt: this.user.createdAt,
        }
        await this.updateUser(data)
        this.isLastNameEditing = false
        this.$router.go()
      } else {
        this.isLastNameEditing = false
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.user-page {
  width: calculateVw(1174);
  margin: 0 auto;
  display: flex;
  gap: calculateVw(50);
  background: $deep-gray;
  padding: calculateVw(20);
  border-radius: calculateVw(12);
  &__img {
    img {
      width: calculateVw(180);
      height: calculateVw(180);
    }
  }
  &__info {
    padding: calculateVw(50) calculateVw(0);
    .field {
      margin-bottom: calculateVw(15);
      gap: calculateVw(50);
      align-items: center;
      display: flex;
      &-col {
        display: flex;
        gap: calculateVw(10);
        align-items: center;
      }
      .text {
        gap: calculateVw(20);
        align-items: center;
        display: flex;
      }
      .edit-btn {
        background: $gray;
        padding: calculateVw(2) calculateVw(5);
        border-radius: calculateVw(4);
        font-size: calculateVw(13);
        cursor: pointer;
      }
    }
    .field.switcher {
      gap: calculateVw(5);
    }
    .logout {
      margin-top: calculateVw(40);
    }
  }
}

@media screen and (max-width: 768px) {
  .user-page {
    flex-direction: column;
  }
  .user-page__info .field .edit-btn[data-v-6ec0ab5f] {
    padding: calculateVw768(2) calculateVw768(5);
    border-radius: calculateVw768(4);
    font-size: calculateVw768(13);
  }
}
</style>
