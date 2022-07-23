<template>
  <div class="header">
    <div class="header-logo">
      <NuxtLink tag="div" to="/">
        <div class="header-logo__img"></div>
      </NuxtLink>
    </div>
    <nav class="header-nav">
      <li v-for="(item, index) in items" :key="index" class="header-nav__item">
        <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
      </li>
    </nav>
    <div class="header-nav__button">
      <NuxtLink
        :to="`${isLoggedIn ? `user/${user.login}` : '/login'}`"
        tag="div"
      >
        <Button :color="BUTTON_VARIANTS.PRIMARY">{{
          isLoggedIn ? 'Перейти в личный кабинет' : 'Войти'
        }}</Button>
      </NuxtLink>
    </div>
    <div class="header-hamburger">
      <div
        class="header-hamburger__icon"
        @click="isMenuOpen = !isMenuOpen"
      ></div>
      <div
        :class="`${isMenuOpen ? 'active' : ''}`"
        class="header-hamburger__wrapper"
      >
        <div class="header-hamburger__content">
          <div class="hamburger-close" @click="isMenuOpen = false"></div>
          <li
            v-for="(item, index) in items"
            :key="index"
            class="header-hamburger__item"
          >
            <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
          </li>
          <div class="header-hamburger__button">
            <NuxtLink
              :to="`${isLoggedIn ? `user/${user.login}` : '/login'}`"
              tag="div"
            >
              <Button :color="BUTTON_VARIANTS.PRIMARY">{{
                isLoggedIn ? 'Перейти в личный кабинет' : 'Войти'
              }}</Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { NAIN_HEADER_NAVIGATION_ITEMS } from './constants'
import Button from '@/components/ui_components/Buttons/Button.vue'

import { BUTTON_VARIANTS } from '~/components/ui_components/Buttons/constants'

type ItemType = {
  name: string
  link: string
}[]

export default Vue.extend({
  components: {
    Button,
  },

  props: {
    items: {
      default(): ItemType {
        return []
      },
      type: Array,
    },
  },
  data() {
    return { NAIN_HEADER_NAVIGATION_ITEMS, BUTTON_VARIANTS, isMenuOpen: false }
  },
  computed: {
    ...mapGetters('user', ['user', 'isLoggedIn']),
  },
})
</script>

<style lang="scss">
.header {
  @include justify-align-between;
  margin: 0 auto calculateVw(152);
  padding-top: calculateVw(33);
  max-width: calculateVw(1174);
  &-logo {
    &__img {
      width: calculateVw(55);
      height: calculateVw(55);
      background: $blue;
      position: relative;
      &::after {
        content: '';
        width: calculateVw(55);
        position: absolute;
        height: calculateVw(55);
        background: $red;
        right: calculateVw(-14);
        bottom: calculateVw(-9);
        z-index: -1;
      }
    }
  }
  &-nav {
    @include align-center;
    // margin-right: calculateVw(61);
    &__item {
      list-style-type: none;
      margin-right: calculateVw(55);
      font-family: 'Proxima Nova';
      transition: 0.3s;
      font-size: calculateVw(18);
      font-weight: 700;
      a {
        text-decoration: none;
        color: $gray;
        transition: 0.3s;
        &:hover {
          color: $blue;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        text-shadow: calculateVw(0) calculateVw(0) calculateVw(3.5) $blue;
      }
    }
  }
}

.header-hamburger {
  display: none;
  position: static;
  z-index: 10;
  &__icon {
    position: relative;
    width: calculateVw768(28);
    height: calculateVw768(2);
    background: $white;
    &::after {
      content: '';
      top: calculateVw768(10);
      position: absolute;
      width: calculateVw768(28);
      height: calculateVw768(2);
      background: $white;
      transition: 0.3s;
      transform-origin: left;
    }
    &::before {
      content: '';
      bottom: calculateVw768(10);
      position: absolute;
      width: calculateVw768(28);
      height: calculateVw768(2);
      background: $white;
      transform-origin: left;
      transition: 0.3s;
    }
  }
  &__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100vh;
    background: $deep-gray;
    transform: translateX(calculateVw768(500));
    transition: 0.3s;
    &::before {
      position: absolute;
      content: '';
      background: inherit;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      right: 0;
      width: 40%;
      height: 100vh;
      box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
      filter: blur(10px);
      border-radius: 15px;
    }
  }
  &__content {
    position: relative;
    padding: calculateVw768(20);
  }
  &__item {
    list-style-type: none;
    font-family: 'Proxima Nova';
    transition: 0.3s;
    margin-bottom: calculateVw768(15);
    font-size: calculateVw768(18);
    font-weight: 700;
    a {
      text-decoration: none;
      color: $gray;
      transition: 0.3s;
      &:hover {
        color: $blue;
      }
    }
    &:last-child {
      margin-bottom: calculateVw768(0);
    }
    &:hover {
      text-shadow: calculateVw768(0) calculateVw768(0) calculateVw768(3.5) $blue;
    }
  }
}
.header-hamburger__wrapper.active {
  transform: translateX(0);
}
.hamburger-close {
  position: absolute;
  width: calculateVw768(25);
  height: calculateVw768(25);
  top: calculateVw768(15);
  right: calculateVw768(15);
  &::after {
    display: inline-block;
    content: '\00d7';
    color: $white;
  }
}
.header-hamburger__button {
}

@media screen and (max-width: 768px) {
  .header-nav {
    display: none;
  }
  .header-hamburger {
    display: block;
  }
  .header-nav__button {
    display: none;
  }
}
@media screen and (max-width: 485px) {
}
</style>
