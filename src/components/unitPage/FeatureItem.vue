<template>
  <div class="feature-item">
    <div class="feature-item-icon">
      <IconFeatureCheck />
    </div>
    <div class="feature-item-title">{{ title }}</div>
  </div>
</template>

<script setup>
import IconFeatureCheck from '../icons/common/iconFeatureCheck.vue'

defineProps({ title: String })
</script>

<style lang="scss" scoped>
.feature-item {
  display: flex;
  gap: 0.75rem;

  &-icon {
    height: 20px;
    display: flex;
    padding: 4px;
    align-items: center;
    border-radius: 4px;
    background: var(--gray-bg);
  }

  &-title {
    font-size: 11px;
    color: var(--blue-dark);
  }
}
</style>
