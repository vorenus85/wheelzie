<template>
  <div class="car-info-transmission car-info-detail">
    <span class="icon">
      <IconTransmission />
    </span>
    <span class="label">{{ transmission }}</span>
  </div>
</template>

<script setup>
import IconTransmission from '../icons/special/iconTransmission.vue'

defineProps({ transmission: String })
</script>

<style lang="scss" scoped></style>
