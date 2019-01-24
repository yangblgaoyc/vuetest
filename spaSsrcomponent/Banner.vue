<template>
    <div id="banner">
        <div class='swiper-container' id='banner_swiper'>
            <div class='swiper-wrapper' >
                <div class="swiper-slide" v-for="item in items" >
                    <img :src='item.image' :alt='item.title' />
                </div>
            </div>


            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        data () {
            return {
                items:[
                    {
                        image: "images/j20.jpeg",
                        title: '图片1',
                        // link: 'http://jd.com'
                    },
                    {
                        image: "images/j10.jpeg",
                            title: '图片2',
                        // link: 'http://jd.com'
                    }
                ]
            }
        },
        mounted(){
            const mySwiper = new Swiper('#banner_swiper', {
                preloadImages: true,
                autoplay: 4000,
                autoplayDisableOnInteraction: false,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                }
            });
        }
    }
</script>