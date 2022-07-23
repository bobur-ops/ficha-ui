<template>
  <div class="wrapper">
    <Breadcrumbs :params="crumbs" />
    <div class="content">
      <Tables
        :admins="admins"
        :mentors="mentors"
        :moders="moders"
        :users="users"
        :usersLoading="isLoading"
        :mentorsLoading="mentorsLoading"
        :modersLoading="modersLoading"
        :adminsLoading="adminsLoading"
      />
      <AddRole />
      <NuxtLink tag="div" to="/owner/mentorApps" style="display: flex">
        <Text2
          style="cursor: pointer"
          :color="mentorApplications ? blueTextColor : whiteTextColor"
          is-upper
          >Заявки на преподавателей</Text2
        >

        <Text2
          v-if="mentorApplications"
          style="cursor: pointer"
          :color="mentorApplications ? blueTextColor : whiteTextColor"
          is-upper
          >{{ `(${mentorApplications.length})  ` }}</Text2
        >
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import Tables from './components/Tables.vue'
import AddRole from './components/AddRole.vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import Text2 from '@/components/ui_components/Typography/Text2.vue'

import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default Vue.extend({
  components: {
    Breadcrumbs,
    AddRole,
    Tables,
    Text2,
  },
  data() {
    return {
      blueTextColor: TEXT_COLORS.BLUE,
      whiteTextColor: TEXT_COLORS.WHITE,
      crumbs: [
        {
          name: 'owner',
          path: '/owner',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('admins', ['admins', 'adminsLoading']),
    ...mapGetters('moders', ['moders', 'modersLoading']),
    ...mapGetters('mentors', ['mentors', 'mentorsLoading']),
    ...mapGetters('user', ['users', 'isLoading']),
    ...mapGetters('becomeMentor', ['mentorApplications']),
  },
  mounted() {
    if (!localStorage.owner) {
      this.$router.push('/owner/login')
    }
    this.getData()
  },
  methods: {
    ...mapActions('admins', ['getadmins']),
    ...mapActions('moders', ['getmoders']),
    ...mapActions('mentors', ['getMentors']),
    ...mapActions('user', ['getUsers']),
    ...mapActions('becomeMentor', ['getApplications']),
    getData() {
      this.getadmins()
      this.getmoders()
      this.getMentors()
      this.getUsers()
      this.getApplications()
    },
  },
})
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: calculateVw(1174);
  margin: 0 auto calculateVw(50);
}
.content {
  .role {
    margin-bottom: calculateVw(45);
    &-label {
      margin-bottom: calculateVw(25);
    }
  }
}
</style>
