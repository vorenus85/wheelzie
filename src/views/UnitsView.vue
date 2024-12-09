<template>
  <div class="page page-units">
    <PageHeader :title="pageTitle"></PageHeader>
    <div class="page-content">
      <div class="page-content-top mb-3 pb-1 flex gap-2">
        <SearchInput
          :placeholder="searchInputOptions.placeholder"
          @searchInput="onSearchInput"
          :filter="filter"
        />
        <ButtonPicker
          :options="carTypes.types"
          :selected="selectedCarType"
          :placeholder="carTypes.placeholder"
          @changePicker="onChangeCarTypes"
        />
        <ButtonPicker
          :options="carStatus.types"
          :selected="selectedCarStatus"
          :placeholder="carStatus.placeholder"
          @changePicker="onChangeCarStatus"
        />
        <CTAButton :label="addNewUnitLabel" severity="primary" size="small" />
      </div>
      <div class="card-units">
        <CardUnitVertical
          v-for="car in cars"
          :key="car.id"
          :id="car.id"
          :brand="car.brand"
          :model="car.model"
          :type="car.type"
          :price="car.price"
          :image="car.image"
          :status="car.status"
          :transmission="car.transmission"
          :capacity="car.capacity"
          :fuel="car.fuel"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import ButtonPicker from '@/components/ButtonPicker.vue'
import CTAButton from '@/components/Buttons/CTAButton.vue'
import CardUnitVertical from '@/components/CardUnitVertical.vue'
import PageHeader from '@/components/PageHeader.vue'
import SearchInput from '@/components/SearchInput.vue'
import { ref } from 'vue'

const pageTitle = ref('Units')
const addNewUnitLabel = ref('Add unit')

const filter = ref('')
const searchInputOptions = ref({ placeholder: 'Search client name, car, etc' })

const selectedCarType = ref()
const carTypes = ref({
  placeholder: 'Car Type',
  types: [
    { name: 'Convertible' },
    { name: 'Hatchback' },
    { name: 'Sedan' },
    { name: 'SUV' },
    { name: 'Truck' }
  ]
})

const selectedCarStatus = ref()
const carStatus = ref({
  placeholder: 'Status',
  types: [{ name: 'Available' }, { name: 'Unavailable' }, { name: 'Maintenance' }]
})

const onSearchInput = event => {
  console.log(event)
}

const onChangeCarTypes = event => {
  console.log(event)
}

const onChangeCarStatus = event => {
  console.log(event)
}

const cars = ref([
  {
    id: 'CAR-001',
    brand: 'Aston Martin',
    model: 'DB12 Volante',
    type: 'Convertible',
    price: 20,
    image: 'aston_martin.png',
    status: 'unavailable',
    transmission: 'automatic',
    capacity: 2,
    fuel: 'petrol'
  },
  {
    id: 'CAR-002',
    brand: 'Hyundai',
    model: 'Sonata',
    type: 'Sedan',
    price: 45,
    image: 'hyundai_sonata.png',
    status: 'available',
    transmission: 'manual',
    capacity: 5,
    fuel: 'petrol'
  },
  {
    id: 'CAR-003',
    brand: 'Nissan',
    model: 'Ariya',
    type: 'Hatchback',
    price: 55,
    image: 'nissan_ariya.png',
    status: 'maintenance',
    transmission: 'automatic',
    capacity: 5,
    fuel: 'hybrid'
  }
])
</script>
<style scoped>
.card-units {
  display: flex;
  gap: 20px;
}
</style>
