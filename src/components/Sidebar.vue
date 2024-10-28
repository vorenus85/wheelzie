<template>
  <div class="sidebar">
    <RouterLink to="/" class="brand-link">
      <div class="brand-content">
        <img
          alt="Wheelzie"
          class="logo"
          src="@/assets/logo.svg"
          width="22"
          height="22"
        />
        <span class="brand-name">{{ brand }}</span>
      </div>
    </RouterLink>

    <div class="wrapper w-full">
      <nav class="sidebar-nav">
        <NavButton
          v-for="item in navMenus"
          :to="item.path"
          :title="item.title"
          :key="item.id"
          :icon="item.icon"
        />
      </nav>
    </div>
  </div>
</template>
<style scoped>
.brand-name {
  color: var(--Blue-Dark, #1f3045);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 22px */
}

.brand-link {
  display: flex;
  padding: 2px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.brand-content {
  display: flex;
  height: 32px;
  padding: 5px 37px 5px 6px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.sidebar-nav {
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;
}
</style>
<script setup>
import { ref } from 'vue'
import NavButton from '@/components/Buttons/NavButton.vue'
import { RouterLink } from 'vue-router'

const brand = 'Wheelzie'

const navMenus = ref([
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
    icon: 'iconDashboard',
  },
  {
    id: 2,
    title: 'Bookings',
    path: '/bookings',
    icon: 'iconBookings',
  },
  {
    id: 3,
    title: 'Units',
    path: '/units',
    icon: 'iconUnits',
  },
  {
    id: 4,
    title: 'Clients',
    path: '/clients',
    icon: 'iconClients',
  },
])
</script>
