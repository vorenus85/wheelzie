<template>
  <div class="page-head">
    <MainButton severity="secondary" id="back-to-list" class="mr-4" @click="toList">
      <template #icon>
        <IconArrowLeft />
      </template>
    </MainButton>
    <h1>{{ title }}</h1>
    <LoggedInUser class="ml-auto" />
  </div>
</template>
<script setup>
import LoggedInUser from '@/components/common/LoggedInUser.vue'
import { useRouter } from 'vue-router'
import MainButton from '../buttons/MainButton.vue'
import IconArrowLeft from '../icons/common/iconArrowLeft.vue'
const router = useRouter()

defineProps({
  title: String
})

const toList = () => {
  router.push({ name: 'units' })
}
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

#back-to-list {
  --p-button-secondary-background: #fff;
  --p-button-secondary-border-color: #fff;
  --p-button-padding-y: 0.5rem;
  --p-button-padding-x: 0.5rem;
}
</style>
