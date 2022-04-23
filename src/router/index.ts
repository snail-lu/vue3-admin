import { h, resolveComponent } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../components/layout/index.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/HomeView.vue'),
                meta: {
                    title: '首页',
                    icon: 'el-icon-s-home',
                },
            },
            {
                path: '/goods',
                name: 'goods',
                component: {
                    render: () => h(resolveComponent('router-view')),
                },
                meta: {
                    title: '商品管理',
                    icon: 'el-icon-s-home',
                },
                children: [
                    {
                        path: '',
                        component: () => import('../views/goods/index.vue'),
                        meta: {
                            title: '商品列表',
                        },
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/LoginView.vue'),
    },
    {
        path: '/404',
        component: () => import('../views/NotFound.vue'),
    },
    // 404 page must be placed at the end !!!
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
