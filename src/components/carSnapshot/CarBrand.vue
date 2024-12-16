<template>
  <span class="car-snapshot__brand pr-1">{{ brand }}</span>
</template>

<script setup>
defineProps({
  brand: String,
  size: {
    type: String,
    default: '',
    validator: value => {
      const available = ['small', '']
      return available.includes(value)
    }
  }
})
</script>

<style lang="scss" scoped>
.car-snapshot__brand {
  font-size: 20px;
  font-weight: 500;
  line-height: 1rem;
}
</style>
<style lang="scss">
.car-snapshot--horizontal {
  .car-snapshot__brand {
    font-size: 14px;
    color: var(--gray-20);
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
}
</style>
