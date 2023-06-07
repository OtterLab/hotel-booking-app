<template>
    <div class="customer_index_bg">
        <v-container class="pl-0 pr-0 customer_index_content">
            <h3 class="text-white font-weight-medium customer_heading">Customer Manager</h3>
            <v-btn class="customer_icon_link" flat rounded="xl" color="blue-grey-darken-1" size="small" :to="{name: 'CustomerCreate'}">
                <v-icon icon="mdi-account-plus-outline pr-2" size="25"></v-icon>
                Create Customer
            </v-btn>
            
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
            
        </v-container>
    </div>
</template>

<style scoped>
.customer_index_bg {
    background-image: linear-gradient(#546E7A,#B0BEC5);
    height: 15vh;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}

.customer_index_content h3 {
    position: relative;
    top: .9em;
    font-size: 1.4rem;
    text-align: center;
}

.customer_icon_link {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 11em;
    box-shadow: 0 5px 15px rgba(0,0,0,0.20);
    height: 40px;
}

.customer_details_card {
    background-color: #CFD8DC;
    width: 330px;
    height: 251px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    position: relative;
    top: 6.2em;
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