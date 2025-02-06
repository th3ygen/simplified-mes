import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import TrackView from '@/views/TrackView.vue'
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
      path: '/track',
      name: 'Track',
      component: TrackView,
    },
    {
      path: '/quality',
      name: 'Quality',
      component: QualityView,
    },
  ],
})

export default router
