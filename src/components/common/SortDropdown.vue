<template>
  <InputGroup class="search-filter" :class="`variant-${variant}`">
    <InputGroupAddon>
      <IconFilter :size="14" />
    </InputGroupAddon>
    <Select
      size="small"
      v-model="localSelected"
      showClear
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
import { ref, watch } from 'vue'
import IconFilter from '../icons/common/iconFilter.vue'
const emit = defineEmits(['change-sort'])
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
  emit('change-sort', newValue)
})
</script>

<style lang="scss">
.p-select {
  --p-select-shadow: none;
  --p-select-border-color: #fff;
  --p-select-hover-border-color: #fff;
  --p-select-focus-border-color: #fff;
  --p-select-sm-font-size: 11px;
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
  border-radius: 6px;
  transition: all 0.2s;

  .p-select-label {
    font-size: 11px;
    padding-left: 0.25rem;
  }

  .p-select-label {
    --p-select-padding-x: 0.625rem;
    --p-select-padding-y: 0.375rem;
  }

  .p-icon {
    --p-icon-size: 12px;
  }

  .p-select-clear-icon {
    margin-top: -0.35rem;
  }

  &.variant-light {
    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
      --p-inputgroup-addon-border-color: #fff;
    }
  }

  &.variant-dark {
    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
      --p-inputgroup-addon-border-color: var(--gray-bg);
    }

    .p-inputgroupaddon {
      --p-inputgroup-addon-background: var(--gray-bg);
    }

    .p-select {
      --p-select-focus-border-color: var(--gray-bg);
      --p-select-hover-border-color: var(--gray-bg);
      --p-select-background: var(--gray-bg);
      --p-select-border-color: var(--gray-bg);
    }

    &:hover {
      outline: 1px solid var(--gray-10);
    }
  }
}
</style>
