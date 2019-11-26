import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

import router from './router'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//import { swiper, swiperSlide } from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
