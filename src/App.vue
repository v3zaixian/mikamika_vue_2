<template>
  <div id="app">
    <Cooperation></Cooperation>
    <!-- <Purchase></Purchase> -->
  </div>
</template>

<script>
import Cooperation from './Cooperation/Cooperation'
// import Purchase from './Purchase/Purchase'
export default {
  name: 'app',
  components: {
   Cooperation
  // Purchase
  }
 
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
