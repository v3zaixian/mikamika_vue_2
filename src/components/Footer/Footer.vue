<template>
  <div>
    <div class="footerContainer">
      <div class="footerOut">
        <div class="footerInner">
          <transition name="titleScale">
            <div class="footerTitle" v-show="show">
              <div class="footerTitleOut">
                <div class="footerTitleInner">
                  <div class="footerTitleTop">
                    <strong>
                      <span>
                        OUR ADVANTAGE
                      </span>
                    </strong>
                  </div>

                  <div class="footerTitleAdvantage">
                    <div class="footerTitleBorderTop"></div>
                    <div class="footerTitleAdvantageBox">
                      <p>
                        <span>
                          我们的优势
                        </span>
                      </p>
                    </div>
                    <div class="footerTitleBorderBottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="footerBottom">
            <ul class="footerBottomCon">
              <div class="footerBottomConLi">
                <transition name="clock">
                  <li class="footerBottomLi" v-if="show">
                    <div class="sportPicture">
                      <div class="borderLayoutContent">
                        <a class="iconPicture">
                          <i class="iconfont icon-shizhong-copy-copy"></i>
                        </a>
                      </div>
                      <div class="typefaceContent">
                        <strong>
                          <span>10+</span>
                        </strong>
                      </div>
                      <div class="exprienceContent">
                        <p>
                          <span>
                            年行业经验
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                </transition> 
                <transition name="global" >
                  <li class="footerBottomLi" v-if="show">
                    <div class="sportPicture">
                      <div class="borderLayoutContent">
                        <a class="iconPicture">
                          <i class="iconfont icon-diqiu1"></i>
                        </a>
                      </div>
                      <div class="typefaceContent">
                        <strong>
                          <span>19+</span>
                        </strong>
                      </div>
                      <div class="exprienceContent">
                        <p>
                          <span>
                            原料进口国家
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                </transition>
                <transition name="person">
                  <li class="footerBottomLi" v-if="show">
                    <div class="sportPicture">
                      <div class="borderLayoutContent">
                        <a class="iconPicture">
                          <i class="iconfont icon-gerenzhongxin_xuanzhong"></i>
                        </a>
                      </div>
                      <div class="typefaceContent">
                        <strong>
                          <span>120+</span>
                        </strong>
                      </div>
                      <div class="exprienceContent">
                        <p>
                          <span>
                            建立合作关系
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                </transition> 
                <transition name="starks">
                  <li class="footerBottomLi" v-if="show">
                    <div class="sportPicture">
                      <div class="borderLayoutContent">
                        <a class="iconPicture">
                          <i class="iconfont icon-huoche1"></i>
                        </a>
                      </div>
                      <div class="typefaceContent">
                        <strong>
                          <span>6h</span>
                        </strong>
                      </div>
                      <div class="exprienceContent">
                        <p>
                          <span>
                            最快送达时间
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                </transition>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      show: false
    }
  },
  mounted(){
    if (window.performance.navigation.type == 1) {
        this.show = true
      }else{
        this.show = true
      }

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.clock-enter-active
  animation clockPrctrue 2s
@keyframes clockPrctrue {
  0%{
    transform translateX(-300px)
  }
  100%{
    transform translateX(0px)
  }
}
.global-enter-active
  animation globalPrctrue 1s
@keyframes globalPrctrue {
  0%{
    transform translateX(-300px)
  }
  100%{
    transform translateX(0px)
  }
}
.person-enter-active
  animation personPrctrue 1s
@keyframes personPrctrue {
  0%{
    transform translateX(300px)
  }
  100%{
    transform translateX(0px)
  }
}
.starks-enter-active
  animation starksPrctrue 2s
@keyframes starksPrctrue {
  0%{
    transform translateX(300px)
  }
  100%{
    transform translateX(0px)
  }
}
.footerContainer
   width 100%
   height 508px
   position relative
   .footerOut
      background url(//ntemimg.wezhan.cn/content/sitefiles/publicimages/2000000668.png) no-repeat
      background-size 100% 505px
      width 100%
      height 505px
      border-top 3px solid #000
      .footerInner
         width 100%
         height 505px
         .footerTitle
            width 451px
            height 93px
            position absolute
            left 50%
            top 45px
            margin-left -225px
            &.titleScale-enter-active
              animation footerTitle 1s
              @keyframes footerTitle
                0%
                  transform scale(0)
                100%
                  transform scale(1)
            .footerTitleOut
              .footerTitleInner
                .footerTitleTop
                  width 451px
                  height 50px
                  text-align center
                  line-height 50px
                  strong
                    span
                      font-size 30px
                      color #fff
                      font-weight 700
                .footerTitleAdvantage
                  .footerTitleBorderTop
                    height 1px
                    width 85px
                    background #666
                    position absolute
                    left 50%
                    top 61px
                    margin-left -145px
                  .footerTitleAdvantageBox
                    width 120px
                    height 20px
                    text-align center
                    line-height 20px
                    position absolute
                    left 50%
                    margin-left -60px
                    p
                      span
                        font-size 16px
                        color #ffffff
                  .footerTitleBorderBottom
                    height 1px
                    width 85px
                    background #666
                    position absolute
                    left 50%
                    top 61px
                    margin-left 60px
         .footerBottom
            padding-top 212px
            .footerBottomCon
              width 100%
              height 294px
              position absolute
              top 151px
              left 0
              .footerBottomConLi
                position absolute
                left 170px
                right 170px
                top 0
                display flex
                height 294px
                margin 0 20px
                width calc(100vw - 300px)
                overflow hidden
                .footerBottomLi
                  margin-left 30px
                  width 254px
                  .sportPicture
                    width 100%
                    height 294px
                    padding 46px
                    box-sizing border-box
                    .borderLayoutContent
                       width 100px
                       height 100px
                       margin 0 auto
                       position relative
                       border 1px solid #666
                       border-radius 50%
                       .iconPicture
                         width 51px
                         height 50px
                         display inline-block
                         position absolute
                         left 50%
                         top 50%
                         margin-left -25px
                         margin-top -25px
                         text-align center
                         line-height 50px
                         .iconfont
                            font-size 38px
                            color #fff
                    .typefaceContent
                       width 150px
                       height 52px
                       margin 18px auto 10px
                       text-align center
                       strong
                         span
                           font-size 48px
                           color #ffffff
                           font-weight 700
                    .exprienceContent
                       width 162px
                       height 22px
                       text-align center
                       p
                         span
                           color #ffffff
</style>
