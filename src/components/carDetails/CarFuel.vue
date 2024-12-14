<template>
  <div class="car-info-fuel-type car-info-detail">
    <span class="icon">
      <IconFuel />
    </span>
    <span class="label">{{ fuel }}</span>
  </div>
</template>

<script setup>
import IconFuel from '../icons/special/iconFuel.vue'

defineProps({ fuel: String })
</script>

<style lang="scss" scoped></style>
