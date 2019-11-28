<template>
  <div>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
<div class="sxh_cop">
  <div class="sxh_center">
   <img src="../assets/mk03.png">
  </div>
  <img src="../assets/mk02.jpg">
</div>
<div class="sxh_sc">
  <ul class="sxh_ul">
    <li class="sxh_xin">❤ 试吃产品：1.5磅标准款蛋糕</li>
    <li class="sxh_xin">❤ 试吃人数：1-8人</li>
    <li class="sxh_xin">❤ 试吃地点：申请公司的办公地址</li>
    <li class="sxh_xin">❤ 试吃要求：公司有相应的生日福利</li>
    <li class="sxh_xin">❤ 试吃要求：申请人为公司生日福利负责人</li>
    <li>&ensp;</li>
    <li class="sxh_xin_sc">试吃流程</li>
    <li class="sxh_xin">❤ 申请：至少提前24小时申请</li>
    <li class="sxh_xin">❤ 预约：我方试吃人员和您预约试吃时间</li>
    <li class="sxh_xin">❤ 试吃：我方安排相应人员进行上门试吃</li>
    <li>&ensp;</li>
    <li class="sxh_xin_sc">免费试吃须知:</li>
    <li class="sxh_xin2">申请并不等于确认试吃，我司会根据试吃申请的先后顺序和您进行联系，试吃时间无法指定具体时间，会根据试吃排期和您协商具体试吃时间 ；我们会严格保护您的隐私。</li>
  </ul>
  <div>
    <p class="sxh_xian">-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
  </div>
</div>
<div class="sxh_from">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="公司" prop="company">
    <el-input v-model="ruleForm.company"></el-input>
  </el-form-item>
  <el-form-item label="微信" prop="wx">
    <el-input v-model="ruleForm.tencent"></el-input>
  </el-form-item>
  <el-form-item label="预约时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="1-2人"></el-radio>
      <el-radio label="3-5人"></el-radio>
      <el-radio label="6-10人"></el-radio>
      <el-radio label="10人以上"></el-radio>
    </el-radio-group>
  </el-form-item>
  <div class="sxh_bto">
    <el-form-item>
      <div class="sxh_bt">
        <el-button type="primary" @click="submitForm('ruleForm')" round>立即创建</el-button>
      </div>
    </el-form-item>
  </div>
  
</el-form>
</div>
</div>

</template>


<script>
export default {
  data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           phone: [
            { required: true, message: '请输入电话', trigger: 'blur' },
            { min: 10, max: 15, message: '长度在 13 到 15 个字符', trigger: 'blur' }
          ],
           company: [
            { required: true, message: '请输入公司', trigger: 'blur' },
            { min: 1, max: 50, message: '请输入正确名字', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交成功');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
@import '../reset.css';
.sxh_cop{
  width: 100%;
}
.sxh_center{
  display: block;
  height: 100%;
  margin-left: 80px;
}
.sxh_top{
  width: 100%;
  margin:0 auto ;
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
  .sxh_from{
    width: 900px;
    margin-left: 500px;
  }
  .sxh_sc{
    display: block;
    margin-left: 10px;
    height: 350px;
    width: 2000px;
  }
  .sxh_ul{
    margin: 2rem auto;
    text-align: left;
    display: inline-block;
    list-style-type:none; 
  }
  .sxh_xin{
    font-size: 12px;
    color: #7F8C8D;
    width: 50%;
    display: inline-block;
  }
  .sxh_xin_sc{
    font-size: 14px;
    width: 50%;
    display: inline-block;
  }
  .sxh_xin2{
    font-size: 12px;
    color: #7F8C8D;
    width: 50%;
    display: inline-block;
    white-space:nowrap; 
  }
  .sxh_xian{
  display: block;
  margin-left:-80px; 
  margin-top: 5px;
  color: #eeeeee;
  }
  .sxh_bto{
    height: 90px;
    width: 1000px;
    background-color:#E2DCEF;
  }
  .sxh_bt{
    display:block;
    margin-top: 10px;
    margin-left: -120px;
  }
</style>