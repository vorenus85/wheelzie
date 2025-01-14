<template>
  <div class="plan-in-days">{{ diffDays }} day(s)</div>
</template>

<script setup>
import { differenceInDays, startOfDay } from 'date-fns'
import { computed } from 'vue'

const props = defineProps({ from: Number, to: Number })

const diffDays = computed(() => {
  const fromDate = startOfDay(new Date(props.from))
  const toDate = startOfDay(new Date(props.to))
  return differenceInDays(toDate, fromDate)
})
</script>

<style lang="scss" scoped></style>
