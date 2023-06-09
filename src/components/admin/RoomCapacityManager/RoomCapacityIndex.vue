<template>
    <div class="room_capacity_bg">
        <v-container class="room_capacity_content">
            <div class="room_capacity_heading">
                <h3>Room Capacity Manager</h3>
            </div>

            <v-form class="room_capacity_form">
                <div class="form-group">
                    <v-text-field label="Room Capacity" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-account-plus-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-btn type="submit" class="room_capacity_btn" flat :ripple="false" rounded="xl">
                        Create Room Capacity
                        <v-icon icon="mdi-send-outline pl-3"></v-icon>
                    </v-btn>
                </div>
            </v-form>

            <v-card class="room_capacity_data_table" :elevation="0">
                <div class="room_capacity_data_content">
                    <div class="room_capacity_icon">
                        <v-icon icon="mdi-account-group-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="text-body-1 text-blue-grey-darken-1 font-weight-medium room_capacity_text">Room Capacity</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 room_capacity_divider"></v-divider>
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
.room_capacity_bg {
    background-image: linear-gradient(#455A64, #90A4AE);
    height: 40vh;
    border-bottom-left-radius: 30px;
    position: relative;
}

.room_capacity_content {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.room_capacity_heading {
    position: relative;
    left: .8em;
    top: 1em;
    color: white;
    font-weight: 500;
}

.room_capacity_form {
    width: 350px;
    height: 150px;
    background-color: #CFD8DC;
    position: relative;
    top: 2.8em;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    padding: 1em;
}

.room_capacity_btn {
    position: relative;
    left: 50%;
    bottom: .3em;
    transform: translateX(-50%);
    padding-left: 1.5em;
    padding-right: 1.5em;
    height: 42px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
}

.room_capacity_data_table {
    background-color: #CFD8DC;
    height: 150px;
    width: 350px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 6.3em;
    border-radius: 15px;
}

.room_capacity_data_content {
    padding: 1em;
}

.room_capacity_icon {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
}

.room_capacity_text {
    padding-left: 10px;
    padding-top: 2px;
}

.room_capacity_divider {
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