import { h, resolveComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import Layout from '../components/layout/index.vue';

// 管理员路由
const adminRoutes = [
    {
        path: '/page',
        // component: {
        //     render: () => h(resolveComponent('router-view'))
        // },
        component: Layout,
        meta: {
            title: '页面装修',
            icon: 'Document'
        },
        children: [
            {
                path: 'list',
                component: () => import('@/views/pages/index.vue'),
                meta: {
                    title: '页面列表'
                }
            },
            {
                path: 'component-lib',
                component: () => import('@/views/pages/lib.vue'),
                meta: {
                    title: '组件库'
                }
            },
            {
                path: 'add',
                component: () => import('@/views/pages/add.vue'),
                hidden: true,
                meta: {
                    title: '新增页面'
                }
            }
        ]
    },
    {
        path: '/goods',
        component: Layout,
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
        path: '/order',
        component: Layout,
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
        path: '/member',
        component: Layout,
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
        path: '/activity',
        component: Layout,
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
        path: '/shop',
        component: Layout,
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
        path: '/setting',
        component: Layout,
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
    },
    // 404 页面必须放路由的最后
    {
        path: '/404',
        component: () => import('../views/NotFound.vue')
    }
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect: '/404'
    // }
];

// 运营者路由
const operatorRoutes: Array<RouteRecordRaw> = [];

// 开发者路由
const developerRoutes: Array<RouteRecordRaw> = [];
export { adminRoutes, operatorRoutes, developerRoutes };
