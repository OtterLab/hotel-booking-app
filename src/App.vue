<template>
  <v-layout>
    <v-app-bar height="50" :elevation="0" color="blue-grey-darken-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" :ripple="false">
        <v-icon icon="mdi-sort-variant" size="25"></v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon :ripple="false">
        <v-icon icon="mdi-logout" size="25"></v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item v-for="navLinkItem in navLinkItems" :key="navLinkItem.title" :to="navLinkItem.to" link
          color="blue-grey-darken-1">
          <template v-slot:prepend>
            <v-icon :icon="navLinkItem.icon"></v-icon>
          </template>
          <v-list-item-title>
            {{ navLinkItem.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      drawer: false,
      navLinkItems: [
        { title: "Home", icon: "mdi-home-outline", to: "/" },
        { title: "Reservation", icon: "mdi-book-edit-outline", to: "/reservation" },
        { title: "Booking Details", icon: "mdi-briefcase-outline", to: "/booking_details" },
        { title: "Room List", icon: "mdi-clipboard-list-outline", to: "/room_list" },
        { title: "Profile", icon: "mdi-account-outline", to: "/profile" },
      ]
    }
  },
});
</script>
