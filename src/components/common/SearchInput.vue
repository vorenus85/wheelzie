<template>
  <InputGroup class="search-input" :class="`variant-${variant}`">
    <InputGroupAddon class="">
      <IconSearch :size="14" />
    </InputGroupAddon>
    <InputText
      size="small"
      v-model="localFilter"
      clear
      :placeholder="placeholder"
      autocomplete="off"
      @keyup.enter="onEnterFilter"
      @keyup="onChangeFilter"
    />
  </InputGroup>
</template>
<script setup>
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import { ref, watch } from 'vue'
import IconSearch from '../icons/common/iconSearch.vue'
const emit = defineEmits(['search-input'])
const props = defineProps({
  placeholder: String,
  filter: String,
  variant: { type: String, default: 'light' }
})
const localFilter = ref(props.filter)

const onChangeFilter = () => {
  if (localFilter.value.length > 3) {
    emit('search-input', localFilter.value)
  }
}

const onEnterFilter = () => {
  emit('search-input', localFilter.value)
}

watch(
  () => props.filter,
  newFilter => {
    localFilter.value = newFilter
  }
)
</script>
<style lang="scss" scoped>
.search-input {
  max-width: 150px;
  height: 30px;
  width: initial;
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
    --p-inputgroup-addon-padding: 0.25rem;
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

@media (min-width: 992px) {
  .search-input {
    min-width: 224px;
    max-width: 224px;
  }
}
</style>
<style lang="scss">
.search-input.variant-dark {
  --p-inputgroup-addon-border-color: transparent;
  --p-inputgroup-addon-background: var(--gray-bg);

  &:hover {
    outline: 1px solid var(--gray-10);
  }

  &:focus-within {
    outline: 1px solid var(--gray-20);
  }

  .p-inputtext {
    --p-inputtext-hover-border-color: var(--gray-bg);
    --p-inputtext-focus-border-color: var(--gray-bg);
    --p-inputtext-background: var(--gray-bg);
    --p-inputtext-border-color: var(--gray-bg);
  }
}
</style>
