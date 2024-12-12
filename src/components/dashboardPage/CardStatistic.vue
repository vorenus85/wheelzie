<template>
  <Card class="card-statistic col-span-12 lg:col-span-6 xl:col-span-6">
    <template #content>
      <div class="card-statistic-body flex">
        <div class="card-statistic-icon">
          <component v-if="iconComponent" :is="iconComponent"></component>
        </div>
        <div class="card-statistic-caption">
          <div class="card-statistic-label">{{ label }}</div>
          <div class="card-statistic-unit">{{ unit }}</div>
        </div>
        <div class="card-statistic-interval">
          <div class="card-statistic-change">
            <Badge :class="trend" :severity="changeSeverity"
              ><div class="card-statistic-change-icon">
                <IconArrowUp></IconArrowUp>
              </div>
              <span>{{ changePercentage }}</span></Badge
            >
          </div>
          <div class="card-statistic-interval-text">{{ interval }}</div>
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup>
import Badge from 'primevue/badge'
import Card from 'primevue/card'
import { computed, defineAsyncComponent } from 'vue'
import IconArrowUp from '../icons/iconArrowUp.vue'

const props = defineProps({
  label: String,
  unit: String,
  change: Number,
  icon: String // This is the name of the icon component to load dynamically
})

const interval = 'from last week'

const trend = computed(() => {
  return props.change >= 0 ? 'increase' : 'decrease'
})

const changePercentage = computed(() => {
  return props.change >= 0 ? `+${props.change}%` : `${props.change}%`
})

const changeSeverity = computed(() => {
  return props.change >= 0 ? 'success' : 'danger'
})

const iconComponent = computed(() => {
  return props.icon
    ? defineAsyncComponent(() => import(`@/components/icons/special/${props.icon}.vue`))
    : null
})
</script>
<style scoped lang="scss">
.card-statistic {
  --p-card-body-padding: 12px;
  --p-card-shadow: none;
}

.card-statistic-body {
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
}

.card-statistic-icon {
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background: var(--blue-subtle-10);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-statistic-caption {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  flex: 1 0 0;
}

.card-statistic-interval {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.card-statistic-label {
  font-size: 10px;
  color: var(--gray-20);
  font-weight: 400;
  line-height: 120%;
}

.card-statistic-unit {
  font-size: 20px;
  font-weight: 500;
  line-height: 108%; /* 21.6px */
}

.card-statistic-interval-text {
  font-size: 10px;
  color: var(--gray-20);
}

.p-badge {
  --p-badge-danger-background: var(--red-10);
  --p-badge-success-background: var(--blue-light);
  color: var(--blue-dark);
  font-size: 10px;
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  line-height: 120%;
  height: 16px;
}

.card-statistic-change-icon {
  width: 10px;
  height: 10px;
}

.decrease .card-statistic-change-icon {
  transform: rotate(180deg);
}
</style>
