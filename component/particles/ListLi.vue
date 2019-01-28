<template>
    <!--路由连接里如有name,其值必须与总路由里一样，否则跳转后第一次白页-->
    <router-link :to="{path:'/details',query:{id:data.id,categoryid:data.categoryId}}">
        <li class="list_li">
            <img :src='data.img'/>
            <dl>
                <dt>{{data.title}}</dt>
                <dd>
                    <span>{{data.category}}</span>
                    <em>{{data.times}}阅读</em>
                </dd>
            </dl>
        </li>
    </router-link>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        props:['data']
    }
</script>


