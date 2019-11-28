<template>
  <div id="main">
    <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <img src="../../common/inages/ydsomg/10860110.png" alt="">
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button plain round size="mini" :class="{active:$route.path === '/shouye'}" @click="goPath('/shouye')">
            首页
          </el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button plain round size="mini" :class="{active:$route.path === '/qbcp'}" @click="goPath('/qbcp')">
            全部产品
          </el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button plain round size="mini" :class="{active:$route.path === '/purchase'}" @click="goPath('/purchase')">
            购买方式
          </el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button plain round size="mini" :class="{active:$route.path === '/cooperation'}" @click="goPath('/cooperation')">
            企业合作
          </el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button plain round size="mini" :class="{active:$route.path === '/guanyu'}" @click="goPath('/guanyu')">
            关于我们
          </el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button plain round size="mini" :class="{active:$route.path === '/shopsmap'}" @click="goPath('/shopsmap')">
            分店信息
          </el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-button plain round size="mini" :class="{active:$route.path === '/bgvideo'}" @click="goPath('/bgvideo')">
            材料展示
          </el-button>
        </div>
      </el-col>
      <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-button plain round size="mini" :class="{active:$route.path === '/login'}" @click="goPath('/login')">
              登录
            </el-button>
          </div>
      </el-col>
    </el-row>
    <div id="box">
      <div class="box-right box_a iconfont icon-dianhua1">
        <li class="mouse_a">
          <span>客服电话:</span>
          <span class="ipone">400-606-7757</span>
        </li>
      </div>
      <div class="box-right box_b iconfont icon-zhongbiao">
        <li class="mouse_a">
          <span>服务时间</span>
          <span class="ipone">周一至周日 08:00-20:00</span>
        </li>
      </div>
      <div class="box-right box_c iconfont icon-ico">
        <li class="mouse_a">
          <div class="erweima">
            <img src="../../common/inages/header/11068245.gif" alt="">
          </div>
        </li>
      </div>
      <div @click="toTop" class="box-right box_d iconfont  icon-jiantou">
        <li class="mouse_a"></li>
      </div>
    </div>
  </div>
    
    <!-- </el-main> -->
    

</template>

<script>
export default {
  
  methods: {
    goPath(path){
      this.$route.path !== path && this.$router.replace(path)
    },

    toTop(){
      //scrollTo(0,0)
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
*
  padding 0
  margin 0
  .active
    background: #FFF;
    border-color: #409EFF;
    color: #409EFF;
  #main
    // display flex
    // justify-content center
    width 100%
    text-align center
    min-width 300px
    padding 0 50px
    height 40px
    line-height  40px
    overflow hidden
    box-sizing border-box
    //margin-left 300px
    img 
      width 103px
      height 46px
    #box
      width 61px
      height 251px
      position fixed
      z-index 99
      top 100px
      right 0
      .box-right
        background-color rgba( 230, 145, 56, 0.65)
        width 60px
        height 60px
        font-size 28px
        text-align center
        line-height 61px
        color white
        border-left solid 1px white
        border-bottom solid 1px white
        position relative
        .mouse_a
          display none 
        &:hover 
          background-color rgba(122, 189, 232,1)
          .mouse_a
            display block
        &:nth-child(1):hover
          .mouse_a
            font-size 12px
            position absolute
            top 0
            width 200px 
            height 63px
            background-color rgba(122, 189, 232,1) 
            right 62px
            line-height 30px
            span
              position absolute
              right 120px
              top 0px
            .ipone
              width 200px
              position absolute
              right 30px
              top 25px
              
            // display flex
            // align-items flex-end
        &:nth-child(2):hover
          .mouse_a
            font-size 12px
            position absolute
            top 0
            width 200px 
            height 63px
            background-color rgba(122, 189, 232,1) 
            right 62px 
        &:nth-child(3)
          &:hover
            .mouse_a
              position absolute
              top 0
              width 200px 
              height 63px
              
              right 62px
              .erweima
                width 200px
                height 160px
                position absolute
                top -80px
                img   
                  width 195px
                  height 155px
    
    

</style>

