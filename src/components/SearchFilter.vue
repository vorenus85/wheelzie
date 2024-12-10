<template>
  <InputGroup class="search-filter" :class="`variant-${variant}`">
    <InputGroupAddon>
      <IconFilter :size="14" />
    </InputGroupAddon>
    <Select
      v-model="localSelected"
      :options="options"
      :optionLabel="optionLabel"
      :placeholder="placeholder"
      :class="['p-select-sm p-inputfield-sm']"
    />
  </InputGroup>
</template>

<script setup>
import Select from 'primevue/Select'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import { watch } from 'vue'
import { ref } from 'vue'
import IconFilter from './icons/common/iconFilter.vue'
const emit = defineEmits(['change-picker'])
const props = defineProps({
  placeholder: String,
  selected: Object,
  options: Object,
  optionLabel: {
    type: String,
    default: 'name'
  },
  variant: { type: String, default: 'light' }
})

const localSelected = ref(props.selected)

watch(
  () => props.filter,
  newFilter => {
    localSelected.value = newFilter
  }
)

watch(localSelected, newValue => {
  emit('change-picker', newValue)
})
</script>

<style lang="scss">
.p-select {
  --p-select-shadow: none;
  --p-select-border-color: #fff;
  --p-select-hover-border-color: #fff;
  --p-select-focus-border-color: #fff;
}
.p-select-option {
  --p-select-option-focus-background: var(--gray-bg);
  --p-select-option-selected-background: var(--blue-subtle-10);
  --p-select-option-selected-color: var(--gray-30);
  --p-select-option-selected-focus-background: var(--blue-subtle-10);
  --p-select-option-selected-focus-color: var(--gray-30);
}

.p-inputgroupaddon {
  --p-inputgroup-addon-min-width: 2rem;
}
</style>
<style lang="scss">
.search-filter {
  max-width: 180px;

  .p-select-label {
    font-size: 11px;
    padding-left: 0.25rem;
  }

  .p-select-label {
    --p-select-padding-x: 0.625rem;
    --p-select-padding-y: 0.375rem;
  }

  .p-icon {
    --p-icon-size: 10px;
  }

  &.variant-light {
    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
      --p-inputgroup-addon-border-color: #fff;
    }
  }
}
</style>
