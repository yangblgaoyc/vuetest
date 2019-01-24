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
        props:['info']
    }
</script>