import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button } from 'element-ui'
import './veevalidate'
import router from './router'
import store from './store'

import * as API from './api'

Vue.use(ElementUI)

// Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.component(Button.name, Button)
Vue.config.productionTip = false

Vue.prototype.$API = API
new Vue({
  render: h => h(App),
  router, //安装路由器
  store //安装store对象
}).$mount('#app')
