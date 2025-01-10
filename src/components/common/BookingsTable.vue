<template>
  <DataTable
    :value="bookings"
    :loading="loading"
    tableStyle="min-width: 50rem"
    class="booking-table"
  >
    <template #loading> Loading data. Please wait. </template>
    <Column field="id" header="Booking ID" sortable> </Column>
    <Column field="timestamp" header="Booking Date" sortable>
      <template #body="slotProps"><FormattedDate :timestamp="slotProps.data.timestamp" /></template>
    </Column>
    <Column field="clientName" header="Client Name" sortable></Column>
    <Column field="car.brandModel" header="Car Model" sortable>
      <template #body="slotProps">
        <div>
          {{ slotProps.data?.car?.brandModel }}
        </div>
        <div class="mt-1">
          <CarNumberTag :id="slotProps.data.car.id" />
        </div>
      </template>
    </Column>
    <Column header="Plan" sortable>
      <template #body="slotProps"
        ><FormattedDifferenceInDays :from="slotProps.data.planFrom" :to="slotProps.data.planTo"
      /></template>
    </Column>
    <Column field="planFrom" header="Date" sortable>
      <template #body="slotProps">
        <div class="flex gap-2 mb-1 items-center">
          <span class="plan-from-to">Start</span>
          <BookingDateTag :timestamp="slotProps.data.planFrom" />
        </div>
        <div class="flex gap-2 items-center">
          <span class="plan-from-to">End</span>
          <BookingDateTag :timestamp="slotProps.data.planTo" />
        </div>
      </template>
    </Column>
    <Column field="paymentStatus" header="Payment" sortable>
      <template #body="slotProps">
        <div>
          <span class="plan-price">
            ${{
              calcPlanPrice({
                from: slotProps.data.planFrom,
                to: slotProps.data.planTo,
                price: slotProps.data.car.price
              })
            }}
          </span>
        </div>

        <BadgeStatus statusType="payment" :status="slotProps.data.paymentStatus" />
      </template>
    </Column>
    <Column field="bookingStatus" header="Status" sortable>
      <template #body="slotProps">
        <BadgeStatus statusType="rent" :status="slotProps.data.bookingStatus" />
      </template>
    </Column>
    <Column header="Actions">
      <template #body="slotProps">
        <MainButton size="small" label="Edit" outlined @click="onEditBooking(slotProps.data)" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import { calcPlanPrice } from '@/composables/useCalcPlanPrice'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import MainButton from '../buttons/MainButton.vue'
import BadgeStatus from './BadgeStatus.vue'
import BookingDateTag from './BookingDateTag.vue'
import CarNumberTag from './CarNumberTag.vue'
import FormattedDate from './FormattedDate.vue'
import FormattedDifferenceInDays from './FormattedDifferenceInDays.vue'
const emit = defineEmits(['edit-booking'])

defineProps({
  bookings: Object,
  loading: {
    type: Boolean,
    default: false
  }
})

const onEditBooking = data => {
  emit('edit-booking', data)
}
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
</style>
