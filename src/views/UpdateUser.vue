<template>
    <div class="update_user_bg">
        <v-container class="pl-0 pr-0">
            <div class="update_form_content">
                <v-alert type="success" density="compact" class="mb-5" v-if="alertMessage == 'success'">Update User Successfully</v-alert>
                <div class="d-flex">
                    <RouterLink to="/profile">
                        <v-icon icon="mdi-arrow-left" color="grey-darken-1"></v-icon>
                    </RouterLink>
                    <h3 class="pl-3 pb-6 text-grey-darken-2">Update Account</h3>
                </div>
                <v-form>
                    <div class="form-group">
                        <v-text-field label="firstname" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-account-outline" variant="solo-filled" flat>
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="surname" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-account-outline" variant="solo-filled" flat>
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="address" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-map-marker-outline" variant="solo-filled" flat>
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="city" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-home-city-outline" variant="solo-filled" flat>
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="country" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-map-outline" variant="solo-filled" flat>
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="phone" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-phone-outline" variant="solo-filled" flat>
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="email" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-email-outline" variant="solo-filled" flat>
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-btn type="submit" class="submit_btn" flat>
                            Update User
                            <v-icon icon="mdi-send-outline" class="pl-2"></v-icon>
                        </v-btn>
                    </div>
                </v-form>
            </div>
        </v-container>
    </div>
</template>

<style scoped>
.update_user_bg {
    background-image: url(@/assets/hotel_images/the_outdoor_villa_view.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 240px;
}

.update_form_content {
    background-color: white;
    padding: 1.5em;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    position: relative;
    top: 10em;
}

.submit_btn {
    width: 200px;
    height: 40px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "UpdateUser",
    data() {
        return {
            alertMessage: 'none'
        }
    }
})
</script>