<template>
    <li class="list_li">
        <router-link to="/details">
            <img :src='data.img'/>
            <dl>
                <dt>{{data.title}}</dt>
                <dd>
                    <span>{{data.category}}</span>
                    <em>{{data.times}}阅读</em>
                </dd>
            </dl>
        </router-link>
    </li>
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


