<template>
    <div class='swiper-container' id='stock'>
        <div class='swiper-wrapper'>
            <div class="swiper-slide" v-for="stock in stocks" >
                <p class='up'>{{stock.name}}</p>

                <p v-if="Math.sign(stock.exponent) == 1" class='up'>{{stock.exponent}}</p>
                <p v-else-if="Math.sign(stock.exponent) == -1" class='down'>{{stock.exponent}}</p>
                <p v-else>{{stock.exponent}}</p>

                <p>
                    <span v-if="Math.sign(stock.riseorfalldot) == 1" class='up'>{{stock.riseorfalldot}}</span>
                    <span v-else-if="Math.sign(stock.riseorfalldot) == -1" class='down'>{{stock.riseorfalldot}}</span>
                    <span v-else>{{stock.riseorfalldot}}</span>

                    <em v-if="Math.sign(stock.riseorfallexponent) == 1" class='up'>{{stock.riseorfallexponent}}</em>
                    <em v-else-if="Math.sign(stock.riseorfallexponent) == -1" class='down'>{{stock.riseorfallexponent}}</em>
                    <em v-else>{{stock.riseorfallexponent}}</em>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper/dist/js/swiper.js'
    export default {
        data () {
            return {
                stocks:[
                    {
                        name: '上证指数',
                        exponent: '3081.18',
                        riseorfalldot:'-1.05',
                        riseorfallexponent:'-0.03'
                    },
                    {
                        name: '深圳成指',
                        exponent: '10081.18',
                        riseorfalldot:'1.05',
                        riseorfallexponent:'0.03'
                    },
                    {
                        name: '中小板指',
                        exponent: '3081.18',
                        riseorfalldot:'-1.05',
                        riseorfallexponent:'-0.03'
                    },
                    {
                        name: '创业板指',
                        exponent: '3081.18',
                        riseorfalldot:'0.00',
                        riseorfallexponent:'0.00'
                    }
                ]
            }
        },
        created(){
            //这里可以在render前修改数据
        },
        mounted(){
            const mySwiper = new Swiper('#stock', {
                slidesPerView : 3
            });
        }
    }

</script>
