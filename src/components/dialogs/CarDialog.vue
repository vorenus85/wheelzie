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
          <label for="brand">Brand <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            :invalid="!!errors?.brand"
            id="brand"
            size="small"
            v-model="brand"
            :options="onlyBrands"
            optionLabel="label"
            placeholder="Select a brand"
            @change="handleBrandChange('brand')"
          ></Select>
          <ErrorMessage :message="errors?.brand" />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="model">Model <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            id="model"
            size="small"
            v-model="model"
            :options="modelOptions"
            placeholder="Select a model"
            optionLabel="label"
            :invalid="!!errors?.model"
            :disabled="!brand?.label"
            @change="handleChange('model')"
          ></Select>
          <ErrorMessage :message="errors?.model" />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="image">Image</label>
        </div>
        <div class="w-1/2 flex items-center justify-start">
          <FileUpload
            mode="basic"
            severity="secondary"
            name="image[]"
            url="/api/upload"
            accept="image/*"
            :maxFileSize="1000000"
            @upload="onUpload"
            :auto="true"
            chooseLabel="Browse"
          />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="bodyType">Body type <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            size="small"
            id="bodyType"
            checkmark
            v-model="bodyType"
            :options="carTypes"
            filter
            optionLabel="label"
            placeholder="Select body type"
            :invalid="!!errors?.bodyType"
            @change="handleChange('bodyType')"
          ></Select>
          <ErrorMessage :message="errors?.bodyType" />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="price">Price <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/4">
          <div class="w-full">
            <InputGroup size="small">
              <InputGroupAddon>$</InputGroupAddon>
              <InputNumber
                :invalid="!!errors?.price"
                @input="validateField('price')"
                v-model="currentCar.price"
                placeholder="Price"
              />
              <InputGroupAddon>.00</InputGroupAddon>
            </InputGroup>
          </div>
          <ErrorMessage :message="errors?.price" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="status">Status <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            id="status"
            size="small"
            checkmark
            v-model="status"
            :options="carStatuses"
            filter
            optionLabel="label"
            placeholder="Select a status"
            :invalid="!!errors?.status"
            @change="handleChange('status')"
          ></Select>
          <ErrorMessage :message="errors?.status" />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="transmission">Transmission <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            size="small"
            id="transmission"
            checkmark
            v-model="transmission"
            :options="transmissionTypes"
            filter
            optionLabel="label"
            placeholder="Select a transmission type"
            :invalid="!!errors?.transmission"
            @change="handleChange('transmission')"
          ></Select>
          <ErrorMessage :message="errors?.transmission" />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="capacity">Capacity <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <div>
            <InputText
              :invalid="!!errors?.capacity"
              size="small"
              @input="validateField('capacity')"
              v-model.number="currentCar.capacity"
              class="w-10 mb-4"
            />
            <div class="px-3">
              <Slider v-model="currentCar.capacity" class="w-full" :min="1" :max="8" />
            </div>
          </div>
          <ErrorMessage :message="errors?.capacity" />
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="fuel">Fuel <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Select
            size="small"
            id="fuel"
            checkmark
            v-model="fuel"
            :options="fuelTypes"
            filter
            optionLabel="label"
            placeholder="Select a fuel type"
            :invalid="!!errors?.fuel"
            @change="handleChange('fuel')"
          ></Select>
          <ErrorMessage :message="errors?.fuel" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="topSpeed">Top speed <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/4">
          <div class="w-full">
            <InputGroup size="small">
              <InputNumber
                @input="validateField('topSpeed')"
                :invalid="!!errors?.topSpeed"
                v-model.number="currentCar.topSpeed"
              />
              <InputGroupAddon>mph</InputGroupAddon>
            </InputGroup>
          </div>
          <ErrorMessage :message="errors?.topSpeed" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="range">Range <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/4">
          <div class="w-full">
            <InputGroup size="small">
              <InputNumber
                @input="validateField('range')"
                :invalid="!!errors?.range"
                v-model.number="currentCar.range"
              />
              <InputGroupAddon>miles</InputGroupAddon>
            </InputGroup>
          </div>
          <ErrorMessage :message="errors?.range" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="acceleration"
            >Acceleration <small>(0 - 60 mph)</small> <sup class="text-red-600">*</sup></label
          >
        </div>
        <div class="w-1/4">
          <div class="w-full">
            <InputGroup size="small">
              <InputNumber
                @input="validateField('acceleration')"
                :invalid="!!errors?.acceleration"
                v-model.number="currentCar.acceleration"
              />
              <InputGroupAddon>sec</InputGroupAddon>
            </InputGroup>
          </div>
          <ErrorMessage :message="errors?.acceleration" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="description">Description <sup class="text-red-600">*</sup></label>
        </div>
        <div class="w-1/2">
          <Textarea
            @input="validateField('description')"
            :invalid="!!errors?.description"
            v-model="currentCar.description"
            id="description"
            class="w-full"
          />
          <ErrorMessage :message="errors?.description" />
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="features">Features</label>
        </div>
        <div class="w-1/2">
          <div
            v-for="feature of carFeatures"
            :key="feature.key"
            class="flex items-center gap-2 mb-2"
          >
            <Checkbox
              v-model="currentCar.features"
              :inputId="feature.key"
              name="feature"
              :value="feature.label"
            />
            <label :for="feature.key">{{ feature.label }}</label>
          </div>
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
import {
  carFeatures,
  carStatuses,
  carTypes,
  fuelTypes,
  groupedBrands,
  onlyBrands,
  transmissionTypes
} from '@/service/cars'
import {
  Checkbox,
  Dialog,
  FileUpload,
  InputNumber,
  InputText,
  Select,
  Slider,
  Textarea
} from 'primevue'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import { nextTick, ref, watch } from 'vue'
import * as Yup from 'yup'
import MainButton from '../buttons/MainButton.vue'
import ErrorMessage from '../common/ErrorMessage.vue'
const emit = defineEmits(['save', 'hide'])
const visible = ref(false)
const props = defineProps({
  car: { type: Object, default: () => ({}) },
  showDialog: Boolean
})
const headerTitle = ref('Add new car')
const initialCar = {
  brand: '',
  model: '',
  bodyType: '',
  price: '',
  image: '',
  status: '',
  transmission: '',
  capacity: 1,
  fuel: '',
  topSpeed: '',
  range: '',
  acceleration: '',
  description: '',
  features: []
}
const currentCar = ref({ ...initialCar })
const modelOptions = ref([])

const errorMessages = {
  brand: 'Brand is required',
  model: 'Model is required',
  bodyType: 'Body type is required',
  price: 'Price is required',
  status: 'Status is required',
  transmission: 'Transmission is required',
  capacity: 'Capacity is required',
  fuel: 'Fuel is required',
  topSpeed: 'Top speed is required',
  range: 'Range is required',
  acceleration: 'Acceleration is required',
  description: 'Description is required'
}

// Reactive object for errors
const errors = ref({})

// Validation schema using Yup
const validationSchema = Yup.object({
  brand: Yup.string().required(errorMessages.brand),
  model: Yup.string().required(errorMessages.model),
  bodyType: Yup.string().required(errorMessages.bodyType),
  price: Yup.string().required(errorMessages.price),
  status: Yup.string().required(errorMessages.status),
  transmission: Yup.string().required(errorMessages.transmission),
  capacity: Yup.string().required(errorMessages.capacity),
  fuel: Yup.string().required(errorMessages.fuel),
  topSpeed: Yup.string().required(errorMessages.topSpeed),
  range: Yup.string().required(errorMessages.range),
  acceleration: Yup.string().required(errorMessages.acceleration),
  description: Yup.string().required(errorMessages.description)
})

const brand = ref({ label: '' })
const model = ref({ label: '' })
const bodyType = ref({ label: '' })
const status = ref({ label: '' })
const transmission = ref({ label: '' })
const fuel = ref({ label: '' })

// Function to validate a single field
const validateField = async fieldName => {
  try {
    const value = { [fieldName]: currentCar.value[fieldName] }
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
    await validationSchema.validate(currentCar.value, { abortEarly: false })
    emit('save', currentCar.value)
    closeDialog()
  } catch (validationErrors) {
    if (validationErrors.inner) {
      validationErrors.inner.forEach(err => {
        errors.value[err.path] = err.message
      })
    }
  }
}

const onBrandChange = () => {
  model.value = null // Reset model selection
  modelOptions.value = brand.value ? findModelOptions(brand.value.label) : []
}

const handleChange = async field => {
  await nextTick() // Wait for Vue to update the reactive value
  validateField(field)
}

const handleBrandChange = async field => {
  await nextTick() // Wait for Vue to update the reactive value
  validateField(field)
  onBrandChange()
}

const findModelOptions = brand => {
  return groupedBrands.find(item => item.label === brand)?.models || []
}

watch(
  () => props.showDialog,
  newValue => {
    headerTitle.value = props.car?.id ? 'Edit car' : 'Add new car'
    currentCar.value = { ...props.car }
    brand.value = { label: props.car?.brand }
    bodyType.value = { label: props.car?.bodyType }
    status.value = { label: props.car?.status }
    transmission.value = { label: props.car?.transmission }
    fuel.value = { label: props.car?.fuel }
    onBrandChange()
    model.value = { label: props.car?.model }
    visible.value = newValue
  }
)

watch(
  () => brand.value,
  newValue => {
    currentCar.value.brand = newValue?.label
  }
)

watch(
  () => model.value,
  newValue => {
    currentCar.value.model = newValue?.label
  }
)

watch(
  () => bodyType.value,
  newValue => {
    currentCar.value.bodyType = newValue?.label
  }
)

watch(
  () => status.value,
  newValue => {
    currentCar.value.status = newValue?.label
  }
)

watch(
  () => transmission.value,
  newValue => {
    currentCar.value.transmission = newValue?.label
  }
)

watch(
  () => fuel.value,
  newValue => {
    currentCar.value.fuel = newValue?.label
  }
)

// Reset form function
const resetForm = () => {
  currentCar.value = { ...initialCar }
  errors.value = {}
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
