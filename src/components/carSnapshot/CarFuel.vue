<template>
  <div class="ccar-snapshot__fuel car-snapshot__info-with-icon">
    <span class="car-snapshot__info-icon">
      <IconFuel />
    </span>
    <span class="car-snapshot__info-label-title" v-if="showLabel">Fuel type</span>
    <span class="car-snapshot__info-label-value">{{ fuel }}</span>
  </div>
</template>

<script setup>
import IconFuel from '../icons/special/iconFuel.vue'

defineProps({
  fuel: String,
  showLabel: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>
