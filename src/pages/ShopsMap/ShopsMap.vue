<template>
  <div id="shopsCities">
    <div class="mapTitle">
      <h3>米卡门店</h3>
      <div class="mapContainer">
        <img class="chinaMap" src="../../common/inages/city/mikamap.jpg" alt="">
      </div>
    </div>
    <div class="shopsContainer">
      <div class="shopsHeader">
        <div class="shopstitle">
          米卡米卡全国省市分布
        </div>
        <!-- 下拉框 -->
        <div class="shopsOption">
          <table>
            <tbody>
              <tr>
                <td>
                  <!-- 选择省份 -->
                  <select class="province" ref="province" v-model="provinceValue">
                    <option style="font-weight:bold" value="0">- 选择省份 -</option>
                  </select>
                    <!-- 选择城市 -->
                  <select id="currentCity" class="city" ref="city" v-model="cityValue">
                    <option style="font-weight:bold" value="0">- 选择城市 -</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="shopsContent">
        <div class="cityCountTitle">
          <span>中国城市门店</span>
        </div>
        <div class="cityCount">
          <ul class="shopsName" v-show="shopCountyData">
            <li v-for="(shop, index) in shopCountyData.countyData" :key="index">
              <a>{{shop.name}}分店</a>
            </li>
          </ul>
          <ul class="shopsList" v-show="!shopCountyData">
            <li>
              <span>暂无分店</span>
            </li>          
          </ul>
        </div>
      </div>
    </div>
    <div class="copyRight">
      <p>版权所有：米卡米卡（北京）食品有限公司  京ICP备：12021305号-2号  </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import {
  getProvince,
  getCity,
  getCounty
} from '../../api'
  export default {
    data() {
      return {
        shopsProvince:[],//省份信息
        provinceValue:'',//省份的value值
        shopsCity:[],//市级信息
        cityValue:'',//市级的value值
        shopCountyData:[],//县级信息
        citys:[]
      }
    },

    async mounted() {

      // 初始化显示省份信息
      this.shopsProvince = await getProvince()
    
    },

    methods: {
      // 将省份信息渲染到页面上
      changeProvince() {
        if (this.shopsProvince.code === 0) {
          this.shopsProvince.provinceData.forEach((item)=>{
            let MyComponentProvince = Vue.extend({
              template: `<option value="${item.province}">${item.name}</option>`,
            });
            let componentProvince = new MyComponentProvince().$mount();
            let refProvince = this.$refs.province
            refProvince.appendChild(componentProvince.$el);
          })
        }
      },

      changeCity(){
        if(this.shopsCity.code === 0){
          let city = document.getElementById('currentCity')
          city.innerHTML = '<option style="font-weight:bold" value="0">- 选择城市 -</option>'
          this.shopsCity.cityData.forEach((itemcity)=>{
            let MyComponentCity = Vue.extend({
              template: `<option value="${itemcity.city}">${itemcity.name}</option>`,
            });
            let componentCity = new MyComponentCity().$mount();
            let refCity = this.$refs.city
            refCity.appendChild(componentCity.$el);
          })
          
        }
      }
    },


    watch: {
      // 当再次更新省份信息时，重新渲染到页面上
      shopsProvince(newValue,oldValue){
        this.changeProvince()
        // this.$nextTick(()=>{
          
        // })
      },


      // 当省份信息变化时
      async provinceValue(newValue,oldValue){
          //如果没有选择正常的省份
          if(!newValue){
            return
          }
          // 初始化显示市级信息
          if (newValue !== oldValue) {
            this.shopsCity = await getCity(newValue)
            this.provinceValue = newValue
          }
          // let template = ''
          let MyComponentCitys = Vue.extend({
            template:`<option style="font-weight:bold" value="0">- 选择城市 -</option>`,
          });
          // console.log(this)
          // console.log(template)
          let componentCitys = new MyComponentCitys().$mount();
          let refCity = this.$refs.city
          refCity.appendChild(componentCitys.$el);
          this.changeCity()
      },


      async cityValue(newValue,oldValue){
          //如果没有选择正常的省份
          if(!newValue){
            return
          }
          // 初始化显示市级信息
          if (newValue !== oldValue) {
            this.shopCountyData = await getCounty(this.provinceValue,newValue)
            this.cityValue = newValue
          }
      }
    },

    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shopsCities
    margin 20px 40px 0
    .mapTitle
      margin 20px 40px 0 
      .mapContainer
        margin-top 20px
        text-align center
    .shopsContainer
      margin 20px 40px 0 
      .shopsHeader 
        .shopstitle
          font-size 26px
          margin-bottom 10px
        .shopsOption
          select
            width 200px
      .shopsContent
        padding-bottom 30px
        .cityCountTitle
          margin-top 20px
          span 
            color #b45f06
            font-size 14px
            font-weight bold
          em
            font-size 12px
        .cityCount
          margin-top 10px
          .shopsName
            width 100%
            line-height 30px
            li
              display inline-block
              width 10%
              text-align center
              line-height 30px
              a
                color #b45f06
          .shopsList
            width 100%
            li
              display inline-block
              width 20%
              text-align center
              line-height 30px
              span 
                font-size 14px
                font-weight bold
              em 
                color #9f9f9f
                margin-left 5px
                font-size 12px
    .copyRight
      width 100%
      height 80px
      line-height 60px
      text-align center
</style>
