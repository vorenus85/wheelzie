<template>
  <Dialog
    :header="headerTitle"
    v-model:visible="visible"
    :style="{ width: '650px' }"
    :modal="true"
    @update:visible="closeDialog"
  >
    <form @submit.prevent="validateAndSave" ref="form"></form>
  </Dialog>
</template>
<script setup>
import Dialog from 'primevue/dialog'
import { ref, watch } from 'vue'
const emit = defineEmits(['save', 'hide'])
const visible = ref(false)
const props = defineProps({
  booking: { type: Object, default: () => ({}) },
  showDialog: Boolean
})
const headerTitle = ref('Add new booking')

watch(
  () => props.showDialog,
  newValue => {
    headerTitle.value = props.booking.id ? 'Edit booking' : 'Add new booking'
    // currentClient.value = { ...props.client }
    visible.value = newValue
  }
)

// Validation and save function
const validateAndSave = async () => {}

// Close dialog
const closeDialog = () => {
  // resetForm()
  emit('hide')
}
</script>
