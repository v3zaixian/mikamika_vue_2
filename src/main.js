import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { Button,Form, Carousel,Transfer,Progress,Steps } from 'element-ui';
import VueLazyload from 'vue-lazyload'
import './veevalidate'
import store from './store'
import * as API from './api'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Form)
Vue.use(Carousel)
Vue.use(Transfer)
Vue.use(Progress)
Vue.use(Steps)
Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'common/inages/loading.gif',
  loading: 'common/inages/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend' ]
})
Vue.component('Lunbo',Lunbo)
Vue.component(Button.name, Button)

import router from './router'
import Lunbo from'./components/Lunbo/Lunbo.vue'

Vue.prototype.$API = API
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  render: h => h(App),
  router,
  store //安装store对象
})
