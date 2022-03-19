<template>
    <div class="for-men">
        <div class="container">
            <div class="content">
                <h4>TOP</h4>
                <div class="text">Tops & Tees</div>
                <div class="text">Shirts</div>
                <div class="text">Suits & Blazer</div>
                <div class="text">Hoodies & Sweatshirts</div>
                <div class="text">Coats & Jackets</div>
                <div class="text">Sweaters</div>
                <div class="text">Bottoms</div>
                <div class="text">Pants</div>   
            </div>
            <div class="content-winter-style">
                <h4>Winter Style</h4>
                <div class="text">Down Jackets</div>
                <div class="text">Jackets</div>
                <div class="text">Parkas</div>
                <div class="text">Leather & Suede</div>
                <div class="text">Printed Hoodies</div>
                <div class="text">Suits</div>
            </div>
            <div class="content-img">
                <div class="img">
                    <div class="discount">50% OFF</div>
                    <img src="https://cdn140.picsart.com/253282259016212.png" alt="">
                </div>
            </div>
            <div class="content">
                <div class="box">
                    <h4>Sunglasses</h4>
                    <div class="text">Pilot</div>
                    <div class="text">Wayfarer</div>
                    <div class="text">Square</div>
                    <div class="text">Round</div>
                    <div class="text">Oval</div>
                    <div class="text">Jackets</div>
                    <div class="text">Parkas</div>
                    <div class="text">Leather & Suede</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.for-men{ 
    position: absolute;
    width: 1140px;
    top: 50px;
    left: -428px;
    height: 345px;
    display: flex;
    justify-content: center;
    box-shadow: black 0px 2px 13px -5px;
    z-index: 1;
}
.container{
    position: relative;
    width: 100%;
    height: 345px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}
.container:after{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
    top: -7px;
    left: 40%;
}
.container:before{
    content: '';
    position: absolute;
    width: 100px;
    height: 80px;
    top: -30px;
    left: 36%;
}
.content{
    width: 260px;
    height: 275px;
}
.content-img{
    width: 290px;
    height: 275px;
}
.content-winter-style{
    width: 210px;
    height: 275px;
}
.img{
    
    height: 265px;
    width: 230px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
img{
    max-width: 100%;
    max-height: 80%;
}
.discount{
    position: absolute;
    font-size: 20px;
    color: #48689a;
    font-weight: 600;
    left: 0;
    top: 0;
}
.discount:after{
    position: absolute;
    content: '';
    width: 80px;
    height: 2px;
    top: 30px;
    left: 0;
    background-color: #48689a;
}
.discount:before{
    position: absolute;
    content: '';
    width: 40px;
    height: 2px;
    top: 38px;
    left: 0;
    background-color: #48689a;
}
h4{
    width: 100px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-bottom: 15px;
    margin-bottom: 25px;
    border-bottom: 1px solid rgba(139, 139, 139, 0.5);
}
.text{
    font-size: 14px;
    margin-block-end: 5px;
}
.box{
     position: relative;
     left: 50px;
}
</style>
