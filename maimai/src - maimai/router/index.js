import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'myFooter',
        component: () =>
            import ('@/components/myFooter.vue')
    }, {
        path: '/xiaoxi',
        name: 'xiaoxi',
        component: () =>
            import ('@/views/xiaoxi.vue')
    }, {
        path: '/xiangqing',
        name: 'xiangqing',
        component: () =>
            import ('@/views/xiangqing.vue')
    }, {
        path: '/dongtai',
        name: 'dongtai',
        component: () =>
            import ('@/views/dongtai.vue')
    }]
})