<template>
    <div class="goods">
        <div class="container">
            <div class="content active">
                <Product v-for="product in products" :key="product"></Product>
            </div>
            <div class="button">
                <div class="btn continue">CONTINUE SHIPPING</div>
                <div class="btn procced">PROCCED TO CHECKOUT</div>
            </div>
        </div>
    </div>
</template>
<script>
import Product from './Product'
export default {
    data(){
        return{
            products: 4
        }
    },
    components:{
        Product
    }
}
</script>
<style scoped>
.goods{
    background-color: white;
    position: absolute;
    width: 320px;
    height: auto;
    top: 55px;
    left: -175px;
    box-shadow: 0px 1px 12px -3px;
    display: flex;
    justify-content: center;
    z-index: 1;
}
.goods:after{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    top: -5px;
    right: 116px;
    transform: rotate(45deg);
}
.goods:before{
    content: '';
    position: absolute;
    width: 50px;
    height: 60px;
    top: -60px;
    right: 100px;
}
.container{
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 25px;
}
/*Для товаров*/
.content{
    width: 100%;
    height: 100%;
    max-height: 400px;
}
.active{
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar{
    width: 0px;
}
/*--------------------------------*/

/*Для кнопок*/
.button{
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.btn{
    height: 50px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.continue{
    width: 99%;
    border: 2px solid #48689a;
    color: #48689a;
}
.continue:hover{
    width: 100%;
    border: 3px solid #466392;
    color: #466392;
    font-size: 15px;
}
.procced{
    width: 100%;
    background-color: #48689a;
    color: white;
}
.procced:hover{
    background-color: #466392;
    font-size: 15px;
}

/*--------------------------------*/
</style>