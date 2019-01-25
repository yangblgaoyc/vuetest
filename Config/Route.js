import HomeComponent from '../component/Home';
import NoPageComponent from '../component/404';
import Detail from '../component/Details';//引进组件

// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
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
        component: NoPageComponent
    }
]

export default routes;

