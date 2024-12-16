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
        <SelectButton
          v-model="layout"
          :options="layoutOptions"
          :allowEmpty="false"
          class="ml-auto cars-toggle-menu"
        >
          <template #option="{ option }">
            <IconList v-if="option === 'list'" :color="'currentColor'" />
            <IconGrid v-if="option === 'grid'" :color="'currentColor'" />
          </template>
        </SelectButton>
        <MainButton :label="addNewUnitLabel" severity="primary" size="small" />
      </div>

      <!-- Main Content -->
      <div class="page-content-center">
        <template v-if="cars.length">
          <div class="car-list" :class="`car-list-${layout}`">
            <template v-for="car in cars" :key="car?.id">
              <template v-if="layout === 'grid'">
                <SkeletonUnitVertical v-if="loading" />
                <CarSnapshotVertical
                  v-bind="car"
                  v-else
                  @deleteOption="showConfirmDialog(car.id)"
                />
              </template>
              <template v-else>
                <SkeletonUnitHorizontal v-if="loading" />
                <CarSnapshotHorizontal
                  v-bind="car"
                  v-else
                  @deleteOption="showConfirmDialog(car.id)"
                />
              </template>
            </template>
          </div>
        </template>
        <template v-else>
          <Message severity="secondary" class="w-full mt-5 mb-5"
            >No cars were found matching your criteria.</Message
          >
        </template>
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
import IconGrid from '@/components/icons/common/iconGrid.vue'
import IconList from '@/components/icons/common/iconList.vue'
import BottomPagination from '@/components/unitsPage/BottomPagination.vue'
import CarSnapshotHorizontal from '@/components/unitsPage/CarSnapshotHorizontal.vue'
import CarSnapshotVertical from '@/components/unitsPage/CarSnapshotVertical.vue'
import SkeletonUnitHorizontal from '@/components/unitsPage/SkeletonUnitHorizontal.vue'
import SkeletonUnitVertical from '@/components/unitsPage/SkeletonUnitVertical.vue'
import Message from 'primevue/message'
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
const cars = ref(['', '', '', '', '', '', '', ''])
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
<style lang="scss" scoped>
.car-list {
  display: grid;
  grid-gap: 20px;
}

.car-list-grid {
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

.car-list-list {
  grid-template-columns: 1fr;
}

.cars-toggle-menu {
  --p-togglebutton-border-radius: 6px;
  --p-togglebutton-padding: 5px;
  --p-togglebutton-background: #fff;
  --p-togglebutton-checked-color: #fff;
  --p-togglebutton-border-color: transparent;
  --p-togglebutton-checked-border-color: transparent;
  --p-togglebutton-content-checked-background: var(--blue-dark);
  --p-togglebutton-checked-background: var(--blue-dark);
  --p-togglebutton-content-checked-shadow: none;
  background: #fff;
  border-radius: var(--p-togglebutton-border-radius);
}
</style>
<style lang="scss">
.cars-toggle-menu {
  &.p-selectbutton .p-togglebutton {
    border-radius: var(--p-togglebutton-border-radius) !important;
  }
}
</style>
