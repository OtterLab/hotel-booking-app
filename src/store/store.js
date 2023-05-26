import { createStore } from "vuex";
import { auth } from './modules/auth.js';
import { booking } from './modules/booking.js';
import { customer } from './modules/customer.js';
import { hotel } from './modules/hotel.js';
import { price } from './modules/price.js';
import { room_capacity } from './modules/room_capacity.js';
import { room_type } from './modules/room_type.js';
import { room } from './modules/room.js';

const store = createStore({
    modules: {
        auth,
        booking,
        customer,
        hotel,
        price,
        room_capacity,
        room_type,
        room
    }
});

export default store;