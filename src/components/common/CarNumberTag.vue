<template>
  <span class="car-id-tag">
    {{ id }}
  </span>
</template>

<script setup>
defineProps({ id: String })
</script>

<style lang="scss" scoped>
.car-id-tag {
  height: 18px;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: 1px solid var(--gray-line);
  background: var(--gray-bg-subtle);
  font-size: 10px;
  color: var(--gray-30);
}
</style>
