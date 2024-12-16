<template>
  <div class="car-snapshot__transmission car-snapshot__info-with-icon">
    <span class="car-snapshot__info-icon">
      <IconTransmission />
    </span>
    <span class="car-snapshot__info-label-title" v-if="showLabel">Transmission</span>
    <span class="car-snapshot__info-label-value">{{ transmission }}</span>
  </div>
</template>

<script setup>
import IconTransmission from '../icons/special/iconTransmission.vue'

defineProps({
  transmission: String,
  showLabel: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>
