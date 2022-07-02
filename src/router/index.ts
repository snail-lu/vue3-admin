import { h, resolveComponent } from 'vue';
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
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
                    icon: 'el-icon-s-home'
                }
            },
            {
                path: '/goods',
                name: 'goods',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '商品管理'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('../views/goods/index.vue'),
                        meta: {
                            title: '商品列表'
                        }
                    },
                    {
                        path: 'edit',
                        component: () => import('../views/goods/index.vue'),
                        meta: {
                            title: '商品列表'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/LoginView.vue')
    },
    {
        path: '/404',
        component: () => import('../views/NotFound.vue')
    }
    // 404 page must be placed at the end !!!
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect: '/404'
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
