<template>
  <div class="admin-login">
    <Breadcrumbs :params="crumbs" />
    <LoginForm />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import LoginForm from '@/containers/Admin/components/LoginForm.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default Vue.extend({
  components: {
    LoginForm,
    Breadcrumbs,
  },
  data() {
    return {
      crumbs: [{ name: 'login', path: '/admin/login' }],
    }
  },
})
</script>
<style lang="scss" scoped>
.admin-login {
  max-width: calculateVw(1174);
  margin: 0 auto calculateVw(112);
}
</style>
