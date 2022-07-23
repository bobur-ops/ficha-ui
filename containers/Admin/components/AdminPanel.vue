<template>
  <div class="admin-panel">
    <div class="admin-panel__title">
      <Text1 :color="blueTextColor" is-upper>Панель Админа</Text1>
    </div>
    <div class="admin-panel__main">
      <div class="admin-panel__applications">
        <Title2 is-upper class="applications-title" :color="redTextColor"
          >Заявки</Title2
        >
        <ApplicatonsTable
          v-if="applications.applications.length !== 0"
          :data="applications.applications"
          @selectApplication="selectApplicationUser"
        />
        <div v-else>
          <Text2 :color="errorTextColor">Нету заявок на данный момент!</Text2>
        </div>
        <Spinner v-if="isLoading" />
      </div>
      <div
        v-if="selectedApplicationUser"
        class="admin-panel__selectedApplication"
      >
        <Application
          :application="selectedApplicationUser"
          @closeApplication="selectedApplicationUser = null"
        />
      </div>
      <div class="admin-panel__applications">
        <Title2 is-upper class="applications-title" :color="redTextColor"
          >Заявки преподавателей</Title2
        >
        <ApplicatonsTable
          v-if="mentorApplications.length !== 0"
          :data="mentorApplications"
          @selectApplication="selectApplicationMentor"
        />
        <div v-else>
          <Text2 :color="errorTextColor">Нету заявок на данный момент!</Text2>
        </div>
        <Spinner v-if="isLoading" />
      </div>
      <div
        v-if="selectedApplicationMentor"
        class="admin-panel__selectedApplication"
      >
        <Application
          :application="selectedApplicationMentor"
          @closeApplication="selectedApplicationMentor = null"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import ApplicatonsTable from './ApplicatonsTable.vue'

import Application from './Application.vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import { BUTTON_VARIANTS } from '@/components/ui_components/Buttons/constants'

import Text1 from '@/components/ui_components/Typography/Text1.vue'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Title2 from '@/components/ui_components/Typography/Title2.vue'
import Spinner from '@/components/Spinner.vue'
// import Textarea from '@/components/ui_components/TextArea.vue'
// import Text3 from '@/components/ui_components/Typography/Text3.vue'
// import Button from '@/components/ui_components/Buttons/Button.vue'

type applicationType = {
  email: string
  last_name: string
  link_to_portfolio: string
  profession_type: string
  text: string
  tarif: string
  name: string
}

export default Vue.extend({
  components: {
    Text1,
    Title2,
    Application,
    // Text3,
    Text2,
    ApplicatonsTable,
    Spinner,
    // Textarea,
    // Button,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      redTextColor: TEXT_COLORS.RED,
      grayTextColor: TEXT_COLORS.GRAY,
      errorTextColor: TEXT_COLORS.ERROR,
      selectedApplicationUser: null,
      selectedApplicationMentor: null,
      answer: '',
      secondaryButton: BUTTON_VARIANTS.SECONDARY,
    }
  },
  computed: {
    ...mapGetters('applications', ['applications', 'isLoading']),
    ...mapGetters('becomeMentor', ['mentorApplications', 'mentorsLoading']),
  },
  mounted() {
    this.fetchApplications()
    this.getApplications()
  },
  methods: {
    ...mapActions('applications', ['fetchApplications']),
    ...mapActions('becomeMentor', ['getApplications']),
    selectApplicationUser(application: applicationType) {
      this.selectedApplicationUser = application
    },
    selectApplicationMentor(application: applicationType) {
      this.selectedApplicationMentor = application
    },
  },
})
</script>
<style lang="scss" scoped>
.admin-panel {
  width: calculateVw(1174);
  margin: 0 auto;
  padding: calculateVw(30) calculateVw(20);
  &__title {
    margin-bottom: calculateVw(45);
  }
  &__applications {
    margin-bottom: calculateVw(110);
    .applications {
      &-title {
        margin-bottom: calculateVw(20);
      }
      &-list {
        @include align-center;
        flex-wrap: wrap;
        gap: calculateVw(15);
        &__item {
          width: calculateVw(368);
          height: calculateVw(300);
          background: $deep-gray;
          border-radius: calculateVw(8);
          padding: calculateVw(10) calculateVw(20);
          overflow-y: scroll;
          &::-webkit-scrollbar {
            display: none;
          }
          .item-field {
            display: flex;
            width: 100%;
            gap: calculateVw(10);
            overflow: hidden;
            margin-bottom: calculateVw(5);
            word-wrap: break-word;
          }
        }
      }
    }
  }
  &__selectedApplication {
    margin-bottom: calculateVw(150);
    background: $deep-gray;
    padding: calculateVw(20);
    border-radius: calculateVw(12);
    .selected-app {
      &__top {
        display: flex;
        gap: calculateVw(20);
      }
      &__info {
        padding-left: 35%;
        margin-bottom: calculateVw(90);
        .text {
          margin-top: calculateVw(45);
          width: calculateVw(446);
          padding: calculateVw(8) calculateVw(15);
          background: $white;
          border-radius: calculateVw(8);
        }
      }
      &__textarea {
        display: flex;
        flex-direction: column;
        gap: calculateVw(20);
        width: 60%;
        .btn {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
