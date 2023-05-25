import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        hotels: [],
        rooms: []
    },
    mutations: {
        SET_HOTELS(state, hotels) {
            state.hotels = hotels;
        },
        SET_ROOMS(state, rooms) {
            state.rooms = rooms;
        }
    },
    actions: {
        SHOW_HOTELS({ commit }) {
            axios.get("http://localhost:3000/src/api/hotel_data.json")
            .then(response => response.data)
            .then(hotels => {
                console.log(hotels);
                commit("SET_HOTELS", hotels)
            })
        },
        SHOW_ROOMS({ commit }) {
            axios.get("http://localhost:3000/src/api/room_data.json")
            .then(response => response.data)
            .then(rooms => {
                console.log(rooms);
                commit("SET_ROOMS", rooms)
            })
        }
    },
    getters: {
        hotels: state => {
            return state.hotels;
        },
        rooms: state => {
            return state.rooms;
        }
    }
})