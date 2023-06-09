<template>
    <div class="price_bg">
        <v-container class="pl-0 pr-0">
            <div class="price_icon_text">
                <v-icon icon="mdi-ticket-percent-outline" color="grey-darken-2" size="50"></v-icon>
                <h3 class="text-grey-darken-2">
                    <span v-if="id">Update Price</span>
                    <span v-if="!id">Create Price</span>
                </h3>
            </div>

            <v-form class="price_form">
                <div class="form-group">
                    <v-text-field label="Price Name" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-percent-circle-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Price" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-currency-usd" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-select :items="items" label="Room Type" density="comfortable" prepend-inner-icon="mdi-bed-outline"
                        variant="solo-filled" flat>
                    </v-select>
                </div>
                <div class="form-group">
                    <v-select :items="items" label="Room Capacity" density="comfortable" prepend-inner-icon="mdi-account-plus-outline"
                        variant="solo-filled" flat>
                    </v-select>
                </div>
                <div class="form-group">
                    <v-select :items="items" label="Day of week" density="comfortable" prepend-inner-icon="mdi-calendar-month-outline"
                        variant="solo-filled" flat>
                    </v-select>
                </div> 
                <div class="form-group">
                    <v-radio-group v-model="inline" inline label="Dynamic Price">
                        <v-radio label="Dynamic Price" value="radio-1"></v-radio>
                    </v-radio-group>
                </div>
                <div class="form-group">
                    <VueDatePicker v-model="start_date" placeholder="Start Date" class="date_picker"></VueDatePicker>
                </div>
                <div class="form-group">
                    <VueDatePicker v-model="start_date" placeholder="End Date" class="date_picker"></VueDatePicker>
                </div>
                <div class="form-group">
                    <v-btn type="submit" class="price_btn" flat :ripple="false">
                        Save Price
                        <v-icon icon="mdi-send-outline" class="pl-3"></v-icon>
                    </v-btn>
                </div>
            </v-form>
        </v-container>
    </div>
</template>

<style scoped>
.price_bg {
    background-image: linear-gradient(#FFFFFF, #CFD8DC, #546E7A);
    height: 140vh;
}

.price_icon_text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 6em;
    text-align: center;
}

.price_form {
    background-color: white;
    height: 660px;
    width: 350px;
    border-radius: 15px;
    padding: 1.5em;
    position: relative;
    top: 9.5em;
    left: 50%;
    transform: translateX(-50%);
}

.date_picker {
    margin-bottom: 1.5em;
}

.price_btn {
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

// datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default defineComponent({
    name: "PricesCreate",
    data() {
        return {
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            inline: null,
            start_date: null,
            end_date: null
        }
    },
    components: { VueDatePicker },
})
</script>