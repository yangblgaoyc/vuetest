/**
 * Created by yangbolun on 2019/1/11.
 */

const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();
import Banner from '../spaSsrcomponent/Banner';
import ColumnTitle from '../spaSsrcomponent/ColumnTitleIndex';

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
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })

    renderer.renderToString(app, (err, html) => {
    });


    app.get('/index', function (req, res) {

        res.render('index', {component:ssrDomStr});
    });
};