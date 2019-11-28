import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
      username: '用户名',
      pwd: '密码'
    }
  })


VeeValidate.Validator.extend('pwd',{
    validate: value => {
        return /^[0-9a-zA-Z]{6,12}$/.test(value)
    },
    getMessage: field => field + '包含数字或字母'
})