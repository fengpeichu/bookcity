<template>
  <div class="wrap">
    <span
    @click="$router.go(-1)"> < </span>
      <div class="header">
          <!-- <span v-for="(val,i) in navdata"
          :key="i"
          :class="{active:i===index}"
          @click="fn(navdata[i])">{{val.title}}</span> -->
          <router-link 
           v-for="(val,i) in navdata"
           :key="i"
          :to="'/'+val.type">{{val.title}}</router-link>
      </div>
     <div class="content"></div>
    
  </div>
</template>

<script>
 import holds from "../mock/data.json";
export default {
  name: 'HelloWorld',
  data () {
    return {
      holds,
      index:1,
        navdata:[{
          title:'动态',
          type:"dongtai"
        },{
          title:"好友",
          type:'haoyou'
        },{
          title:"发现",
          type:'faxian'
        },{
          title:"职言",
          type:'zhiyan'
        }]
    }
  },
  components:{
    // myFoot
  },
  created(){
      this.getdata();
  },
  methods:{
      getdata(){
          // this.http.get(`/api/getlist?type=${this.navdata[this.index].type}`).then(data=>{
          //   console.log(data.data);
          // })
          console.log(holds);
      },
      fn(i){
           console.log(i.type);

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
