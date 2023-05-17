<template>
  <div class="home-bg">
    <div class="auth-login-content">
      <h4 class="text-white font-weight-regular">Welcome,</h4>
      <h3 class="text-white font-weight-bold">Username</h3>
    </div>

    <div class="home-icon-card-group">
      <h3 class="pl-7 pb-3 text-white font-weight-medium">Hotel Offers</h3>
      
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
      <v-carousel height="280" hide-delimiters :show-arrows="false" class="pt-3" cycle>
        <v-carousel-item>
          <v-card class="hotel-card mx-auto" width="340" :elevation="5">
            <v-img class="align-end text-grey-lighten-4" src="@/assets/hotel_images/m-centara_hotel.png"
              height="180" cover>
              <div class="hotel-card-bg">
                <v-card-title class="text-white">M Centara Hotel</v-card-title>
              </div>
            </v-img>
            <v-card-text class="pt-3">
              <div class="text-grey-darken-2">
                <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                Malibu Street
              </div>
              <div class="text-grey-darken-2 pt-1">
                <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                4 star
              </div>
            </v-card-text>
          </v-card>
        </v-carousel-item>

        <v-carousel-item>
          <v-card class="hotel-card mx-auto" width="340" :elevation="5">
            <v-img class="align-end text-grey-lighten-4" src="@/assets/hotel_images/hotel_resort_villa.png"
              height="180" cover>
              <div class="hotel-card-bg">
                <v-card-title class="text-white">Sea Breeze Villa</v-card-title>
              </div>
            </v-img>
            <v-card-text class="pt-3">
              <div class="text-grey-darken-2">
                <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                Jao Bondi
              </div>
              <div class="text-grey-darken-2 pt-1">
                <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                4 star
              </div>
            </v-card-text>
          </v-card>
        </v-carousel-item>

        <v-carousel-item>
          <v-card class="hotel-card mx-auto" width="340" :elevation="5">
            <v-img class="align-end text-grey-lighten-4" src="@/assets/hotel_images/hotel_resort.png"
              height="180" cover>
              <div class="hotel-card-bg">
                <v-card-title class="text-white">Sunset Samui Hotel</v-card-title>
              </div>
            </v-img>
            <v-card-text class="pt-3">
              <div class="text-grey-darken-2">
                <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                Koh Samui Bay
              </div>
              <div class="text-grey-darken-2 pt-1">
                <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                5 star
              </div>
            </v-card-text>
          </v-card>
        </v-carousel-item>

        <v-carousel-item>
          <v-card class="hotel-card mx-auto" width="340" :elevation="5">
            <v-img class="align-end text-grey-lighten-4" src="@/assets/hotel_images/the_outdoor_resort.png"
              height="180" cover>
              <div class="hotel-card-bg">
                <v-card-title class="text-white">Meila Hotel & Resort</v-card-title>
              </div>
            </v-img>
            <v-card-text class="pt-3">
              <div class="text-grey-darken-2">
                <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                Paradise Bay Street
              </div>
              <div class="text-grey-darken-2 pt-1">
                <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                5 star
              </div>
            </v-card-text>
          </v-card>
        </v-carousel-item>

        <v-carousel-item>
          <v-card class="hotel-card mx-auto" width="340" :elevation="5">
            <v-img class="align-end text-grey-lighten-4" src="@/assets/hotel_images/the_outdoor_villa_view.png"
              height="180" cover>
              <div class="hotel-card-bg">
                <v-card-title class="text-white">JW Sheraton Hotel</v-card-title>
              </div>
            </v-img>
            <v-card-text class="pt-3">
              <div class="text-grey-darken-2">
                <v-icon icon="mdi-map-marker-outline" color="grey-darken-2"></v-icon>
                An Lam Vuong Street
              </div>
              <div class="text-grey-darken-2 pt-1">
                <v-icon icon="mdi-star-outline" color="grey-darken-2"></v-icon>
                4 star
              </div>
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<style scoped>
.home-bg {
  background-image: linear-gradient(#37474F, #78909C, #FFFFFF);
  height: 50vh;
}

.auth-login-content {
  text-align: center;
  position: relative;
  top: 3em;
}

.feature-content {
  position: relative;
  top: 7em;
}

/** Hotel Card  */
.hotel-card {
  border-radius: 13px;
}

.hotel-card-bg {
  background-color: rgba(0, 0, 0, .35);
}

.v-card-text {
  padding: .2rem 0 1rem .8rem;
}

.home-icon-card-group {
  position: relative;
  top: 5em;
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

export default defineComponent({
  name: "Home",
  setup() {
    return {
      
    }
  }, 
})
</script>