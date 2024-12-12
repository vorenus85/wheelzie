<template>
  <InputGroup class="search-input" :class="`variant-${variant}`">
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
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import { ref, watch } from 'vue'
import IconSearch from '../icons/common/iconSearch.vue'
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
.search-input {
  max-width: 224px;
  border-radius: 6px;
  transition: all 0.2s;
  outline: 1px solid transparent;

  &:hover {
    outline: 1px solid var(--gray-20);
  }

  &:focus-within {
    outline: 1px solid var(--gray-30);
  }

  .p-inputtext {
    font-size: 11px;
    padding-left: 0.25rem;
    --p-inputtext-focus-ring-shadow: initial;
    --p-inputtext-hover-border-color: #fff;
    --p-inputtext-focus-border-color: #fff;
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
