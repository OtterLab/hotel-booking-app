<template>
  <div class="home-bg">
    <div class="auth-login-content">
      <h4 class="text-white font-weight-regular">Welcome,</h4>
      <h3 class="text-white font-weight-bold">Username</h3>
    </div>

    <div class="home-icon-card-group">
      <h3 class="pl-7 pb-4 text-white font-weight-medium">Hotel Offers</h3>
      <div class="home-icon-card-content">
        <v-card class="home-icon-card-item" :elevation="2">
          <v-icon icon="mdi-ticket-percent-outline" color="blue-grey-darken-1" size="40"></v-icon>
          <span class="home-icon-card-text">Discount</span>
        </v-card>
        <v-card class="home-icon-card-item" :elevation="2">
          <v-icon icon="mdi-pool" color="blue-grey-darken-1" size="40"></v-icon>
          <span class="home-icon-card-text">Swimming Pool</span>
        </v-card>
        <v-card class="home-icon-card-item" :elevation="2">
          <v-icon icon="mdi-plane-car" color="blue-grey-darken-1" size="40"></v-icon>
          <span class="home-icon-card-text">Airport Transfer</span>
        </v-card>
      </div>
    </div>

    <div class="feature-content">
      <h3 class="pl-8 text-grey-darken-3 font-weight-medium">Feature Hotel</h3>
      <v-carousel hide-delimiter-background delimiter-icon="mdi-circle-outline" color="grey" height="360" :show-arrows="false" cycle>
        <v-carousel-item>
          <div class="hotel-card-container">
            <v-img src="@/assets/hotel_images/m-centara_hotel.png" class="hotel-img"></v-img>
            <div class="hotel-card">
              <div class="hotel-card-content">
                <h3 class="text-grey-darken-2 pb-1">M Centara Hotel</h3>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                  Malibu Street
                </div>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                  4 star
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="hotel-card-container">
            <v-img src="@/assets/hotel_images/hotel_resort_villa.png" class="hotel-img"></v-img>
            <div class="hotel-card">
              <div class="hotel-card-content">
                <h3 class="text-grey-darken-2 pb-1">Sea Breeze Villa</h3>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                  Jao Bondi
                </div>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                  4 star
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="hotel-card-container">
            <v-img src="@/assets/hotel_images/hotel_resort.png" class="hotel-img"></v-img>
            <div class="hotel-card">
              <div class="hotel-card-content">
                <h3 class="text-grey-darken-2 pb-1">Sunset Samui Hotel</h3>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                  Koh Samui Bay
                </div>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                  5 star
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="hotel-card-container">
            <v-img src="@/assets/hotel_images/the_outdoor_resort.png" class="hotel-img"></v-img>
            <div class="hotel-card">
              <div class="hotel-card-content">
                <h3 class="text-grey-darken-2 pb-1">Meila Hotel & Resort</h3>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                  Paradise Bay Blvd
                </div>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                  5 star
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="hotel-card-container">
            <v-img src="@/assets/hotel_images/the_outdoor_villa_view.png" class="hotel-img"></v-img>
            <div class="hotel-card">
              <div class="hotel-card-content">
                <h3 class="text-grey-darken-2 pb-1">JW Sheraton Hotel</h3>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                  An Lam Vuong Street
                </div>
                <div class="text-body-2 pt-1 text-grey-darken-2 font-weight-medium">
                  <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                  4 star
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<style scoped>
.home-bg {
  background-image: linear-gradient(#37474F, #78909C, #FFFFFF);
  height: 60vh;
}

.auth-login-content {
  text-align: center;
  position: relative;
  top: 2em;
}

.feature-content {
  height: 220vh;
  position: relative;
  top: 6em;
}

/** Hotel Card  */
.hotel-card-container {
  position: relative;
  top: 4.4em;
}

.hotel-card {
  width: 330px;
  height: 240px;
  margin: 0 auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 18px 20px rgba(0, 0, 0, 0.15);
}

.hotel-img {
  width: 250px;
  position: absolute;
  left: 50%;
  top: -45px;
  transform: translateX(-50%);
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.30);
}

.hotel-card-content {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

/** home icon card */
.home-icon-card-group {
  position: relative;
  top: 4em;
}

.home-icon-card-content {
  text-align: center;
  display: flex;
  margin-left: 18px;
  margin-right: 18px;
}

.home-icon-card-item {
  width: 100px;
  height: 90px;
  border-radius: 12px;
  margin: 0 auto;
  padding-top: .9em;
}

.home-icon-card-item .home-icon-card-text {
  display: block;
}

.home-icon-card-text {
  font-size: 12px;
  color: #455A64;
  padding-left: 8px;
  padding-right: 8px;
}
</style>

<script>
import { defineComponent } from 'vue';

// import images from local
import Img1 from "@/assets/hotel_images/m-centara_hotel.png"
import Img2 from "@/assets/hotel_images/hotel_resort_villa.png"
import Img3 from "@/assets/hotel_images/hotel_resort.png"
import Img4 from "@/assets/hotel_images/the_outdoor_resort.png"
import Img5 from "@/assets/hotel_images/the_outdoor_villa_view.png"

export default defineComponent({
  name: "Home",
  data() {
    return {
    }
  },
})
</script>