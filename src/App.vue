<template>
  <v-layout>
    <!-- <v-app-bar app height="50" :elevation="0"></v-app-bar> -->
    <v-bottom-navigation v-model="value" :elevation="0"
      active color="blue-grey-darken-1" grow>
      <v-btn to="/" v-ripple="false">
        <v-icon>mdi-home-outline</v-icon>
        Home
      </v-btn>

      <v-btn to="/booking_details" v-ripple="false">
        <v-icon>mdi-briefcase-outline</v-icon>
        Booking
      </v-btn>

      <v-btn to="/profile" v-ripple="false">
        <v-icon>mdi-account-outline</v-icon>
        Profile
      </v-btn>

      <v-btn to="/more" v-ripple="false">
        <v-icon>mdi-dots-horizontal</v-icon>
        More
      </v-btn>
    </v-bottom-navigation>

    <v-main style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
    background: transparent;
}
</style>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      value: 0,
    }
  }
})
</script>
