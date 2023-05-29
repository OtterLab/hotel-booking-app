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
    path: "/login",
    name: "login",
    component: () => import('@/components/Login.vue')
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('@/components/Register.vue'),
  },
  {
    path: "/update_user",
    name: "UpdateUser",
    component: () => import('@/views/UpdateUser.vue'),
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
    path: "/room_list",
    name: "RoomList",
    component: () => import('@/views/RoomList.vue')
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: () => import('@/views/ReservationPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
