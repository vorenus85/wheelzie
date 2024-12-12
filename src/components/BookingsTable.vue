<template>
  <Card class="p-3 mt-4">
    <template #content>
      <DataTable :value="bookings" :loading="loading">
        <template #loading> Loading data. Please wait. </template>
        <Column field="id" header="Booking ID" sortable style="width: 25%"></Column>
        <Column field="timestamp" header="Booking Date" sortable style="width: 25%"></Column>
        <Column field="clientName" header="Client Name" sortable style="width: 25%"></Column>
        <Column field="car.brandModel" header="Car Model" sortable style="width: 25%"></Column>
        <Column header="Plan" sortable style="width: 25%">
          <template #body="slotProps"
            >{{ slotProps.data.plan.from }} - {{ slotProps.data.plan.to }}</template
          >
        </Column>
        <Column field="plan.from" header="Date" sortable style="width: 25%">
          <template #body="slotProps"
            ><div>Start {{ slotProps.data.plan.from }}</div>
            <div>End {{ slotProps.data.plan.to }}</div>
          </template>
        </Column>
        <Column field="payment" header="Payment" sortable style="width: 25%"></Column>
        <Column field="status" header="Status" sortable style="width: 25%"></Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup>
import { mockApi } from '@/api/bookingApi'
import Card from 'primevue/card'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { onMounted, ref } from 'vue'
const bookings = ref()
const limit = ref(8)
const total = ref(0)
const currentPage = ref(0) // zero index
const loading = ref(true)
const fetchBookings = async () => {
  loading.value = true

  try {
    const response = await mockApi.getBookings({}, null, currentPage.value, limit.value)

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

onMounted(() => {
  fetchBookings()
})
</script>

<style lang="scss" scoped></style>
