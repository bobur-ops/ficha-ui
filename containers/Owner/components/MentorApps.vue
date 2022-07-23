<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="apps">
      <div v-if="selectedApp" class="selected">
        <div class="selected-field">
          <div class="selected-field__item">
            <Text2 is-upper>Имя:</Text2>
            <Text2 :color="redTextColor">{{ selectedApp.name }}</Text2>
          </div>
          <div class="selected-field__item">
            <Text2 is-upper>Фамилия:</Text2>
            <Text2 :color="redTextColor">{{ selectedApp.lastName }}</Text2>
          </div>
        </div>
        <div class="selected-field">
          <div class="selected-field__item">
            <Text2 is-upper>почта:</Text2>
            <Text2 :color="redTextColor">{{ selectedApp.email }}</Text2>
          </div>
        </div>
        <div class="selected-field">
          <div class="selected-field__item">
            <Text2 is-upper>портфолио:</Text2>
            <a :href="`${selectedApp.linkToCv}`" target="_blank">
              <Text2 :color="redTextColor">{{ selectedApp.linkToCv }}</Text2>
            </a>
          </div>
        </div>
        <div class="selected-field">
          <div class="selected-field__item">
            <Text2 is-upper>о себе:</Text2>
          </div>
        </div>
        <div class="selected-about">
          <Text3>{{ selectedApp.text }}</Text3>
        </div>
        <div class="selected-action">
          <Button :color="secondaryButton" @click="selectedApp = null">
            <Text3 is-upper>закрыть</Text3>
          </Button>
          <Button :color="errorButton" @click="deleteApp">
            <Text3 is-upper>удалить</Text3>
          </Button>
        </div>
      </div>
      <table v-if="isLoading" class="apps-table">
        <thead class="apps-table__head">
          <tr class="row">
            <th class="item">
              <Text2 is-upper>ФИО</Text2>
            </th>
            <th class="item">
              <Text2 is-upper>почти</Text2>
            </th>
            <th class="item">
              <Text2 is-upper>дата</Text2>
            </th>
          </tr>
        </thead>
        <tbody class="apps-table__body">
          <tr
            v-for="(item, idx) in mentorApplications"
            :key="idx"
            class="row"
            @click="selectedApp = item"
          >
            <td class="item">
              <Text2
                class="item-text"
                :color="item !== selectedApp ? blueTextColor : redTextColor"
                >{{ item.name }} &nbsp; {{ item.lastName }}</Text2
              >
            </td>
            <td class="item">
              <Text2
                class="item-text"
                :color="item !== selectedApp ? blueTextColor : redTextColor"
                >{{ item.email }}</Text2
              >
            </td>
            <td class="item">
              <Text2
                class="item-text"
                :color="item !== selectedApp ? blueTextColor : redTextColor"
                >{{ item.sentAt }}</Text2
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'
import Spinner from '@/components/Spinner.vue'
import Button from '@/components/ui_components/Buttons/Button.vue'

export default Vue.extend({
  components: {
    Text2,
    Text3,
    Button,
    Breadcrumbs,
    Spinner,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      redTextColor: TEXT_COLORS.RED,
      errorTextColor: TEXT_COLORS.ERROR,
      secondaryButton: BUTTON_VARIANTS.SECONDARY,
      errorButton: BUTTON_VARIANTS.ERROR,
      crumbs: [
        {
          name: 'owner',
          path: '/owner',
        },
        {
          name: 'Mentor Applications',
          path: '/owner/mentorApps',
        },
      ],
      selectedApp: null,
    }
  },
  computed: {
    ...mapGetters('becomeMentor', ['mentorApplications', 'isLoading']),
  },
  mounted() {
    if (!localStorage.owner) {
      this.$router.push('/owner/login')
    }
    this.getApplications()
  },
  methods: {
    ...mapActions('becomeMentor', ['getApplications', 'deleteApplication']),
    async deleteApp() {
      await this.deleteApplication(this.selectedApp.id)
      this.$router.go()
    },
  },
})
</script>
<style lang="scss" scoped>
.apps {
  max-width: calculateVw(1174);
  margin: 0 auto;
  &-table {
    width: 100%;
  }
  th,
  td {
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  th {
    padding: calculateVw(20) calculateVw(0);
  }
  td {
    padding: calculateVw(8) calculateVw(0);
  }
  tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  .selected {
    background: $deep-gray;
    padding: calculateVw(20);
    border-radius: calculateVw(12);
    margin-bottom: calculateVw(90);
    &-field {
      display: flex;
      gap: calculateVw(80);
      margin-bottom: calculateVw(30);
      &__item {
        display: flex;
        gap: calculateVw(10);
      }
    }
    &-about {
      width: 100%;
      margin-top: calculateVw(-20);
      background: $dark-blue;
      padding: calculateVw(10) calculateVw(15);
      border-radius: calculateVw(12);
      min-height: calculateVw(150);
      max-height: calculateVw(450);
    }
    &-action {
      display: flex;
      gap: calculateVw(30);
      margin-top: calculateVw(30);
    }
  }
}
@media screen and (max-width: 768px) {
  .item-text {
    font-size: calculateVw768(16);
  }
}
</style>
