<template>
  <Button
    as="router-link"
    :label="menuMode ? title : ''"
    :to="to"
    severity="secondary"
    class="w-full justify-content-start nav-button"
    :title="title"
  >
    <template #icon>
      <component
        v-if="iconComponent"
        class="sidebar-icon"
        :is="iconComponent"
      ></component>
    </template>
  </Button>
</template>

<script setup>
import { defineAsyncComponent, computed } from 'vue'
import Button from 'primevue/button'
import { useLayout } from '@/composables/useLayout'
import { ref } from 'vue';
const layout = useLayout()
const menuMode = ref(layout.sidebarIsOpen)

const props = defineProps({
  title: String,
  to: String,
  icon: String, // This is the name of the icon component to load dynamically
})

// Dynamically import the icon component based on the `icon` prop value
const iconComponent = computed(() => {
  return props.icon
    ? defineAsyncComponent(
        () => import(`@/components/icons/nav/${props.icon}.vue`),
      )
    : null
})
</script>
<style scoped lang="scss">
.nav-button {
  --p-button-icon-only-width: 40px;
  --p-button-secondary-background: var(--white);
  --p-button-secondary-border-color: var(--white);
  --p-button-secondary-color: var(--gray-20);
  --p-button-secondary-hover-background: var(--blue-subtle-10);
  --p-button-secondary-hover-border-color: var(--blue-subtle-10);
  --p-button-secondary-hover-color: var(--blue-dark);
  --p-button-secondary-active-background: var(--blue-subtle-00);
  --p-button-secondary-active-border-color: var(--blue-subtle-00);
  --p-button-secondary-active-color: var(--blue-dark);
  &.p-button-icon-only{
    padding: 8px;
    width: 40px;
  }
}

.router-link-active.nav-button {
  --p-button-secondary-background: var(--blue-subtle-10);
  --p-button-secondary-border-color: var(--blue-subtle-10);
  --p-button-secondary-color: var(--blue-dark);
}

.nav-button:hover .sidebar-icon,
.nav-button:focus .sidebar-icon,
.router-link-active.nav-button .sidebar-icon {
  color: var(--red);
}
</style>
