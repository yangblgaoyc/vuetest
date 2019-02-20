/**
 * Created by yangbolun on 2019/1/11.
 */

import Vue from 'vue';
// const renderer = require('vue-server-renderer');
const renderer = require('vue-server-renderer').createRenderer();
// import Banner from '../spaSsrcomponent/Banner.vue';
// import ColumnTitle from '../spaSsrcomponent/ColumnTitleIndex';
var haha = require('fs').readFileSync('./spaSsrcomponent/Banner.vue', 'utf-8');
console.log(haha)
module.exports = function(app) {
    const data = [
        {
            image: '/images/j20.jpeg',
            title: '图片1',
            // link: 'http://jd.com'
        },
        {
            image: '/images/j10.jpeg',
            title: '图片2',
            // link: 'http://jd.com'
        }
    ];


    const index = new Vue({
        data: {
            data: data
        },
        template: `<div>Hello World</div>`,
        // components: { Banner }
    })
    //
    renderer.renderToString(index, (err, html) => {
        console.log(html)
        app.get('/index', function (req, res) {
            res.render('index', {component:html});
        });
    });
};