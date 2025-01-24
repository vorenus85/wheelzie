<template>
  <div class="name-badge mr-5" :style="{ backgroundColor: randomBackground }">
    {{ computedMonogram }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String
})

const palette = [
  '#780000',
  '#C1121F',
  '#3d405b',
  '#003049',
  '#669BBC',
  '#52796f',
  '#6a994e',
  '#252422'
]

const computedMonogram = computed(() => {
  const monogram = props.name

  if (!monogram.length) {
    return
  }

  if (monogram.length < 1) {
    return ''
  }

  if (monogram.length === 1) {
    return monogram[0].split('')[0]
  }

  return monogram[0].split('')[0] + monogram[1].split('')[0]
})

const randomBackground = computed(() => {
  return palette[Math.floor(Math.random() * palette.length)]
})
</script>

<style lang="scss" scoped>
.name-badge {
  background-color: #31f1ac;
  flex: 0 0 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  font-weight: 400 !important;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
}
</style>
