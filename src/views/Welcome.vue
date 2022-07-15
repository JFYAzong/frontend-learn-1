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
        <div class="text_huodong">活动安排</div>
    </div>
    <div class="border_tongzhi">
        <div class="icon_tongzhi"></div>
        <div class="text_tongzhi">通知公告</div>
    </div>
    <div class="border_fengcai">
        <div class="icon_fengcai"></div>
        <div class="text_fengcai">活动风采</div>
    </div>
    <div class="border_qiandao">
        <div class="icon_qiandao"></div>
        <div class="text_qiandao">签到打卡</div>
    </div>
    <div class="border_hujiao">
        <div class="icon_hujiao"></div>
        <div class="text_hujiao">呼叫客服</div>
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
.text_huodong{
    position: absolute;
    top: 89px;
    left: 17px;
    width: 96px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #CC1E1E;
    line-height: 33px;
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
}
.border_tongzhi{
    position: absolute;
    top: 785px;
    left: 301px;
    width: 131px;
    height: 134px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #AF3333;
}
.icon_tongzhi{
    position: absolute;
    background: url(../assets/活动安排.png);
    background-size: 100% 100%;
    width: 72px;
    height: 72px;
    top: 15px;
    left: 29px;
}
.text_tongzhi{
    position: absolute;
    top: 89px;
    left: 17px;
    width: 96px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #CC1E1E;
    line-height: 33px;
    -webkit-background-clip: text;
}
.border_fengcai{
    position: absolute;
    top: 785px;
    left: 474px;
    width: 131px;
    height: 134px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #AF3333;
}
.icon_fengcai{
    position: absolute;
    background: url(../assets/活动安排.png);
    background-size: 100% 100%;
    width: 72px;
    height: 72px;
    top: 15px;
    left: 29px;
}
.text_fengcai{
    position: absolute;
    top: 89px;
    left: 17px;
    width: 96px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #CC1E1E;
    line-height: 33px;
    -webkit-background-clip: text;
}
.border_qiandao{
    position: absolute;
    top: 785px;
    left: 647px;
    width: 131px;
    height: 134px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #AF3333;
}
.icon_qiandao{
    position: absolute;
    background: url(../assets/活动安排.png);
    background-size: 100% 100%;
    width: 72px;
    height: 72px;
    top: 15px;
    left: 29px;
}
.text_qiandao{
    position: absolute;
    top: 89px;
    left: 17px;
    width: 96px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #CC1E1E;
    line-height: 33px;
    -webkit-background-clip: text;
}
.border_hujiao{
    position: absolute;
    top: 785px;
    left: 820px;
    width: 131px;
    height: 134px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #AF3333;
}
.icon_hujiao{
    position: absolute;
    background: url(../assets/活动安排.png);
    background-size: 100% 100%;
    width: 72px;
    height: 72px;
    top: 15px;
    left: 29px;
}
.text_hujiao{
    position: absolute;
    top: 89px;
    left: 17px;
    width: 96px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #CC1E1E;
    line-height: 33px;
    -webkit-background-clip: text;
}
.last{
    position: absolute;
    top: 1010px;
    left: 115px;
    width: 850px;
    height: 826px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5000);
    border-radius: 16px;
}
</style>
