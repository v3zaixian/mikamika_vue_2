<template>
  <div id="productContainer">
    <div class="productContent">
      <div class="productDetail">
        <div class="detailLeft">
          <el-carousel :autoplay="false" trigger="click" indicator-position="outside" arrow="always">
            <el-carousel-item v-for="(img, index) in allProduct.allData[id-1].smallImgAll" :key="index">
              <PicZoom :previewImg="img" :zoomImg="img"></PicZoom>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="detailright">
          <div class="detailTitle">{{allProduct.allData[id-1].title}}</div>
          <div class="detailPrice">售价：<span>{{allProduct.allData[id-1].price}}</span></div>
          <div class="detailSpec">
            <span class="specTitle">产品规格</span>
            <div class="specItem" @click="cakeSpec($event)">
              <span class="active">1.5磅（14cm*14cm）</span>
              <span>2.5磅（17cm*17cm）</span>
              <span>3.5磅（21cm*21cm）</span>
              <span>5磅（25cm*25cm）</span>
            </div>
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
  import {mapState} from 'vuex'
  import PicZoom from './Zoom'
  export default {
    components:{PicZoom},
    data(){
      return{
        id:1,
        //图片是否选中
        selectIndex:0,
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
        this.$router.push('/purchase')
      }
    },
    mounted(){
      this.$nextTick(() => {
        let btns = document.querySelectorAll('.el-carousel__button')
        // console.log(btns)
        btns.forEach((btn,index)=>{
          btn.style.backgroundImage = `url(${this.allProduct.allData[this.id-1].smallImgAll[index]})`
          btn.style.backgroundSize = '100% 100%'
        })
      })
      this.id = this.$router.history.current.params.id
      // console.log(this.$router.history.current.params.id)
      // console.log(this.id)
    },

    computed:{
      ...mapState({
        allProduct:state => state.allProduct
      })
    },
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
        position relative
        .detailLeft
          width 417px
          height 467px
          position absolute
          top 0 
          left 0
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
            .el-carousel__indicators
              width 100%
              height 80px
              .el-carousel__indicator
                width 50px
                height 50px
                button
                  width 100%
                  height 100%
                &.is-active
                  button
                    border 2px solid red
        .detailright
          position absolute
          top 0 
          right 0
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
