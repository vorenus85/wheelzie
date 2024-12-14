<template>
  <div class="page page-units">
    <!-- Page Header -->
    <PageHeader :title="pageTitle" />

    <!-- Page Content -->
    <div class="page-content">
      <!-- Top Controls -->
      <div class="page-content-top mb-3 pb-1 flex gap-2">
        <SearchInput
          :placeholder="searchInputOptions.placeholder"
          @searchInput="onSearchInput"
          :filter="filter"
        />
        <SortDropdown
          :options="carTypes.types"
          :selected="selectedCarType"
          :placeholder="carTypes.placeholder"
          @changeSort="onChangeCarTypes"
        />
        <SortDropdown
          :options="carStatus.types"
          :selected="selectedCarStatus"
          :placeholder="carStatus.placeholder"
          @changeSort="onChangeCarStatus"
        />
        <SelectButton v-model="layout" :options="layoutOptions" :allowEmpty="false" class="ml-auto">
          <template #option="{ option }">
            <i :class="option === 'list' ? 'pi pi-bars' : 'pi pi-table'" />
          </template>
        </SelectButton>
        <MainButton :label="addNewUnitLabel" severity="primary" size="small" />
      </div>

      <!-- Main Content -->
      <div class="page-content-center">
        <div class="card-units" v-if="!loading">
          <CardUnitVertical
            v-for="car in cars"
            :key="car.id"
            v-bind="car"
            @deleteOption="showConfirmDialog(car.id)"
          />
        </div>
      </div>

      <!-- Pagination -->
      <div class="page-content-bottom">
        <BottomPagination :limit="limit" :total="total" @pageChange="onPageChange" />
      </div>

      <!-- Confirmation Dialog -->
      <ConfirmDialog
        :showDialog="showConfirm"
        @applyConfirmation="applyConfirmDialog"
        @hide="closeConfirmDialog"
      />
    </div>
  </div>
</template>
<script setup>
import { mockApi } from '@/api/carApi'
import MainButton from '@/components/buttons/MainButton.vue'
import ConfirmDialog from '@/components/common/ConfirmDialog.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import SearchInput from '@/components/common/SearchInput.vue'
import SortDropdown from '@/components/common/SortDropdown.vue'
import BottomPagination from '@/components/unitsPage/BottomPagination.vue'
import CardUnitVertical from '@/components/unitsPage/CarVertical.vue'
import SelectButton from 'primevue/selectbutton'
import { onMounted, ref } from 'vue'

/** Page Data **/
const pageTitle = ref('Units')
const addNewUnitLabel = ref('Add unit')
const layout = ref('grid')
const layoutOptions = ref(['list', 'grid'])

/** Filters **/
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

/** Dialog **/
const showConfirm = ref(false)
const selectedCar = ref(null)

/** Pagination and Data **/
const limit = ref(8)
const currentPage = ref(0)
const total = ref(0)
const cars = ref([])
const loading = ref(true)

/** Fetch Cars **/
const fetchCars = async () => {
  loading.value = true
  try {
    const response = await mockApi.getCars(
      {
        expression: filter?.value,
        type: selectedCarType?.value?.name,
        status: selectedCarStatus?.value?.name
      },
      'brand_asc',
      currentPage.value,
      limit.value
    )

    if (!response.ok) throw new Error('Failed to load data')

    cars.value = response.data
    total.value = response.total
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

/** Events **/
const onSearchInput = value => {
  filter.value = value
  fetchCars()
}

const onChangeCarTypes = value => {
  selectedCarType.value = value
  fetchCars()
}

const onChangeCarStatus = value => {
  selectedCarStatus.value = value
  fetchCars()
}

const onPageChange = ({ page, rows }) => {
  currentPage.value = page
  limit.value = rows
  fetchCars()
}

const showConfirmDialog = carId => {
  selectedCar.value = carId
  showConfirm.value = true
}

const closeConfirmDialog = () => {
  selectedCar.value = null
  showConfirm.value = false
}

const applyConfirmDialog = () => {
  onDeleteCar(selectedCar.value)
  closeConfirmDialog()
}

const onDeleteCar = carId => {
  mockApi.deleteCar(carId)
  fetchCars()
}

/** Lifecycle **/
onMounted(fetchCars)
</script>
<style scoped>
.card-units {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
}
</style>
