<template>
    <div id="news_container">
        <Return />
        <Stock />
        <Category/>
    </div>
</template>
<script>
    import Return from './particles/ReturnIndex';
    import Stock from './particles/Stock';
    import Category from './particles/Category';
    export default {
        components: {Return,Stock,Category},
        data () {
            return {}
        }
    }
</script>
<style scoped>
    @import "../src/styles/news.css";
    @import "../src/styles/particles/category.css";
    @import "../src/styles/particles/return.css";
    @import "../src/styles/particles/stock.css";
    @import "../src/font/css/font-awesome.css";
</style>
