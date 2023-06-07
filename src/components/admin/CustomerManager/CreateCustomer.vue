<template>
    <div class="customer_bg">
        <v-container class="pl-0 pr-0">
            <div class="customer_icon_text">
                <v-icon icon="mdi-account-edit-outline" color="grey-darken-2" size="50"></v-icon>
                <h3 class="text-grey-darken-2">
                    <span v-if="id">Update Customer</span>
                    <span v-if="!id">Create Customer</span>
                </h3>
            </div>
            <v-form class="customer_form">
                <div class="form-group">
                    <v-text-field label="Firstname" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-account-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Surname" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-account-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Address" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-map-marker-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="City" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-home-city-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Country" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-map-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Phone" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-phone-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Email" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-email-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-btn type="submit" class="customer_btn" flat>
                        Save Customer
                        <v-icon icon="mdi-send-outline" class="pl-3"></v-icon>
                    </v-btn>
                </div>
            </v-form>
        </v-container>
    </div>
</template>

<style scoped>
.customer_bg {
    background-image: linear-gradient(#FFFFFF, #CFD8DC, #546E7A);
    height: 120vh;
}

.customer_icon_text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 6em;
    text-align: center;
}

.customer_form {
    background-color: white;
    height: 600px;
    width: 340px;
    border-radius: 15px;
    padding: 1.5em;
    position: relative;
    top: 9.5em;
    left: 50%;
    transform: translateX(-50%);
}

.customer_icon_text h3 {
    font-size: 1.2rem;
}

.customer_btn {
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

export default defineComponent({
    name: "CustomerEdit"
})
</script>