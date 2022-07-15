<template>
   <div class="global">
    <div class="tittle">桐庐老干部局信息系统</div>
    <div class="swiper">
        <div class="swiper_border"></div>
        <div class="swiper_icon"></div>
        <div class="swiper_text">党建风采</div>
    </div>
    <div class="border_huodong">
        <div  class="icon_huodong"></div>
    </div>
    <div class="last"></div>
   </div>
</template>

<script>
export default {
    name:'Welcome'
}
</script>

<style scoped>
.global{

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url("../assets/background.jpg");
  background-size: 100% 100%;
  overflow: hidden;
}
.tittle{
    width: 640px;
    height: 90px;
    font-size: 64px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #E00000;
    line-height: 90px;
    text-shadow: 0px 2px 4px rgba(0,0,0,0.5000);
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    position: absolute;
    top: 155px;
    left: 221px;
}
.swiper{
    position: absolute;
    top: 274px;
    left: 115px;
    width: 850px;
    height: 434px;
    background: #F0E0E0;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5000);
    border-radius: 16px;
}
.swiper_border{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 95px;
    width: 850px;
    height: 339px;
    background: #FFFFFF;
}
.swiper_icon{
    position: absolute;
    background: url(../assets/icon.png);
    background-size: 100% 100%;
    width: 42px;
    height: 43px;
    top: 362px;
    left: 626px;
}
.swiper_text{
    position: absolute;
    top: 361px;
    left: 678px;
    width: 144px;
    height: 50px;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #E13131;
    line-height: 50px;
    text-shadow: 0px 2px 2px rgba(0,0,0,0.5000);
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
}
.border_huodong{
    position: absolute;
    top: 785px;
    left: 128px;
    width: 131px;
    height: 134px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #AF3333;
}
.icon_huodong{
    position: absolute;
    background: url(../assets/活动安排.png);
    background-size: 100% 100%;
    width: 72px;
    height: 72px;
    top: 15px;
    left: 29px;
}
.last{
    position: absolute;
    background-color: yellow;
    top: 1010px;
    left: 115px;
    width: 850px;
    height: 826px;
}
</style>
