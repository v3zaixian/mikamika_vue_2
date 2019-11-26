<template>
  <div id="app">
    <SwiperImg/>
    <router-view></router-view>
  </div>
</template>

<script>
import SwiperImg from './components/SwiperImg/SwiperImg'
export default {
  name: 'app',
  components: {
    SwiperImg
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
