<template>
  <table class="apps-table">
    <thead class="apps-table__head">
      <tr>
        <th class="apps-table__head--item">
          <Text2 :color="blueTextColor" is-upper>дата</Text2>
        </th>
        <th class="apps-table__head--item">
          <Text2 :color="blueTextColor" is-upper>ФИО</Text2>
        </th>
        <th class="apps-table__head--item">
          <Text2 :color="blueTextColor" is-upper>E-mail</Text2>
        </th>
      </tr>
    </thead>
    <tbody class="apps-table__body">
      <tr
        v-for="(application, index) in data"
        :key="index"
        class="apps-table__body--row"
        @click="clickApplication(application)"
      >
        <td class="apps-table__body--item">
          <Text3>{{ application.sentAt }}</Text3>
        </td>
        <td class="apps-table__body--item">
          <Text3>{{ application.name }} {{ application.lastName }}</Text3>
        </td>
        <td class="apps-table__body--item">
          <Text3>{{ application.email }}</Text3>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import Vue from 'vue'
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'

import Text2 from '@/components/ui_components/Typography/Text2.vue'
import Text3 from '@/components/ui_components/Typography/Text3.vue'

type applicationType = {
  email: string
  last_name: string
  link_to_portfolio: string
  profession_type: string
  text: string
  tarif: string
  name: string
}[]

export default Vue.extend({
  components: {
    Text2,
    Text3,
  },
  props: {
    data: {
      default(): applicationType {
        return []
      },
      type: Array,
    },
  },
  data() {
    return {
      redTextColor: TEXT_COLORS.RED,
      blueTextColor: TEXT_COLORS.BLUE,
    }
  },
  methods: {
    clickApplication(application: applicationType) {
      this.$emit('selectApplication', application)
    },
  },
})
</script>
<style lang="scss" scoped>
table,
th,
td {
  table,
  th,
  td {
    border: calculateVw(1) solid $gray;
    padding: calculateVw(15) calculateVw(8);
  }
}
table {
  margin-top: calculateVw(20);
  width: 100%;
  border-collapse: collapse;
  background: $deep-gray;
}
table {
  width: 100%;
  border-collapse: collapse;
  background: $deep-gray;
  tr {
    th {
      text-align: left;
    }
    td {
      max-width: calculateVw(450);
      overflow: hidden;
    }
  }
}
</style>
