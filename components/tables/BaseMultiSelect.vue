<template>
  <div class="multi-table">
    <table>
      <thead>
        <tr>
          <th v-if="multiselect">
            <SelectionCheckbox 
              label="multi-table-header"
              :value="allSelected"
              @update:value="$emit('update:allSelected', $event)"
            />
          </th>
          
          <slot name="headers" />
        </tr>
      </thead>

      <tbody>
        <slot  name="rows" />
      </tbody>
    </table>

    <div class="multi-table-pagination" v-if="pageInfo">
      <div class="multi-table-pagination-count">
        <span>Total results: {{ pageInfo.totalDocs }}</span>
      </div>

      <div class="multi-table-pagination-pages">
        <ButtonsPagination v-show="pageInfo.hasPrevPage" @click="changePage(-1)">
          <IconsArrowLeft />
        </ButtonsPagination>

        <ButtonsPagination v-show="pageInfo.prevPage ? (pageInfo.page > 2) : false" @click="firstPage()">
          <span>1</span>
        </ButtonsPagination>

        <ButtonsPagination :disabled="true" v-show="pageInfo.prevPage ? (pageInfo.page > 3) : false">
          <span>...</span>
        </ButtonsPagination>

        <ButtonsPagination v-show="pageInfo.hasPrevPage" @click="changePage(-1)">
          <span>{{ pageInfo.prevPage }}</span>
        </ButtonsPagination>

        <ButtonsPagination :active="true">
          <span>{{ pageInfo.page }}</span>
        </ButtonsPagination>

        <ButtonsPagination v-show="pageInfo.hasNextPage" @click="changePage(1)">
          <span>{{ pageInfo.nextPage }}</span>
        </ButtonsPagination>

        <ButtonsPagination :disabled="true" v-show="pageInfo.totalPages ? (pageInfo.totalPages - 2 > pageInfo.page) : false">
          <span>...</span>
        </ButtonsPagination>

        <ButtonsPagination v-show="pageInfo.totalPages ? (pageInfo.totalPages - 1 > pageInfo.page) : false" @click="lastPage()">
          <span>{{ pageInfo.totalPages }}</span>
        </ButtonsPagination>

        <ButtonsPagination v-show="pageInfo.hasNextPage" @click="changePage(1)">
          <IconsArrowRight />
        </ButtonsPagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { PageInfo } from '@/graphql/client'

const props = defineProps({
  multiselect: {
    type: Boolean,
    default: true
  },
  allSelected: Boolean,
  pageInfo: Object as PropType<PageInfo>
})

const emit = defineEmits(['update:allSelected', 'changePage'])

const router = useRouter()

function changePage (change: number) {
  if (props.pageInfo) {
  setPage(props.pageInfo.page + change)
    // emit('changePage', props.pageInfo.page + change)
  }
}

function firstPage () {
  setPage(1)
  // emit('changePage', 1)
}

function lastPage () {
  if (props.pageInfo) {
    setPage(props.pageInfo.totalPages)
    // emit('changePage', props.pageInfo.totalPages)
  }
}

function setPage (page: number) {
  router.replace({
    query: {
      page: page
    }
  })
}

</script>

<style lang="scss">

.multi-table {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  gap: 8px;

  @include scrolbar-hidden;

  & table {
    table-layout: auto;
    border-collapse: collapse;
    width: 100%;
  }

  & thead {
    position: sticky;
    top: 0;
    z-index: 1;

    & tr {
      height: 44px;
      align-items: center;
      background-color: $c-primary;
      color: $c-on-primary;

      & th {
        font-size: 1.15rem;
        font-weight: 500;
        padding: 10px;
        text-align: start;

        & input[id|="multi-table"]:checked + svg[id|="multi-table"] {
          color: $c-primary; 
        }
      }

      & th:first-of-type {
        border-radius: $radius-m 0px 0px $radius-m;
        width: 24px;
      }

      & th:last-of-type {
        border-radius: 0px $radius-m $radius-m 0px;
      }
    }
  }

  & tbody {
    max-height: 100%;
    overflow-y: auto;

    & tr {
      padding: 0px;
      margin: 0px;
      height: 48px;

      & td {
        padding: 0px;
        margin: 0px;

        & span {
          margin: 0px 10px;
          font-family: $f-mono;
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }
  }

  &-divider {
    padding: 0px;
    margin: 0px;
    height: 2px !important;

    & td {
      padding: 0px;
      margin: 0px;

      & div {
        display: flex;
        min-height: 2px;
        height: 2px;
        width: 100%;
        background-color: $c-primary-transparent;
        border-radius: $radius-ss;
      }
    }
  }

  color: $c-on-background;

  &-pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-count {
      display: flex;
      align-items: center;
      height: 32px;
      padding: 0px 8px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    &-pages {
      display: flex;
      gap: 4px;
    }
  }
}

</style>