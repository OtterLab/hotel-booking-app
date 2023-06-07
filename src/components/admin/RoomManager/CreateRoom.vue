<template>
    <div class="create_room_bg">
        <v-container class="pl-0 pr-0 pt-0">
            <v-carousel :show-arrows="false" height="250" hide-delimiter-background 
                cycle delimiter-icon="mdi-circle-medium" color="white">
                <v-carousel-item v-for="room_image in room_images" :key="room_image">
                    <v-img :src="room_image" class="room_img"></v-img>
                </v-carousel-item>
            </v-carousel>

            <div class="room_card">
                <h3>
                    <span v-if="id">Update Room</span>
                    <span v-if="!id">Create Room</span>
                </h3>
                <v-form class="room_form">
                    <div class="form-group">
                        <v-text-field label="Firstname" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-account-outline" variant="solo-filled" flat>
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-select :items="items" label="Room Type" density="comfortable" prepend-inner-icon="mdi-bed-outline"
                            variant="solo-filled" flat>
                        </v-select>
                    </div>
                    <div class="form-group">
                        <v-select :items="items" label="Room Capacity" density="comfortable" prepend-inner-icon="mdi-account-plus-outline"
                            variant="solo-filled" flat>
                        </v-select>
                    </div>
                    <div class="form-group">
                        <v-btn type="submit" class="room_btn" flat>
                            Save Room
                            <v-icon icon="mdi-send-outline" class="pl-3"></v-icon>
                        </v-btn>
                    </div>
                </v-form>
            </div>
        </v-container>
    </div>
</template>

<style scoped>
.create_room_bg {
    background-image: linear-gradient(#455A64, #CFD8DC);
    height: 100vh;
}

.room_img {
    width: 340px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    top: 1em;
}

.room_card {
    height: 350px;
    width: 340px;
    background-color: white;
    position: relative;
    top: .5em;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
}

.room_card h3 {
    position: relative;
    left: 1.2em;
    top: 1.1em;
    color: #616161;
}

.room_form {
    padding: 1.5em;
    margin-top: 1em;
}

.room_btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 42px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
}
</style>

<script>
import { defineComponent } from 'vue';

// import room images
import Img1 from '@/assets/room_images/comtemporary_luxury_bedroom.png'
import Img2 from '@/assets/room_images/king_bedroom_grand_classic.png'
import Img3 from '@/assets/room_images/luxury_modern_suite_bedroom.png'
import Img4 from '@/assets/room_images/modern_queen_bedroom_view.png'
import Img5 from '@/assets/room_images/queen_bedroom_deluxe_suite.png'
import Img6 from '@/assets/room_images/twin_bedroom_city_view.png'
import Img7 from '@/assets/room_images/twin_bedroom_classic_deluxe.png'

export default defineComponent({
    data() {
        return {
            room_images: [Img1, Img2, Img3, Img4, Img5, Img6, Img7],
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    }
})
</script>