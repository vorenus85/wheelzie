<template>
  <div class="sidebar">
    <RouterLink
      to="/"
      class="brand-link"
      :class="{ 'pl-0': !menuMode, 'pr-0': !menuMode }"
      :title="brand"
    >
      <div class="brand-content">
        <img alt="Wheelzie" class="logo" src="@/assets/logo.svg" width="22" height="22" />
        <span class="brand-name" v-if="menuMode">{{ brand }}</span>
      </div>
    </RouterLink>

    <div class="wrapper w-full relative">
      <div class="toggle-sidebar-btn hidden md:flex" @click="onToggleSidebar">
        <IconCaretLeft v-if="menuMode" />
        <IconCaretRight v-else />
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  overflow: hidden;
}

.sidebar {
  width: var(--sidebar-width);
  min-height: 100vh;
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  align-self: stretch;
  background: var(--white);
  position: fixed;
  z-index: 1;
  transition: all 0.2s;
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
<script setup>
import NavButton from '@/components/buttons/NavButton.vue'
import { useLayout } from '@/composables/useLayout'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconCaretLeft from '../icons/common/iconCaretLeft.vue'
import IconCaretRight from '../icons/common/iconCaretRight.vue'

const layout = useLayout()
const menuMode = ref(layout.sidebarIsOpen)
const brand = 'Wheelzie'
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

const onToggleSidebar = () => {
  layout.toggleSidebar()
}
</script>
