<template>
  <div class="page page-dashboard">
    <PageHeader :title="pageTitle"></PageHeader>
    <div class="page-content">
      <div class="card-statistics">
        <CardStatistic
          v-for="(item, index) in statistics"
          :key="item.index"
          :label="item.label"
          :unit="item.unit"
          :change="item.change"
          :icon="item.icon"
        ></CardStatistic>
      </div>
      <div>
        <BookingsTable />
      </div>
    </div>
  </div>
</template>
<script setup>
import CardStatistic from '@/components/CardStatistic.vue'
import BookingsTable from '@/components/BookingsTable.vue'
import PageHeader from '@/components/PageHeader.vue'
import { ref } from 'vue'

const pageTitle = ref('Dashboard')
const statistics = ref([
  {
    label: 'Total Revenue',
    unit: '$8,450',
    change: '2.86',
    icon: 'iconTotalRevenue'
  },
  {
    label: 'New Bookings',
    unit: '386',
    change: '1.73',
    icon: 'iconNewBookings'
  },
  {
    label: 'Rented Cars',
    unit: '214 unit',
    change: '-2.86',
    icon: 'iconRentedCars'
  },
  {
    label: 'Available Cars',
    unit: '89 unit',
    change: '3.45',
    icon: 'iconAvailableCars'
  }
])
</script>
<style>
.card-statistics {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 16px;
}
</style>
