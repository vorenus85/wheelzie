<template>
  <div class="unit-car-image w-full">
    <img
      :src="getImageUrl(image)"
      :alt="brand + ' ' + model"
      :title="brand + ' ' + model"
      width="300"
      height="150"
      class="w-full h-auto"
    />
  </div>
</template>

<script setup>
defineProps({ image: String, brand: String, model: String })

function getImageUrl(image) {
  const localhost = new URL(import.meta.url)
  const appUrl = localhost.origin
  const imageUrl = new URL(`${import.meta.env.VITE_BASE_URL}/images/cars/${image}`, appUrl)

  return imageUrl.href
}
</script>

<style lang="scss" scoped></style>
