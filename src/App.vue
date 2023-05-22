<template>
  <v-layout>
    <v-app-bar app height="50" :elevation="0">
      <v-toolbar color="blue-grey-darken-3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" :ripple="false">
          <v-icon icon="mdi-sort-variant" size="25"></v-icon>
        </v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn icon :ripple="false">
          <v-icon icon="mdi-magnify" size="25"></v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item v-for="item in navLinkItems" :key="item.title" :to="item.to" link
          color="blue-grey-darken-1">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>
            {{ item.title }}
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
        { title: "Booking", icon: "mdi-briefcase-outline", to: "/booking_details" },
        { title: "Profile", icon: "mdi-account-outline", to: "/profile" },
        { title: "More", icon: "mdi-dots-horizontal", to: "/more" },
      ]
    }
  },
});
</script>
