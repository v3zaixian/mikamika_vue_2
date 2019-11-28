import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { From, Carousel,NavMenu} from 'element-ui';
import {Transfer} from 'element-ui';
import {Progress} from 'element-ui';
import{Steps} from 'element-ui';
Vue.use(ElementUI)
Vue.component( From);
Vue.component( Carousel);
Vue.component(NavMenu);
Vue.component(Transfer);
Vue.component(Progress);
Vue.component(Steps);
new Vue({
  el: '#app',
  render: h => h(App)
})
