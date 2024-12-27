<template>
  <div class="car-snapshot car-snapshot--horizontal flex-col xl:flex-row">
    <div
      class="car-snapshot__horizontal-top flex flex-col lg:flex-row justify-between gap-4 bg-white w-full xl:w-5/6 rounded-md"
    >
      <div
        class="car-snapshot__image-container p-4 w-full lg:w-4/12"
        :class="{ 'no-image': image.length === 0 }"
      >
        <div class="w-7/12"><CarImage :brand="brand" :image="image" :model="model" :id="id" /></div>

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
          <CarAttribute title="Transmission" icon="Transmission" :data="transmission" showLabel />
        </div>
        <div class="car-snapshot__info-container w-1/3">
          <CarAttribute title="Capacity" icon="Capacity" :data="`${capacity} seats`" showLabel />
        </div>
        <div class="car-snapshot__info-container p-4 flex-col justify-center w-1/3">
          <CarPrice :price="price" showLabel />
        </div>
      </div>
      <div
        class="car-snapshot__info-container p-5 w-full lg:w-2/12 flex flex-col items-center justify-center"
      >
        <MainButton severity="primary" label="Select" block @click="toCar(id)"></MainButton>
      </div>
    </div>
    <div
      class="car-snapshot__horizontal-bottom p-5 flex gap-4 h-full justify-center items-center w-full xl:w-1/6"
    >
      <MainButton size="small" label="Edit" @click="onModify"></MainButton>
      <MainButton size="small" label="Delete" @click="onDelete"></MainButton>
    </div>
  </div>
</template>

<script setup>
import '@/assets/car_snapshot.scss'
import { useRouter } from 'vue-router'
import MainButton from '../buttons/MainButton.vue'
import CarAttribute from '../carSnapshot/CarAttribute.vue'
import CarBrand from '../carSnapshot/CarBrand.vue'
import CarImage from '../carSnapshot/CarImage.vue'
import CarModel from '../carSnapshot/CarModel.vue'
import CarPrice from '../carSnapshot/CarPrice.vue'
import CarStatus from '../carSnapshot/CarStatus.vue'
const emit = defineEmits(['delete-option', 'modify-option'])
const router = useRouter()

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

defineOptions({
  inheritAttrs: false
})

const onModify = () => {
  emit('modify-option')
}

const onDelete = () => {
  emit('delete-option')
}

const toCar = id => {
  router.push({ name: 'unit', params: { id: id.toLowerCase() } })
}
</script>

<style lang="scss" scoped>
.car-snapshot--horizontal {
  background-color: var(--gray-line);
  justify-content: space-between;
}
</style>
