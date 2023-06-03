<template>
    <div>
        <v-container class="pl-0 pr-0 pt-0">
            <v-img src="@/assets/hotel_images/hotel_resort_villa.png"></v-img>
            <v-form class="register_form">
                <h3 class="text-grey-darken-2">Register</h3>
                <div class="form-group">
                    <v-text-field label="Username" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-account-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Email" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-email-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Password" color="blue-grey" density="comfortable"
                        prepend-inner-icon="mdi-lock-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>

                <div class="form-group">
                    <v-btn type="submit" class="sign_up_btn" flat>
                        Sign Up
                        <v-icon icon="mdi-send-outline" class="pl-2"></v-icon>
                    </v-btn>
                </div>

                <v-alert type="success" variant="text" density="compact" class="mt-4 mb-4" v-if="alertMessage == 'success'">Register Successfully</v-alert>
                <v-alert type="error" variant="text" density="compact" class="mt-4 mb-4" v-if="alertMessage == 'error'">Please complete the required fields</v-alert>
            </v-form>
        </v-container>
    </div>
</template>

<style scoped>
.register_form {
    padding: 1.6em;
    position: relative;
    bottom: 3em;
    background-color: white;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
}

.register_form h3 {
    font-size: 1.5rem;
    padding-bottom: .9em;
}

.sign_up_btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 40px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Register",
    data() {
        return {
            alertMessage: 'false'
        }
    }
})
</script>