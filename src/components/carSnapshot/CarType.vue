<template>
  <div class="car-snapshot__type">{{ type }}</div>
</template>

<script setup>
defineProps({ type: String })
</script>

<style lang="scss" scoped>
.car-snapshot__type {
  color: var(--gray-20);
}
</style>
