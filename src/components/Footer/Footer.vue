<template>
    <div class="footer">
        <top></top>
        <middle></middle>
        <bot></bot>
    </div>
</template>

<script>
import bot from './Footer-bot'
import top from './Footer-top'
import middle from './Footer-mid'
export default {
    components:{
        bot,
        top,
        middle
    }
}
</script>

<style scoped>
@import "../../../public/fonts/fontawesome-free-5.13.0-web/css/all.css";
.footer{
    position: relative;
    height: 705px;
    width: 100%;
    bottom: 0px;
    font-family: "Font Awesome 5 Free", RobotoSlab;
}
</style>