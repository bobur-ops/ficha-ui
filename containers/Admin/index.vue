<template>
  <div>
    <Breadcrumbs :params="crumbs" />
    <AdminPanel />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import AdminPanel from './components/AdminPanel.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default Vue.extend({
  components: {
    AdminPanel,
    Breadcrumbs,
  },
  data() {
    return {
      adminData: {},
      crumbs: [{ name: 'admin', path: '/admin' }],
    }
  },
  mounted() {
    this.adminData = JSON.parse(localStorage.currentAdmin)
  },
  methods: {
    checkAdmin() {
      if (!localStorage.getItem('admin')) {
        this.$router.push('/admin/login')
      }
    },
  },
})
</script>
<style lang="scss" scoped></style>
