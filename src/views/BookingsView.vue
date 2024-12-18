<template>
  <div class="page page-bookings">
    <PageHeader title="Bookings"></PageHeader>
    <div class="page-content">
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
              <MainButton label="Add booking" severity="primary" size="small" class="add-booking" />
            </div>
          </div>
          <BookingsTable :bookings="bookings" :loading="loading" />
          <div class="page-content-bottom">
            <CustomPagination :limit="limit" :total="total" @pageChange="onPageChange" />
          </div>
        </template>
      </Card>
    </div>
    <!-- Pagination -->
  </div>
</template>
<script setup>
import { mockApi } from '@/api/bookingApi'
import MainButton from '@/components/buttons/MainButton.vue'
import BookingsTable from '@/components/common/BookingsTable.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import SearchInput from '@/components/common/SearchInput.vue'
import SortDropdown from '@/components/common/SortDropdown.vue'
import CustomPagination from '@/components/unitsPage/CustomPagination.vue'
import Card from 'primevue/card'
import { onMounted, ref } from 'vue'

const filter = ref('')

const bookings = ref()
const limit = ref(15)
const total = ref(0)
const currentPage = ref(0) // zero index
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
      currentPage.value,
      limit.value
    )

    if (!response.ok) {
      throw new Error('Failed to load data')
    }

    bookings.value = response.data
    total.value = response.total
  } catch (error) {
    error.value = error.message
  } finally {
    loading.value = false
  }
}

const onPageChange = ({ page, rows }) => {
  currentPage.value = page
  limit.value = rows
  fetchBookings()
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
