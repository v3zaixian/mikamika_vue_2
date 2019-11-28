<template>
  <div>
    <div class="imgSxh">
      <div class="sxh_center">
        <img class="sxh_img" src="../../common/inages/sxhimg/mk05.png">
      </div>
      <div class="sxh_bottom">
        <img class="sxh_img" src="../../common/inages/sxhimg/mk04.png" @click="handleChangeImg($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  handleChangeImg($event){
    if($event.currentTarget.className=='sxh_img'){
        $event.currentTarget.className='sxh_img open';
    }else{
        $event.currentTarget.className='sxh_img';
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .sxh_center{
    margin-top: 30px;
  }
  .sxh_bottom{
    margin-top: 120px;
  }
  .sxh_img {
      /* display: block; */
      cursor: zoom-in;
      max-width: 860px;
      max-height: 350px;
  }
  .sxh_img.open{
      cursor: zoom-out;
      max-width: 1060px;
      max-height: 550px;
  }
  .imgSxh{
    width: 100%;
    display: inline-block;
    text-align: center
  }
</style>