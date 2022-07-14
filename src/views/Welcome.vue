<template>
   <div class="global">
    <div class="tittle">桐庐老干部局信息系统</div>
    <div class="border_huodong">
        <div  class="icon_huodong"></div>
    </div>
    <div class="swiper"></div>
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
    background-color: aqua;
    top: 274px;
    left: 115px;
    width: 850px;
    height: 434px;
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
