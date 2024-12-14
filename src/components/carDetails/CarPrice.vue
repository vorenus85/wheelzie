<template>
  <div class="unit-car-price">
    <strong class="unit-car-daily-price unit-car-main-info">${{ price }}</strong>
    <div class="unit-car-daily-text unit-car-sub-info">/days</div>
  </div>
</template>

<script setup>
defineProps({ price: Number })
</script>

<style lang="scss" scoped></style>
