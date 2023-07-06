<template>
    <v-container class="login_bg pl-0 pr-0">
        <v-img src="@/assets/golook_booking_logo.svg" class="logo_img"></v-img>
        <v-form class="login_form" @submit.prevent="login()">
            <h3 class="text-grey-darken-2">Login</h3>
            <div class="form-group">
                <v-text-field v-model="loginFD.email" name="email" label="Email" color="blue-grey" density="comfortable" 
                    prepend-inner-icon="mdi-email-outline" variant="solo-filled" flat>
                </v-text-field>
                <span class="error_msg" v-if="v$.loginFD.email.$error">{{ v$.loginFD.email.$errors[0].$message }}</span>
            </div>
            <div class="form-group">
                <v-text-field v-model="loginFD.password" name="password" label="Password" color="blue-grey" density="comfortable"
                    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" @click:append-inner="showPassword = !showPassword"
                    prepend-inner-icon="mdi-lock-outline" variant="solo-filled" flat>
                </v-text-field>
                <span class="error_msg" v-if="v$.loginFD.password.$error">{{ v$.loginFD.password.$errors[0].$message }}</span>
            </div>
            <div class="form-group">
                <v-btn type="submit" class="login_btn" flat>
                    Login
                    <v-icon icon="mdi-send-outline" class="pl-2"></v-icon>
                </v-btn>
            </div>
        </v-form>
        <div class="sign_up_btn">
            <div class="text-grey-darken-2 font-weight-regular text-body-1">Not a member?</div>
            <RouterLink to="/register" class="sign_up_link">Sign Up</RouterLink>
        </div>
        <div class="alert_messages">
            <v-alert type="success" variant="text" density="compact" class="mb-4" v-if="alertMessage == 'success'">Login Successfully</v-alert>
            <v-alert type="error" variant="text" density="compact" class="mb-4" v-if="alertMessage == 'error'">Incorrect email or password</v-alert>
        </div>
    </v-container>
</template>

<style scoped>
.login_bg {
    background-image: linear-gradient(#FFFFFF, #90A4AE);
    height: 70vh;
}

.logo_img {
    width: 200px;
    position: relative;
    top: 3.5em;
    left: 50%;
    transform: translateX(-50%);
}

.login_form {
    background-color: white;
    height: 400px;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 1.6em;
}

.login_form h3 {
    font-size: 1.5rem;
    margin-bottom: 1em;
}

.login_btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    height: 40px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
}

.sign_up_btn {
    display: flex;
    position: absolute;
    bottom: 6.5em;
    left: 50%;
    transform: translateX(-50%);
}

.sign_up_link {
    text-decoration: none;
    padding-left: 3px;
    color: #455A64;
    font-weight: 500;
}

.alert_messages {
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.5em;
    padding-left: 1.6em;
    padding-right: 1.6em;
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
import { required, email, helpers } from '@vuelidate/validators'

export default defineComponent ({
    name: "Login",
    data() {
        return {
            alertMessage: 'false',
            loginFD: {
                email: "",
                password: ""
            },
            v$: useVuelidate(),
            showPassword: false
        }
    },
    validations() {
        return {
            loginFD: {
                email: {
                    required: helpers.withMessage('Email is required', required),
                    email: helpers.withMessage('Email address is invalid', email)
                },
                password: {
                    required: helpers.withMessage('Password cannot be empty', required)
                }
            }
        }
    },
    methods: {
        login() {
            this.v$.$validate()
            if(!this.v$.$invalid) {
                this.alertMessage = 'success';
                setTimeout(() => {
                    this.$router.push({name: "Home"})
                }, 2000);
            }
            else {
                this.alertMessage = 'error';
            }

            const loginFD = new FormData();
            loginFD.append("email", this.loginFD.email);
            loginFD.append("password", this.loginFD.password);

            axios.post("http://localhost:8000/api/auth/login", loginFD)
            .then((response) => {
                localStorage.setItem("token", response.data.apptoken);
                localStorage.setItem("credentials", JSON.stringify(response.data))
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
})
</script>