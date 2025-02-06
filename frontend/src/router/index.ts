import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import ProductionView from '@/views/ProductionView.vue'
import QualityView from '@/views/QualityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/production',
      name: 'Production',
      component: ProductionView,
    },
    {
      path: '/quality',
      name: 'Quality',
      component: QualityView,
    },
  ],
})

export default router
