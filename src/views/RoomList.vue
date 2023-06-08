<template>
<div class="room_list_bg">
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card class="mx-auto room_list_card" max-width="330">
                    <div class="text-subtitle-1 font-weight-medium text-grey-darken-2 pl-4 pt-2">
                        <v-icon icon="mdi-home-city-outline pr-2"></v-icon>
                        Room Name
                    </div>
                    <v-card-text class="pt-2">
                        <div class="text-body-2 text-grey-darken-2 pt-2">
                            <v-icon icon="mdi-bed-outline pr-2"></v-icon>
                            Room Type
                        </div>
                        <div class="text-body-2 text-grey-darken-2 pt-1">
                            <v-icon icon="mdi-account-plus-outline pr-2"></v-icon>
                            Room Capacity
                        </div>

                        <v-divider class="mt-4 mb-3" color="grey-darken-1" :thickness="2"></v-divider>

                        <div class="text-subtitle-2 text-grey-darken-2">
                            <v-icon icon="mdi-currency-usd pr-1"></v-icon>
                            Total Price: 
                        </div>   
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<style scoped>
.room_list_bg {
    background-image: url(@/assets/palm_tree_resort.png);
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}

.room_list_card {
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.40);
    padding: 5px;
    position: relative;
    top: 5px;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RoomList"
})
</script>