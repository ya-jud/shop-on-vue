<template>
  <div class="homepage">
    <div class="header">
      <div class="border prev">P<br/>R<br/>E<br/>V</div>
      <div class="container">
        <div class="text">
          <div class="top-text">FASHION IS NOTHING</div>
          <div class="bot-text">
            BUT <span class="word">MISCHIEF</span>
          </div>
          <div class="btn">
            <div>SHOP NOW</div>
        </div>
        </div>
      </div>
      <div class="border next">N<br/>E<br/>X<br/>T</div>
    </div>
    <div class="content">
      <div class="goods">

      </div>
      <div class="new-collection">
        <div class="title"></div>
        <div class="for-btn">
          <div class="btn-col"></div>
          <div class="btn-col"></div>
          <div class="btn-col"></div>
          <div class="btn-col"></div>
          <div class="btn-col"></div>
        </div>
        <div class="for-goods">
          <div class="goods-col"></div>
          <div class="goods-col"></div>
          <div class="goods-col"></div>
          <div class="goods-col"></div>
          <div class="goods-col"></div>
          <div class="goods-col"></div>
          <div class="goods-col"></div>
          <div class="goods-col"></div>
        </div>
      </div>
      <div class="personal-assistent">

      </div>
      <div class="featured">

      </div>
      <div class="latest-news">

      </div>
      <div class="footer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.homepage{
  position: relative;
  height: auto;
  width: 100%;
  font-family: "Font Awesome 5 Free", RobotoSlab;
}
.header{
  position: relative;
  height: 940px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.container{
  width: 1140px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.border{
  color: #48689a;
}
.text{
  width: 850px;
}
.top-text{
  font-size: 40px;
  font-weight: 900;
}
.bot-text{
  font-size: 30px;
  font-weight: 500;
}
.word{
  color: #48689a;
}
.btn{
  width: 170px;
  height: 50px;
  background-color: #48689a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40px;
  position: relative;
}
.btn:hover{
  background-color: #466392;
  font-size: 18px;
}
.content{
  height: auto;
  width: 100%;
}
.goods{
  height: 1210px;
  width: 100%;
  background-color: #f7f7f7;
}
.new-collection{
  height: 970px;
  width: 100%;
}

.personal-assistent{
  height: 600px;
  width: 100%;
  background-color: #f7f7f7;
}
.featured{
  height: 1060px;
  width: 100%;
}
.latest-news{
  height: 700px;
  width: 100%;
  background-color: #f7f7f7;
}
.footer{
  height: 970px;
  width: 100%;
}
</style>