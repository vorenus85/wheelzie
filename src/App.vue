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
