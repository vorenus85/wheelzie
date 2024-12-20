<template>
  <span class="booking-date-tag whitespace-nowrap">
    {{ formattedDate }}
  </span>
</template>

<script setup>
import { formatDate } from '@/composables/useFormatDate'
import { computed } from 'vue'
const props = defineProps({ timestamp: Number })

const formattedDate = computed(() => {
  return formatDate(props.timestamp)
})
</script>

<style lang="scss" scoped>
.booking-date-tag {
  display: flex;
  padding: 1px 4px 2px 4px;
  align-items: center;
  border-radius: 2px;
  background: var(--gray-bg);
  font-size: 10px;
  color: var(--black);
}
</style>
