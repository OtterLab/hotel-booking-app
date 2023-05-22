<template>
    <div>
        <div class="profile-content">
            <div class="profile-card">
                <div class="avatar-circle">
                    <v-icon icon="mdi-account" size="100" class="avatar-icon"></v-icon>
                </div>
                <div class="profile-info">
                    <h2 class="text-grey-darken-2">Hello World</h2>
                    <div class="text-grey-darken-1">email address here</div>
                </div>
            </div>
            <div class="account-form">
                <v-form>
                    <div class="form-group">
                        <v-text-field variant="solo" density="comfortable" prepend-inner-icon="mdi-account" label="Firstname" class="text-input"></v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field variant="solo" density="comfortable" prepend-inner-icon="mdi-account" label="Firstname" class="text-input"></v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field variant="solo" density="comfortable" prepend-inner-icon="mdi-account" label="Firstname" class="text-input"></v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field variant="solo" density="comfortable" prepend-inner-icon="mdi-account" label="Firstname" class="text-input"></v-text-field>
                    </div>
                </v-form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-content {
    width: 100vw;
    height: 100vh;
    position: relative;
}

.profile-card {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.avatar-circle {
    width: 150px;
    height: 150px;
    background-color: #EEEEEE;
    border-radius: 50%;
    border: 8px solid white;
    box-shadow: 0 0 0 5px #607D8B;
}

.profile-info {
    text-align: center;
    padding-top: 15px;
}

.avatar-icon {
    position: absolute;
    color: #9E9E9E;
    top: 10%;
    left: 17%;
}

.account-form {
    width: 100%;
    height: 300px;
    position: relative;
    bottom: -22em;
}

.form-group {
    width: 300px;
    margin: 0 auto;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Profile",
    setup() {
    },
})
</script>