<template>
    <div class="customer_index_bg">
        <v-container>
            <div class="d-flex justify-space-between customer_heading">
                <h3>Customer Manager</h3>
                <v-btn icon="mdi-account-plus" flat variant="outlined" class="customer_icon_link" :ripple="false"
                    density="comfortable" size="large" color="white" :to="{name: 'CustomerCreate'}">
                </v-btn>
            </div>
            
            <v-card class="customer_details_card" :elevation="0">
                <div class="customer_details_content">
                    <div class="customer_details_icon">
                        <v-icon icon="mdi-identifier" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="text-body-1 text-blue-grey-darken-1 font-weight-medium customer_details_text">ID</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 customer_divider"></v-divider>
                    <div class="customer_details_icon">
                        <v-icon icon="mdi-account-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="text-body-1 text-blue-grey-darken-1 font-weight-medium customer_details_text">Firstname</div>
                    </div>
                    <v-divider :thickness="2" color="blue-grey" class="border-opacity-25 customer_divider"></v-divider>
                    <div class="customer_details_icon">
                        <v-icon icon="mdi-account-outline" size="30" color="blue-grey-darken-1"></v-icon>
                        <div class="text-body-1 text-blue-grey-darken-1 font-weight-medium customer_details_text">Surname</div>
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
    background-image: linear-gradient(#455A64, #90A4AE);
    height: 16vh;
    border-bottom-left-radius: 30px;
}

.customer_heading {
    position: relative;
    left: .6em;
    top: 1em;
}

.customer_heading h3 {
    margin-top: .4em;
    color: white;
    font-weight: 500; 
}

.customer_icon_link {
    position: relative;
    right: 1.4em;
    border: 2px solid white;
}

.customer_details_card {
    background-color: #CFD8DC;
    width: 350px;
    height: 252px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    position: relative;
    top: 4.5em;
    margin-bottom: 1.4em;
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
}

.edit_btn, .delete_btn {
    border: 2px solid #546E7A;
    position: relative;
    left: .8em;
    bottom: .8em;
}
</style>