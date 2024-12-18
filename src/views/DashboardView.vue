<template>
  <div class="page page-dashboard">
    <PageHeader title="Dashboard"></PageHeader>
    <div class="page-content">
      <div class="card-statistics grid grid-cols-12 gap-4">
        <CardStatistic
          v-for="item in statistics"
          :key="item.index"
          :label="item.label"
          :unit="item.unit"
          :change="item.change"
          :icon="item.icon"
        ></CardStatistic>
      </div>
      <Card class="booking-table-module mt-4">
        <template #content>
          <div class="module">
            <div class="module-head flex justify-center items-center gap-4">
              <h3 class="module-head-title">Car Bookings</h3>
              <SearchInput
                placeholder="Search for car, etc"
                @searchInput="onSearchInput"
                :filter="filter"
                class="ml-auto"
                variant="dark"
              />
              <SortDropdown
                :options="bookingStatus.types"
                :selected="selectedBookingStatus"
                placeholder="Status"
                @changeSort="onChangeBookingStatus"
                variant="dark"
                class="sort-by-status"
              />
            </div>
          </div>
          <BookingsTable :bookings="bookings" :loading="loading" />
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup>
import { mockApi } from '@/api/bookingApi'
import BookingsTable from '@/components/common/BookingsTable.vue'
import SearchInput from '@/components/common/SearchInput.vue'
import SortDropdown from '@/components/common/SortDropdown.vue'
import CardStatistic from '@/components/dashboardPage/CardStatistic.vue'
import Card from 'primevue/card'
import { onMounted, ref } from 'vue'
const statistics = ref([
  {
    label: 'Total Revenue',
    unit: '$8,450',
    change: 2.86,
    icon: 'iconTotalRevenue'
  },
  {
    label: 'New Bookings',
    unit: '386',
    change: 1.73,
    icon: 'iconNewBookings'
  },
  {
    label: 'Rented Cars',
    unit: '214 unit',
    change: -2.86,
    icon: 'iconRentedCars'
  },
  {
    label: 'Available Cars',
    unit: '89 unit',
    change: 3.45,
    icon: 'iconAvailableCars'
  }
])
const filter = ref('')
const bookings = ref()
const loading = ref(true)
const fetchBookings = async () => {
  loading.value = true

  try {
    const response = await mockApi.getBookings(
      {
        expression: filter?.value,
        status: selectedBookingStatus?.value?.name
      },
      null,
      0,
      5
    )

    if (!response.ok) {
      throw new Error('Failed to load data')
    }

    bookings.value = response.data
  } catch (error) {
    error.value = error.message
  } finally {
    loading.value = false
  }
}

const selectedBookingStatus = ref()
const bookingStatus = ref({
  types: [{ name: 'Returned' }, { name: 'Ongoing' }, { name: 'Cancelled' }]
})

const onChangeBookingStatus = value => {
  selectedBookingStatus.value = value
  fetchBookings()
}

const onSearchInput = value => {
  filter.value = value
  fetchBookings()
}

onMounted(() => {
  fetchBookings()
})
</script>
