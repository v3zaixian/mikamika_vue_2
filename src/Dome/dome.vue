<template>
<div class="tou">
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
<div class="homepage-hero-module">
  <div class="video-container">
  <div :style="fixStyle" class="filter">
   <!-- 内容 -->
  <el-steps :active="1" finish-status="success" simple style="margin-top:0">
  <el-step title="步骤 1选胚" ></el-step>
  <el-step title="步骤 2修饰" ></el-step>
  <el-step title="步骤 3评定" ></el-step>
  </el-steps>
   <div class="sxh_select">
   <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['可选在售', '烘焙材料']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
   </div>
  </div>
<div class="sxh_left">
<el-collapse v-model="activeName" accordion>
  <!-- <el-collapse-item v-for name="1">
    <div>产自日本，东京千疋屋旗舰店有售。</div>
    <div>这种皮黑，光滑的西瓜据说有种特殊的甜味，仅生长于日本最北部岛屿北海道，年产仅100个。</div>
  </el-collapse-item> -->
  <el-collapse-item title="黑皮西瓜" name="1">
    <div>产自日本，东京千疋屋旗舰店有售。</div>
    <div>这种皮黑，光滑的西瓜据说有种特殊的甜味，仅生长于日本最北部岛屿北海道，年产仅100个。</div>
  </el-collapse-item>
  <el-collapse-item title="Sekai-ichi苹果" name="2">
    <div>使用蜂蜜清洗，手工包装，以免损伤破坏鲜度。人工使用小棒棒授粉(这在日本丰富的水果文化中并不多见)。</div>
    <div>"浇灌这些苹果的都是蜂蜜，天使尿和地产土豪的眼泪"。</div>
  </el-collapse-item>
  <el-collapse-item title="红宝石罗马葡萄" name="3">
    <div>产自日本。这些世界上最贵的葡萄在2011年日本金泽的拍卖会上拍出。</div>
    <div>每个葡萄大小如乒乓球，由于那一串有25个</div>
    <div>每个出售的葡萄含糖量和重量都要分别在18%和20克左右。</div>
  </el-collapse-item>
  <el-collapse-item title="红宝石罗马葡萄" name="4">
    <div>产自日本。这些世界上最贵的葡萄在2011年日本金泽的拍卖会上拍出。</div>
    <div>每个葡萄大小如乒乓球，由于那一串有25个</div>
  </el-collapse-item>
  <el-collapse-item title="红宝石罗马葡萄" name="5">
    <div>产自日本。这些世界上最贵的葡萄在2011年日本金泽的拍卖会上拍出。</div>
    <div>每个葡萄大小如乒乓球，由于那一串有25个</div>
  </el-collapse-item>
  <el-collapse-item title="红宝石罗马葡萄" name="6">
    <div>产自日本。这些世界上最贵的葡萄在2011年日本金泽的拍卖会上拍出。</div>
    <div>每个葡萄大小如乒乓球，由于那一串有25个</div>
  </el-collapse-item>
  <el-collapse-item title="红宝石罗马葡萄" name="7">
    <div>产自日本。这些世界上最贵的葡萄在2011年日本金泽的拍卖会上拍出。</div>
    <div>每个葡萄大小如乒乓球，由于那一串有25个</div>
  </el-collapse-item>
  <el-collapse-item title="红宝石罗马葡萄" name="8">
   <div>产自日本。这些世界上最贵的葡萄在2011年日本金泽的拍卖会上拍出。</div>
    <div>每个葡萄大小如乒乓球，由于那一串有25个</div>
  </el-collapse-item>
  <el-collapse-item title="红宝石罗马葡萄" name="9">
    <div>产自日本。这些世界上最贵的葡萄在2011年日本金泽的拍卖会上拍出。</div>
    <div>每个葡萄大小如乒乓球，由于那一串有25个</div>
  </el-collapse-item>
  <el-collapse-item title="红宝石罗马葡萄" name="10">
    <div>产自日本。这些世界上最贵的葡萄在2011年日本金泽的拍卖会上拍出。</div>
    <div>每个葡萄大小如乒乓球，由于那一串有25个</div>
  </el-collapse-item>
</el-collapse>
</div>
<div class="sxh_right">
<el-collapse v-model="activeRight" accordion>
  <el-collapse-item title="乳脂奶油" name="1">
    <div>新西兰牛奶提炼制作</div>
    <div>阳光充足的新西兰牧场孕育的奶油，细腻顺滑，入口即化</div>
  </el-collapse-item>
  <el-collapse-item title="时令水果" name="2">
    <div>菲律宾时令水果，新鲜多汁，果味浓郁</div>
    <div>包裹新鲜多汁的各种丰富水果，入口清爽甜美，新鲜美味。</div>
  </el-collapse-item>
  <el-collapse-item title="百利来甜酒" name="3">
    <div>来着爱尔兰，清冽微甜，口感清醇</div>
  </el-collapse-item>
  <el-collapse-item title="百利来甜酒" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
  <el-collapse-item title="百利来甜酒" name="5">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
  <el-collapse-item title="百利来甜酒" name="6">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
  <el-collapse-item title="百利来甜酒" name="7">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="百利来甜酒" name="8">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="百利来甜酒" name="9">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="百利来甜酒" name="10">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
</el-collapse>
</div>
</div>
      <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
        <source src="../../static/video/G1s.mp4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。
        <source src="../../static/video/G1s.webm" type="video/webm"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img :style="fixStyle" src="../../static/video/G1.jpg" alt="">
      </div>
    </div>
  </div>
</div>
  
</template>


<script>
export default {
name: 'login',
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `水果 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        vedioCanPlay: false,
        fixStyle: '',
        activeIndex: '1',
        activeIndex2: '1',
        activeName: '1',
        activeRight: '1',
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
        return <span>{ option.key } - { option.label }</span>;
        }
      }
    },
    methods: {
      canplay() {
        this.vedioCanPlay = true
      }
    },
    mounted: function() {
      window.onresize = () => {
        const windowWidth = document.body.clientWidth
        const windowHeight = document.body.clientHeight
        const windowAspectRatio = windowHeight / windowWidth
        let videoWidth
        let videoHeight
        if (windowAspectRatio < 0.5625) {
          // videoWidth = windowWidth
          // videoHeight = videoWidth * 0.5625
          this.fixStyle = {
            height: windowWidth * 0.5625 + 'px',
            width: windowWidth + 'px',
            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
            'margin-left': 'initial'
          }
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          this.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial'
          }
        }
      }
      window.onresize()
    }
}
</script>

<style scoped>
.tou{
  margin:-8px;
  padding: -8px;
  border:0;
}
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
 .homepage-hero-module,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 0;
  }

  .video-container .filter {
    
    z-index: 1;
    position: absolute;
    background: rgba(235, 232, 232, 0.4);
  }
  .sxh_select{
    display: inline-flex;
    margin-top: 170px;
  }
  .sxh_left{
    width: 500px;
    position: absolute;
    top: 98px;
    left: 200px;
    border:5px solid rgb(236, 90, 163);
  }
  .sxh_right{
    width: 500px;
    position: absolute;
    top: 98px;
    right: 200px;
    border:5px solid rgb(240, 146, 70);
  }
</style>