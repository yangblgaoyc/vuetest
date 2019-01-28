<template>
    <div id="category_out">
        <div className='swiper-container' id='category'>
            <div className='swiper-wrapper' v-for="(category,index) in categorys">
                <div className={index === this.state.curr ? swiperSlideStatusOn : swiperSlideStatusNo} onClick={this.handleClick.bind(this, index)}>
                <i className={className} />
                <p>{category.name}</p>
            </div>
        </div>
        <ul id="category_content" >
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
                list: [
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
        created(){
            //这里可以在render前修改数据
            this.category.unshift({
                'name' : '全部',
                'imgIcon': 'windows'
            });
        },
        mounted(){
            const mySwiper = new Swiper('#category', {
                slidesPerView : 4.5,
                slideToClickedSlide: true,
            });
        }
    }
</script>