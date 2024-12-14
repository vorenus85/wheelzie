<template>
  <Tag
    :severity="statusSeverity"
    class="unit-car-status-badge"
    :class="`unit-car-status-badge-${status}`"
    >{{ status }}</Tag
  >
</template>

<script setup>
import Tag from 'primevue/tag'
import { computed } from 'vue'

const props = defineProps({ status: String })

const statusSeverity = computed(() => {
  let statusSeverity = ''
  if (props.status === 'unavailable') {
    statusSeverity = 'secondary'
  }

  if (props.status === 'available') {
    statusSeverity = 'contrast'
  }

  if (props.status === 'maintenance') {
    statusSeverity = 'danger'
  }

  return statusSeverity
})
</script>

<style lang="scss" scoped></style>
