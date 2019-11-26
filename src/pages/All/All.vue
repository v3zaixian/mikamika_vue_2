<template>
  <div id="allContainer">
    <div class="allNav">
      <ul class="navList" @click="checkNav($event)">
        <li class="navItem" :class="{active:nav===targetNav}" :data-nav="nav" v-for="(nav, index) in navs" :key="index">{{nav}}</li>
      </ul>
    </div>
    <div class="allTitle">
      <div class="backContent">CAKE DESSERT</div>
      <div class="beforeContent">{{targetNav}}</div>
    </div>
    <div class="allDisplay">
      <div class="allContent">
        <ul class="contentList">
          <li class="contentItem" @click="goDetail(data.id)" v-for="(data, index) in datas" :key="index">
            <div class="itemImgContainer">
              <img class="itemImg" :src="data.imgUrl" alt="">
            </div>
            <span class="itemTitle">{{data.title}}</span>
            <span class="itemPrice">{{data.price}}</span>
          </li>
        </ul>
      </div>
      <div class="allPages">
        <div class="pages">
          <el-pagination
          background
          layout="prev, pager, next"
          :page-size="21"
          :pager-count="5"
          :total="totalCount">
        </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        navs:['奶油系列','巧克力系列','慕斯系列','儿童系列','乳酪系列','拼接系列','裸·蛋糕','甄选系列','下午茶系列'],
        targetNav:'奶油系列',
        count:0, //蛋糕系列的数量，与navs相关
        totalCount:1,//显示页数
        datas:[
          {
            "id":1,
            "imgUrl":"http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055282.jpg",
            "title":"天蝎座",
            "price":"￥257.00"
          },
          {
            "id":1,
            "imgUrl":"http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055282.jpg",
            "title":"天蝎座",
            "price":"￥257.00"
          },
          {
            "id":1,
            "imgUrl":"http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055282.jpg",
            "title":"天蝎座",
            "price":"￥257.00"
          },
          {
            "id":1,
            "imgUrl":"http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11055282.jpg",
            "title":"天蝎座",
            "price":"￥257.00"
          }
        ]//蛋糕图片信息
      }
    },
    mounted(){
      //计算导航栏蛋糕类型宽度，平均分配
      let lis = document.querySelector('.navList').children
      this.count = lis.length
        lis.forEach((liItem,index)=>{
          liItem.style.width = 100/lis.length + '%'
        })
    }, 
    methods:{
      //选中导航栏的蛋糕类型
      checkNav($event){
        this.targetNav = $event.target.dataset.nav
        //请求服务器获得当前蛋糕系列内的产品信息

        this.totalCount = parseInt(44/21)
        console.log(this.count)
        console.log(this.totalCount)
      },
      goDetail(id){
        this.$router.push('/productinfo/'+id)
      }
    },
    computed:{
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #allContainer
    width 1000px
    margin 0 auto
    height 2612px
    min-height 400px
    position relative
    .allNav
      width 100%
      height 45px
      margin 0 auto
      background pink
      .navList
        width 1000px
        display flex
        .navItem
          font: 12px/1 "Microsoft YaHei","微软雅黑","arial","tahoma","MicrosoftJhengHei";
          
          background rgba(249,105,118,1)
          line-height 45px
          text-align center
          color #ffffff
          font-weight bold
          cursor pointer 
          &:hover
            background rgba(229,91,99,1)
          &.active
            background rgba(229,91,99,1)
    .allTitle
      width 1000px
      height 112px
      margin-top 44px
      .backContent
        text-align center
        font-size 42px
        font-family "Microsoft YaHei"
        line-height 68px
        color #dddddd
        font-weight bold
      .beforeContent
        height 41px
        text-align center
        position absolute
        top 120px
        left 50%
        transform translateX(-50%)
        font-size 24px
        font-family Microsoft YaHei
    .allDisplay
      width 1020px
      height 2385px
      margin 0 auto 
      .allContent
        width 100%
        height 2315px
        .contentList
          width 100%
          height 100%
          overflow hidden
          .contentItem
            float left
            width 320px
            height 313px
            margin 17px 0 0 20px
            display flex
            flex-direction column
            align-items center
            cursor pointer
            .itemImgContainer
              height 224px
              width 320px
              overflow hidden
              .itemImg
                width 100%
                height 100%
                transition all 200ms linear
                &:hover
                  transform scale(1.2)
            .itemTitle
              height 28px
              margin-top 5px 0 20px 0
              font-size 15px
              color #b45f06
              &:hover
                color #f68b1e
            .itemPrice
              height 36px
              font-size 15px
              color #E43939
              line-height 36px
      .allPages
        width 100%
        height 70px
        padding 20px 0
        box-sizing border-box
        background pink
        .pages
          display inline-block
          margin-left 50%
          transform translateX(-50%)
</style>
