<template>
  <div class="Container">
    <el-carousel :class="[swiperContainer]" :interval="1000" arrow="always" indicator-position="none">
      <el-carousel-item class="el-carousel__item" v-for="(item,index) in dataimg" :key="index">
        <img class="swiperImg" :src="item.item_src" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
     data(){
      return {
        dataimg:[
               {
                item_src:require('../../common/inages/ydsomg/11139934.jpg'),
                },
                {
                item_src:require('../../common/inages/ydsomg/11537647.jpg'),
                },
                {
                item_src:require('../../common/inages/ydsomg/11537646.jpg'),
                }   
        ],
        swiperContainer:"swiperContainer"
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.Container
  width 100%
  height 596px
    .swiperContainer
      height 596px
      width 1669px
      .el-carousel__item
        &:nth-child(2n) 
          background-color: #d3dce6
        &:nth-child(2n+1) 
          background-color: #d3dce6
        .swiperImg
          width 100%
          height 257px
          display block
</style>
