<template>
    <div>
        <main>
            <swiper class="banner" :options="{loop:true,autoplay:true}">
                <swiper-slide v-for="(val,i) in img"
                :key="i"><img :src="'../static/'+val">
                </swiper-slide>
            </swiper>
        </main>
        <div class="content">
            <h2>本周特价</h2>
            <ul class="scrollbox">
                <el-li
                v-for="val in shopdata"
                :key="val.id"
                :cont="val"></el-li>
            </ul>
        </div>
    </div>
</template>
<script>
import elLi from '@/components/elli';
export default {
    data(){
        return {
            swiperslide:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
            img:[],
            shopdata:[]
        }
    },
    created(){
        this.http.get('/api/data').then(res=>{
         this.img=res.data.lunbo
         this.shopdata=res.data.henx
         console.log(this.shopdata);
        })
    },
    components:{
        elLi
    }
}
</script>
<style scoped>
.banner{
    width:100%;
    height:200px;
    line-height: 200px;
    background:red;
    color:#fff;
    text-align:center;
}
img{
    width: 100%;

}
.scrollbox{
    width:100%;
    overflow: auto;
    display:flex;
}
.content{
    width:100%;
    overflow:hidden;
}
</style>
