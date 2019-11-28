<template>
  <div>
      <div class="box">
          <div class="box_a">
              <span class="about">
                ABOUT US
                    <span class="about_a">
                        关于我们
                    </span>
              </span>
              <div class="left_img">
              <img src="../../common/inages/ydsomg/10887466.png" alt="">
              </div>
              <div class="oo"></div>
              <div class='about_content'>
                  <div>米卡米卡（北京）食品有限公司成立于2010年6月，为北京地区的消费者提供欧式蛋糕预订、配送服务。</div>
                  <div>400电话，微博，微信客服全天在线，提供丰富的后续服务和保障，您选择了我们，我们一定会对您负责到底！</div>
                  <div> 米卡米卡蛋糕的配送范围是北京城区，外至六环外10公里。</div>
                  <br>
                  <br>
                  <div>我们的产品：</div>

                  <div>欧式蛋糕：38款欧式蛋糕、8款下午茶蛋糕，19个国家的优质原料，拒绝繁复、色彩膨胀的油脂造型，绝不添加</div> 
                  <div>任何人工色素等非天然原料。</div>
                  <div>手工饼干：3款饼干，独家研发，全国配送。</div>
                  <br>
                  <br>
                  <div>为什么选择我们：</div>
                  <div>产品丰富：不同口味的蛋糕满足您的味蕾需求，更有儿童款，爱人款等更佳选择。</div>
                  <div>安全健康：纯天然乳脂奶油，坚决杜绝植物人造奶油，绝不添加色素，香精，防腐剂。 </div>
                  <div>省心快捷：在线预订，约定时间送货上门，足不出户即可享受顶级美味。</div>
                  <div>支付方便：在线支付，货到付款，刷卡现金都可以。</div>
                  <div>量身定制：可以自定义巧克力生日牌，贺卡，等祝福内容。</div>
                  <div>售后保障：售中、售后跟踪服务，购物过程中出现任何问题，我们负责到底，使您的权益得到切实保障。</div>
              </div>
      </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted(){
      scrollTo(0,0)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .box
    width 1669px
    height 800px
    // background red
    display flex
    justify-content center
    .box_a
      width 1000px
      height 591px
      // background yellow
      position relative
      .about
        display block
        width 1000px
        height 42px
        // background black
        text-align center
        font-size 42px
        font-weight bold
        color #ddd
        position absolute
        top 40px
        .about_a
          display block
          width 360px
          height 24px
          // background yellow
          position absolute
          top 28px
          left 317px
          font-size 24px
          color #000
          font-weight 500
      .left_img
          position absolute
          top 140px
          left 20px
          width 320px
          height 320px
          border-top solid 3px #f68b1e
          border-left solid 3px #f68b1e
          border-right solid 3px #f68b1e
          border-bottom solid 3px #f68b1e
        img
          display block
          top 28px
          left -159px
          position absolute
          width 456px
          height 292px
          // background yellow
          z-index -10
      .about_content
          position absolute
          width 647px
          height 392px
          // background red
          top 215px
          left 346px
          font-size 13px
          div
             width 647px
             height 18px
             color #666
      .oo
          width 3px
          height 260px
          background white
          position absolute
          top 180px
          left  343px


</style>
