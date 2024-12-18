<template>
  <div class="date-format">
    {{ formattedDate }}
  </div>
</template>

<script setup>
import { formatDate } from '@/composables/useFormatDate'
import { computed } from 'vue'
const props = defineProps({ timestamp: Number })

const formattedDate = computed(() => {
  return formatDate(props.timestamp)
})
</script>

<style lang="scss" scoped></style>
