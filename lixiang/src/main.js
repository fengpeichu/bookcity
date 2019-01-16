import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import base from "@/plugins/base";
Vue.use(base);
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})