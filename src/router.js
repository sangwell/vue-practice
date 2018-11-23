import Vue from "vue";
import VueRouter from "vue-router";

import Home from './components/Home';
import Setting from './components/Setting';
import Table from './components/Table';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/setting',
        component: Setting
    },
    {
        path: '/table',
        component: Table
    },
    {
        path: '/',
        redirect: '/home'
    }
];

const router = new VueRouter({
    routes
});

export default router;