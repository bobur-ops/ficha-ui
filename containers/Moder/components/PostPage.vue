<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="post">
      <div class="post-author">
        <Text2 is-upper>Автор:</Text2>
        <Text2 :color="blueTextColor">{{ post.author }}</Text2>
      </div>
      <div class="post-topic">
        <div class="post-topic__card">{{ post.postTopic }}</div>
      </div>
      <div class="post-title">
        <Text2 :color="redTextColor">{{ post.title }}</Text2>
      </div>
      <div class="post-text">
        <Text3>{{ post.text }}</Text3>
      </div>
      <div class="post-tags">
        <Text3
          v-for="(tag, idx) in post.tags"
          :key="idx"
          :color="blueTextColor"
          is-upper
        >
          #{{ tag.text }}
        </Text3>
      </div>
      <div class="post-btn">
        <Button @click="prove">
          <Text3 is-upper>потдвердить</Text3>
        </Button>
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
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

export default Vue.extend({
  components: {
    Breadcrumbs,
    Text2,
    Text3,
    Button,
  },
  data() {
    return {
      post: {},
      redTextColor: TEXT_COLORS.RED,
      blueTextColor: TEXT_COLORS.BLUE,
      crumbs: [
        { name: 'moder', path: `/moder/${this.$route.params.id}` },
        {
          name: 'post',
          path: `/moder/${this.$route.params.id}/${this.$route.params.postId}`,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('posts', ['postById']),
  },
  mounted() {
    this.getPost()
  },
  methods: {
    ...mapActions('posts', ['getPosts', 'updatePost']),
    async getPost() {
      await this.getPosts()
      this.post = this.postById(this.$route.params.postId)
    },
    async prove() {
      const data = {
        ...this.post,
        proved: true,
      }
      await this.updatePost(data)
      this.$router.push(`/moder/${this.$route.params.id}`)
    },
  },
})
</script>
<style lang="scss" scoped>
.post {
  max-width: calculateVw(1174);
  margin: 0 auto;
  background: $deep-gray;
  padding: calculateVw(20);
  border-radius: calculateVw(12);
  &-author {
    display: flex;
    gap: calculateVw(10);
    margin-bottom: calculateVw(15);
  }
  &-topic {
    margin-bottom: calculateVw(35);
    &__card {
      padding: calculateVw(10);
      background: $red;
      border-radius: calculateVw(12);
      text-transform: uppercase;
      font-size: calculateVw(18);
      color: white;
      display: inline-block;
    }
  }
  &-title {
    margin-bottom: calculateVw(25);
  }
  &-text {
    padding: calculateVw(15) calculateVw(10);
    background: $dark;
    border-radius: calculateVw(12);
    min-height: calculateVw(250);
    margin-bottom: calculateVw(15);
  }
  &-tags {
    display: flex;
    gap: calculateVw(10);
  }
  &-btn {
    margin-top: calculateVw(25);
  }
}
</style>
