<template>
<div class="update-booking">
    <v-container>
        <v-card>
            <v-img src="../assets/images/hotel_resort_villa.png" height="168"></v-img>
            <v-card-title class="pa-2 booking-heading-content justify-center white--text">Update Booking</v-card-title>
        </v-card>

        <!---- Alert message ---->
        <v-alert dense type="success" class="alert-message" v-if="alertToggle == 'success'">Booking updated successfully</v-alert>
        <v-alert dense type="error" class="alert-message" v-if="alertToggle == 'error'">Unable to update</v-alert>

        <v-card class="pa-4 mt-4">
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="updateBooking" method="POST">
                <div class="form-group">
                    <v-text-field dense outlined label="Room ID" prepend-inner-icon="mdi-pound-box pr-2"
                    v-model="updbookingFD.room_id" name="room_id">                        
                    </v-text-field>
                </div>
    
                <div class="form-group">
                    <v-text-field dense outlined label="User ID" prepend-inner-icon="mdi-account pr-2"
                    v-model="updbookingFD.user_id" name="user_id">                        
                    </v-text-field>
                </div>

                <div class="form-group">
                    <v-select :items="numberOfNightsItems" dense outlined label="Number of Nights" prepend-inner-icon="mdi-bed pr-2"
                    v-model="updbookingFD.num_of_nights" name="num_of_nights" :rules="[v => !!v || 'Number of Nights  is required']" required>                        
                    </v-select>
                </div>

                <div class="form-group">
                    <v-select :items="numberOfGuestItems" dense outlined label="Number of Guest" prepend-inner-icon="mdi-account pr-2"
                    v-model="updbookingFD.num_of_guest" name="num_of_guest" :rules="[v => !!v || 'Number of Guest is required']" required>                        
                    </v-select>
                </div>
                
                <div class="form-group">
                   <v-dialog ref="dialog" v-model="modalCheckInDate" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="updbookingFD.checkInDate" dense outlined label="Check-In Date" prepend-inner-icon="mdi-calendar pr-2" 
                            readonly v-bind="attrs" v-on="on" name="checkInDate" :rules="updbookingFD.checkInDateRules" required>
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="updbookingFD.checkInDate" scrollable>
                        <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modalCheckInDate = false">Cancel</v-btn>
                            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                </div>

                <div class="form-group">
                   <v-dialog ref="dialogCheckOutDate" v-model="modalCheckOutDate" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="updbookingFD.checkOutDate" dense outlined label="Check-Out Date" prepend-inner-icon="mdi-calendar pr-2" 
                            readonly v-bind="attrs" v-on="on" name="checkOutDate" :rules="updbookingFD.checkOutDateRules" required>
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="updbookingFD.checkOutDate" scrollable>
                        <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modalCheckOutDate = false">Cancel</v-btn>
                            <v-btn text color="primary" @click="$refs.dialogCheckOutDate.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                </div>

                <div class="form-group">
                    <v-btn dense class="mt-0 mb-0 update-btn-gradient white--text" type="submit" @click="validate">Update Booking</v-btn>
                </div>
            </v-form>
        </v-card>
    </v-container>
</div>
</template>

<style scoped>
.booking-heading-content {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 80px;
    width: 100%;
}

.update-btn-gradient {
  background-image: linear-gradient(150deg, #1976D2, #1E88E5, #64B5F6);
  width: 100%;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            numberOfNightsItems: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            numberOfGuestItems: ['1', '2', '3', '4', '5', '6', '7', '8', '9' , '10', '11', '12', '13', '14', '15'],
            valid: true,
            modalCheckInDate: false,
            modalCheckOutDate: false,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            updbookingFD: {
                room_id: '',
                user_id: '',
                num_of_nights: null,

                num_of_guest: null,

                checkInDate: '',
                checkInDateRules: [
                    v => !!v || 'Check-In Date is required'
                ],

                checkOutDate: '',
                checkOutDateRules: [
                    v => !!v || 'Check-Out Date is required'
                ],
            },
            alertToggle: 'none'
        }
    },

    created() {
        axios.get(`http://localhost:8000/api/booking/getBooking/${this.$route.params.id}`)
        .then((response) => {
            this.updbookingFD = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
    
    methods: {
        validate() {
            this.$refs.form.validate();
        },
        createBooking() {
            const updbookingFD = new FormData();
            updbookingFD.append('room_id', this.bookingFD.room_id);
            updbookingFD.append('user_id', this.bookingFD.user_id);
            updbookingFD.append('roomType', this.bookingFD.roomType);
            updbookingFD.append('num_of_nights', this.bookingFD.num_of_nights);
            updbookingFD.append('num_of_guest', this.bookingFD.num_of_guest);
            updbookingFD.append('checkInDate', this.bookingFD.checkInDate);
            updbookingFD.append('checkOutDate', this.bookingFD.checkOutDate);

            axios.post(`http://localhost:8000/api/booking/updateBooking/${this.$route.params.id}`, updbookingFD)
            .then((response) => {
                console.log(response);
                this.alertToggle = 'success';
                
                setTimeout(() => {
                    this.alertToggle = 'none';
                    this.$router.push({name: 'my-bookings'})
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                this.alertToggle = 'error';
            });
        }
    }
}
</script>