import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { From, Carousel } from 'element-ui';

Vue.use(ElementUI)
Vue.component( From);
Vue.component( Carousel);

new Vue({
  el: '#app',
  render: h => h(App)
})
