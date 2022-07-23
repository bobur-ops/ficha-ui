<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="mentor">
      <div class="mentor-name">
        <Text2 is-upper>преподаватель:</Text2>
        <Text2 :color="blueTextColor"
          >{{ mentorData.name }}&nbsp; {{ mentorData.lastName }}</Text2
        >
      </div>
      <div class="mentor-posts">
        <NuxtLink class="mentor-posts__create" tag="div" to="/createpost">
          <Button>Создать пост</Button>
        </NuxtLink>
        <div class="mentor-posts__table">
          <Text2 :color="blueTextColor" is-upper>Мои посты:</Text2>
          <table v-if="allPosts.length !== 0">
            <thead>
              <tr>
                <th>
                  <Text2 is-upper>Дата</Text2>
                </th>
                <th>
                  <Text2 is-upper>Заголовок</Text2>
                </th>
                <th>
                  <Text2 is-upper>Статус</Text2>
                </th>
                <th>
                  <Text2 is-upper>Зайти на пост</Text2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in allPosts" :key="post.id">
                <td>
                  <Text2 :color="blueTextColor">{{ post.sentAt }}</Text2>
                </td>
                <td>
                  <Text2 :color="blueTextColor">{{ post.title }}</Text2>
                </td>
                <td>
                  <div
                    :class="`status status-${
                      post.proved ? 'proved' : 'checking'
                    }`"
                  >
                    <Text2>{{
                      post.proved ? 'Подтверждено' : 'На проверке'
                    }}</Text2>
                  </div>
                </td>
                <td>
                  <NuxtLink
                    tag="div"
                    :to="`/mentor/${mentorData.id}/${post.id}`"
                  >
                    <Button>Зайти</Button>
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
          <Spinner v-else-if="isLoading" />
          <div v-else>
            <Text2 :color="redTextColor">У вас нет постов</Text2>
          </div>
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
      mentorData: {},
      blueTextColor: TEXT_COLORS.BLUE,
      redTextColor: TEXT_COLORS.RED,
      grayTextColor: TEXT_COLORS.GRAY,
      crumbs: [{ name: 'mentor', path: `/mentor/${this.$route.params.id}` }],
    }
  },
  computed: {
    ...mapGetters('posts', ['posts', 'isLoading']),
    allPosts() {
      type Post = {
        author: string
        authorId: string
        postTopic: string
        tags: string
        text: string
      }
      const posts = this.posts.filter(
        (post: Post) => post.authorId === this.mentorData.id
      )
      return posts
    },
  },
  mounted() {
    this.mentorData = JSON.parse(localStorage.currentMentor)
    this.getPosts()
  },
  methods: {
    ...mapActions('posts', ['getPosts']),
  },
})
</script>
<style lang="scss" scoped>
.mentor {
  max-width: calculateVw(1174);
  margin: 0 auto;
  &-name {
    display: flex;
    gap: calculateVw(20);
  }
  &-posts {
    padding: calculateVw(20) calculateVw(0);
    &__create {
      margin-bottom: calculateVw(20);
    }
    &__table {
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
        width: 100%;
        border-collapse: collapse;
        background: $deep-gray;
        tr {
          border-radius: calculateVw(8);
          th {
            text-align: left;
          }
          td {
            max-width: calculateVw(450);
            overflow: hidden;
            .status {
              padding: calculateVw(10);
              border-radius: calculateVw(4);
            }
            .status-checking {
              background: $red;
            }
            .status-proved {
              background: $blue;
            }
          }
        }
      }
    }
  }
}
</style>
