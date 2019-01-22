import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../component/Home.vue';//引进组件
// import News from '../component/News.vue';//引进组件
// import Detail from '../component/Details.vue';//引进组件
import NoPage from '../component/404.vue';//引进组件

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes =[
    {
        path: '/home',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '',
        name: 'NoPage',
        component: NoPage
    }
]


const RouteConfig = new VueRouter({
    routes // routes: routes 的简写
})

export default RouteConfig;

