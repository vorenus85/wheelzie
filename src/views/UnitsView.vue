<template>
  <div class="page page-units">
    <PageHeader :title="pageTitle"></PageHeader>
    <div class="page-content">
      <div class="card-units">
        <CardUnitVertical
          v-for="car in cars"
          :key="car.id"
          :id="car.id"
          :brand="car.brand"
          :model="car.model"
          :type="car.type"
          :price="car.price"
          :image="car.image"
          :status="car.status"
          :transmission="car.transmission"
          :capacity="car.capacity"
          :fuel="car.fuel"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import CardUnitVertical from '@/components/CardUnitVertical.vue'
import PageHeader from '@/components/PageHeader.vue'
import { ref } from 'vue'

const pageTitle = ref('Units')

const cars = ref([
  {
    id: 'CAR-001',
    brand: 'Aston Martin',
    model: 'DB12 Volante',
    type: 'Convertible',
    price: '120',
    image: 'aston_martin.png',
    status: 'unavailable',
    transmission: 'automatic',
    capacity: 2,
    fuel: 'petrol',
  },
  {
    id: 'CAR-002',
    brand: 'Hyundai',
    model: 'Sonata',
    type: 'Sedan',
    price: '45',
    image: 'hyundai_sonata.png',
    status: 'available',
    transmission: 'manual',
    capacity: 5,
    fuel: 'petrol',
  },
  {
    id: 'CAR-003',
    brand: 'Nissan',
    model: 'Ariya',
    type: 'Hatchback',
    price: '55',
    image: 'nissan_ariya.png',
    status: 'maintenance',
    transmission: 'automatic',
    capacity: 5,
    fuel: 'hybrid',
  },
])
</script>
<style scoped>
.card-units {
  display: flex;
  gap: 20px;
}
</style>
