import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        hotels: [],
    },
    mutations: {
        SET_HOTELS(state, hotels) {
            state.hotels = hotels
        }
    },
    actions: {
        SHOW_HOTELS({ commit }) {
            axios.get("http://127.0.0.1:8000/api/hotel/showAllHotels")
            .then(response => response.data)
            .then(hotels => {
                console.log(hotels);
                commit("SET_HOTELS", hotels);
            })
            .catch((error) => console.log(error));
        }
    },
    getters: {
        hotels(state) {
            return state.hotels;
        }
    }
});