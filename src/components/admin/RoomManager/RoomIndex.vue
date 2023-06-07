<template>
    <div class="room_index_bg">
        <v-container>
            <h4 class="room_title">Room Manager</h4>

            <v-btn class="room_icon_link" flat rounded="xl" color="blue-grey-lighten-2" size="small" :to="{name: 'RoomCreate'}">
                <v-icon icon="mdi-room-service-outline pr-2" size="25"></v-icon>
                Create Room
            </v-btn>

            <v-card class="room_data_table" :elevation="0">
                <div class="room_data_content">
                    <div class="room_icon">
                        <v-icon icon="mdi-identifier" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="room_text">ID</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 booking_divider"></v-divider>
                    <div class="room_icon">
                        <v-icon icon="mdi-identifier" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="room_text">Room ID</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 booking_divider"></v-divider>
                    <div class="room_icon">
                        <v-icon icon="mdi-calendar-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="room_text">Start Date</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 booking_divider"></v-divider>
                    <div class="room_icon">
                        <v-icon icon="mdi-calendar-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="room_text">End Date</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 booking_divider"></v-divider>
                </div>
                <v-card-actions>
                    <v-btn variant="outlined" icon class="edit_btn" size="small" :to="{name: 'RoomEdit'}">
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
.room_index_bg {
    background-image: linear-gradient(#455A64, #78909C, #FFFFFF);
    height: 80vh;
}

.room_title {
    color: white;
    font-weight: 500;
    position: relative;
    top: 1em;
    text-align: center;
    font-size: 1.6rem;
}

.room_icon_link {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 11.5em;
    box-shadow: 0 5px 15px rgba(0,0,0,0.20);
    width: 160px;
    height: 40px;
}

.room_data_table {
    background-color: #ECEFF1;
    height: 308px;
    width: 330px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 7em;
    border-radius: 15px;
}

.room_data_content {
    padding: 1em;
}

.room_icon {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
}

.room_text {
    padding-left: 4px;
    padding-top: 2px;
    color: #546E7A;
}

.room_divider {
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