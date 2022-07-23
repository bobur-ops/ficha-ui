<template>
  <div class="main-articles">
    <div class="main-articles__title">
      <Text2 class="title" :color="blueTextColor" is-upper
        >Если ты долистал сюда, то тебе будет интересно даже это</Text2
      >
      <div class="subtitle">
        <Text3 :color="grayTextColor" is-upper
          >Эти статьи пишут наши ведущие специалисты и обычные ребята в своем
          личном микро-блоге. зарегистрируйся, чтобы обсуждать работы других и
          делиться опытом</Text3
        >
      </div>
    </div>
    <div class="main-articles__items">
      <div v-for="item in provedPosts" :key="item.id" class="article">
        <div class="article-head">
          <div class="article-head__img">
            <div
              class="label"
              :class="`${
                item.postTopic === 'Код' ? 'label-blue' : 'label-red'
              }`"
            >
              <Text4
                :color="
                  item.postTopic === 'Код' ? blackTextColor : whiteTextColor
                "
                is-upper
                >{{ item.postTopic }}</Text4
              >
            </div>
          </div>
          <div class="article-head__info">
            <div class="tags">
              <Text3
                v-for="(tag, idx) in item.tags"
                :key="idx"
                :color="blueTextColor"
                is-upper
                >#{{ tag.text }}</Text3
              >
            </div>
            <div class="date">
              <Text4 :color="grayTextColor" is-upper>
                {{ item.sentAt }} <span><viewIcon /></span> {{ item.views }}
              </Text4>
            </div>
          </div>
        </div>
        <div class="article-caption">
          <Text2 :color="blueTextColor" is-upper>{{ item.title }}</Text2>
          <Text3 :color="grayTextColor" is-upper>{{
            item.text.length > 50
              ? `${item.text.substr(0, 50)}(...)`
              : `${item.text}`
          }}</Text3>
        </div>
      </div>
    </div>
    <div class="main-articles__btn">
      <Button :color="blueButtonColor">
        <Text4 :color="blackTextColor" is-upper>ещё</Text4>
      </Button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { ARTICLES } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Text4 from '@/components/ui_components/Typography/Text4.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

import viewIcon from '@/components/svg-icons/viewIcon.vue'
export default Vue.extend({
  components: {
    Text2,
    Text3,
    Text4,
    Button,
    viewIcon,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      grayTextColor: TEXT_COLORS.GRAY,
      blackTextColor: TEXT_COLORS.BLACK,
      whiteTextColor: TEXT_COLORS.WHITE,
      blueButtonColor: BUTTON_VARIANTS.PRIMARY,
      articlesData: ARTICLES,
    }
  },
  computed: {
    ...mapGetters('posts', ['provedPosts', 'isLoading']),
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    ...mapActions('posts', ['getPosts']),
  },
})
</script>
<style lang="scss" scoped>
.main-articles {
  max-width: calculateVw(1174);
  margin: 0 auto;
  &__title {
    margin: 0 auto calculateVw(122);
    text-align: center;
    .title {
      max-width: calculateVw(520);
      margin: 0 auto;
    }
    .subtitle {
      margin: calculateVw(25) auto 0;
      max-width: calculateVw(610);
    }
  }
  &__items {
    @include justify-center;
    // flex-wrap: wrap;
    gap: calculateVw(110);
    margin: 0 auto calculateVw(82);
    .article {
      width: calculateVw(601);
      &-head {
        margin-bottom: calculateVw(27);
        &__img {
          position: relative;
          background: $deep-gray;
          width: 100%;
          height: calculateVw(280);
          margin-bottom: calculateVw(18);
          .label {
            position: absolute;
            top: calculateVw(24);
            left: calculateVw(28);
            padding: calculateVw(15) calculateVw(20);
            border-radius: calculateVw(12);
          }
          .label-blue {
            background: $blue;
          }
          .label-red {
            background: $red;
          }
        }
        &__info {
          @include justify-align-between;
        }
      }
    }
  }
  &__btn {
    @include justify-center;
  }
}
</style>
