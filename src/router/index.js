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

  // booking admin routes
  {
    path: "/admin/booking",
    name: "Booking",
    component: () => import('@/components/admin/BookingManager/BookingIndex.vue')
  },
  {
    path: "/admin/booking/edit", // change back to :id
    name: "BookingEdit",
    component: () => import('@/components/admin/BookingManager/CreateBooking.vue')
  },

  // customer admin routes
  {
    path: "/admin/customers",
    name: "Customers",
    component: () => import('@/components/admin/CustomerManager/CustomerIndex.vue')
  },
  {
    path: "/admin/customers/create",
    name: "CustomerCreate",
    component: () => import('@/components/admin/CustomerManager/CreateCustomer.vue')
  },
  {
    path: "/admin/customer/edit", // change back to :id
    name: "CustomerEdit",
    component: () => import('@/components/admin/CustomerManager/CreateCustomer.vue')
  },

  // room types admin routes
  {
    path: "/admin/room_types",
    name: "RoomTypes",
    component: () => import('@/components/admin/RoomTypeManager/RoomTypeIndex.vue')
  },

  // room capacities admin routes
  {
    path: "/admin/room_capacities",
    name: "RoomCapacities",
    component: () => import('@/components/admin/RoomCapacityManager/RoomCapacityIndex.vue')
  },

  // room admin routes
  {
    path: "/admin/rooms",
    name: "Rooms",
    component: () => import('@/components/admin/RoomManager/RoomIndex.vue')
  },
  {
    path: "/admin/rooms/create",
    name: "RoomCreate",
    component: () => import('@/components/admin/RoomManager/CreateRoom.vue')
  },
  {
    path: "/admin/rooms/edit", // change back to :id
    name: "RoomEdit",
    component: () => import('@/components/admin/RoomManager/CreateRoom.vue')
  },

  // prices admin routes
  {
    path: "/admin/price",
    name: "Price",
    component: () => import('@/components/admin/PriceManager/PriceIndex.vue')
  },
  {
    path: "/admin/prices/create",
    name: "PriceCreate",
    component: () => import('@/components/admin/PriceManager/CreatePrice.vue')
  },
  {
    path: "/admin/prices/edit", // change back to :id
    name: "PriceEdit",
    component: () => import('@/components/admin/PriceManager/CreatePrice.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
