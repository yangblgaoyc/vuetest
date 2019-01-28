<template>
    <div id="detail_title">
        <h2>{{info.title}}</h2>
        <p>
            <span>{{info.time}}</span> •&nbsp;
            <span>{{info.times}}阅读</span> •&nbsp;
            <span>预计阅读：</span>
        </p>
    </div>
</template>
<script>
    export default {
        data (){
            return {}
        },
        props:['info'],
        created(){
            //获取传入的参数
            const id = this.$route.query.id;
            const categoryid = this.$route.query.categoryid;
            console.log(id,categoryid)
            //如果使用query方式传入的参数使用this.$route.query 接收
            //如果使用params方式传入的参数使用this.$router.params接收
        }
    }
</script>