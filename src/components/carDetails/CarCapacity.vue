<template>
  <div class="car-info-capacity car-info-detail">
    <span class="icon">
      <IconCapacity />
    </span>
    <span class="label">{{ capacity }} seats</span>
  </div>
</template>

<script setup>
import IconCapacity from '../icons/special/iconCapacity.vue'
defineProps({ capacity: Number })
</script>

<style lang="scss" scoped></style>
