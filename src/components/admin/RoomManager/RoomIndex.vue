<template>
    <div class="room_index_bg">
        <v-container>
            <div class="d-flex justify-space-between room_heading">
                <h3>Room Manager</h3>
                <v-btn icon="mdi-bed-outline" flat variant="outlined" class="room_icon_link" :ripple="false"
                    density="comfortable" size="large" color="white" :to="{name: 'RoomCreate'}">
                </v-btn>
            </div>

            <v-card class="room_data_table" :elevation="0">
                <div class="room_data_content">
                    <div class="room_icon">
                        <v-icon icon="mdi-identifier" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="text-body-1 text-blue-grey-darken-1 font-weight-medium room_text">ID</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 room_divider"></v-divider>
                    <div class="room_icon">
                        <v-icon icon="mdi-identifier" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="text-body-1 text-blue-grey-darken-1 font-weight-medium room_text">Room ID</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 room_divider"></v-divider>
                    <div class="room_icon">
                        <v-icon icon="mdi-calendar-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="text-body-1 text-blue-grey-darken-1 font-weight-medium room_text">Start Date</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 room_divider"></v-divider>
                    <div class="room_icon">
                        <v-icon icon="mdi-calendar-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="text-body-1 text-blue-grey-darken-1 font-weight-medium room_text">End Date</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 room_divider"></v-divider>
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
    background-image: linear-gradient(#455A64, #90A4AE);
    height: 16vh;
    border-bottom-left-radius: 30px;
}

.room_heading {
    position: relative;
    left: .5em;
    top: 1em;
}

.room_heading h3 {
    margin-top: .4em;
    color: white;
    font-weight: 500; 
}

.room_icon_link {
    position: relative;
    right: 1em;
    border: 2px solid white;
}

.room_data_table {
    background-color: #CFD8DC;
    height: 307px;
    width: 350px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 5em;
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
}

.room_divider {
    border-radius: 20px;
    margin-left: 6px;
    margin-right: 6px;
}

.edit_btn, .delete_btn {
    border: 2px solid #546E7A;
    position: relative;
    left: .8em;
    bottom: .8em;
}
</style>