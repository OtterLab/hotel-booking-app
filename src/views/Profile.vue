<template>
    <div class="profile-bg">
        <v-container class="profile_content">
            <div class="profile_card">
                <div class="d-flex justify-space-around">
                    <v-avatar color="white" size="60">
                        <v-icon icon="mdi-account" color="blue-grey-darken-1" size="45"></v-icon>
                    </v-avatar>
                    <div class="profile_info">
                        <h3 class="text-white font-weight-bold">Username</h3>
                        <RouterLink to="/update_user" class="edit_user_btn">
                            Update user details
                            <v-icon icon="mdi-square-edit-outline" class="pl-2"></v-icon>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="auth_action_content">
                <div class="auth_action_card">
                    <div class="d-flex justify-space-around">
                        <div class="auth_action_btn">
                            <v-btn prepend-icon="mdi-account" density="comfortable" class="text-body-2 text-grey-darken-2" :ripple="false" stacked variant="text" to="/login">
                                Login
                            </v-btn>
                        </div>
                        <div class="auth_action_divider"></div>
                        <div class="auth_action_btn">
                            <v-btn prepend-icon="mdi-account-edit" density="comfortable" class="text-body-2 text-grey-darken-2" :ripple="false" stacked variant="text" to="/register">
                                Sign Up
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div class="room_manager_content">
                    <div class="room_manager_card">
                        <h3>Admin Manager</h3>
                        <v-list density="compact" class="room_manager_list">
                            <v-list-item v-for="(adminItem, i) in adminItems" :key="i" :to="adminItem.to" link
                                :value="adminItem" active-color="blue-grey" :ripple="false">
                                    <template v-slot:prepend>
                                    <v-icon :icon="adminItem.icon"></v-icon>
                                    </template>
                                <v-list-item-title v-text="adminItem.text" class="text-grey-darken-2"></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </div>
                </div>
            </div>

            <!-- Logout button -->
            <v-btn variant="text" class="logout_btn text-grey-darken-2" :ripple="false">
                <v-icon icon="mdi-logout pr-2" size="25" color="grey-darken-2"></v-icon>
                Logout
            </v-btn>

            <div class="logoBox">
                <v-img src="@/assets/golook_booking_logo.svg" class="logo_img"></v-img>
            </div>
        </v-container>
    </div>
</template>

<style scoped>
.profile-bg {
    background-image: linear-gradient(#37474F, #78909C, #FFFFFF);
    height: 80vh;
}

.profile_content {
    height: 90vh;
}

.profile_card {
    position: relative;
    right: 1em;
}

.profile_info {
    position: relative;
    right: 3.2em;
    bottom: 1px;
}

.edit_user_btn {
    text-decoration: none;
    color: white;
}

.auth_action_content {
    position: relative;
    top: 1.5em;
}

.auth_action_card {
    width: 328px;
    height: 65px;
    background-color: white;
    border-radius: 10px;
    margin: 0 auto;
}

.auth_action_divider {
    border-left: 2px solid #E0E0E0;
    position: relative;
    top: .5em;
    height: 50px;
    border-radius: 15px;
}

.auth_action_btn {
    margin: 0 auto;
    padding-top: 4px;
    color: #616161;
}

.room_manager_card {
    position: relative;
    top: 1.6em;
}

.room_manager_card h3 {
    position: relative;
    color: white;
    left: 1.1em;
    padding-bottom: .6em;
}

.room_manager_list {
    border-radius: 10px;
    width: 328px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
}

.logout_btn {
    position: relative;
    top: 5em;
    left: 50%;
    transform: translateX(-50%);
}

.logoBox {
    position: relative;
    width: 300px;
    left: 50%;
    transform: translateX(-50%);
    top: 8em;
}

.logo_img {
    width: 120px;
    margin: 0 auto;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Profile",
    data() {
        return {
            adminItems: [
                { text: 'Room', icon: 'mdi-home-city', to: "/admin/rooms" },
                { text: 'Room Type', icon: 'mdi-bed', to: "/admin/room_types" },
                { text: 'Room Capacity', icon: 'mdi-room-service', to: "/admin/room_capacities" },
                { text: 'Price', icon: 'mdi-currency-usd', to: "/admin/price" },
                { text: 'Booking', icon: 'mdi-clipboard-list', to: "/admin/booking" },
                { text: 'Customer', icon: 'mdi-account-group', to: "/admin/customers" }
            ],
        }
    }
})
</script>