<template>
  <Tag
    :severity="statusSeverity"
    class="car-snapshot__status"
    :class="`car-snapshot__status-${status}`"
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

<style lang="scss" scoped>
.car-snapshot__status {
  height: 20px;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  --p-tag-border-radius: 4px;
  --p-tag-font-size: 11px;
  --p-tag-font-weight: 400;
  --p-tag-contrast-background: var(--blue-dark);
  --p-tag-color-background: var(--blue-subtle-10);
  --p-tag-secondary-background: var(--gray-line);
  --p-tag-secondary-color: var(--gray-30);
  --p-tag-danger-background: var(--red-20);
  --p-tag-danger-color: var(--black);
}
</style>
