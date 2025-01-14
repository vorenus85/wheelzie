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
          <label for="brand">Client name <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            size="small"
            :invalid="!!errors?.client"
            id="client"
            filter
            showClear
            filterPlaceholder="Filter by name"
            v-model="actualClient"
            :options="clients"
            optionLabel="fullname"
            optionId="id"
            placeholder="Select a client"
            :loading="clientsLoading"
            @change="handleChange('client')"
          ></Select>
          <ErrorMessage :message="errors?.client" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="carSelect">Car <sup class="text-red-600">*</sup></label>
        </div>
        <div class="flex items-start flex-col w-1/2">
          <Select
            size="small"
            :invalid="!!errors?.car"
            filterPlaceholder="Filter by id"
            filter
            showClear
            id="carSelect"
            class="w-full"
            v-model="actualCar"
            :options="cars"
            optionLabel="id"
            optionId="id"
            placeholder="Select a car"
            :loading="carsLoading"
            @change="handleChange('car')"
          >
            <template #option="slotProps">
              <div class="flex py-3">
                <div class="text-sm">
                  {{ slotProps.option.brand }} {{ slotProps.option.model }}
                  <CarNumberTag :id="slotProps.option.id"></CarNumberTag>
                </div>
              </div>
            </template>
          </Select>
          <ErrorMessage :message="errors?.car" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="car">Booking start<sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <DatePicker name="date" v-model="planFrom" size="small" :invalid="!!errors?.planFrom" />
          <ErrorMessage :message="errors?.planFrom" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="car">Booking end<sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <DatePicker
            name="date"
            v-model="planTo"
            size="small"
            :invalid="!!errors?.planTo"
            @change="handleChange('planTo')"
          />
          <ErrorMessage :message="errors?.planTo" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="car">Payment status<sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            size="small"
            placeholder="Select a Payment status"
            optionLabel="label"
            :invalid="!!errors?.paymentStatus"
            v-model="paymentStatus"
            :options="paymentStatuses"
            @change="handleChange('paymentStatus')"
          ></Select>
          <ErrorMessage :message="errors?.paymentStatus" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="car">Booking status<sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            :invalid="!!errors?.bookingStatus"
            size="small"
            placeholder="Select a booking status"
            optionLabel="label"
            v-model="bookingStatus"
            :options="bookingStatuses"
            @change="handleChange('bookingStatus')"
          ></Select>
          <ErrorMessage :message="errors?.bookingStatus" />
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
import { initialBooking } from '@/composables/useBooking'
import { bookingStatuses, paymentStatuses } from '@/service/bookings'
import { carsApi } from '@/service/cars'
import { clientsApi } from '@/service/clients'
import { DatePicker, Select } from 'primevue'
import Dialog from 'primevue/dialog'
import { nextTick, ref, watch } from 'vue'
import * as Yup from 'yup'
import MainButton from '../buttons/MainButton.vue'
import CarNumberTag from '../common/CarNumberTag.vue'
import ErrorMessage from '../common/ErrorMessage.vue'
const emit = defineEmits(['save', 'hide'])
const visible = ref(false)
const props = defineProps({
  booking: {
    type: Object,
    default: () => ({})
  },
  showDialog: {
    type: Boolean,
    default: false
  }
})
const clientsLimit = ref(10)
const actualClient = ref(null)
const clients = ref([])
const clientsLoading = ref(false)
const clientCurrentPage = ref(0) // zero index

const carsLimit = ref(10)
const actualCar = ref(null)
const cars = ref([])
const carsLoading = ref(false)
const carCurrentPage = ref(0) // zero index

const planFrom = ref(null)
const planTo = ref(null)

const paymentStatus = ref(null)
const bookingStatus = ref(null)

const headerTitle = ref('Add new booking')

const currentBooking = ref({ ...initialBooking() })

// Reactive object for errors
const errors = ref({})

const errorMessages = {
  client: 'Client is required',
  car: 'Car is required',
  planFrom: 'Booking start is required',
  planTo: 'Booking end is required',
  paymentStatus: 'Payment status is required',
  bookingStatus: 'Booking status is required'
}

// Validation schema using Yup
const validationSchema = Yup.object({
  client: Yup.object().required(errorMessages.client),
  car: Yup.object().required(errorMessages.car),
  planFrom: Yup.string().required(errorMessages.planFrom),
  planTo: Yup.string().required(errorMessages.planTo),
  paymentStatus: Yup.string().required(errorMessages.paymentStatus),
  bookingStatus: Yup.string().required(errorMessages.bookingStatus)
})

const fetchCars = async () => {
  carsLoading.value = true

  try {
    const response = await carsApi.getCars(
      { status: 'available' },
      null,
      carCurrentPage.value,
      carsLimit.value
    )

    if (!response.ok) {
      throw new Error('Failed to load data')
    }

    cars.value = response.data.map(({ id, brand, model, price }) => ({
      id,
      brand,
      model,
      price
    }))
  } catch (error) {
    error.value = error.message
  } finally {
    carsLoading.value = false
  }
}

const fetchClients = async () => {
  clientsLoading.value = true

  try {
    const response = await clientsApi.getClients(
      {},
      null,
      clientCurrentPage.value,
      clientsLimit.value
    )

    if (!response.ok) {
      throw new Error('Failed to load data')
    }
    clients.value = response.data.map(({ id, fullname }) => ({ id, fullname }))
  } catch (error) {
    error.value = error.message
  } finally {
    clientsLoading.value = false
  }
}

watch(
  () => props.showDialog,
  async newValue => {
    headerTitle.value = props.booking?.id ? 'Edit booking' : 'Add new booking'
    currentBooking.value = { ...props.booking }
    actualClient.value = currentBooking.value?.client
    actualCar.value = currentBooking.value?.car
    planFrom.value = currentBooking.value?.planFrom
      ? new Date(currentBooking.value?.planFrom * 1000)
      : null
    planTo.value = currentBooking.value?.planTo
      ? new Date(currentBooking.value?.planTo * 1000)
      : null
    paymentStatus.value = { label: currentBooking.value?.paymentStatus }
    bookingStatus.value = { label: currentBooking.value?.bookingStatus }
    visible.value = newValue
    if (!cars.value.length) {
      fetchCars()
      await nextTick()
    }
    if (!clients.value.length) {
      fetchClients()
      await nextTick()
    }
  }
)

watch(
  () => actualClient.value,
  newValue => {
    currentBooking.value.client = newValue
  }
)

watch(
  () => actualCar.value,
  newValue => {
    currentBooking.value.car = newValue
  }
)

watch(
  () => planFrom.value,
  newValue => {
    currentBooking.value.planFrom = newValue
  }
)

watch(
  () => planTo.value,
  newValue => {
    currentBooking.value.planTo = newValue
  }
)

watch(
  () => paymentStatus.value,
  newValue => {
    currentBooking.value.paymentStatus = newValue?.label
  }
)

watch(
  () => bookingStatus.value,
  newValue => {
    currentBooking.value.bookingStatus = newValue?.label
  }
)

const handleChange = async field => {
  await nextTick()
  validateField(field)
}

// Function to validate a single field
const validateField = async fieldName => {
  try {
    const value = { [fieldName]: currentBooking.value[fieldName] }
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
    console.log(currentBooking.value)
    errors.value = {} // Clear previous errors
    await validationSchema.validate(currentBooking.value, { abortEarly: false })
    emit('save', currentBooking.value)
    closeDialog()
  } catch (validationErrors) {
    if (validationErrors.inner) {
      validationErrors.inner.forEach(err => {
        errors.value[err.path] = err.message
      })
    }
  }
}

// Reset form function
const resetForm = () => {
  currentBooking.value = { ...initialBooking() }
  actualClient.value = null
  actualCar.value = null
  planFrom.value = null
  planTo.value = null
  paymentStatus.value = null
  bookingStatus.value = null
  errors.value = {}
}

// Close dialog
const closeDialog = () => {
  resetForm()
  emit('hide')
}
</script>
