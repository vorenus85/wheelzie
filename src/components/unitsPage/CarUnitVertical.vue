<script setup>
import '@/assets/car_details.scss'
import MainButton from '@/components/buttons/MainButton.vue'
import CarBrand from '@/components/carDetails/CarBrand.vue'
import CarCapacity from '@/components/carDetails/CarCapacity.vue'
import CarFuel from '@/components/carDetails/CarFuel.vue'
import CarId from '@/components/carDetails/CarId.vue'
import CarImage from '@/components/carDetails/CarImage.vue'
import CarModel from '@/components/carDetails/CarModel.vue'
import CarPrice from '@/components/carDetails/CarPrice.vue'
import CarStatus from '@/components/carDetails/CarStatus.vue'
import CarTransmission from '@/components/carDetails/CarTransmission.vue'
import CarType from '@/components/carDetails/CarType.vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import { ref } from 'vue'
const emit = defineEmits(['delete-option', 'modify-option'])
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
</script>

<template>
  <div class="card-unit card-unit-vertical">
    <div class="unit-main-info-container">
      <div class="unit-car-infos">
        <div class="unit-car-brand-model">
          <CarBrand :brand="brand" />
          <CarModel :model="model" />
        </div>
        <CarType :type="type" />
      </div>
      <div class="unit-car-details">
        <CarPrice :price="price" />
      </div>
    </div>
    <CarImage :brand="brand" :image="image" :model="model" />

    <div class="unit-main-info-container">
      <CarStatus :status="status" />
      <CarId :id="id" />
    </div>
    <div class="unit-car-details-info">
      <CarTransmission :transmission="transmission" />
      <CarCapacity :capacity="capacity" />
      <CarFuel :fuel="fuel" />
    </div>
    <div class="unit-car-actions flex gap-2 w-full">
      <div class="action-cta w-full">
        <MainButton label="Select Car" severity="primary" block />
      </div>
      <div class="more-action">
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
