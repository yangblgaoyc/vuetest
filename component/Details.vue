<template>
    <div id='detail_container'>
        <DetailTitle :data='info'></DetailTitle>
        <DetailContents :data='contents'></DetailContents>>
    </div>
</template>
<script>
    import DetailTitle from './particles/DetailTitle';
    import DetailContents from './particles/DetailContents';
    export default {
        components: {DetailTitle,DetailContents},
        data () {
            return {
                info : {
                    title:'测试暂存',
                    time:'12-12',
                    times:'50',
                },
                //todo 过后用获取来的参数用ajax重写contents
                contents:'测试内容，测试内容，测试内容'
            }
        }
    }
</script>
<style scoped>
    @import "../src/styles/common.css";
    @import "../src/styles/details.css";
    @import "../src/styles/particles/detailTitle.css";
    @import "../src/styles/particles/detailContents.css";
</style>
