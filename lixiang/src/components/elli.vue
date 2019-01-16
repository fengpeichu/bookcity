<template>
    <li @click="$router.push(`/detail/${bookid}`)">
        <span>
            <img :src="img">
        </span>
        <div>
            <h4>{{title}}</h4>
        </div>
    </li>
</template>
<script>
export default {
    props:['img','title','bookid']
}
</script>
<style lang="scss" scoped>
    li{
        width:30%;
        text-align:center;
        float: left;
        img{
            width:100%;
        }
    }
</style>

