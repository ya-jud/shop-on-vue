<template>
    <div class="product">
        <img src="https://pbs.twimg.com/media/Dbpx-nbXkAATsVy.png:large" alt="image">
        <div class="info-box">
            <div class="name">Denim t-shirt For Boys</div>
            <div class="cash">$289 - $250</div>
            <div class="del"></div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.product{
    height: 85px;
    width: 100%;
    display: flex;
    margin-top: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(139, 139, 139, 0.5);
}
img{
    width: 65px;
    height: 65px;
}
.info-box{
    position: relative;
    font-size: 14px;
}
.name{
    position: relative;
    top: -5px;
    left: 12px
}
.cash{
    position: relative;
    bottom: -7px;
    left: 12px
}
.del{
    position: absolute;
    border: 1px solid gray;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    right: -40px;
    top: 0px;
    cursor: pointer;
}
.del:before,
.del:after{
    left: 4.7px;
    top: 0px;
    position: absolute;
    content: '';
    width: 1px;
    height: 10px;
    background-color: gray;
}
.del:after{
    transform: rotate(45deg);
}
.del:before{
    transform: rotate(-45deg);
}
.cash{
    position: relative;
    color: #48689a;
}
</style>