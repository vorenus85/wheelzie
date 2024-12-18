<template>
  <Card class="mt-4 booking-table">
    <template #content>
      <DataTable :value="bookings" :loading="loading">
        <template #loading> Loading data. Please wait. </template>
        <Column field="id" header="Booking ID" sortable> </Column>
        <Column field="timestamp" header="Booking Date" sortable>
          <template #body="slotProps"
            ><FormattedDate :timestamp="slotProps.data.timestamp"
          /></template>
        </Column>
        <Column field="clientName" header="Client Name" sortable></Column>
        <Column field="car.brandModel" header="Car Model" sortable>
          <template #body="slotProps">
            <div>
              {{ slotProps.data.car.brandModel }}
            </div>
            <div class="mt-1">
              <CarNumberTag :id="slotProps.data.car.id" />
            </div>
          </template>
        </Column>
        <Column header="Plan" sortable>
          <template #body="slotProps"
            ><FormattedDifferenceInDays
              :from="slotProps.data.plan.from"
              :to="slotProps.data.plan.to"
          /></template>
        </Column>
        <Column field="plan.from" header="Date" sortable>
          <template #body="slotProps">
            <div class="flex gap-2 mb-1 items-center">
              <span class="plan-from-to">Start</span>
              <BookingDateTag :timestamp="slotProps.data.plan.from" />
            </div>
            <div class="flex gap-2 items-center">
              <span class="plan-from-to">End</span>
              <BookingDateTag :timestamp="slotProps.data.plan.to" />
            </div>
          </template>
        </Column>
        <Column field="payment" header="Payment" sortable>
          <template #body="slotProps">
            <div>
              <span class="plan-price">
                ${{
                  calcPlanPrice({
                    from: slotProps.data.plan.from,
                    to: slotProps.data.plan.to,
                    price: slotProps.data.car.price
                  })
                }}
              </span>
            </div>

            <BadgeStatus statusType="payment" :status="slotProps.data.payment" />
          </template>
        </Column>
        <Column field="status" header="Status" sortable>
          <template #body="slotProps">
            <BadgeStatus statusType="rent" :status="slotProps.data.status" />
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup>
import { mockApi } from '@/api/bookingApi'
import { calcPlanPrice } from '@/composables/useCalcPlanPrice'
import Card from 'primevue/card'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { onMounted, ref } from 'vue'
import BadgeStatus from './BadgeStatus.vue'
import BookingDateTag from './BookingDateTag.vue'
import CarNumberTag from './CarNumberTag.vue'
import FormattedDate from './FormattedDate.vue'
import FormattedDifferenceInDays from './FormattedDifferenceInDays.vue'
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

<style lang="scss">
.plan-from-to {
  width: 24px;
  font-size: 10px;
  color: var(--gray-20);
}

.plan-price {
  width: 60px;
  display: inline-block;
  text-align: center;
}

.booking-table {
  &.p-card {
    --p-card-body-padding: 1rem;
  }

  .p-datatable {
    --p-datatable-header-cell-padding: 0.75rem;
  }
}
</style>
