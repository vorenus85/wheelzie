<template>
  <div class="sidebar">
    <RouterLink to="/" class="brand-link">
      <div class="brand-content">
        <img alt="Wheelzie" class="logo" src="@/assets/logo.svg" width="22" height="22" />
        <span class="brand-name">{{ brand }}</span>
      </div>
    </RouterLink>

    <div class="wrapper w-full relative">
      <div class="toggle-sidebar-btn" @click="toggleSidebar">
        <IconCaretRight />
      </div>
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
<style scoped lang="scss">
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

.toggle-sidebar-btn {
  position: absolute;
  right: 0;
  opacity: 0;
  top: -1.5rem;
  padding: 0.25rem;
  z-index: 1;
  display: flex;
  background: #fff;
  border-radius: 100%;
  transition: all 0.2s;
  cursor: pointer;
}

.sidebar:hover {
  .toggle-sidebar-btn {
    right: -2rem;
    opacity: 1;
  }
}
</style>
<style lang="scss">
.toggle-active {
  &.sidebar {
    flex: 0 0 60px;
  }

  .p-button-label {
    display: none;
  }
}
</style>
<script setup>
import { ref } from 'vue'
import NavButton from '@/components/Buttons/NavButton.vue'
import { RouterLink } from 'vue-router'
import IconCaretRight from './icons/common/iconCaretRight.vue'

const brand = 'Wheelzie'
const toggle = ref(false)
const navMenus = ref([
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
    icon: 'iconDashboard'
  },
  {
    id: 2,
    title: 'Bookings',
    path: '/bookings',
    icon: 'iconBookings'
  },
  {
    id: 3,
    title: 'Units',
    path: '/units',
    icon: 'iconUnits'
  },
  {
    id: 4,
    title: 'Clients',
    path: '/clients',
    icon: 'iconClients'
  }
])

const toggleSidebar = () => {
  toggle.value = !toggle.value
}
</script>
