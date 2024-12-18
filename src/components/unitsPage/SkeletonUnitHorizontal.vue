<template>
  <div
    class="car-snapshot car-snapshot--horizontal border-none rounded-lg p-0 bg-white flex-col xl:flex-row flex"
  >
    <div
      class="car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"
    >
      <div class="car-snapshot__image-container p-4 w-full lg:w-4/12">
        <div class="w-7/12">
          <Skeleton width="100%" height="5rem"></Skeleton>
        </div>
        <div class="flex-col justify-center px-3 w-5/12">
          <Skeleton width="50%" height="1rem" class="mb-2"></Skeleton>
          <Skeleton width="100%" height="1.5rem" class="mb-2"></Skeleton>
          <Skeleton width="80%%" height="1rem" class="mb-2"></Skeleton>
        </div>
      </div>
      <div class="car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12">
        <div class="car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center">
          <Skeleton size="2.5rem"></Skeleton>
          <Skeleton width="50%" height="1rem"></Skeleton>
          <Skeleton width="80%" height="1.5rem"></Skeleton>
        </div>
        <div class="car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center">
          <Skeleton size="2.5rem"></Skeleton>
          <Skeleton width="50%" height="1rem"></Skeleton>
          <Skeleton width="80%" height="1.5rem"></Skeleton>
        </div>
        <div class="car-snapshot__info-container flex flex-col gap-2 w-1/3 justify-center">
          <Skeleton width="50%" height="1rem"></Skeleton>
          <Skeleton width="80%" height="2rem"></Skeleton>
        </div>
      </div>
      <div
        class="car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"
      >
        <Skeleton width="100%" height="3rem"></Skeleton>
      </div>
    </div>
    <div
      class="car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"
    >
      <Skeleton width="40%" height="2rem"></Skeleton>
      <Skeleton width="40%" height="2rem"></Skeleton>
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
</script>

<style lang="scss" scoped></style>
