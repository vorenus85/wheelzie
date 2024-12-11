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
        <div class="card-units" v-if="!loading">
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
import { mockApi } from '@/api/carApi'

const pageTitle = ref('Units')
const addNewUnitLabel = ref('Add unit')

const filter = ref('')
const searchInputOptions = ref({ placeholder: 'Search for car, etc' })

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
  filter.value = event
  fetchCars()
}

const onChangeCarTypes = event => {
  selectedCarType.value = event
  fetchCars()
}

const onChangeCarStatus = event => {
  selectedCarStatus.value = event
  fetchCars()
}

const limit = ref(8)
const currentPage = ref(0) // zero index
const loading = ref(true)
const total = ref(0)
const sort = ref('brand_asc')
const error = ref(null)
// for skeleton cards
const cars = ref(
  Array(limit.value)
    .fill()
    .map(() => {
      ;[]
    })
)

const onPageChange = event => {
  const { rows, page } = event
  currentPage.value = page
  limit.value = rows
  fetchCars()
}

const fetchCars = async () => {
  loading.value = true
  const expression = filter?.value
  const type = selectedCarType?.value?.name
  const status = selectedCarStatus?.value?.name
  try {
    const response = await mockApi.getCars(
      {
        expression,
        type,
        status
      },
      sort.value,
      currentPage.value,
      limit.value
    )

    if (!response.ok) {
      throw new Error('Failed to load data')
    }

    cars.value = response.data
    total.value = response.total
  } catch (error) {
    console.log(error)
    error.value = error.message
  } finally {
    loading.value = false
  }
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
