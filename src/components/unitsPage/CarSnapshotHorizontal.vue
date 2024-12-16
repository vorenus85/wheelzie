<template>
  <div class="car-snapshot car-snapshot--horizontal flex-col xl:flex-row">
    <div
      class="car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"
    >
      <div class="car-snapshot__image-container p-4 w-full lg:w-4/12">
        <CarImage :brand="brand" :image="image" :model="model" class="w-7/12" />
        <div class="car-snapshot__info-container flex-col justify-center px-3 w-5/12">
          <CarBrand :brand="brand" />
          <CarModel :model="model" class="mb-2" />
          <div class="car-snapshot__info-container-item">
            <CarStatus :status="status" />
          </div>
        </div>
      </div>
      <div class="car-snapshot__info-container p-4 flex flex-row gap:4 lg:gap-8 w-full lg:w-5/12">
        <div class="car-snapshot__info-container w-1/3">
          <CarTransmission :transmission="transmission" showLabel />
        </div>
        <div class="car-snapshot__info-container w-1/3">
          <CarCapacity :capacity="capacity" showLabel />
        </div>
        <div class="car-snapshot__info-container p-4 flex-col justify-center w-1/3">
          <CarPrice :price="price" showLabel />
        </div>
      </div>
      <div
        class="car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"
      >
        <MainButton severity="primary" label="Select" block></MainButton>
      </div>
    </div>
    <div
      class="car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"
    >
      <MainButton size="small" label="Edit"></MainButton>
      <MainButton size="small" label="Delete"></MainButton>
    </div>
  </div>
</template>

<script setup>
import '@/assets/car_snapshot.scss'
import MainButton from '../buttons/MainButton.vue'
import CarBrand from '../carSnapshot/CarBrand.vue'
import CarCapacity from '../carSnapshot/CarCapacity.vue'
import CarImage from '../carSnapshot/CarImage.vue'
import CarModel from '../carSnapshot/CarModel.vue'
import CarPrice from '../carSnapshot/CarPrice.vue'
import CarStatus from '../carSnapshot/CarStatus.vue'
import CarTransmission from '../carSnapshot/CarTransmission.vue'
defineProps({
  id: String,
  brand: String,
  model: String,
  type: String,
  price: Number,
  image: String,
  status: String,
  transmission: String,
  capacity: Number,
  fuel: String
})
</script>

<style lang="scss" scoped>
.car-snapshot--horizontal {
  background-color: var(--gray-line);
  justify-content: space-between;
}
</style>
