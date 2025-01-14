<template>
  <Tag
    :icon="icon"
    class="badge-status"
    :class="`badge-status-${statusType.toLowerCase()}`"
    :value="status"
    :severity="statusSeverity"
  />
</template>

<script setup>
import Tag from 'primevue/tag'
import { computed } from 'vue'

const props = defineProps({
  statusType: {
    type: String,
    validator: value => {
      const available = ['payment', 'expenses', 'invoice', 'rent']
      return available.includes(value.toLowerCase())
    }
  },
  status: {
    type: String,
    validator: value => {
      const available = [
        'paid',
        'pending',
        'completed',
        'awaiting',
        'overdue',
        'ongoing',
        'returned',
        'cancelled'
      ]
      return available.includes(value.toLowerCase())
    }
  }
})

const icon = computed(() => {
  let icon
  const statusType = props.statusType.toLowerCase()
  const status = props.status.toLowerCase()
  if (statusType === 'rent') {
    if (status === 'ongoing') {
      icon = 'pi pi-ellipsis-h'
    }
    if (status === 'returned') {
      icon = 'pi pi-verified'
    }
    if (status === 'cancelled') {
      icon = 'pi pi-undo'
    }
  }

  return icon
})

const statusSeverity = computed(() => {
  const statusType = props.statusType.toLowerCase()
  const status = props.status.toLowerCase()
  let severity
  if (statusType === 'payment') {
    if (status === 'paid') {
      severity = 'success'
    }
    if (status === 'pending') {
      severity = 'danger'
    }
  }

  if (statusType === 'rent') {
    if (status === 'ongoing') {
      severity = 'success'
    }
    if (status === 'returned') {
      severity = 'primary'
    }
    if (status === 'cancelled') {
      severity = 'danger'
    }
  }

  return severity
})
</script>
<style lang="scss" scoped>
.badge-status {
  min-width: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  --p-tag-border-radius: 4px;
  --p-tag-font-size: 10px;
  --p-tag-font-weight: 400;
  --p-tag-padding: 3px 6px;
}
</style>
<style lang="scss">
.p-tag.badge-status {
  --p-tag-icon-size: 0.65rem;
  --p-tag-success-background: var(--blue-subtle-10);
  --p-tag-success-color: var(--blue-dark);
  --p-tag-primary-background: var(--blue-dark);
  --p-tag-primary-color: var(--blue-light);
  --p-tag-danger-background: var(--red-subtle);
  --p-tag-danger-color: var(--red-00);
}
</style>
