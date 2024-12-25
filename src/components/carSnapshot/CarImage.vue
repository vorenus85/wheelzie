<template>
  <img
    v-if="image"
    :src="getImageUrl(image)"
    :alt="brand + ' ' + model"
    :title="brand + ' ' + model"
    width="300"
    height="150"
    class="car-snapshot__image"
    :class="{ 'w-full': block, 'h-auto': block }"
  />
  <template v-else>
    <PlaceholderImage />
  </template>
</template>

<script setup>
import PlaceholderImage from './PlaceholderImage.vue'

defineProps({ image: String, brand: String, model: String, block: Boolean })

function getImageUrl(image) {
  const localhost = new URL(import.meta.url)
  const appUrl = localhost.origin
  const imageUrl = new URL(`${import.meta.env.VITE_BASE_URL}/images/cars/${image}`, appUrl)

  return imageUrl.href
}
</script>

<style lang="scss">
.car-snapshot--horizontal {
  .car-snapshot__image {
    max-width: 100px;
    max-height: 100px;
    width: auto;
    text-align: center;
  }

  @media (min-width: 768px) {
    .car-snapshot__image {
      max-width: 150px;
    }
  }
}
</style>
