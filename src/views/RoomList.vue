<template>
<div class="room_list_bg">

</div>
</template>

<style scoped>
.room_list_bg {
    background-image: url(@/assets/palm_tree_resort.png);
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RoomList"
})
</script>