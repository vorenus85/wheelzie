import { computed, reactive } from 'vue';

const layoutConfig = reactive({
  sidebarIsOpen: true
})

export const useLayout = ()=>{
  const toggleSidebar = () => {
    layoutConfig.sidebarIsOpen = !layoutConfig.sidebarIsOpen
  }

  const closeSidebar =()=>{
    layoutConfig.sidebarIsOpen = false
  }

  const sidebarIsOpen = computed(()=>{
    if (window.innerWidth < 991) {
      layoutConfig.sidebarIsOpen = false
    }
    return layoutConfig.sidebarIsOpen
  })

  return {
    toggleSidebar,
    closeSidebar,
    sidebarIsOpen
  }
}
