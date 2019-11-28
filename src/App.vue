<template>
  <div id="app">
    <Header v-if="$route.meta.isShowHeader"/>
    <Lunbo v-if="$route.meta.isShowLunBo"/>
    <router-view></router-view>
    <Footer v-if="$route.meta.isShowFooterGuide"/>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Lunbo from './components/Lunbo/Lunbo'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Lunbo
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
