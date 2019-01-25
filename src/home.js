require('./styles/common.css');
require('../src/img/icon_j20.jpg');
require('../src/img/icon_81.jpeg');
require('../src/img/j20.jpeg');
require('../src/img/j10.jpeg');
require('../src/img/arrow.png');
require('../src/img/ball.png');

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../Config/Route';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes // (缩写) 相当于 routes: routes
});

const app = new Vue({
    router
}).$mount('#root');





