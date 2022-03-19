<template>
    <div class="container">
        <div class="content">
            <div class="brand"><img src="../../../public/logo brands/dc-shoes.svg" alt=""></div>
            <div class="brand"><img src="../../../public/logo brands/armani-jeans-seeklogo.com.svg" alt=""></div>
            <div class="brand"><img src="../../../public/logo brands/expo-milano-2015.svg" alt=""></div>
            <div class="brand"><img src="../../../public/logo brands/supra.svg" alt=""></div>
            <div class="brand"><img src="../../../public/logo brands/vans-seeklogo.com.svg" alt=""></div>
            <div class="brand"><img src="../../../public/logo brands/we-heart-it-seeklogo.com.svg" alt=""></div> 
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container{
    position: relative;
    background-color: #f7f7f7;
    height: 220px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
}
.content{
    display: flex;
    width: 1140px;
    justify-content: space-around;
}
.brand{
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
}
img{
    max-width: 100%;
    height: 100%;
}
</style>