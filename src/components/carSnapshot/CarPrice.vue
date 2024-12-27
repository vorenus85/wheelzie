<template>
  <span class="car-snapshot__info-label-title" v-if="showLabel">Price</span>
  <strong class="car-snapshot__price pb-1">${{ price }}</strong>
  <div class="car-snapshot__daily-text pt-1">/days</div>
</template>

<script setup>
defineProps({
  price: Number,
  showLabel: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.car-snapshot__price {
  font-size: 22px;
  line-height: 1rem;
}

.car-snapshot__daily-text {
  font-size: 11px;
  line-height: 1rem;
  color: var(--gray-20);
}
</style>
