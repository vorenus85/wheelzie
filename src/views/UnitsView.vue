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
        <SearchFilter
          :options="carTypes.types"
          :selected="selectedCarType"
          :placeholder="carTypes.placeholder"
          @changePicker="onChangeCarTypes"
        />
        <SearchFilter
          :options="carStatus.types"
          :selected="selectedCarStatus"
          :placeholder="carStatus.placeholder"
          @changePicker="onChangeCarStatus"
        />
        <CTAButton :label="addNewUnitLabel" severity="primary" size="small" class="ml-auto" />
      </div>
      <div class="page-content-center">
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
      <div class="page-content-bottom">
        <BottomPagination :limit="limit" :total="total" @pageChange="onPageChange" />
      </div>
    </div>
  </div>
</template>
<script setup>
import SearchFilter from '@/components/SearchFilter.vue'
import CTAButton from '@/components/Buttons/CTAButton.vue'
import CardUnitVertical from '@/components/CardUnitVertical.vue'
import PageHeader from '@/components/PageHeader.vue'
import BottomPagination from '@/components/BottomPagination.vue'
import SearchInput from '@/components/SearchInput.vue'
import { onMounted, ref } from 'vue'
import { computed } from 'vue'

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
    { name: 'Truck' },
    { name: 'Minivan' }
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

const cars = ref([])
const limit = ref(3)
const currentPage = ref(0) // zero index
const carsData = ref([
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
  },
  {
    id: 'CAR-004',
    brand: 'Range Rover',
    model: 'Velar',
    type: 'SUV',
    price: 140,
    image: 'range_rover_velar.png',
    status: 'available',
    transmission: 'automatic',
    capacity: 7,
    fuel: 'diesel'
  },
  {
    id: 'CAR-005',
    brand: 'BMW',
    model: 'LX3',
    type: 'SUV',
    price: 120,
    image: 'bmw_lx3.png',
    status: 'available',
    transmission: 'automatic',
    capacity: 7,
    fuel: 'hybrid'
  },
  {
    id: 'CAR-006',
    brand: 'Audi',
    model: 'Q7',
    type: 'SUV',
    price: 130,
    image: 'audi_q7.png',
    status: 'available',
    transmission: 'automatic',
    capacity: 7,
    fuel: 'diesel'
  },
  {
    id: 'CAR-007',
    brand: 'Mercedes',
    model: 'S-Class',
    type: 'Sedan',
    price: 100,
    image: 'merci_s_class.png',
    status: 'available',
    transmission: 'automatic',
    capacity: 5,
    fuel: 'petrol'
  },
  {
    id: 'CAR-008',
    brand: 'Kia',
    model: 'EV6',
    type: 'Hatchback',
    price: 40,
    image: 'kia_ev6.png',
    status: 'available',
    transmission: 'manual',
    capacity: 5,
    fuel: 'hybrid'
  },
  {
    id: 'CAR-009',
    brand: 'Volkswagen',
    model: 'Amarok',
    type: 'Truck',
    price: 80,
    image: 'vw_amarok.png',
    status: 'unavailable',
    transmission: 'automatic',
    capacity: 5,
    fuel: 'diesel'
  }
])

const total = computed(() => {
  return carsData.value.length
})

const onPageChange = event => {
  const { first, rows, page } = event
  console.log('onPageChange', event)
  currentPage.value = page
  limit.value = rows
  fetchCars()
}

const fetchCars = () => {
  const startItem = currentPage.value === 0 ? 0 : currentPage.value * limit.value
  const endItem = currentPage.value === 0 ? limit.value : (currentPage.value + 1) * limit.value
  cars.value = carsData.value.slice(startItem, endItem)
}

onMounted(() => {
  fetchCars()
})
</script>
<style scoped>
.card-units {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
}
</style>
