<template>
  <div class="content">
    <div class="role">
      <div class="role-label">
        <Text2 is-upper>Админы</Text2>
      </div>
      <Table v-if="!adminsLoading" :headers="columns" :rows="admins">
        <template #items="{ row }">
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.name
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.lastName
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.email
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.login
            }}</Text2>
          </td>
        </template>
      </Table>
      <Spinner v-else />
    </div>
    <div class="role">
      <div class="role-label">
        <Text2 is-upper>Модераторы</Text2>
      </div>
      <Table v-if="!modersLoading" :headers="columns" :rows="moders">
        <template #items="{ row }">
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.name
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.lastName
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.email
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.login
            }}</Text2>
          </td>
        </template>
      </Table>
      <Spinner v-else />
    </div>
    <div class="role">
      <div class="role-label">
        <Text2 is-upper>преподаватели</Text2>
      </div>
      <Table v-if="!mentorsLoading" :headers="columns" :rows="mentors">
        <template #items="{ row }">
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.name
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.lastName
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.email
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.login
            }}</Text2>
          </td>
        </template>
      </Table>
      <Spinner v-else />
    </div>
    <div class="role">
      <div class="role-label">
        <Text2 is-upper>пользователи</Text2>
      </div>
      <Table v-if="!usersLoading" :headers="columns" :rows="users">
        <template #items="{ row }">
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.name
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.lastName
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.email
            }}</Text2>
          </td>
          <td>
            <Text2 class="table-item" :color="blueTextColor">{{
              row.login
            }}</Text2>
          </td>
        </template>
      </Table>
      <Spinner v-else />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TABLE_HEADERS } from './constants'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Table from '@/components/ui_components/Table.vue'
import Spinner from '@/components/Spinner.vue'

export default Vue.extend({
  components: {
    Text2,
    Table,
    Spinner,
  },
  props: {
    admins: {
      default() {
        return []
      },
      type: Array,
    },
    moders: {
      default() {
        return []
      },
      type: Array,
    },
    mentors: {
      default() {
        return []
      },
      type: Array,
    },
    users: {
      default() {
        return []
      },
      type: Array,
    },
    usersLoading: {
      default: false,
      type: Boolean,
    },
    modersLoading: {
      default: false,
      type: Boolean,
    },
    mentorsLoading: {
      default: false,
      type: Boolean,
    },
    adminsLoading: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      columns: TABLE_HEADERS,
      blueTextColor: TEXT_COLORS.BLUE,
      redTextColor: TEXT_COLORS.RED,
    }
  },
})
</script>
<style lang="scss" scoped>
.content {
  .role {
    margin-bottom: calculateVw(45);
    &-label {
      margin-bottom: calculateVw(25);
    }
  }
}
@media screen and (max-width: 768px) {
  .table-item {
    font-size: calculateVw768(18);
  }
}
</style>
