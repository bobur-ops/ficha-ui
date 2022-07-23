<template>
  <div class="main-page">
    <MainTop />
    <MainCourses />
    <MainTarifs />
    <MainMentors />
    <MainAbout />
    <MainForm />
    <MainStock />
    <MainReviews />
    <MainStudentsWork />
    <MainStats />
    <MainArticles v-if="showPosts" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { decode } from 'jsonwebtoken'
import { mapActions } from 'vuex'
import MainTop from '~/containers/MainPage/components/MainTop.vue'
import MainCourses from '~/containers/MainPage/components/MainCourses.vue'
import MainMentors from '~/containers/MainPage/components/MainMentors.vue'
import MainAbout from '~/containers/MainPage/components/MainAbout.vue'
import MainForm from '~/containers/MainPage/components/MainForm.vue'
import MainStock from '~/containers/MainPage/components/MainStock.vue'
import MainReviews from '~/containers/MainPage/components/MainReviews.vue'
import MainStudentsWork from '~/containers/MainPage/components/MainStudentsWork.vue'
import MainStats from '~/containers/MainPage/components/MainStats.vue'
import MainArticles from '~/containers/MainPage/components/MainArticles.vue'
import MainTarifs from '~/containers/MainPage/components/MainTarifs.vue'

export default Vue.extend({
  components: {
    MainTop,
    MainCourses,
    MainMentors,
    MainForm,
    MainAbout,
    MainStock,
    MainReviews,
    MainStudentsWork,
    MainStats,
    MainArticles,
    MainTarifs,
  },
  data() {
    return {
      showPosts: true,
    }
  },
  mounted() {
    this.isUserLoggedin()
    if (localStorage.showPosts) {
      localStorage.showPosts === 'false'
        ? (this.showPosts = false)
        : (this.showPosts = true)
    }
  },
  methods: {
    ...mapActions('user', ['userLogin']),
    async isUserLoggedin() {
      const token: any = localStorage.getItem('jwtoken')
      const data: any = decode(token)
      if (data) {
        const userData = {
          login: data.login,
          password: data.password,
        }
        await this.userLogin(userData)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  margin: 0 auto;
  &__header {
    @include justify-center;
    margin-bottom: calculateVw(152);
  }
}
</style>
