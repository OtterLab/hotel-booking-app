<template>
<div class="reservation_bg">

</div>
</template>

<style scoped>
.reservation_bg {
    background-image: url(@/assets/the_outdoor_resort.png);
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Reservation"
})
</script>