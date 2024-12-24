<template>
  <div class="car-snapshot__body-type">{{ bodyType }}</div>
</template>

<script setup>
defineProps({ bodyType: String })
</script>

<style lang="scss" scoped>
.car-snapshot__body-type {
  color: var(--gray-20);
}
</style>
