<template>
    <div class="profile-bg">
        <div class="profile-content">
            <div class="profile-card">
                <div class="avatar-circle">
                    <v-icon icon="mdi-account" size="70" color="white" class="avatar-icon"></v-icon>
                </div>
                <div class="profile-info">
                    <h3 class="text-white font-weight-bold">Hello World</h3>
                    <p class="text-white">email address</p>
                </div>
                <v-btn class="profile-edit-btn text-blue-grey-darken-1">
                    Edit Profile
                    <v-icon icon="mdi-square-edit-outline" class="pl-3" size="25" color="blue-grey-darken-1"></v-icon>
                </v-btn>
            </div>
            <div class="account-form">
                <v-form>
                    <div class="form-group">
                        <v-text-field label="firstname" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-account-outline" variant="outlined">
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="surname" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-account-outline" variant="outlined">
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="address" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-map-marker-outline" variant="outlined">
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="city" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-home-city-outline" variant="outlined">
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="country" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-map-outline" variant="outlined">
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="phone" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-phone-outline" variant="outlined">
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field label="email" color="blue-grey" density="comfortable" 
                            prepend-inner-icon="mdi-email-outline" variant="outlined">
                        </v-text-field>
                    </div>
                    <div class="form-group">
                        <v-btn type="submit" class="submit-btn">
                            Update User
                            <v-icon icon="mdi-send-outline" class="pl-2"></v-icon>
                        </v-btn>
                    </div>
                </v-form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-bg {
    background-image: linear-gradient(#37474F, #78909C, #FFFFFF);
    height: 60vh;
}

.profile-content {
    width: 100vw;
    height: 130vh;
    position: relative;
    text-align: center;
}

.profile-card {
    position: relative;
    top: 3em;
}

.avatar-circle {
    border: 3px solid white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.avatar-icon {
    position: relative;
    top: 10px;
}

.profile-info {
    position: relative;
    top: 7.3em;
}

.profile-edit-btn {
    width: 200px;
    height: 40px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    background-color: white;
    border-radius: 20px;
    position: relative;
    top: 9.5em;
}

.account-form {
    background-color: white;
    position: relative;
    top: 24%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 2em;
}

.submit-btn {
    width: 200px;
    height: 40px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Profile",
    data() {
        return {

        }
    }
})
</script>