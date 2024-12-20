<template>
  <div class="document-tag gap-2 flex">
    <div class="document-tag-icon flex items-center justify-center">
      <IconFile :size="12" />
    </div>
    <div class="document-tag-name">{{ documentName }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import IconFile from '../icons/common/iconFile.vue'

const props = defineProps({
  firstName: String,
  cardType: {
    type: String,
    validator: value => {
      const available = ['residenceCard', 'driveLicense']
      return available.includes(value)
    }
  }
})

const documentName = computed(() => {
  const cardName = props.cardType === 'residenceCard' ? 'Residence Card' : 'License'
  return `${props.firstName}'s ${cardName}`
})
</script>

<style lang="scss" scoped>
.document-tag {
  &-icon {
    padding: 2px;
    border-radius: 2px;
    background: var(--blue-subtle-10);
  }

  &-name {
    font-size: 10px;
    line-height: 160%;
  }
}
</style>
