<template>
    <div>
        <Banner></Banner>
        <ColumnTitle path = '/news' title='最新资讯'></ColumnTitle>
        <ul>
            <template v-for="(value) in lists">
                <ListLi :data='value'></ListLi>
            </template>
        </ul>
    </div>
</template>
<script>
    import Banner from '../spaSsrcomponent/Banner';
    import ColumnTitle from '../spaSsrcomponent/ColumnTitleIndex';
    import ListLi from './particles/ListLi';
    export default {
        components: {Banner,ColumnTitle,ListLi},
        data () {
            return {
                lists:[
                    {
                        'img':"images/icon_j20.jpg",
                        'title':'漂亮的歼20',
                        'category':'军事--空军',
                        'times':'50',
                        'categoryId':'1',
                        'id':'1'
                    },
                    {
                        'img':"images/icon_81.jpeg",
                        'title':'八一图标',
                        'category':'军事--中国军队',
                        'times':'20',
                        'categoryId':'1',
                        'id':'1'
                    },
                    {
                        'img':"images/icon_j20.jpg",
                        'title':'漂亮的歼20',
                        'category':'军事--空军',
                        'times':'50',
                        'categoryId':'1',
                        'id':'1'
                    },
                    {
                        'img':"images/icon_81.jpeg",
                        'title':'八一图标',
                        'category':'军事--中国军队',
                        'times':'20',
                        'categoryId':'1',
                        'id':'1'
                    },
                    {
                        'img':"images/icon_j20.jpg",
                        'title':'漂亮的歼20',
                        'category':'军事--空军',
                        'times':'50',
                        'categoryId':'1',
                        'id':'1'
                    },
                    {
                        'img':"images/icon_81.jpeg",
                        'title':'八一图标',
                        'category':'军事--中国军队',
                        'times':'20',
                        'categoryId':'1',
                        'id':'1'
                    },
                ]
            }
        }
    }
</script>
<style scoped>
    @import "../src/styles/home.css";
    @import "../src/styles/particles/banner.css";
    @import "../src/styles/particles/columnTitleIndex.css";
    @import "../src/styles/particles/listli.css";
    @import "../node_modules/swiper/dist/css/swiper.min.css";
</style>