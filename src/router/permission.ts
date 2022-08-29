import { h, resolveComponent } from 'vue';
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { store } from '@/store/index';
// import { useStore } from 'vuex';
import Layout from '../components/layout/index.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/Home.vue'),
                meta: {
                    title: '首页',
                    icon: 'House'
                }
            },
            {
                path: 'page',
                name: 'page',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '页面装修',
                    icon: 'Document'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('../views/pages/index.vue'),
                        meta: {
                            title: '页面列表'
                        }
                    },
                    {
                        path: 'component-lib',
                        component: () => import('../views/pages/lib.vue'),
                        meta: {
                            title: '组件库'
                        }
                    },
                    {
                        path: 'add',
                        component: () => import('../views/pages/add.vue'),
                        meta: {
                            title: '新增页面',
                            hidden: true
                        }
                    }
                ]
            },
            {
                path: 'goods',
                name: 'goods',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '商品管理',
                    icon: 'Goods'
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
                        path: 'category',
                        component: () => import('../views/goods/category.vue'),
                        meta: {
                            title: '商品分类'
                        }
                    },
                    {
                        path: 'inventory',
                        component: () => import('../views/goods/inventory.vue'),
                        meta: {
                            title: '库存列表'
                        }
                    },
                    {
                        path: 'comments',
                        component: () => import('../views/goods/comments.vue'),
                        meta: {
                            title: '评论列表'
                        }
                    }
                ]
            },
            {
                path: 'order',
                name: 'order',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '订单管理',
                    icon: 'SoldOut'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('../views/order/index.vue'),
                        meta: {
                            title: '订单列表'
                        }
                    },
                    {
                        path: 'refund',
                        component: () => import('../views/order/refund.vue'),
                        meta: {
                            title: '售后列表'
                        }
                    }
                ]
            },
            {
                path: 'member',
                name: 'member',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '会员管理',
                    icon: 'User'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('../views/member/index.vue'),
                        meta: {
                            title: '会员列表'
                        }
                    }
                ]
            },
            {
                path: 'activity',
                name: 'activity',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '活动管理',
                    icon: 'Calendar'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('../views/activity/index.vue'),
                        meta: {
                            title: '活动列表'
                        }
                    },
                    {
                        path: 'calendar',
                        component: () => import('../views/activity/calendar.vue'),
                        meta: {
                            title: '活动日历'
                        }
                    },
                    {
                        path: 'coupon',
                        component: () => import('../views/activity/coupon.vue'),
                        meta: {
                            title: '优惠券'
                        }
                    }
                ]
            },
            {
                path: 'shop',
                name: 'shop',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '门店管理',
                    icon: 'shop'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('../views/shop/index.vue'),
                        meta: {
                            title: '门店列表'
                        }
                    },
                    {
                        path: 'guide',
                        component: () => import('../views/shop/guide.vue'),
                        meta: {
                            title: '导购列表'
                        }
                    }
                ]
            },
            {
                path: 'setting',
                name: 'setting',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '系统设置',
                    icon: 'setting'
                },
                children: [
                    {
                        path: 'freight',
                        component: () => import('../views/setting/freight.vue'),
                        meta: {
                            title: '运费设置'
                        }
                    },
                    {
                        path: 'admin',
                        component: () => import('../views/setting/admin.vue'),
                        meta: {
                            title: '管理员管理'
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
    },
    // 404 page must be placed at the end !!!
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 导航守卫
router.beforeEach((to, from, next) => {
    console.log(to, 'to');
    // 根据登录状态决定路由方向
    const isLogined = store.state.isLogined;
    if (isLogined || to.path === '/login') {
        next();
    } else {
        // 未登录用户进入到登录页
        next({ path: 'login' });
        // next();
    }
});

export default router;
