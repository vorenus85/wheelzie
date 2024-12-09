<script setup lang="ts">
import Badge from 'primevue/badge'
import { computed } from 'vue'
import IconTransmission from './icons/special/iconTransmission.vue'
import IconCapacity from './icons/special/iconCapacity.vue'
import IconFuel from './icons/special/iconFuel.vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import { ref } from 'vue'
const props = defineProps({
  id: String,
  brand: String,
  model: String,
  type: String,
  price: Number,
  image: String,
  status: String,
  transmission: String,
  capacity: Number,
  fuel: String
})

const statusSeverity = computed(() => {
  let statusSeverity = ''
  if (props.status === 'unavailable') {
    statusSeverity = 'secondary'
  }

  if (props.status === 'available') {
    statusSeverity = 'contrast'
  }

  if (props.status === 'maintenance') {
    statusSeverity = 'danger'
  }

  return statusSeverity
})

const menu = ref()
const items = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Export',
        icon: 'pi pi-upload'
      }
    ]
  }
])

const toggle = event => {
  menu.value.toggle(event)
}

function getImageUrl(image) {
  const localhost = new URL(import.meta.url)
  const appUrl = localhost.origin
  const imageUrl = new URL(`${import.meta.env.VITE_BASE_URL}/images/cars/${image}`, appUrl)

  return imageUrl.href
}
</script>

<template>
  <div class="card-unit card-unit-vertical">
    <div class="unit-main-info-container">
      <div class="unit-car-infos">
        <div class="unit-car-brand-model">
          <span class="unit-car-brand unit-car-main-info pr-1">{{ brand }}</span>
          <span class="unit-car-model unit-car-main-info">{{ model }}</span>
        </div>
        <div class="unit-car-type unit-car-sub-info">{{ type }}</div>
      </div>
      <div class="unit-car-details">
        <div class="unit-car-daily-price unit-car-main-info">${{ price }}</div>
        <div class="unit-car-daily-text unit-car-sub-info">/days</div>
      </div>
    </div>
    <div class="unit-car-image w-full">
      <img
        :src="getImageUrl(image)"
        :alt="brand + ' ' + model"
        :title="brand + ' ' + model"
        width="300"
        height="150"
        class="w-full h-auto"
      />
    </div>
    <div class="unit-car-status">
      <Badge
        :severity="statusSeverity"
        class="unit-car-status-badge"
        :class="`unit-car-status-badge-${status}`"
        >{{ status }}</Badge
      >
      <div class="unit-car-id">
        <strong>{{ id }}</strong>
      </div>
    </div>
    <div class="unit-car-details-info">
      <div class="car-info-transmission car-info-detail">
        <span class="icon">
          <IconTransmission />
        </span>
        <span class="label">{{ transmission }}</span>
      </div>
      <div class="car-info-capacity car-info-detail">
        <span class="icon">
          <IconCapacity />
        </span>
        <span class="label">{{ capacity }} seats</span>
      </div>
      <div class="car-info-fuel-type car-info-detail">
        <span class="icon">
          <IconFuel />
        </span>
        <span class="label">{{ fuel }}</span>
      </div>
    </div>
    <div class="unit-car-actions">
      <div class="action-cta"></div>
      <div class="more-action">
        <Button
          type="button"
          icon="pi pi-ellipsis-v"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-unit {
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  max-width: 33.333%;
  border-radius: 8px;
  background: var(--white);
}

.unit-car-status,
.unit-main-info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.unit-car-details-info {
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
}

.unit-car-daily-price {
  font-size: 12px;
  line-height: 120%; /* 14.4px */
}

.unit-car-daily-text {
  font-size: 11px;
  line-height: 112%; /* 12.32px */
}

.unit-car-image {
  display: flex;
  padding: 12px 25px 13px 25px;
  justify-content: center;
  align-items: center;
}

.unit-main-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.unit-car-main-info {
  font-size: 20px;
  font-weight: 500;
  line-height: 108%; /* 21.6px */
}

.unit-car-sub-info {
  color: var(--gray-20);
}

.unit-car-daily-price {
  font-weight: 600;
}

.unit-car-status-badge {
  height: 20px;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
}

.unit-car-status-badge-available {
  --p-badge-contrast-background: var(--blue-dark);
  --p-badge-color-background: var(--blue-subtle-10);
}

.unit-car-status-badge-unavailable {
  --p-badge-secondary-background: var(--gray-line);
  --p-badge-secondary-color: var(--gray-30);
}

.unit-car-status-badge-maintenance {
  --p-badge-danger-background: var(--red-20);
  --p-badge-danger-color: var(--black);
}

.car-info-detail {
  display: flex;
  align-items: center;
  gap: 8px;

  .icon {
    border-radius: 4px;
    background: var(--blue-subtle-10);
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 10px;
  }

  .label {
    font-size: 14px;
    text-transform: capitalize;
  }
}
</style>
