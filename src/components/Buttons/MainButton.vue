<template>
  <Button
    :label="label"
    :severity="severity"
    :size="size"
    :disabled="disabled"
    :outlined="outlined"
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
  outlined: {
    type: Boolean
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
