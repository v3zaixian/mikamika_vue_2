<template>
  <div>
   shopsmap
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getShopAction')
    },
    computed: {
      ...mapState({
        state: state => state.shops
      })
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

 
</style>
