<template>
  <div class="border-none rounded-lg p-6 bg-white">
    <div class="flex mb-4 justify-between">
      <div>
        <Skeleton width="8rem" class="mb-2" height="1.5rem"></Skeleton>
        <Skeleton width="4rem" class="mb-2" height="1rem"></Skeleton>
      </div>
      <div class="flex flex-col items-end">
        <Skeleton width="4rem" class="mb-2" height="1.5rem"></Skeleton>
        <Skeleton width="2rem" class="mb-2" height="1rem"></Skeleton>
      </div>
    </div>
    <Skeleton width="100%" height="150px"></Skeleton>
    <div class="flex justify-between mt-4">
      <Skeleton width="6rem" height="1.5rem"></Skeleton>
      <Skeleton width="6rem" height="1.5rem"></Skeleton>
      <Skeleton width="6rem" height="1.5rem"></Skeleton>
    </div>
    <div class="flex justify-between mt-4">
      <Skeleton height="2.5rem" class="mr-3"></Skeleton>
      <Skeleton width="2.5rem" height="2.5rem"></Skeleton>
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton'
</script>

<style lang="scss" scoped></style>
