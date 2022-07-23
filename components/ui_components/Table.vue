<template>
  <div class="ozn-component" :class="cssStyle">
    <table class="ozn-table">
      <thead>
        <tr class="table-raw">
          <th v-for="(col, idx) in headers" :key="idx">
            <template v-if="sortEnabled">
              <template v-if="sortColumn == idx">
                <i
                  v-if="sortOrder == 'desc'"
                  class="icofont-arrow-up icofont-md active"
                ></i>
                <i v-else class="icofont-arrow-down icofont-md active"></i>
              </template>
              <template v-else>
                <i v-if="col.sortable" class="icofont-sort icofont-md"></i>
              </template>
            </template>
            <span>
              <Text2 :color="redTextColor" is-upper> {{ col.label }}</Text2>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="numRows > 0">
          <tr v-for="(row, idx) in visibleRows" :key="idx">
            <slot name="items" :row="row"></slot>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td :colspan="numColumns">
              <slot name="no-data"></slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { TEXT_COLORS } from '@/components/ui_components/Typography/constants'
import Text2 from '@/components/ui_components/Typography/Text2.vue'
export default {
  components: {
    Text2,
  },
  props: {
    headers: {
      type: Array,
      default() {
        return []
      },
      required: true,
    },
    rows: {
      type: Array,
      default() {
        return []
      },
      required: true,
    },
    cssStyle: {
      type: String,
      default: 'ozn',
    },
  },
  data() {
    return {
      redTextColor: TEXT_COLORS.RED,
      sortDefault: {
        field: null,
        type: 'asc',
      },
      paginationDefault: {
        enabled: true,
        itemsPerPage: 5,
        align: 'right',
        visualStyle: 'buttons',
      },
      sortColumn: null,
      sortField: null,
      sortOrder: null,
      visibleRows: {},
      tableRows: {},
      page: 1,
    }
  },
  computed: {
    sortOptions() {
      return Object.assign(this.sortDefault, this.sort)
    },
    paginationOptions() {
      return Object.assign(this.paginationDefault, this.pagination)
    },
    sortEnabled() {
      return this.sortOptions.field != null && this.numRows > 0
    },
    paginationEnabled() {
      return (
        this.paginationOptions.enabled &&
        this.paginationOptions.itemsPerPage > 0 &&
        this.numRows > 0
      )
    },
    numRows() {
      return this.rows.length
    },
    numColumns() {
      return this.headers.length
    },
    totalPages() {
      return this.paginationEnabled
        ? Math.ceil(this.numRows / this.paginationOptions.itemsPerPage)
        : null
    },
  },
  watch: {
    rows() {
      this.tableRows = this.rows.slice(0)
      this.selectVisibleRows()
    },
  },
  mounted() {
    this.tableRows = this.rows.slice(0) // Para que haga una copia del array
    if (this.sortEnabled) this.initSort()
    this.selectVisibleRows()
  },
  methods: {
    onNewPage(newPage) {
      this.page = newPage
      this.selectVisibleRows()
    },
    selectVisibleRows() {
      if (this.paginationEnabled) {
        const rowFirst =
          this.page * this.paginationOptions.itemsPerPage -
          this.paginationOptions.itemsPerPage
        const rowLast = this.page * this.paginationOptions.itemsPerPage
        this.visibleRows = this.tableRows.slice(rowFirst, rowLast)
      } else this.visibleRows = this.tableRows.slice(0)
    },
    initSort() {
      this.sortOrder = this.sortOptions.order === 'asc' ? 'asc' : 'desc'

      let defaultSortColumn = null

      for (let x = 0; x < this.headers.length; x++) {
        if (
          this.headers[x].sortable &&
          this.headers[x].field === this.sortOptions.field
        ) {
          defaultSortColumn = x
          break
        }
      }

      if (defaultSortColumn != null) this.sortBy(defaultSortColumn)
    },
    sortBy(idx) {
      if (this.sortEnabled && this.headers[idx].sortable) {
        if (this.sortColumn === idx) {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
          this.tableRows.reverse()
        } else {
          this.sortColumn = idx
          this.sortOrder = 'asc'
          this.sortField = this.headers[idx].field

          if (this.headers[idx].type === 'Number') {
            this.tableRows.sort((a, b) => a[this.sortField] - b[this.sortField])
          } else {
            this.tableRows.sort((a, b) =>
              a[this.sortField].localeCompare(b[this.sortField])
            )
          }
        }

        this.page = 1

        this.selectVisibleRows()
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.material-icons {
  font-size: 1rem;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
// Default table styles
.ozn {
  .ozn-table {
    border-collapse: collapse;
    width: 100%;
    thead {
      width: 100%;
      th {
        text-align: left;
        padding: 8px;
        i {
          color: #aaa;
          &.active {
            color: #ff6633;
            + span {
              color: #ff6633;
            }
          }
        }
      }
    }
    tbody {
      td {
        padding: 8px;
      }
    }
  }
}
tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
td,
th {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
