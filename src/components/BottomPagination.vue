<template>
  <Paginator
    :template="paginatonTemplate"
    class="mt-4 we-pagination"
    :rows="10"
    :totalRecords="120"
    :rowsPerPageOptions="[10, 20, 30]"
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

const paginatonTemplate = ref({
  default: `RowsPerPageDropdown PrevPageLink PageLinks NextPageLink`
})
</script>

<style lang="scss" scoped>
.we-pagination {
  --p-paginator-background: transparent;
  --p-paginator-nav-button-background: #fff;
  --p-paginator-nav-button-color: var(gray-30);
  --p-paginator-nav-button-width: 30px;
  --p-paginator-nav-button-height: 30px;
  --p-paginator-nav-button-border-radius: 6px;
}
</style>

<style lang="scss">
.we-pagination .p-paginator {
  width: 100%;
  padding-right: 0;
  padding-left: 0;
}

.we-pagination .p-paginator-content {
  flex: 1 1 auto;
}

.we-pagination .p-paginator-content-start {
  margin-right: initial;
}

.we-pagination .p-paginator-rpp-dropdown {
  margin-right: auto;
}
</style>
