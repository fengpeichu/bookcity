<template>
    <ul>
        <li
        v-for="(val,i) in holds"
        :key="i">
              <div>{{val}}</div>
        </li>
    </ul>
</template>
<script>
 import holds from "../mock/data.json";
 import mydiv from "./mydiv.vue";
export default {
    data(){
        return{
            holds
        }
    },
    components:{
        mydiv
    }
}
</script>
<style>

</style>
