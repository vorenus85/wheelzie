<template>
  <div class="page page-bookings">
    <PageHeader :title="pageTitle"></PageHeader>
    <div class="page-content"></div>
  </div>
</template>
<script setup>
import PageHeader from '@/components/common/PageHeader.vue'
import { ref } from 'vue'

const pageTitle = ref('Bookings')
</script>
