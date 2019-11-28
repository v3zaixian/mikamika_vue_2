<template>
  <div id="app">
    <Cooperation></Cooperation>
    <!-- <Purchase></Purchase> -->
    <!-- <Dome></Dome> -->
    <!-- <Wing></Wing> -->
  </div>
</template>

<script>
import Cooperation from './Cooperation/Cooperation'
// import Purchase from './Purchase/Purchase'
// import Dome from './Dome/dome'
// import Wing from './Wing/Wing'


export default {
  
  name: 'app',
  components: {
   Cooperation
  // Purchase
  // Dome
  // Wing
  }
 
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
