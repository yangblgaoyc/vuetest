import HomeComponent from '../component/Home.vue';//引进组件
// import News from '../component/News.vue';//引进组件
import NoPage from '../component/404.vue';//引进组件
import Detail from '../component/Details';//引进组件

const routes =[
    {
        path: '/home',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/details',
        name: 'Detail',
        component: Detail
    },
    {
        path: '*',
        name: 'NoPage',
        component: NoPage
    }
]

export default routes;

