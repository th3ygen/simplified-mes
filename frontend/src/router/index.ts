import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import TrackView from '@/views/TrackView.vue'
import QualityControlView from '@/views/QualityControlView.vue'

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
      path: '/track',
      name: 'Track',
      component: TrackView,
    },
    {
      path: '/quality',
      name: 'Quality Control',
      component: QualityControlView,
    },
  ],
})

export default router
