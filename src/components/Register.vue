<template>
    <div>
        <v-container class="pl-0 pr-0 pt-0">
            <v-img src="@/assets/hotel_images/hotel_resort_villa.png"></v-img>
            <v-form class="register_form" @submit.prevent="register()">
                <h3 class="text-grey-darken-2">Register</h3>
                <div class="form-group">
                    <v-text-field v-model="registerFD.fullname" name="fullname" label="Fullname" color="blue-grey" density="comfortable"
                        prepend-inner-icon="mdi-account-outline" variant="solo-filled" flat>
                    </v-text-field>
                    <span class="error_msg" v-if="v$.registerFD.fullname.$error">{{ v$.registerFD.fullname.$errors[0].$message }}</span>
                </div>
                <div class="form-group">
                    <v-text-field v-model="registerFD.email" name="email" label="Email" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-email-outline" variant="solo-filled" flat>
                    </v-text-field>
                    <span class="error_msg" v-if="v$.registerFD.email.$error">{{ v$.registerFD.email.$errors[0].$message }}</span>
                </div>
                <div class="form-group">
                    <v-text-field v-model="registerFD.password" name="password" label="Password" color="blue-grey" density="comfortable"
                        :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" @click:append-inner="show = !show"
                        prepend-inner-icon="mdi-lock-outline" variant="solo-filled" flat>
                    </v-text-field>
                    <span class="error_msg" v-if="v$.registerFD.password.$error">{{ v$.registerFD.password.$errors[0].$message }}</span>
                </div>
                <div class="form-group">
                    <v-btn type="submit" class="sign_up_btn" flat>
                        Sign Up
                        <v-icon icon="mdi-send-outline" class="pl-2"></v-icon>
                    </v-btn>
                </div>
                <v-alert type="success" variant="text" density="compact" class="mt-4 mb-4" v-if="alertMessage == 'success'">Register Successfully</v-alert>
                <v-alert type="error" variant="text" density="compact" class="mt-4 mb-4" v-if="alertMessage == 'error'">Please complete the required fields</v-alert>
            </v-form>
        </v-container>
    </div>
</template>

<style scoped>
.register_form {
    padding: 1.6em;
    position: relative;
    bottom: 3em;
    background-color: white;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
}

.register_form h3 {
    font-size: 1.5rem;
    padding-bottom: .9em;
}

.sign_up_btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 40px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
}

.error_msg {
    position: relative;
    bottom: 1.3em;
    font-size: 15px;
    color: crimson;
}
</style>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

// import vuelidate
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

export default defineComponent({
    name: "Register",
    data() {
        return {
            registerFD: {
                fullname: "",
                email: "",
                password: ""
            },
            v$: useVuelidate(),
            alertMessage: 'false',
            show: false
        }
    },
    validations() {
        return {
            registerFD: {
                fullname: { 
                    required: helpers.withMessage('Fullname is empty', required)
                },
                email: { 
                    required: helpers.withMessage('Email address is empty', required), 
                    email: helpers.withMessage('Email address is invalid', email)
                },
                password: {
                    required: helpers.withMessage('Password cannot be empty', required),
                    minLength: helpers.withMessage('Password must be more than 9 characters', minLength(9))
                }
            }
        }
    },
    methods: {
        register() {
           this.v$.$validate()
            if(!this.v$.$error) {
                this.alertMessage = 'success';
                setTimeout(() => {
                    this.$router.push({name: "Login"})
                }, 2000);
            }
            else {
                this.alertMessage = 'error';
            }

            // process register data
            const registerFD = new FormData();
            registerFD.append("fullname", this.registerFD.fullname);
            registerFD.append("email", this.registerFD.email);
            registerFD.append("password", this.registerFD.password);

            axios.post("http://localhost:8000/api/auth/register", registerFD)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
})
</script>