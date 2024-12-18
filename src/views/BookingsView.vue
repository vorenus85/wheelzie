<template>
  <div class="page page-bookings">
    <PageHeader :title="pageTitle"></PageHeader>
    <div class="page-content">
      <div><BookingsTable /></div>
    </div>
  </div>
</template>
<script setup>
import BookingsTable from '@/components/common/BookingsTable.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import { ref } from 'vue'

const pageTitle = ref('Bookings')
</script>
