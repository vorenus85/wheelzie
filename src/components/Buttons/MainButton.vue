<template>
  <Button
    :label="label"
    :severity="severity"
    :size="size"
    :disabled="disabled"
    :variant="variant"
    :class="{ 'w-full': block }"
  />
</template>

<script setup>
import Button from 'primevue/button'
defineProps({
  label: String,
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: '',
    validator: value => {
      const available = ['small', 'large', '']
      return available.includes(value)
    }
  },
  variant: {
    type: String,
    default: '',
    validator: value => {
      const available = ['outlined', '']
      return available.includes(value)
    }
  },
  severity: {
    type: String,
    default: 'secondary',
    validator: value => {
      const available = ['primary', 'secondary']
      return available.includes(value)
    }
  }
})
</script>
