<template>
    <div class="container">
        <div class="top">
            <div class="content">
                <div class="weshop">
                    <div class="text-logo">weshop</div>
                    <div class="text">
                        <p>USA most-loved online fashion store featuring new deals.</p>
                        <p>When it comes to trend, we all love being in it — Seeping every bit of it in WESHOP.com </p>
                    </div>
                </div>
            </div>
            <div class="content">
                    <div class="support">
                        <h5>SUPPORT</h5>
                        <p>How to Order?<br/>
                        Payments<br/>
                        Assistance<br/>
                        Delivery</p>
                    </div>
            </div>
            <div class="content">
                    <div class="duties">
                        <h5>DUTIES</h5>  
                        <p>Terms and Conditions<br/>
                        Shop Policy<br/>
                        Contact Us</p>
                    </div>
            </div>
            <div class="content">
                <div class="insta-feed">
                    <h5>INSTAGRAM FEED</h5>
                    <div class="for-img">
                        <div class="img">
                            <img src="https://sun9-20.userapi.com/c857016/v857016902/d0916/unoNMEedTfg.jpg" alt="">
                        </div>
                        <div class="img">
                            <img src="https://sun9-20.userapi.com/c857016/v857016902/d0916/unoNMEedTfg.jpg" alt="">
                        </div>
                        <div class="img">
                            <img src="https://sun9-20.userapi.com/c857016/v857016902/d0916/unoNMEedTfg.jpg" alt="">
                        </div>
                        <div class="img">
                            <img src="https://sun9-20.userapi.com/c857016/v857016902/d0916/unoNMEedTfg.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="for-card-box">
                        <img src="../../../public/logo brands/card/business-and-finance.svg" alt="">
                    </div>
                    <div class="for-card-box">
                        <img src="../../../public/logo brands/card/credit-card.svg" alt="">
                    </div>
                    <div class="for-card-box">
                        <img src="../../../public/logo brands/card/kiwi.svg" alt="">
                    </div>
                    <div class="for-card-box">
                        <img src="../../../public/logo brands/card/money-card.svg" alt="">
                    </div>
                    <div class="for-card-box">
                        <img src="../../../public/logo brands/card/paypal.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="bot">
            <div class="social">
                <div class="pic facebook"><img src="../../../public/logo brands/social/facebook.svg" alt=""></div>
                <div class="pic twitter"><img src="../../../public/logo brands/social/brands-and-logotypes.svg" alt=""></div>
                <div class="pic in"><img src="../../../public/logo brands/social/logotype (1).svg" alt=""></div>
                <div class="pic youtube"><img src="../../../public/logo brands/social/videos.svg" alt=""></div>
                <div class="pic googleplus"><img src="../../../public/logo brands/social/logotype.svg" alt=""></div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {}
</script>

<style scoped>

.container{
    position: relative;
    height: 445px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
}
.content{
    width: 260px;
    height: 220px;
}
.top{
    position: relative;
    width: 1140px;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center ;
}
.text-logo{
    font-size: 35px;
    font-family: 'Oswald DemiBold';
    color: #48689a;
    line-height: 39px;
}
.text{
    font-size: 14px;
}
.weshop{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    top: 15px;

}
.support{
    position: relative;
    left: 100px;
}
.support p, .duties p{
    font-size: 13px;
}
.duties{
    position: relative;
    left: 60px;
}
.for-img{
    display: flex;
    justify-content: space-between;
}
.img{
    width: 50px;
    height: 50px;
    background-color: gray;
}
.card{
    position: relative;
    width: 100%;
    height: 75px;
    border-top: 1px solid rgba(139, 139, 139, 0.5);
    border-bottom: 1px solid rgba(139, 139, 139, 0.5);
    top: 15px;
    display: flex;
    align-items: center;
}
.for-card-box{
    width: 80px;
    height: 30px;
}
.bot{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.social{
    width: 250px;
    height: 100%;
    border-bottom: 1px solid rgba(139, 139, 139, 0.5);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.pic{
    height: 20px;
    width: 20px;
}
img{
    width: 100%;
    height: 100%;
}
</style>