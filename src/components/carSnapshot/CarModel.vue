<template>
  <span class="car-snapshot__model">{{ model }}</span>
</template>

<script setup>
defineProps({ model: String })
</script>

<style lang="scss" scoped>
.car-snapshot__model {
  font-size: 20px;
  font-weight: 500;
  line-height: 1rem;
}

.car-snapshot--horizontal {
  .car-snapshot__model {
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
  }
}
</style>
