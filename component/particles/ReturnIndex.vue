<template>
    <router-link id="return" to="/home">
        <img :src='arrowImg'/> 返回首页
    </router-link>
</template>
<script>
    export default {
        data () {
            return {
                arrowImg:'images/ball.png'
            }
        },
        mounted(){

        }
    }
</script>
