<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body,#app{
  width:100%;
  height: 100%;
  overflow: hidden;
}
.wrap{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.footer{
      width:100%;
      height:44px;
      line-height:44px; 
  }
.footer>a{
  margin:0 24px;
}
 .wrap{
    overflow: hidden;
}
    .header{
      width:100%;
      height:44px;
      line-height: 44px;
    }
    .header>span{
        margin:0 12px;
    }
 .wrap>.content{
      flex:1;
      overflow:auto;
    }
    a{
      margin:12px 12px;
    }
</style>

