<template>
  <div id='shouye'>
    <el-carousel :interval="1000" arrow="always" height="596px" width="1669px" indicator-position="none">
      <el-carousel-item class="el-carousel__item" v-for="(item,index) in dataimg" :key="index">
        <img :src="item.item_src" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="ABOUT_row">
      <div class="ABOUT">
        <span class="ABOUT_span">
          ABOUT US
          <p>
            新鲜制作
          </p>
          <h6 class="ABOUT_mika">
            米卡米卡采用0库存订单式生产方式，下单后根据订单制作蛋糕，当日生产
            <br>
            <br>
            <br>
            当日配送。
            严选优质食材、精心制作，全程冷链配送，确保蛋糕新鲜美
          </h6>
          <el-button class="btn" type="warning" plain @click="goPath">
            <span @click="goPath">查看更多</span>
          </el-button>
        </span>
      <div class="right_img">
        <img class="img_right" src="../../common/inages/ydsomg/10864042.png" alt="321">
        <img class="img_left" src="../../common/inages/ydsomg/10864014.png" alt="123">
      </div>
      </div>
    </div>
      <div class="jingxuan">
        <div class="jx_row">
          <div class="jx_img">
            <img src="../../common/inages/ydsomg/10863711.png" alt="">
          </div>
          <div class="content">
            <span class="fm">
                FEATURED MATERIALS
            </span>
            <span class="jx">
              精选材料
            </span>
            <span class="jx_next">
              每一款产品都来自烘焙大师的创意心思、熟稔技艺以及他们对烘焙艺术的专注身心投入。为了专门迎合中国消费者的口感偏好，这些产品不仅继承了欧式甜品的品味和品质，同时保留了中国消费者喜爱的韧性，让食客高品质健康甜品的同时<br><p>获得更丰富的满足感。</p><br>
              伴随中国市场发布的全新产品系列，注重对亚洲口味的发现，甄选例如比利时黑巧克力、新西兰乳脂奶油、法国可可粉、意大利马斯卡布尼奶酪等19国优质进口原料，经过严格的全球筛选,所有原料都在最恰当的时机被采购-只有最优秀的<p>原料才能进入米卡米卡的厨房</p>
            </span>
            <el-button class="gd" type="warning" plain>
              <span @click="goPath">查看更多</span>
            </el-button>
          </div>
        </div>
      </div>
      <div>
        分页
      </div>
      <footer class="foot">
        <div class="foot_img">
          <img src="../../common/inages/ydsomg/-6700.png" alt="">
        </div>
          <div class="foot_p">
            <p>精选19国优质原料精心烘焙而成</p>
          </div>
          <div class="footer_n">
            <div class="footer_row">
              <h3>
                联系我们
              </h3>
              <span> 联系电话：400-606-7757 <br></span>
              <span> 传真：010-82817155<br></span>
              <span>邮箱：micamika@micamika.com<br></span>   
              <span> 地址：北京市朝阳区望京街道嘉美中心20层<br></span> 
              <span class="banquan">
                版权所有：米卡米卡（北京）食品有限公司  京ICP备：12021305号-2号  
              </span>
            </div>
          </div>
      </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components:{
  },
  data(){
    return {
      dataimg:[
        {
        item_src:require('../../common/inages/ydsomg/10677130.jpg'),
        },
        {
        item_src:require('../../common/inages/ydsomg/10677129.jpg'),
        }    
      ]
    }
  },

  methods: {
    goPath(){
      this.$router.replace('/guanyu')
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
  #shouye
    width 100%
    height 2000px
    .el-carousel__item
      &:nth-child(2n) 
        background-color: #d3dce6
      &:nth-child(2n+1) 
        background-color: #d3dce6    
    .ABOUT_row
      height 450px
      width 100%
      // position relative
      display flex
      justify-content center
      .ABOUT
        width 1000px
        height 450px
        display flex
        align-content center
        .ABOUT_span 
          font-size 42px
          font-weight:bold
          color #dddddd
          display block
          width 500px
          height 56px
          text-align center
          margin-top 60px
          position relative
        p
          font-size 24px
          width 96px
          height 31px
          position absolute
          top 25px
          left 205px
          color black
          font-weight normal
        .ABOUT_mika
          position absolute
          top 91px
          left 7px
          width 500px
          height 230px
          font-size 15px
          color #434A54
        .btn
          position absolute
          top 269px
          left 190px
          width 135px
          height 40px    
       
      .right_img
        position relative
        width 500px
        height 450px
        // background red
        .img_left
          top 60px
          left 60px
          position absolute
          width 220px
          height 340px
          display inline-block
        .img_right
          top 60px
          left 180px
          position absolute
          width 220px
          height 340px
    .jingxuan
      position absolute
      width 100%
      height 480px
      background #EEE   
      top 1050px
      display flex
      justify-content center
      .jx_row
        width 1000px
        height 480px
        display flex
        .jx_img
          width 500px
          height 480px
          // background yellow
          img
            width 500px
            height 480px
        .content
          width 500px
          height 480px
          position relative
          .fm
            width 486px
            height 56px
            color #ddd
            position absolute
            top 80px
            font-size 42px
            font-weight bold 
            margin-left 6px
          .jx
            position absolute
            top 105px
            width 96px
            height 31px
            font-size 24px
            left 188px
            font-weight:400
          .jx_next
            color #555555
            width 490px
            font-size 14px
            position absolute
            top 145px
            p
              margin-left 150px
          .gd
            width 121px
            height 36px
            position absolute
            top 371px
            left 187px
    .foot
        width 100%
        height 475px
        // background red
        position absolute
        display flex
        align-items flex-start 
        top 1531px
      .foot_img
        position relative
        img
          width 100%
          height 154px
      .foot_p
        width 100%
        height 60px
        background #f68b1e
        position absolute 
        display flex
        justify-content center
        align-items center
        top 154px
        p
          width 284px
          height 26px
          font-size 20px
          color white
      .footer_n
        position absolute
        display  flex
        justify-content center 
        top 214px
        width 100%
        height 255px
        // background red
        background-color: rgb(68, 68, 68)
        .footer_row
          width 1000px
          height 255px
          color #ccc
          // background red
          h3
            color #f68b1e
            width 360px
            height 50px
            line-height 40px
            margin-top 20px
          span 
            display block
            width 100%
            height 30px
          .banquan
            display block
            width 100%
            height 30px
            margin-top 25px
 
</style>
