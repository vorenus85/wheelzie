<template>
  <div class="page page-units">
    <!-- Page Header -->
    <PageHeader title="Units" />

    <!-- Page Content -->
    <div class="page-content">
      <!-- Top Controls -->
      <div class="page-content-top mb-3 pb-1 flex gap-2 flex-wrap">
        <SearchInput
          placeholder="Search for car, etc"
          @searchInput="onSearchInput"
          :filter="filter"
        />
        <SortDropdown
          :options="carBodyTypes"
          :selected="selectedCarType"
          placeholder="Car Type"
          @changeSort="onChangeCarTypes"
          class="sort-by-types"
        />
        <SortDropdown
          :options="carStatus"
          :selected="selectedCarStatus"
          placeholder="Status"
          @changeSort="onChangeCarStatus"
          class="sort-by-status"
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
        <MainButton
          label="Add unit"
          severity="primary"
          size="small"
          class="ml-0 add-new-car"
          @click="showCarDialogModal"
        />
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
                  @modifyOption="showCarDialogModal(car)"
                  @deleteOption="showConfirmDialog(car.id)"
                />
              </template>
              <template v-else>
                <SkeletonUnitHorizontal v-if="loading" />
                <CarSnapshotHorizontal
                  v-bind="car"
                  v-else
                  @modifyOption="showCarDialogModal(car)"
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
        <CustomPagination :limit="limit" :total="total" @pageChange="onPageChange" />
      </div>

      <!-- Confirmation Dialog -->
      <ConfirmDialog
        :showDialog="showConfirm"
        @applyConfirmation="applyConfirmDialog"
        @hide="closeConfirmDialog"
      />
    </div>

    <CarDialog
      :car="selectedCar"
      :showDialog="showCarDialog"
      @save="saveCarDialogModal"
      @hide="closeCarDialog"
    />
  </div>
</template>
<script setup>
import MainButton from '@/components/buttons/MainButton.vue'
import ConfirmDialog from '@/components/common/ConfirmDialog.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import SearchInput from '@/components/common/SearchInput.vue'
import SortDropdown from '@/components/common/SortDropdown.vue'
import IconGrid from '@/components/icons/common/iconGrid.vue'
import IconList from '@/components/icons/common/iconList.vue'
import CarSnapshotHorizontal from '@/components/unitsPage/CarSnapshotHorizontal.vue'
import CarSnapshotVertical from '@/components/unitsPage/CarSnapshotVertical.vue'
import SkeletonUnitHorizontal from '@/components/unitsPage/SkeletonUnitHorizontal.vue'
import SkeletonUnitVertical from '@/components/unitsPage/SkeletonUnitVertical.vue'
import { carStatuses, carTypes, carsApi } from '@/service/cars'
import Message from 'primevue/message'
import SelectButton from 'primevue/selectbutton'
import { onMounted, ref } from 'vue'

import CarDialog from '@/components/dialogs/CarDialog.vue'
import CustomPagination from '@/components/unitsPage/CustomPagination.vue'
/** Page Data **/
const layout = ref('grid')

const layoutOptions = ref(['list', 'grid'])

/** Filters **/
const filter = ref('')
const selectedCarType = ref()
const carBodyTypes = ref([...carTypes])
const selectedCarStatus = ref()
const carStatus = ref([...carStatuses])

/** Dialog **/
const showConfirm = ref(false)
const selectedCar = ref(null)
const showCarDialog = ref(null)

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
    const response = await carsApi.getCars(
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

const showCarDialogModal = car => {
  selectedCar.value = car
  showCarDialog.value = true
}

const closeCarDialog = () => {
  showCarDialog.value = false
}

const saveCarDialogModal = car => {
  carsApi.upsertCar(car)
  closeCarDialog()
  fetchCars()
}

const onDeleteCar = carId => {
  carsApi.deleteCar(carId)
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
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

@media (max-width: 425px) {
  .add-new-car {
    margin-left: auto;
  }
}

@media (min-width: 768px) {
  .car-list-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
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

@media (max-width: 768px) {
  .sort-by-types,
  .sort-by-status {
    display: none;
  }
}
</style>
<style lang="scss">
.cars-toggle-menu {
  height: 30px;
  &.p-selectbutton .p-togglebutton {
    border-radius: var(--p-togglebutton-border-radius) !important;
  }
}
</style>
