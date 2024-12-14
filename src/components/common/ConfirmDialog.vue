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
      <Button label="No" icon="pi pi-times" @click="closeConfirmation" text severity="secondary" />
      <Button
        label="Yes"
        icon="pi pi-check"
        @click="applyConfirmation"
        severity="danger"
        outlined
        autofocus
      />
    </template>
  </Dialog>
</template>

<script setup>
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { ref, watch } from 'vue'
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
