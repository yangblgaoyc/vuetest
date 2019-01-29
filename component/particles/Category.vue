<template>
    <div id="category_out">
        <div class='swiper-container' id='category'>
            <div class='swiper-wrapper'>
                <div :class="index === state.curr ? swiperSlideStatusOn : swiperSlideStatusNo" @click="handleClick(index)" v-for="(category,index) in categorys">
                    <i :class="'fa fa-' + category.imgIcon + ' fa-2x'" />
                    <p>{{category.name}}</p>
                </div>
            </div>
        </div>
        <ul id="category_content" >
            <template v-for="(value) in lists">
                <ListLi :data='value'></ListLi>
            </template>
        </ul>
    </div>
</template>
<script>
    import Swiper from 'swiper/dist/js/swiper.js';
    import ListLi from './ListLi';
    export default {
        components: {ListLi},
        data () {
            return {
                arrowImg:'images/ball.png',
                state : {curr:0},
                swiperSlideStatusOn:'swiper-slide on',
                swiperSlideStatusNo:'swiper-slide',
                categorys : [
                    {
                        'name' : '早知道',
                        'imgIcon': 'book'
                    },
                    {
                        'name' : '投条号',
                        'imgIcon': 'credit-card'
                    },
                    {
                        'name' : '大视野',
                        'imgIcon': 'signal'
                    },
                    {
                        'name' : '名家谈',
                        'imgIcon': 'user'
                    }
                ],
                lists: [
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
        },
        methods: {
            handleClick: function (index) {
                this.state.curr = index;
            }
        },
        computed: {
        },
        created(){
            //这里可以在render前修改数据
            this.categorys.unshift({
                'name' : '全部',
                'imgIcon': 'windows'
            });
            // this.categorys.forEach(function(item){
            //     item.className = 'fa fa-' + item.imgIcon + ' fa-2x';
            // });

        },
        mounted(){
            const mySwiper = new Swiper('#category', {
                slidesPerView : 4.5,
                slideToClickedSlide: true,
            });
        }
    }
</script>