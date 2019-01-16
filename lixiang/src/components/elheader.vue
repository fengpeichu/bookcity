<template>
     <header>
       <!-- <router-link :to="$router.go(-1)" v-if="goback"> < </router-link> -->
        <span @click="$router.go(-1)" v-if="goback"> < </span>
        <slot></slot>
        <span class="login" v-if="login"><i></i></span>
        <span v-if="gohome" @click="$router.push('bookcity')"><i></i></span>
    </header>
</template>
<script>
export default {
    // props:['goback','login','gohome']
    props:{
        goback:{
            default:false,
            type:Boolean
        },
        login:{
            default:false,
            type:Boolean
        },
        gohome:{
            default:false,
            type:Boolean
        }
    }
}
</script>
<style scoped>
header{
    width:100%;
    height:40px;
    line-height:40px;
    background:#eee;
}
</style>
