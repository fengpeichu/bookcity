<template>
  <div id="app">  
      <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
*{padding: 0;margin: 0;}
  #app{
    width:100%;
    height:100%;
    overflow: hidden;
  }
    .router-link-active{
          color:red
    }
</style>
