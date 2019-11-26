<template>
  <div id="productContainer">
    <div class="productContent">
      <div class="productDetail">
        <div class="detailLeft">
          <el-carousel indicator-position="none" arrow="always">
            <el-carousel-item v-for="(img, index) in details.imgs" :key="index">
              <img :src="img" alt="">
            </el-carousel-item>
          </el-carousel>
          <div class="slide">
            <el-carousel type="card" indicator-position="none" arrow="always">
              <el-carousel-item v-for="(img, index) in details.imgs" :key="index">
                <img :src="img" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="detailright">
          <div class="detailTitle">天蝎座</div>
          <div class="detailPrice">售价：<span>￥257.00</span></div>
          <div class="detailSpec">
            <span class="specTitle">产品规格</span>
            <div class="specItem" @click="cakeSpec($event)">
              <span class="active">1.5磅（14cm*14cm）</span>
              <span>2.5磅（17cm*17cm）</span>
              <span>3.5磅（21cm*21cm）</span>
              <span>5磅（25cm*25cm）</span>
            </div>
            <div></div>
          </div>
          <div class="detailHor"></div>
          <div class="detailBuy">
            <div @click="goOperations" class="buy">立即购买</div>
          </div>
        </div>
      </div>
      <div class="productInfo">
        <div class="infoTitle">
          <span>产品详情</span>
        </div>
        <div class="info">
          <img v-for="(infoImg, index) in infos.imgs" :key="index" :src="infoImg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        //产品信息
        details:{
          id:1,
          imgs:[
            "http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055282.jpg",
            "http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055270.jpg",
            "http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055269.jpg",
            "http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055268.jpg",
          ]
        },
        //下方产品详情图片
        infos:{
          id:1,
          imgs:[
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055271.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055272.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055273.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055274.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055275.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055276.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055277.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055278.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055279.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055280.jpg",
            "https://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055281.jpg",
          ]
        }
      }
    },
    methods:{
      //蛋糕规格选择
      cakeSpec(e){
        if(e.target.nodeName === 'SPAN'){
          if(this.targetClass){
            this.targetClass.className = ''
          }else{
            document.querySelector('.specItem').children[0].className = ''
          }
          e.target.className = 'active'
          this.targetClass = e.target
        }
      },
      //点击立即购买跳转页面
      goOperations(){
        this.$router.push('/rhgm')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #productContainer
    margin-top 35px
    width 100%
    background rgb(245, 245, 245)
    .productContent
      width 960px
     
      min-height 200px
      margin 0 auto
      .productDetail
        width 100%
        height 467px
        overflow hidden
        .detailLeft
          width 417px
          height 467px
          float left
          display flex
          flex-direction column
          .el-carousel
            width 100%
            height 100%
            .el-carousel__container
              width 100%
              height 387px
              .el-carousel__item
                img 
                  width 100%
                  height 100%
          .slide
            width 100%
            height 80px
            background pink  
            .el-carousel
              width 100%
              height 100%
              .el-carousel__container
                width 100%
                height 100%
                .el-carousel__item
                  width 36px
                  height 36px
                  img 
                    width 100%
                    height 100%
        .detailright
          float right 
          width 500px
          height 467px
          .detailTitle
            width 100%
            height 34px
            font-size 24px
            font-weight 700
            color #404040
          .detailPrice
            margin-top 60px
            height 106px
            color #999
            font-size 12px
            span 
              font-size 24px
              color #E43939
          .detailSpec
            width 100%
            height 114px
            .specTitle
              width 100%
              height 34px
              color #999
              font-size 12px
            .specItem
              width 100%
              margin-top 10px
              display flex
              flex-wrap wrap
              span
                width 29%
                border 1px solid #ddd
                color #333
                font-size 12px
                text-align center
                height 36px
                line-height 36px
                margin 0 5px 5px 0
                background #fff
                cursor pointer
                &:hover
                  border-color red
                &.active
                  border-color red
          .detailHor
            height 20px
            width 100%
            border-bottom 1px dashed rgba(221,221,221,1)
          .detailBuy
            width 100%
            height 38px
            margin-top 20px
            position relative
            .buy
              width 135px
              height 38px
              border-radius 20px
              background rgb(230, 145, 56)
              position absolute
              right 60px
              color #ffffff
              text-align center
              line-height 38px
              cursor pointer
              font-size 14px
              &:hover
                background #18C484
                font-size 12px
      .productInfo
        width 930px
        margin 0 auto
        
        .infoTitle
          width 100%
          background #f5f7fa
          border-bottom 2px solid #e43939
          span 
            display inline-block
            width 170px
            height 40px
            background #e4393c;
            color #ffffff
            font-size 12px
            text-align center
            line-height 40px
        .info
          width 100%
          img 
            width 100%
</style>
