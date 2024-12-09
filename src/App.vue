<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>
<template>
  <Sidebar />
  <main class="main-content">
    <RouterView />
  </main>
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

.p-button:hover {
  opacity: 0.75;
}

.p-button:active {
  opacity: 0.9;
}
</style>
