<template>
  <div class="page page-unit">
    <UnitPageHeader title="Unit Details" />
  </div>
  <div class="page-content grid grid-cols-12 gap-4">
    <div class="page-unit-left col-span-12 lg:col-span-6 xl:col-span-7">
      <div class="module">
        <div class="unit-image flex justify-center mb-5">
          <Skeleton v-if="loading" width="100%" class="mb-2" height="250px"></Skeleton>
          <CarImage
            :image="actualCar.image"
            :width="600"
            :height="300"
            :brand="actualCar.brand"
            :model="actualCar.model"
            v-else
          ></CarImage>
        </div>
        <div class="unit-data flex justify-between py-5">
          <div class="unit-data-left">
            <template v-if="loading">
              <Skeleton width="4rem" height="1.5rem" class="mb-3"></Skeleton>
              <Skeleton width="8rem" height="2rem" class="mb-3"></Skeleton>
              <Skeleton width="6rem" height="1.5rem" class="mb-3"></Skeleton>
              <Skeleton width="4rem" height="1.5rem" class="mb-3"></Skeleton>
            </template>
            <template v-else>
              <CarBodyType :bodyType="actualCar.bodyType" class="mb-2" />
              <div class="mb-2">
                <CarBrand :brand="actualCar.brand" /> <CarModel :model="actualCar.model" />
              </div>
              <CarStatus :status="actualCar.status" class="mb-2" />
              <CarId :id="actualCar.id" class="mb-2" />
            </template>
          </div>
          <div class="unit-data-right flex flex-col items-end">
            <template v-if="loading">
              <div class="flex gap-4">
                <Skeleton width="7.5rem" height="2.5rem" class="mb-3"></Skeleton>
                <Skeleton width="2.5rem" height="2.5rem" class="mb-3"></Skeleton>
              </div>
              <Skeleton width="6rem" height="2rem" class="mb-3"></Skeleton>
              <Skeleton width="3rem" height="1rem" class="mb-3"></Skeleton>
            </template>
            <template v-else>
              <div class="flex gap-4 mb-5">
                <MainButton label="Edit" outlined id="edit-car">
                  <template #icon>
                    <IconEdit></IconEdit>
                  </template>
                </MainButton>

                <MainButton outlined id="delete-car">
                  <template #icon>
                    <IconDelete />
                  </template>
                </MainButton>
              </div>
              <CarPrice :price="actualCar.price" />
            </template>
          </div>
        </div>
        <div class="unit-description">
          <h4 class="module-head-title mb-4">About</h4>
          <template v-if="loading">
            <Skeleton width="100%" class="mb-3" height="1rem"></Skeleton>
            <Skeleton width="100%" class="mb-3" height="1rem"></Skeleton>
            <Skeleton width="100%" height="1rem"></Skeleton>
          </template>
          <template v-else>
            <p>{{ actualCar.description }}</p>
          </template>
        </div>
      </div>
    </div>
    <div class="page-unit-right col-span-12 lg:col-span-6 xl:col-span-5">
      <div class="module">
        <div class="unit-features mb-4">
          <h3 class="module-head-title mb-4">Car features</h3>
          <div class="grid grid-cols-2 gap-4">
            <template v-if="loading">
              <Skeleton
                class="col-span-2 md:col-span-1"
                height="1.5rem"
                :key="n"
                v-for="n in 12"
              ></Skeleton>
            </template>
            <FeatureItem
              v-else
              :title="feature"
              class="col-span-2 md:col-span-1"
              v-for="feature in actualCar?.features"
              :key="feature"
            ></FeatureItem>
          </div>
        </div>
        <div class="unit-specification pt-4">
          <h4 class="module-head-title mb-4">Specification</h4>
          <div class="grid grid-cols-2 gap-4">
            <template v-if="loading">
              <Skeleton
                class="col-span-2 md:col-span-1"
                height="2rem"
                :key="n"
                v-for="n in 6"
              ></Skeleton>
            </template>
            <template v-else>
              <div class="car-snapshot__info-container col-span-2 md:col-span-1">
                <CarAttribute
                  title="Transmission"
                  icon="Transmission"
                  :data="actualCar.transmission"
                  showLabel
                />
              </div>
              <div class="car-snapshot__info-container col-span-2 md:col-span-1">
                <CarAttribute
                  title="Capacity"
                  icon="Capacity"
                  showLabel
                  :data="`${actualCar.capacity} seats`"
                />
              </div>
              <div class="car-snapshot__info-container col-span-2 md:col-span-1">
                <CarAttribute
                  title="Range"
                  icon="Range"
                  :data="`${actualCar.range} miles on a full tank`"
                  showLabel
                />
              </div>
              <div class="car-snapshot__info-container col-span-2 md:col-span-1">
                <CarAttribute title="Fuel" icon="Fuel" :data="actualCar.fuel" showLabel />
              </div>
              <div class="car-snapshot__info-container col-span-2 md:col-span-1">
                <CarAttribute
                  title="Top Speed"
                  icon="TopSpeed"
                  :data="`${actualCar.topSpeed} mph`"
                  showLabel
                />
              </div>
              <div class="car-snapshot__info-container col-span-2 md:col-span-1">
                <CarAttribute
                  title="Acceleration"
                  icon="Acceleration"
                  :data="`${actualCar.acceleration} seconds (0-60 mph)`"
                  showLabel
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/car_snapshot.scss'
import MainButton from '@/components/buttons/MainButton.vue'
import CarAttribute from '@/components/carSnapshot/CarAttribute.vue'
import CarBodyType from '@/components/carSnapshot/CarBodyType.vue'
import CarBrand from '@/components/carSnapshot/CarBrand.vue'
import CarId from '@/components/carSnapshot/CarId.vue'
import CarImage from '@/components/carSnapshot/CarImage.vue'
import CarModel from '@/components/carSnapshot/CarModel.vue'
import CarPrice from '@/components/carSnapshot/CarPrice.vue'
import CarStatus from '@/components/carSnapshot/CarStatus.vue'
import IconDelete from '@/components/icons/common/iconDelete.vue'
import IconEdit from '@/components/icons/common/iconEdit.vue'
import FeatureItem from '@/components/unitPage/FeatureItem.vue'
import UnitPageHeader from '@/components/unitPage/UnitPageHeader.vue'
import { carsApi } from '@/service/cars'
import { Skeleton } from 'primevue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const actualCar = ref()
const loading = ref(true)

const fetchUnit = async () => {
  const carId = route.params.id

  try {
    const response = await carsApi.getCar(carId)
    if (!response.ok) {
      throw new Error('Failed to load data')
    }

    actualCar.value = response.data
  } catch (error) {
    error.value = error.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUnit()
})
</script>

<style lang="scss">
#edit-car {
  font-size: 12px;
}

.unit-description {
  font-size: 12px;
  line-height: 150%; /* 18px */
}

.unit-data {
  .car-snapshot__brand,
  .car-snapshot__model {
    font-size: 2rem;
    font-weight: 600;
  }
}

.car-snapshot__info-label-title {
  font-size: 9px;
}

.car-snapshot__info-with-icon {
  gap: 14px;
}

.car-snapshot__info-icon {
  padding: 10px;

  svg {
    width: 18px !important;
    height: 18px !important;
  }
}

.car-snapshot__info-label-value {
  font-size: 11px;
}
</style>
