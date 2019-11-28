<template>
  <div class="loginCover">
    <div class="loginContainer">
      <div class="loginInterface">
         <div class="loginUser">
           <span>用户登录</span>
           <a @click="cancel">
             <i class="iconfont icon-quxiao"></i>
           </a>
         </div>
         <div class="loginContent">
           <input v-model="username" v-validate="'required|email'" name="username" class="user" type="text" placeholder="账号">
           <span style="color:red;" v-show="errors.has('username')">{{errors.first('username')}}</span>
           <input v-model="pwd" class="pwd" v-validate="'required|pwd'" name="pwd" type="password" placeholder="密码" >
           <span style="color:red;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</span>
           <el-row class="btn">
             <el-button @click="login" :class="[selfbutton]" type="success">登录</el-button>
          </el-row>
         </div>
          
         <div class="regAddFindContainer">
           <a class="register">
             <span>注册新用户</span>
           </a>
            <a class="findPwd">
              <span>找回密码</span>
            </a>
         </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        selfbutton: "self-button",
        username: '',
        pwd: ''
      }
    },
    methods: {
      cancel(){
        this.$router.replace('/shouye')
      },

      // 前端统一验证
     async login(){
       let {username,pwd} = this
       let names = ['username', 'pwd']
        const success = await this.$validator.validateAll(names)

        let result
        if(success){
          alert('前端验证成功')
          // 收集表单项数据，发送请求进行后端验证
          
          result = await this.$API.getLogin( username, pwd )
          console.log(result)
          if(result.code === 1){
            this.pwd = ''
          }
        } else {
          alert('前端验证失败')
        }

        //登录成功的处理
        if(result.code === 0){
          alert('登录成功')
          this.$router.replace('/shouye')
        }
     }
      
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .loginCover
    background url(http://nwzimg.wezhan.cn/contents/sitefiles2034/10172077/images/11049825.jpg) 
    .loginContainer
      width 100%
      height 722px
      background-color rgba(0,0,0,.3)
      overflow hidden
      .loginInterface
        width 420px
        height 292px
        background #fff
        margin 100px auto
        padding 20px
        box-sizing border-box
        border-radius 10px 
        .loginUser
          height 54px
          width 365px
          line-height 40px
          span 
            font-size 20px
            color #404040
            margin-right 268px
          a
            .iconfont 
               font-size 16px
        .loginContent
          height 155px
          width 365px
          .user
             width 362px
             height 41px
             border 1px solid #eee
             border-radius 5px
             outline none
             padding-left 10px
             box-sizing border-box 
          .pwd
             width 362px
             height 41px
             border 1px solid #eee
             border-radius 5px
             margin 15px 0 
             outline none
             padding-left 10px
             box-sizing border-box
          .btn
            .self-button
               width 362px
               height 41px
               font-size 16px 
        .regAddFindContainer
          width 362px
          height 12px
          margin-top 15px
          .register
            margin-right 250px
            font-size 12px
            color #848585
          .findPwd
            font-size 12px
            color #848585

</style>
