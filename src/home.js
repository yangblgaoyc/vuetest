require('./styles/common.css');
require('../src/img/icon_j20.jpg');
require('../src/img/icon_81.jpeg');
require('../src/img/j20.jpeg');
require('../src/img/j10.jpeg');
require('../src/img/arrow.png');
require('../src/img/ball.png');

import Vue from 'vue';
import route from '../Config/Route.js';
import routeView from '../component/routeView';

new Vue({
    el:"#root",
    route,
    render: h => h(routeView)
});




