<template>
      <li>
        <dl>
          <dt>
            <img :src="baseimg+cont.src" alt="">
          </dt>
          <dd>{{cont.title}}</dd>
          <dd class="dj">￥{{cont.price}}</dd>
          <dd><button @click="bus.$emit('cfp',cont)">添加购物车</button></dd>
        </dl>
          
      </li>
</template>

<script>
export default {
 props:['cont'],
 data(){
   return {
     baseimg:'../static/'
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 li{
   width:120px;
   flex-shrink: 0;
 }
 .dj{
   color:orange;
 }
 img{
   width:100%;
   height:100px;
 }
</style>
