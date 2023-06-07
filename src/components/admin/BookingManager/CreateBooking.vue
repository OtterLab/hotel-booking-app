<template>
    <div class="admin_booking_bg">
        <v-container class="pl-0 pr-0">
            <div class="booking_edit_icon_text">
                <v-icon icon="mdi-notebook-edit-outline" color="grey-darken-2" size="50"></v-icon>
                <h3 class="text-grey-darken-2">Update Booking Details</h3>
            </div>
            <v-form class="edit_booking_form">
                <div class="form-group">
                    <v-text-field label="Room ID" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-identifier" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Customer ID" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-account-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <VueDatePicker v-model="start_date" placeholder="Start Date" class="date_picker"></VueDatePicker>
                </div>
                <div class="form-group">
                    <VueDatePicker v-model="end_date" placeholder="End Date" class="date_picker"></VueDatePicker>
                </div>
                <div class="form-group">
                    <v-btn type="submit" class="booking_edit_btn" flat>
                        Update Booking
                        <v-icon icon="mdi-send-outline" class="pl-3"></v-icon>
                    </v-btn>
                </div>
            </v-form>
            
            <div class="alert_messages">
                <v-alert type="success" variant="outlined" density="compact" class="mb-4" v-if="alertMessage == 'success'">Login Successfully</v-alert>
                <v-alert type="error" variant="text" density="compact" class="mb-4" v-if="alertMessage == 'error'">Incorrect email or password</v-alert>
            </div>
        </v-container>
    </div>
</template>

<style scoped>
.admin_booking_bg {
    background-image: linear-gradient(#FFFFFF, #CFD8DC, #546E7A);
    height: 92.7vh;
}

.edit_booking_form {
    height: 350px;
    width: 340px;
    background-color: white;
    padding: 1.5em;
    position: relative;
    top: 12em;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
}

.booking_edit_icon_text {
    position: absolute;
    top: 6em;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

.booking_edit_icon_text h3 {
    font-size: 1.2rem;
    padding-top: .6em;
}

.date_picker {
    margin-bottom: 1.5em;
}

.booking_edit_btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 42px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
}

.alert_messages {
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1.5em;
    padding-left: 1.6em;
    padding-right: 1.6em;
}
</style>

<script>
import { defineComponent } from 'vue';

// datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default defineComponent({
    name: "BookingEdit",
    data() {
        return {
            alertMessage: 'false',
            start_date: null,
            end_date: null
        }
    },
    components: { VueDatePicker },
})
</script>