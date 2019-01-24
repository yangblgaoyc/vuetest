<template>
    <router-link :to='path' class="ColumnTitleIndexA">
        <h2 class="ColumnTitleIndex">{{title}} <img :src='arrowImg'/></h2>
    </router-link>
</template>

<script>
    export default {
        data () {
            return {
                arrowImg:'images/ball.png'
            }
        },
        props:['path','title'],
        mounted(){

        }
    }
</script>
