<template>
  <Button
    :label="label"
    :severity="severity"
    :size="size"
    :disabled="disabled"
    :variant="variant"
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
  size: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: ''
  },
  severity: {
    type: String,
    default: 'secondary'
  }
})
</script>
