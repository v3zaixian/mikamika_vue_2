<template>
  <div>
      <!-- 路由组件 -->
    <router-view></router-view>  
    <Footer v-if="$route.meta.isShowFooterGuide"/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'

export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
