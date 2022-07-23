<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="moder">
      <div class="moder-name">
        <Text2 is-upper>Модератор:</Text2>
        <Text2 :color="blueTextColor">
          {{ moderData.name }} {{ moderData.lastName }}
        </Text2>
      </div>
      <div class="moder-posts">
        <Text2 is-upper :color="blueTextColor">Посты на проверку</Text2>
        <table v-if="notProvedPosts.length !== 0">
          <thead>
            <tr>
              <th>
                <Text2 is-upper>Дата</Text2>
              </th>
              <th>
                <Text2 is-upper>Автор</Text2>
              </th>
              <th>
                <Text2 is-upper>Заголовок</Text2>
              </th>
              <th>
                <Text2 is-upper>Зайти на пост</Text2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in notProvedPosts" :key="post.id">
              <td>
                <Text2 :color="blueTextColor">{{ post.sentAt }}</Text2>
              </td>
              <td>
                <Text2 :color="blueTextColor">{{ post.author }}</Text2>
              </td>
              <td>
                <Text2 :color="blueTextColor">{{ post.title }}</Text2>
              </td>
              <td>
                <NuxtLink tag="div" :to="`/moder/${moderData.id}/${post.id}`">
                  <Button>Зайти</Button>
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
        <Spinner v-else-if="isLoading" />
        <div v-else>
          <Text2 :color="redTextColor">Нет постов для проверки</Text2>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'
import Spinner from '@/components/Spinner.vue'

export default Vue.extend({
  components: {
    Breadcrumbs,
    Text2,
    Button,
    Spinner,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      redTextColor: TEXT_COLORS.RED,
      moderData: {},
      crumbs: [{ name: 'moder', path: `/moder/${this.$route.params.id}` }],
    }
  },
  computed: {
    ...mapGetters('posts', ['posts', 'isLoading']),
    notProvedPosts() {
      type Post = {
        proved: boolean
      }
      return this.posts.filter((post: Post) => !post.proved)
    },
  },
  mounted() {
    this.moderData = JSON.parse(localStorage.currentModer)
    this.getPosts()
  },
  methods: {
    ...mapActions('posts', ['getPosts']),
  },
})
</script>
<style lang="scss" scoped>
.moder {
  max-width: calculateVw(1174);
  margin: 0 auto;
  &-name {
    display: flex;
    gap: calculateVw(20);
  }
  &-posts {
    margin-top: calculateVw(45);
    table,
    th,
    td {
      table,
      th,
      td {
        border: 1px solid;
        padding: calculateVw(15) calculateVw(8);
      }
    }
    table {
      margin-top: calculateVw(20);
      width: 100%;
      border-collapse: collapse;
      background: $deep-gray;
      border-radius: calculateVw(12);
    }
  }
}
</style>
