<template>
    <dl
    @click="$router.push({path:'/detail',query:{name:con.nickname}})">
        <dt>{{con.address}}</dt>
        <dd>{{con.question}}</dd>
    </dl>
</template>
<script>
export default {
    props:['con'],
    
}
</script>
<style>
dl{
    border:1px solid #ccc;
}
</style>
