<template>
  <Paginator
    :template="paginatonTemplate"
    class="mt-4 we-pagination"
    :rows="limit"
    :totalRecords="totalRecords"
    :rowsPerPageOptions="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    @page="onPageChange"
    ><template #start> Results per page </template>
    <template #previcon> <IconCaretLeft /> <span>Prev</span></template>
    <template #nexticon> <span>Next</span> <IconCaretRight /> </template>
  </Paginator>
</template>

<script setup>
import Paginator from 'primevue/paginator'
import IconCaretRight from './icons/common/iconCaretRight.vue'
import IconCaretLeft from './icons/common/iconCaretLeft.vue'
import { ref } from 'vue'
import { computed } from 'vue'
const emit = defineEmits(['page-change'])
const props = defineProps({ limit: Number, total: Number })

const paginatonTemplate = 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink'

const totalRecords = computed(() => {
  return props.total
})

const onPageChange = event => {
  const { first, rows, page } = event

  // Emit general events
  emit('page-change', { first, rows, page })
}
</script>

<style lang="scss" scoped>
.we-pagination {
  --p-paginator-background: transparent;
  --p-paginator-nav-button-background: #fff;
  --p-paginator-nav-button-color: var(gray-30);
  --p-paginator-nav-button-width: 30px;
  --p-paginator-nav-button-height: 30px;
  --p-paginator-nav-button-border-radius: 6px;
  --p-select-padding-x: 0.625rem;
  --p-select-padding-y: 0.375rem;
  --p-select-color: var(--gray-20);
  --p-icon-size: 10px;
  --p-paginator-nav-button-selected-background: var(--red);
  --p-paginator-nav-button-selected-color: #fff;
  --p-paginator-nav-button-hover-background: var(--blue-subtle-00);
  --p-paginator-nav-button-hover-color: var(--gray-20);
  --p-paginator-gap: 8px;
}
</style>

<style lang="scss">
.we-pagination {
  .p-paginator {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
  }

  .p-paginator-content {
    flex: 1 1 auto;
  }

  .p-paginator-content-start {
    margin-right: initial;
  }

  .p-paginator-rpp-dropdown {
    margin-right: auto;
  }

  .p-select-label {
    padding-right: 0;
  }

  .p-paginator-pages {
    font-size: 12px;
  }

  .p-select-label {
    font-size: 11px;
  }

  .p-paginator-content-start {
    font-size: 12px;
    color: var(--gray-20);
    padding-right: 10px;
  }

  .p-paginator-prev,
  .p-paginator-next {
    font-size: 12px;
    color: var(--gray-30);
    svg {
      width: 14px;
    }
  }

  .p-paginator-prev,
  .p-paginator-next {
    padding: 0 8px;
  }
}
</style>
