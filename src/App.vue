<script setup>
import { useLayout } from '@/composables/useLayout'
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import ToggleSidebar from './components/common/ToggleSidebar.vue'
const layout = useLayout()
const menuMode = ref(layout.sidebarIsOpen)

const updateWindowSize = () => {
  if (window.innerWidth < 991) {
    console.log('updateWindowSize')
    layout.closeSidebar()
  }
}

// Add event listeners on mount and clean up on unmount
onMounted(() => {
  window.addEventListener('resize', updateWindowSize)
  window.addEventListener('orientationchange', updateWindowSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize)
  window.removeEventListener('orientationchange', updateWindowSize)
})
</script>
<template>
  <div class="app-layout" :class="{ 'sidebar-is-open': menuMode }">
    <ToggleSidebar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>
<style lang="scss">
.p-button.p-component {
  transition:
    background var(--p-button-transition-duration),
    opacity var(--p-button-transition-duration),
    color var(--p-button-transition-duration),
    border-color var(--p-button-transition-duration),
    outline-color var(--p-button-transition-duration),
    box-shadow var(--p-button-transition-duration);
  // buttons
  --p-button-sm-font-size: 12px;
  --p-button-sm-padding-y: 6px;
  --p-button-sm-padding-x: 12px;
  --p-button-label-font-weight: 400;

  // primary buttons:
  --p-button-primary-color: #fff;
  --p-button-primary-background: var(--red);
  --p-button-primary-border-color: var(--red);
  --p-button-primary-active-background: var(--red);
  --p-button-primary-active-border-color: var(--red);
  --p-button-primary-active-color: #fff;
  --p-button-primary-focus-ring-color: var(--red);
  --p-button-primary-hover-background: var(--red);
  --p-button-primary-hover-border-color: var(--red);
  --p-button-primary-hover-color: #fff;

  // secondary buttons:
  --p-button-secondary-color: var(--gray-30);
  --p-button-secondary-background: var(--gray-bg);
  --p-button-secondary-border-color: var(--gray-bg);
  --p-button-secondary-active-background: var(--blue-subtle-00);
  --p-button-secondary-active-border-color: var(--blue-subtle-00);
  --p-button-secondary-active-color: var(--gray-30);
  --p-button-secondary-focus-ring-color: var(--gray-30);
  --p-button-secondary-hover-background: var(--blue-subtle-10);
  --p-button-secondary-hover-border-color: var(--blue-subtle-10);
  --p-button-secondary-hover-color: var(--gray-30);
}

.p-dialog {
  --p-dialog-color: var(--blue-dark);
}

.p-button {
  font-size: 0.875rem;
  height: 40px;
}

.p-button.p-button-sm {
  height: 30px;
}

.p-button:hover {
  opacity: 0.75;
}

.p-button:active {
  opacity: 0.9;
}

.p-datatable {
  --p-datatable-column-title-font-weight: 400;
  --p-datatable-header-cell-background: var(--blue-subtle-10);
  --p-datatable-header-cell-border-color: transparent;
  --p-datatable-sort-icon-size: 0.5rem;
  --p-datatable-header-cell-selected-background: var(--blue-light);
  --p-datatable-header-cell-selected-color: var(--black);
  --p-datatable-header-cell-padding: 0.75rem;
  --p-datatable-body-cell-padding: 0.75rem;

  &.outlined {
    border-radius: 6px;
    border: 1px solid var(--gray-line);

    .p-datatable-tbody > tr:last-child > td:first-child {
      border-bottom-left-radius: 6px;
    }
    .p-datatable-tbody > tr:last-child > td:last-child {
      border-bottom-right-radius: 6px;
    }
  }

  tr td {
    font-size: 11px;
  }
}

.p-datatable-column-title {
  font-size: 10px;
  color: var(--gray-30);
}

.p-datatable-tbody > tr:last-child > td {
  --p-datatable-body-cell-border-color: transparent;
}

.p-datatable-header-cell:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.p-datatable-header-cell:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.p-datatable-column-header-content {
  line-height: 1rem;
}

.app-layout:not(.sidebar-is-open) {
  .main-content,
  .sidebar {
    --sidebar-width: var(--sidebar-closed-width);
  }
}
</style>
