<template>
  <div class="home_bg">
    <v-container class="home_content">
      <div class="auth_login_content">
        <h4 class="text-white font-weight-regular">Welcome,</h4>
        <h3 class="text-white font-weight-bold">Username</h3>
      </div>

      <div class="home_icon_card_group">
        <h3 class="pl-7 pb-4 text-white font-weight-medium">Hotel Offers</h3>
        <div class="home_icon_card_content">
          <v-card class="home_icon_card_item" :elevation="2">
            <v-icon icon="mdi-ticket-percent-outline" color="blue-grey-darken-1" size="40"></v-icon>
            <span class="home_icon_card_text">Discount</span>
          </v-card>
          <v-card class="home_icon_card_item" :elevation="2">
            <v-icon icon="mdi-pool" color="blue-grey-darken-1" size="40"></v-icon>
            <span class="home_icon_card_text">Swimming Pool</span>
          </v-card>
          <v-card class="home_icon_card_item" :elevation="2">
            <v-icon icon="mdi-plane-car" color="blue-grey-darken-1" size="40"></v-icon>
            <span class="home_icon_card_text">Airport Transfer</span>
          </v-card>
        </div>
      </div>

      <div class="feature_content">
        <h3 class="pl-8 text-grey-darken-3 font-weight-medium">Feature Hotel</h3>
        <v-carousel hide-delimiter-background delimiter-icon="mdi-circle-outline" color="grey" height="360" :show-arrows="false" cycle>
          <v-carousel-item>
            <div class="hotel_card">
              <div class="imgBox">
                <v-img src="@/assets/hotel_images/m-centara_hotel.png" class="hotel_img"></v-img>
              </div>
              <div class="hotel_content">
                <h4 class="text-grey-darken-2 pb-2">M Centara Hotel</h4>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-1"></v-icon>
                  Malibu Street
                </div>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-star-outline" color="grey-darken-1"></v-icon>
                  5 star
                </div>
              </div>
            </div> 
          </v-carousel-item>
          <v-carousel-item>
            <div class="hotel_card">
              <div class="imgBox">
                <v-img src="@/assets/hotel_images/hotel_resort_villa.png" class="hotel_img"></v-img>
              </div>
              <div class="hotel_content">
                <h4 class="text-grey-darken-2 pb-2">Sea Breeze Villa</h4>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-1"></v-icon>
                  Paradise Soul Blvd
                </div>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-star-outline" color="grey-darken-1"></v-icon>
                  4 star
                </div>
              </div>
            </div> 
          </v-carousel-item>
          <v-carousel-item>
            <div class="hotel_card">
              <div class="imgBox">
                <v-img src="@/assets/hotel_images/hotel_resort.png" class="hotel_img"></v-img>
              </div>
              <div class="hotel_content">
                <h4 class="text-grey-darken-2 pb-2">Sunset Samui Hotel</h4>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-1"></v-icon>
                  Koh Samui Bay
                </div>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-star-outline" color="grey-darken-1"></v-icon>
                  5 star
                </div>
              </div>
            </div> 
          </v-carousel-item>
          <v-carousel-item>
            <div class="hotel_card">
              <div class="imgBox">
                <v-img src="@/assets/hotel_images/the_outdoor_resort.png" class="hotel_img"></v-img>
              </div>
              <div class="hotel_content">
                <h4 class="text-grey-darken-2 pb-2">Meila Hotel & Resort</h4>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-1"></v-icon>
                  Surfers Coast Water Ave
                </div>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-star-outline" color="grey-darken-1"></v-icon>
                  5 star
                </div>
              </div>
            </div> 
          </v-carousel-item>
          <v-carousel-item>
            <div class="hotel_card">
              <div class="imgBox">
                <v-img src="@/assets/hotel_images/the_outdoor_villa_view.png" class="hotel_img"></v-img>
              </div>
              <div class="hotel_content">
                <h4 class="text-grey-darken-2 pb-2">JW Sheraton Hotel</h4>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-map-marker-outline" color="grey-darken-1"></v-icon>
                  An Lam Vuong Street
                </div>
                <div class="text-grey-darken-1 font-weight-regular text-body-2">
                  <v-icon icon="mdi-star-outline" color="grey-darken-1"></v-icon>
                  4 star
                </div>
              </div>
            </div> 
          </v-carousel-item>
        </v-carousel>
      </div>
      
      <div class="room_content">
        <h3 class="pl-8 text-grey-darken-2">Rooms</h3>
        <div class="room_card_container">
          <div class="roomImgBox">
            <v-img src="@/assets/room_images/comtemporary_luxury_bedroom.png" class="room_img"></v-img>
          </div>
          <div class="room_card">
            <div class="room_info">
              <div class="room_text">
                <div class="text-subtitle-2 text-grey-darken-2 font-weight-medium">Room Name</div>
                <div class="text-body-2 text-grey-darken-1 font-weight-regular">Room Type</div>
              </div>
              <v-btn class="room_btn" variant="outlined" color="blue-grey" size="small">
                View Room
                <v-icon icon="mdi-chevron-right-circle-outline pl-2" color="blue-grey"></v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.home_bg {
  background-image: linear-gradient(#37474F, #78909C, #FFFFFF);
  height: 60vh;
}

.home_content {
  height: 200vh;
}

.auth_login_content {
  text-align: center;
  position: relative;
  top: 2em;
}

/** home icon card */
.home_icon_card_group {
  position: relative;
  top: 4em;
}

.home_icon_card_content {
  text-align: center;
  display: flex;
  margin-left: 18px;
  margin-right: 18px;
}

.home_icon_card_item {
  width: 100px;
  height: 90px;
  border-radius: 12px;
  margin: 0 auto;
  padding-top: .9em;
}

.home_icon_card_item .home_icon_card_text {
  display: block;
}

.home_icon_card_text {
  font-size: 12px;
  color: #455A64;
  padding-left: 8px;
  padding-right: 8px;
}

/** Hotel Card  */
.feature_content {
  position: relative;
  top: 6em;
}

.hotel_card {
  position: relative;
  width: 330px;
  height: 220px;
  top: 4.5em;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 20px 30px rgba(0,0,0,0.15);
  margin: 0 auto;
}

.imgBox {
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 236px;
  height: 157px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.30);
  overflow: hidden;
}

.imgBox .hotel_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hotel_card .hotel_content {
  position: absolute;
  top: 7.8em;
  width: 100%;
  height: 100%;
  text-align: center;
}

/** Rooms Styles */
.room_content {
  position: relative;
  top: 7em;
}

.room_card_container {
  display: inline-flex;
  position: absolute;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
}

.room_card {
  width: 330px;
  height: 145px;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  background-color: white;
}

.roomImgBox {
  width: 160px;
  height: 107px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  position: absolute;
  right: 10.9em;
  top: 1.1em;
  overflow: hidden;
}

.roomImgBox .room_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room_info {
  position: absolute;
  top: .9em;
  left: 10.6em;
}

.room_btn {
  position: relative;
  top: 1em;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Home",
  data() {
    return {
      
    }
  },
})
</script>