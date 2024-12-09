<template>
  <InputGroup class="search-filter" :class="`variant-${variant}`">
    <InputGroupAddon class="">
      <IconSearch :size="14" />
    </InputGroupAddon>
    <InputText
      size="small"
      v-model="localFilter"
      :placeholder="placeholder"
      autocomplete="off"
      @keyup.enter="$emit('search-input', localFilter)"
    />
  </InputGroup>
</template>
<script setup>
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import InputGroupAddon from 'primevue/inputgroupaddon'
import { watch } from 'vue'
import { ref } from 'vue'
import IconSearch from './icons/common/iconSearch.vue'
const props = defineProps({
  placeholder: String,
  filter: String,
  variant: { type: String, default: 'light' }
})
const localFilter = ref(props.filter)

watch(
  () => props.filter,
  newFilter => {
    localFilter.value = newFilter
  }
)
</script>
<style lang="scss">
.search-filter {
  max-width: 224px;

  .p-inputtext {
    font-size: 11px;
    padding-left: 0.25rem;
    --p-inputtext-focus-ring-shadow: initial;
    --p-inputtext-hover-border-color: var(--gray-20);
    --p-inputtext-focus-border-color: var(--gray-10);
    --p-inputtext-border-color: #fff;
    --p-inputtext-shadow: initial;
  }

  .p-inputgroupaddon {
    --p-inputgroup-addon-min-width: 2rem;
  }

  &.variant-light {
    .p-inputgroupaddon {
      --p-inputgroup-addon-border-color: #fff;
    }

    .p-inputtext::placeholder {
      color: var(--gray-20);
    }
  }
}
</style>
