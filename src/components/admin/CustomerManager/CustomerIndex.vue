<template>
    <div class="customer_index_bg">
        <v-container class="pl-0 pr-0">
            <div class="customer_index_content">
                <h3 class="text-white font-weight-medium customer_heading">Customer Manager</h3>
                
                <div class="create_customer_btn">
                    <v-btn :to="{name: 'CustomerCreate'}" class="create_customer_link" :ripple="false" rounded="xl">
                        <v-icon icon="mdi-note-edit-outline" size="30" color="blue-grey" class="pr-3"></v-icon>
                        Create Customer
                    </v-btn>
                </div>
                
                <v-card class="customer_details_card">
                    <div class="customer_details_content">
                        <div class="customer_details_icon">
                            <v-icon icon="mdi-identifier" size="30" color="blue-grey-darken-1"></v-icon>
                            <div class="customer_details_text">ID</div>
                        </div>
                        <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 customer_divider"></v-divider>
                        <div class="customer_details_icon">
                            <v-icon icon="mdi-account-outline" size="30" color="blue-grey-darken-1"></v-icon>
                            <div class="customer_details_text">Firstname</div>
                        </div>
                        <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 customer_divider"></v-divider>
                        <div class="customer_details_icon">
                            <v-icon icon="mdi-account-outline" size="30" color="blue-grey-darken-1"></v-icon>
                            <div class="customer_details_text">Surname</div>
                        </div>
                        <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 customer_divider"></v-divider>
                    </div>
                    <v-card-actions>
                        <v-btn variant="outlined" icon class="edit_btn" size="small" :to="{name: 'CustomerEdit'}">
                            <v-icon icon="mdi-pencil-outline" size="25" color="blue-grey-darken-1"></v-icon>
                        </v-btn>
                        <v-btn variant="outlined" icon class="delete_btn" size="small" :to="{name: 'BookingEdit'}">
                            <v-icon icon="mdi-trash-can-outline" size="25" color="blue-grey-darken-1"></v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<style scoped>
.customer_index_bg {
    background-image: linear-gradient(#455A64, #78909C);
    height: 16vh;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}

.customer_index_content h3 {
    position: relative;
    left: 1.5em;
    top: .8em;
    font-size: 1.3rem;
}

.create_customer_btn {
    position: absolute;
    top: 8.5em;
    left: 50%;
    transform: translateX(-50%);
}

.create_customer_link {
    height: 45px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    color: #455A64;
}

.customer_details_card {
    background-color: #CFD8DC;
    width: 330px;
    height: 250px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    position: relative;
    top: 6.8em;
}

.customer_details_content {
    padding: 1em;
}

.customer_divider {
    border-radius: 20px;
    margin-left: 6px;
    margin-right: 6px;
}

.customer_details_icon {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
}

.customer_details_text {
    padding-left: 4px;
    padding-top: 2px;
    color: #546E7A;
}

.edit_btn, .delete_btn {
    border: 2px solid #607D8B;
    position: relative;
    left: .8em;
    bottom: .8em;
}
</style>