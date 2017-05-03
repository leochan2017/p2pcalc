import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/Home',
        name: 'Home',
        component: Home
    }, {
        path: '/About',
        name: 'About',
        component: About
    }]
})
