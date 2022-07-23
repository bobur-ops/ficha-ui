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
        <Input v-model="title" />
      </div>
      <div class="form-field">
        <div class="form-field__label">
          <Text2>Текст</Text2>
        </div>
        <TextArea v-model="text" />
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
        <Button>Отправить на проверку</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Input from '@/components/ui_components/Input/Input.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import TextArea from '@/components/ui_components/TextArea.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

export default Vue.extend({
  components: {
    Text3,
    Text2,
    Breadcrumbs,
    Input,
    TextArea,
    Button,
  },
  data() {
    return {
      crumbs: [{ name: 'Create Post', path: '/cretatepost' }],
      blueTextColor: TEXT_COLORS.BLUE,
      redTextColor: TEXT_COLORS.RED,
      grayTextColor: TEXT_COLORS.GRAY,
      errorTextColor: TEXT_COLORS.ERROR,
      selectData: [
        {
          label: 'код',
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
      currentMentor: {},
    }
  },
  computed: {
    ...mapGetters('posts', ['isError']),
  },
  mounted() {
    if (!localStorage.currentMentor) {
      this.$router.push('/')
    } else {
      this.currentMentor = JSON.parse(localStorage.currentMentor)
    }
  },
  methods: {
    ...mapActions('posts', ['createPostForCheck']),
    selectItemFromSelect(label: string) {
      this.selectData = this.selectData.map((item) => ({
        ...item,
        selected: label === item.label,
      }))
      this.postTopic = label
    },
    async submitPost() {
      const today = new Date()
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate()

      const data = {
        author: `${this.currentMentor.name} ${this.currentMentor.lastName}`,
        title: this.title,
        text: this.text,
        tags: this.tags,
        authorId: this.currentMentor.id,
        postTopic: this.postTopic,
        id: Date.now(),
        sentAt: date,
        proved: false,
      }

      await this.createPostForCheck(data)
      if (!this.isError) {
        this.$router.push(`/mentor/${this.currentMentor.id}`)
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
    }
    &-error {
      height: calculateVw(50);
    }
  }
}
@media screen and (max-width: 768px) {
  .createPost[data-v-a29d59c4] {
    width: 100%;
  }
}
</style>
