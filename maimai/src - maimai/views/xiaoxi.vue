<template>
<div>
    <span
    @click="$router.go(-1)"><</span>
    <ul>
        <li>这是消息列表 1 </li>
        <li>这是消息列表 2 </li>
        <li>这是消息列表 3 </li>
        <li>这是消息列表 4 </li>
        <li>这是消息列表 5 </li>
        <li>这是消息列表 6 </li>
        <li>这是消息列表 7 </li>
        <li>这是消息列表 8 </li>
    </ul>
</div>
</template>
<script>
export default {
    methods:{
        // fn(){
        //     $router.go(-1)
        // }
    }
}
</script>

<style scoped>
    li{
        height: 52px;
        text-align: center;
        line-height:52px;
    }
</style>
