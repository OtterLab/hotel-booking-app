<template>
    <v-container class="login_bg pl-0 pr-0">
        <v-img src="@/assets/golook_booking_logo.svg" class="logo_img"></v-img>
        <div class="login_form_content">
            <h3 class="text-grey-darken-1">Login</h3>
            <v-form class="login_form">
                <div class="form-group">
                    <v-text-field label="email" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-email-outline" variant="solo-filled" flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="password" color="blue-grey" density="comfortable" 
                        prepend-inner-icon="mdi-lock-outline" variant="solo-filled" flat>
                    </v-text-field>
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
        </div>
    </v-container>
</template>

<style scoped>
.login_bg {
    background-image: linear-gradient(#FFFFFF, #90A4AE, #455A64);
    height: 70vh;
}

.login_form_content {
    background-color: white;
    height: 420px;
    width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}

.login_form_content h3 {
    position: relative;
    top: 1em;
    left: 1.3em;
    padding-bottom: .4em;
}

.login_form {
    padding: 1.6em;
    position: relative;
    top: .2em;
}

.login_btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 40px;
    background-image: linear-gradient(to bottom right, #546E7A, #90A4AE);
    color: white;
}

.logo_img {
    width: 200px;
    position: absolute;
    top: 7.6em;
    left: 50%;
    transform: translateX(-50%);
}

.sign_up_btn {
    display: flex;
    position: absolute;
    bottom: 9em;
    left: 50%;
    transform: translateX(-50%);
}

.sign_up_link {
    text-decoration: none;
    padding-left: 4px;
    color: #455A64;
    font-weight: 500;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "Login",
    data() {
        return {
            
        }
    },
})
</script>