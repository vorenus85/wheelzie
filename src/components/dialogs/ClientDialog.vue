<template>
  <Dialog
    :header="headerTitle"
    v-model:visible="visible"
    :style="{ width: '650px' }"
    :modal="true"
    @update:visible="closeDialog"
  >
    <form @submit.prevent="validateAndSave" ref="form">
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="firstName">First Name <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.firstName"
            v-model="currentClient.firstName"
            @input="validateField('firstName')"
            type="text"
            id="firstName"
            class="w-full"
          />
          <ErrorMessage :message="errors?.firstName" />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="lastName">Last Name <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.lastName"
            v-model="currentClient.lastName"
            @input="validateField('lastName')"
            type="text"
            id="lastName"
            class="w-full"
          />
          <ErrorMessage :message="errors?.lastName" />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="email">Email <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.email"
            v-model="currentClient.email"
            @input="validateField('email')"
            type="email"
            id="email"
            class="w-full"
          />
          <ErrorMessage :message="errors?.email" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="phone">Phone <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.phone"
            v-model="currentClient.phone"
            @input="validateField('phone')"
            type="text"
            id="phone"
            class="w-full"
          />
          <ErrorMessage :message="errors?.phone" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="addressLine1">Address Line 1 <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.addressLine1"
            v-model="currentClient.addressLine1"
            @input="validateField('addressLine1')"
            type="text"
            id="addressLine1"
            class="w-full"
          />
          <ErrorMessage :message="errors?.addressLine1" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="addressLine2">Address Line 2</label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.addressLine2"
            v-model="currentClient.addressLine2"
            @input="validateField('addressLine2')"
            type="text"
            id="addressLine2"
            class="w-full"
          />
          <ErrorMessage :message="errors?.addressLine2" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="city">City <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.city"
            v-model="currentClient.city"
            @input="validateField('city')"
            type="text"
            id="city"
            class="w-full"
          />
          <ErrorMessage :message="errors?.city" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="country">Country <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.country"
            v-model="currentClient.country"
            @input="validateField('country')"
            type="text"
            id="country"
            class="w-full"
          />
          <ErrorMessage :message="errors?.country" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="state">State <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.state"
            v-model="currentClient.state"
            @input="validateField('state')"
            type="text"
            id="state"
            class="w-full"
          />
          <ErrorMessage :message="errors?.state" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="zip">Zip <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <InputText
            :invalid="!!errors?.zip"
            v-model="currentClient.zip"
            @input="validateField('zip')"
            type="text"
            id="zip"
            class="w-full"
          />
          <ErrorMessage :message="errors?.zip" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="additional">Additional info</label>
        </div>
        <div class="w-1/2">
          <Textarea
            :invalid="!!errors?.additional"
            v-model="currentClient.additional"
            @input="validateField('additional')"
            id="additional"
            class="w-full"
          />
          <ErrorMessage :message="errors?.additional" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="residenceCard">Residence card</label>
        </div>
        <div>
          <FileUpload
            severity="secondary"
            mode="basic"
            name="residenceCard[]"
            url="/api/upload"
            accept="image/*"
            :maxFileSize="1000000"
            @upload="onUpload"
            :auto="true"
            chooseLabel="Browse"
          />
          <ErrorMessage :message="errors?.residenceCard" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="driveLicense">Drive license</label>
        </div>
        <div>
          <FileUpload
            mode="basic"
            severity="secondary"
            name="driveLicense[]"
            url="/api/upload"
            accept="image/*"
            :maxFileSize="1000000"
            @upload="onUpload"
            :auto="true"
            chooseLabel="Browse"
          />
          <ErrorMessage :message="errors?.driveLicense" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="points">Points</label>
        </div>
        <div class="w-1/4">
          <InputText
            :invalid="!!errors?.points"
            v-model="currentClient.points"
            @input="validateField('points')"
            type="number"
            id="points"
            class="w-full"
          />
          <ErrorMessage :message="errors?.points" />
        </div>
      </div>

      <div class="flex gap-2 justify-end mt-5 py-3">
        <MainButton label="Cancel" @click="closeDialog" outlined severity="secondary" />
        <MainButton label="Save" type="submit" severity="primary" autofocus />
      </div>
    </form>
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog'
import FileUpload from 'primevue/fileupload'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { ref, watch } from 'vue'
import * as Yup from 'yup'
import MainButton from '../buttons/MainButton.vue'
import ErrorMessage from '../common/ErrorMessage.vue'
const emit = defineEmits(['save', 'hide'])
const visible = ref(false)
const props = defineProps({
  client: { type: Object, default: () => ({}) },
  showDialog: Boolean
})

const initialClient = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  country: '',
  state: '',
  zip: '',
  additional: '',
  residenceCard: '',
  driveLicense: '',
  points: 0
}

const currentClient = ref({ ...initialClient })

const headerTitle = ref('Add new client')

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  addressLine1: Yup.string().required('Address Line 1 is required'),
  addressLine2: Yup.string().optional(),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('Zip is required'),
  additional: Yup.string().optional()
})

// Reset form function
const resetForm = () => {
  currentClient.value = { ...initialClient }
  errors.value = {}
}

// Reactive object for errors
const errors = ref({})

watch(
  () => props.showDialog,
  newValue => {
    headerTitle.value = props.client.id ? 'Edit client' : 'Add new client'
    currentClient.value = { ...props.client }
    visible.value = newValue
  }
)

// Function to validate a single field
const validateField = async fieldName => {
  try {
    const value = { [fieldName]: currentClient.value[fieldName] }
    const fieldSchema = Yup.object({ [fieldName]: validationSchema.fields[fieldName] })
    await fieldSchema.validate(value)
    delete errors.value[fieldName] // Clear the error if validation passes
  } catch (validationError) {
    errors.value[fieldName] = validationError.message // Set the field-specific error
  }
}

// Validation and save function
const validateAndSave = async () => {
  try {
    errors.value = {} // Clear previous errors
    await validationSchema.validate(currentClient.value, { abortEarly: false })
    emit('save', currentClient.value)
    closeDialog()
  } catch (validationErrors) {
    if (validationErrors.inner) {
      validationErrors.inner.forEach(err => {
        errors.value[err.path] = err.message
      })
    }
  }
}

// Close dialog
const closeDialog = () => {
  resetForm()
  emit('hide')
}

const onUpload = () => {
  console.log('Uploaded')
}
</script>

<style lang="scss" scoped></style>
