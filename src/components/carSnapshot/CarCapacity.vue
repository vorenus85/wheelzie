<template>
  <div class="car-snapshot__capacity car-snapshot__info-with-icon">
    <span class="car-snapshot__info-icon">
      <IconCapacity />
    </span>
    <span class="car-snapshot__info-label-title" v-if="showLabel">Capacity</span>
    <span class="car-snapshot__info-label-value">{{ capacity }} seats</span>
  </div>
</template>

<script setup>
import IconCapacity from '../icons/special/iconCapacity.vue'
defineProps({
  capacity: Number,
  showLabel: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>
