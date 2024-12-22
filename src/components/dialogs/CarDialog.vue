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
          <label for="brand">Brand</label>
        </div>
        <div class="w-1/2">
          <Select
            id="brand"
            size="small"
            v-model="currentCar.brand"
            :options="groupedBrands"
            optionLabel="label"
            placeholder="Select a brand"
            @change="onBrandChange"
          ></Select>
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="model">Model</label>
        </div>
        <div class="w-1/2">
          <Select
            id="model"
            size="small"
            v-model="currentCar.model"
            :options="modelOptions"
            placeholder="Select a model"
            optionLabel="label"
            :disabled="!currentCar.brand"
          ></Select>
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
          <label for="type">Body type</label>
        </div>
        <div class="w-1/2">
          <Select
            size="small"
            id="type"
            checkmark
            v-model="currentCar.type"
            :options="carTypes"
            filter
            optionLabel="name"
            placeholder="Select body type"
          ></Select>
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="price">Price</label>
        </div>
        <div class="w-1/4">
          <InputGroup size="small">
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber v-model="currentCar.price" placeholder="Price" />
            <InputGroupAddon>.00</InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="status">Status</label>
        </div>
        <div class="w-1/2">
          <Select
            id="status"
            size="small"
            checkmark
            v-model="currentCar.status"
            :options="carStatuses"
            filter
            optionLabel="name"
            placeholder="Select a status"
          ></Select>
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="transmission">Transmission</label>
        </div>
        <div class="w-1/2">
          <Select
            size="small"
            id="transmission"
            checkmark
            v-model="currentCar.transmission"
            :options="transmissionTypes"
            filter
            optionLabel="name"
            placeholder="Select a transmission type"
          ></Select>
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="capacity">Capacity</label>
        </div>
        <div class="w-1/2">
          <div>
            <InputText size="small" v-model.number="currentCar.capacity" class="w-10 mb-4" />
            <div class="px-3">
              <Slider v-model="currentCar.capacity" class="w-full" :min="1" :max="8" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="fuel">Fuel</label>
        </div>
        <div class="w-1/2">
          <Select
            size="small"
            id="fuel"
            checkmark
            v-model="currentCar.fuel"
            :options="fuelTypes"
            filter
            optionLabel="name"
            placeholder="Select a fuel type"
          ></Select>
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="topSpeed">Top speed</label>
        </div>
        <div class="w-1/4">
          <InputGroup size="small">
            <InputNumber v-model.number="currentCar.topSpeed" />
            <InputGroupAddon>mph</InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="range">Range</label>
        </div>
        <div class="w-1/4">
          <InputGroup size="small">
            <InputNumber v-model.number="currentCar.range" />
            <InputGroupAddon>miles</InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="acceleration">Acceleration <small>(0 - 60 mph)</small></label>
        </div>
        <div class="w-1/4">
          <InputGroup size="small">
            <InputNumber v-model.number="currentCar.acceleration" />
            <InputGroupAddon>sec</InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div class="flex gap-1 my-5">
        <div class="flex items-start pt-3 w-1/2">
          <label for="description">Description</label>
        </div>
        <div class="w-1/2">
          <Textarea
            :invalid="!!errors?.description"
            v-model="currentCar.description"
            id="description"
            class="w-full"
          />
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
              :value="feature.name"
            />
            <label :for="feature.key">{{ feature.name }}</label>
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
import { ref, watch } from 'vue'
import MainButton from '../buttons/MainButton.vue'
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
  type: '',
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

const onBrandChange = () => {
  console.log('Brand changed')
  console.log(currentCar.value.brand)
  console.log(findModelOptions(currentCar.value.brand.label))
  currentCar.value.model = null // Reset model selection
  modelOptions.value = currentCar.value.brand ? findModelOptions(currentCar.value.brand.label) : []
}

const findModelOptions = brand => {
  return groupedBrands.find(item => item.label === brand)?.models || []
}

// Reactive object for errors
const errors = ref({})

watch(
  () => props.showDialog,
  newValue => {
    headerTitle.value = props.car?.id ? 'Edit car' : 'Add new car'
    currentCar.value = { ...props.car }
    visible.value = newValue
  }
)

// Close dialog
const closeDialog = () => {
  emit('hide')
}

const onUpload = () => {
  console.log('Uploaded')
}
</script>

<style lang="scss" scoped></style>
