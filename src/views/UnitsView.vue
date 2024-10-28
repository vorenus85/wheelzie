<template>
  <div class="page page-units">
    <PageHeader :title="pageTitle"></PageHeader>
    <div class="page-content"></div>
  </div>
</template>
<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { ref } from 'vue'

const pageTitle = ref('Units')
</script>
