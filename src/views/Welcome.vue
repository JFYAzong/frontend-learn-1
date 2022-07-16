<template>
  <div class="box">
    <div class="tittle">Xx局信息系统</div>

    <div class="swiper">
      <div class="swiper__item"></div>
      <div class="swiper__icon"></div>
      <div class="swiper__text">党建风采</div>
    </div>

    <div class="button-box">
      <div class="button">
        <div class="button__icon"></div>
        <div class="button__text">活动安排</div>
      </div>
      <div class="button">
        <div class="button__icon"></div>
        <div class="button__text">活动安排</div>
      </div>
      <div class="button">
        <div class="button__icon"></div>
        <div class="button__text">活动安排</div>
      </div>
      <div class="button">
        <div class="button__icon"></div>
        <div class="button__text">活动安排</div>
      </div>
      <div class="button">
        <div class="button__icon"></div>
        <div class="button__text">活动安排</div>
      </div>
    </div>

    <div class="last">
      <div class="last__text">活动风采</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
};
</script>

<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url("../assets/background.jpg");
  background-size: 100% 100%;
  overflow: hidden;

  .tittle {
    position: absolute;
    top: 155px;
    left: 0;
    right: 0;

    font-size: 64px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #e00000;
    line-height: 90px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }

  .swiper {
    position: absolute;
    top: 274px;
    left: 115px;
    width: 850px;
    height: 434px;
    background: #f0e0e0;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    overflow: hidden;

    &__item {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 95px;
      width: 850px;
      height: 339px;
      background: #ffffff;
    }

    &__icon {
      position: absolute;
      background: url(../assets/icon.png);
      background-size: 100% 100%;
      width: 42px;
      height: 43px;
      top: 362px;
      left: 626px;
    }

    &__text {
      position: absolute;
      top: 361px;
      left: 678px;
      width: 144px;
      height: 50px;
      font-size: 36px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #e13131;
      line-height: 50px;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
      -webkit-background-clip: text;
      /* -webkit-text-fill-color: transparent; */
    }
  }

  .button-box {
    position: absolute;
    top: 785px;
    left: 128px;
    right: 128px;
    // background: red;
    display: flex;
    justify-content: space-between;

    .button {
      position: relative;
      width: 131px;
      height: 134px;
      background: #ffffff;
      border-radius: 15px;
      border: 2px solid #af3333;

      &__icon {
        position: absolute;
        background: url(../assets/活动安排.png);
        background-size: 100% 100%;
        width: 72px;
        height: 72px;
        top: 15px;
        left: 29px;
      }

      &__text {
        position: absolute;
        top: 89px;
        left: 17px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: #cc1e1e;
        line-height: 33px;
        -webkit-background-clip: text;
      }
    }
  }

  .last {
    position: absolute;
    top: 1010px;
    left: 115px;
    width: 850px;
    height: 826px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    border-radius: 16px;

    &__text {
      position: absolute;
      top: 32px;
      left: 329px;
      font-size: 48px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #e13131;
      line-height: 67px;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5),
        0px 2px 2px rgba(0, 0, 0, 0.5);
      -webkit-background-clip: text;
    }
  }
}
</style>
