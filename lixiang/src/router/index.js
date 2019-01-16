import Vue from 'vue';
import VueRouter from 'vue-router';
import bookcity from "@/views/book/bookcity";
import bookshelf from "@/views/book/bookshelf";
import detail from "@/views/detail/detail";
import list from "@/views/list/list";
Vue.use(VueRouter);
export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/bookcity'
    }, {
        path: '/bookcity',
        name: 'bookcity',
        component: bookcity
    }, {
        path: '/bookshelf',
        component: bookshelf
    }, {
        path: '/detail/:bookid',
        component: detail
    }]
})