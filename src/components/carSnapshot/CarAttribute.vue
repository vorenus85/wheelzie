<template>
  <div :class="`${classPrefix}__fuel ${classPrefix}__info-with-icon`">
    <span :class="`${classPrefix}__info-icon`">
      <component v-if="iconComponent" :is="iconComponent"></component>
    </span>
    <span :class="`${classPrefix}__info-label-title`" v-if="showLabel">{{ title }}</span>
    <span :class="`${classPrefix}__info-label-value`">{{ data }}</span>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  title: String,
  data: String,
  classPrefix: {
    type: String,
    default: 'car-snapshot'
  },
  icon: String,
  showLabel: {
    type: Boolean,
    default: false
  }
})

// Dynamically import the icon component based on the `icon` prop value
const iconComponent = computed(() => {
  return props.icon
    ? defineAsyncComponent(() => import(`@/components/icons/special/icon${props.icon}.vue`))
    : null
})
</script>

<style lang="scss" scoped></style>
