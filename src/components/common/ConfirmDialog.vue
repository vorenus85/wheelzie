<template>
  <Dialog
    :header="header"
    v-model:visible="visible"
    :style="{ width: '350px' }"
    :modal="true"
    @update:visible="closeConfirmation"
  >
    <div class="flex items-center justify-center">
      <i class="pi pi-exclamation-triangle mr-4" style="font-size: 2rem" />
      <span>Are you sure you want to proceed?</span>
    </div>
    <template #footer>
      <MainButton
        label="No"
        @click="closeConfirmation"
        outlined
        severity="secondary"
        size="small"
      />
      <MainButton
        label="Yes"
        @click="applyConfirmation"
        severity="primary"
        autofocus
        size="small"
      />
    </template>
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog'
import { ref, watch } from 'vue'
import MainButton from '../buttons/MainButton.vue'
const emit = defineEmits(['apply-confirmation', 'hide'])
const visible = ref(false)

const props = defineProps({
  header: { type: String, default: 'Confirmation' },
  showDialog: Boolean
})

watch(
  () => props.showDialog,
  newValue => {
    visible.value = newValue
  }
)

const closeConfirmation = () => {
  emit('hide')
}

const applyConfirmation = () => {
  emit('apply-confirmation')
}
</script>

<style lang="scss" scoped></style>
