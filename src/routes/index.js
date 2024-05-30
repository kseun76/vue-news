import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
    ],
});