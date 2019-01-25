<template>
    <router-link to="/details">
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


