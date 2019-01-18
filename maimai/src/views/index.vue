<template>
    <div>
        <header></header>
        <main>
            <button
            @click="fun">选择</button>
            <myul
            v-for="(val,a) in listdata"
            :key='a'
            :tit="val"
            v-show="open"></myul>
            <list
            v-for="(val,i) in listdata"
            :key="i"
            :con="val"></list>
        </main>
        <footer></footer>
    </div>
</template>
<script>
import list from "@/components/list"
import myul from "@/components/myul"
export default {
    data(){
        return{
            listdata:[],
            open:false
        }
    },
    created(){
        this.http.get('/api/getlist').then(res=>{
            this.listdata=res.data
        })
    },
    components:{
        list,
        myul
    },
    methods:{
        fun(){
            this.open= !this.open
        }
    }
}
</script>
