<script setup>
import '@/assets/car_snapshot.scss'
import MainButton from '@/components/buttons/MainButton.vue'
import CarBodyType from '@/components/carSnapshot/CarBodyType.vue'
import CarBrand from '@/components/carSnapshot/CarBrand.vue'
import CarCapacity from '@/components/carSnapshot/CarCapacity.vue'
import CarFuel from '@/components/carSnapshot/CarFuel.vue'
import CarId from '@/components/carSnapshot/CarId.vue'
import CarImage from '@/components/carSnapshot/CarImage.vue'
import CarModel from '@/components/carSnapshot/CarModel.vue'
import CarPrice from '@/components/carSnapshot/CarPrice.vue'
import CarStatus from '@/components/carSnapshot/CarStatus.vue'
import CarTransmission from '@/components/carSnapshot/CarTransmission.vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const emit = defineEmits(['delete-option', 'modify-option'])

defineProps({
  id: String,
  brand: String,
  model: String,
  bodyType: String,
  price: Number,
  image: String,
  status: String,
  transmission: String,
  capacity: Number,
  fuel: String
})

const menu = ref()
const items = ref([
  {
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => onModify()
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => onDelete()
      }
    ]
  }
])

const toggle = event => {
  menu.value.toggle(event)
}

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

<template>
  <div class="car-snapshot car-snapshot--vertical flex-col p-4">
    <div class="car-snapshot__info-container align-top justify-between items-center">
      <div class="car-snapshot__attributes flex flex-col">
        <div class="car-snapshot__brand-&-model">
          <CarBrand :brand="brand" />
          <CarModel :model="model" />
        </div>
        <CarBodyType :bodyType="bodyType" />
      </div>

      <div class="car-snapshot__price-per-day flex flex-col items-end">
        <CarPrice :price="price" />
      </div>
    </div>
    <div class="car-snapshot__image-container" :class="{ 'no-image': image.length === 0 }">
      <CarImage :brand="brand" :image="image" :model="model" block :id="id" />
    </div>
    <div class="car-snapshot__info-container justify-between items-center">
      <CarStatus :status="status" />
      <CarId :id="id" />
    </div>
    <div class="car-snapshot__info-container gap-6 items-center">
      <CarTransmission :transmission="transmission" />
      <CarCapacity :capacity="capacity" />
      <CarFuel :fuel="fuel" />
    </div>
    <div class="car-snapshot_actions flex gap-2 w-full">
      <div class="car-snapshot_link w-full">
        <MainButton label="Select Car" severity="primary" block @click="toCar(id)" />
      </div>
      <div class="car-snapshot__more-action">
        <Button
          type="button"
          severity="secondary"
          icon="pi pi-ellipsis-h"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          class="p-3"
        />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      </div>
    </div>
  </div>
</template>
