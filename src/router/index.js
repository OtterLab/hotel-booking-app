// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/booking_details",
    name: "BookingDetails",
    component: () => import('@/views/BookingDetails.vue')
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import('@/views/Profile.vue')
  },
  {
    path: "/more",
    name: "More",
    component: () => import('@/views/More.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
