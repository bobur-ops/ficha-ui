<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="createPost">
      <div class="form-select">
        <div
          v-for="(item, index) in selectData"
          :key="index"
          class="form-select__item"
          :class="{ active: item.selected }"
          @click="selectItemFromSelect(item.label)"
        >
          <Text3 is-upper :color="item.selected ? redTextColor : grayTextColor">
            {{ item.label }}
          </Text3>
        </div>
      </div>
      <div class="form-field">
        <div class="form-field__label">
          <Text2>Заголовок</Text2>
        </div>
        <input v-model="title" class="form-field__input" />
      </div>
      <div class="form-field">
        <div class="form-field__label">
          <Text2>Текст</Text2>
        </div>
        <textarea v-model="text" class="form-field__text" />
      </div>
      <div class="form-field">
        <div class="form-field__label">
          <Text2>Теги</Text2>
        </div>
        <vue-tags-input
          v-model="tag"
          :tags="tags"
          @tags-changed="(newTags) => (tags = newTags)"
        />
      </div>
      <div class="form-error">
        <Text3 v-if="isError" :color="errorTextColor"
          >Что то пошло не так повторите попытку позже.</Text3
        >
      </div>
      <div class="form-btn" @click="submitPost">
        <Button>Применить изменения</Button>
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
      grayTextColor: TEXT_COLORS.GRAY,
      errorTextColor: TEXT_COLORS.ERROR,

      crumbs: [
        { name: 'mentor', path: `/mentor/${this.$route.params.id}` },
        {
          name: 'post',
          path: `/mentor/${this.$route.params.id}/${this.$route.params.postId}`,
        },
      ],
      selectData: [
        {
          label: 'Код',
          selected: true,
        },
        {
          label: 'дизайн',
          selected: false,
        },
      ],
      postTopic: 'код',
      text: '',
      tag: '',
      tags: [],
      title: '',
      mentorData: {},
    }
  },
  computed: {
    ...mapGetters('posts', ['postById', 'isError']),
  },
  mounted() {
    this.getPost()
    this.mentorData = JSON.parse(localStorage.currentMentor)
  },
  methods: {
    ...mapActions('posts', ['createPostForCheck', 'getPosts', 'updatePost']),
    selectItemFromSelect(label: string) {
      this.selectData = this.selectData.map((item) => ({
        ...item,
        selected: label === item.label,
      }))
      this.postTopic = label
    },
    async getPost() {
      await this.getPosts()
      this.post = this.postById(this.$route.params.postId)
      this.postTopic = this.post.postTopic
      this.text = this.post.text
      this.tags = this.post.tags
      this.title = this.post.title
    },
    async submitPost() {
      const data = {
        author: `${this.mentorData.name} ${this.mentorData.lastName}`,
        title: this.title,
        text: this.text,
        tags: this.tags,
        authorId: this.mentorData.id,
        postTopic: this.postTopic,
        id: this.post.id,
        sentAt: this.post.sentAt,
        proved: false,
      }

      await this.updatePost(data)
      if (!this.isError) {
        this.$router.push(`/mentor/${this.mentorData.id}`)
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: calculateVw(1174);
  margin: 0 auto calculateVw(150);
}
.createPost {
  width: 50%;
  .form {
    width: 60%;
    &-select {
      display: flex;
      margin-bottom: calculateVw(45);
      &__item {
        padding: calculateVw(12) calculateVw(15);
        background: $deep-gray;
        margin-right: calculateVw(16);
        cursor: pointer;
        border-radius: calculateVw(12);
      }
      .active {
        background: $white;
      }
    }
    &-field {
      display: flex;
      flex-direction: column;
      gap: calculateVw(10);
      margin-bottom: calculateVw(45);
      &__input {
        background: $dark-light;
        width: 100%;
        border-radius: calculateVw(12);
        padding: calculateVw(10) calculateVw(14);
        outline: none;
        border: none;
        color: white;
        font-family: 'Proxima Nova';
        font-size: calculateVw(14);
      }
      &__text {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        resize: none;
        font-family: 'Proxima Nova';
        font-size: calculateVw(14);
        color: $white;
        padding: calculateVw(22);
        background: $deep-gray;
        border-radius: calculateVw(12);
      }
    }
    &-error {
      height: calculateVw(50);
    }
  }
}
</style>
