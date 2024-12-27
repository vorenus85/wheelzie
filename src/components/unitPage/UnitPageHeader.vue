<template>
  <div class="page-head">
    <h1>{{ title }}</h1>
    <LoggedInUser class="ml-auto" />
  </div>
</template>
<script setup>
import LoggedInUser from '@/components/common/LoggedInUser.vue'

defineProps({
  title: String
})
</script>
<style scoped>
.page-head {
  display: flex;
  height: 36px;
  align-items: center;
  margin-bottom: 24px;
}
.page-head h1 {
  font-size: 18px;
  font-weight: 600;
  line-height: 120%; /* 21.6px */
}
</style>
