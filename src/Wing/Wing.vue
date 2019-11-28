<template>
<div>
  <div id="header">
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
  <!-- 内容 -->
  <div id="container" class="column">
    <div id="center">
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
  </div>
  <div id="left" class="column">
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
</el-collapse>
  </div>
  <div id="right" class="column">
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
</el-collapse>
  </div>
  <div id="footer"></div>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
body {
  min-width: 500px;
}

#container {
  width: 100%;
}

.column {
  float: left;
}
        
#center {
  margin-left: 200px;
  margin-right: 150px;
}
        
#left {
  width: 200px; 
  margin-left: -100%;
}
        
#right {
  width: 150px; 
  margin-left: -150px;
}
        
#footer {
  clear: both;
}
</style>