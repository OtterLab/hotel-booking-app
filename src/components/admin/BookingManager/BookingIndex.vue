<template>
    <div class="booking_manager_bg">
        <v-container class="pl-0 pr-0">
            <h2 class="booking_title">Booking Manager</h2>
            <div class="booking_filter_card">
                <div class="text-subtitle-1 text-grey-darken-2 font-weight-medium">Calender Mode</div>
                <div class="calender_filter">
                    <div class="text-body-2 text-grey-darken-1 font-weight-regular">Filter by Date</div>
                    <v-btn variant="outlined" class="filter_btn" type="button" icon="mdi-filter-outline" :ripple="false" color="blue-grey-darken-1"></v-btn>
                </div>
            </div>

            <v-card class="booking_data_table" :elevation="0">
                <div class="booking_data_content">
                    <div class="booking_icon">
                        <v-icon icon="mdi-identifier" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="booking_text">ID</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 booking_divider"></v-divider>
                    <div class="booking_icon">
                        <v-icon icon="mdi-identifier" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="booking_text">Room ID</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 booking_divider"></v-divider>
                    <div class="booking_icon">
                        <v-icon icon="mdi-calendar-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="booking_text">Start Date</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 booking_divider"></v-divider>
                    <div class="booking_icon">
                        <v-icon icon="mdi-calendar-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="booking_text">End Date</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 booking_divider"></v-divider>
                </div>
                <v-card-actions>
                    <v-btn variant="outlined" icon class="edit_btn" size="small" :to="{name: 'BookingEdit'}">
                        <v-icon icon="mdi-pencil-outline" size="25" color="blue-grey-darken-1"></v-icon>
                    </v-btn>
                    <v-btn variant="outlined" icon class="delete_btn" size="small" :to="{name: 'BookingEdit'}">
                        <v-icon icon="mdi-trash-can-outline" size="25" color="blue-grey-darken-1"></v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<style scoped>
.booking_manager_bg {
    background-image: linear-gradient(#546E7A, #B0BEC5);
    height: 25vh;
    position: relative;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.booking_title {
    position: relative;
    left: 1.5em;
    top: 1.1em;
    color: white;
    font-weight: 500;
}

.booking_filter_card {
    background-color: #ECEFF1;
    height: 100px;
    width: 330px;
    position: relative;
    top: 4em;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    padding: .8em;
}

.calender_filter {
    display: flex;
}

.filter_btn {
    position: relative;
    left: 9em;
    bottom: .9em;
    border: 2px solid #607D8B;
}

.booking_data_table {
    background-color: #CFD8DC;
    height: 308px;
    width: 330px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 5.5em;
    border-radius: 15px;
}

.booking_data_content {
    padding: 1em;
}

.booking_icon {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
}

.booking_text {
    padding-left: 4px;
    padding-top: 2px;
    color: #546E7A;
}

.booking_divider {
    border-radius: 20px;
    margin-left: 6px;
    margin-right: 6px;
}

.edit_btn, .delete_btn {
    border: 2px solid #607D8B;
    position: relative;
    left: .8em;
    bottom: .8em;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Booking",
    data() {
        return {

        }
    }
})
</script>