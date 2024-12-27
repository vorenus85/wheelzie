import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView
    },
    {
      path: '/bookings',
      name: 'bookings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/BookingsView.vue')
    },
    {
      path: '/units',
      name: 'units',
      component: () => import('@/views/UnitsView.vue')
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('@/views/ClientsView.vue')
    },
    {
      path: '/unit/:id',
      name: 'unit',
      component: () => import('@/views/UnitView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
