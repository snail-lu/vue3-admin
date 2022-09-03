// import { h, resolveComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/layout/index.vue';

// 基础路由，所有用户可访问
const baseRoutes = [
    {
        path: '/',
        component: Layout,
        meta: {
            title: '首页',
            icon: 'House'
        },
        children: [
            {
                path: '',
                name: 'Home',
                hidden: true,
                component: () => import('@/views/Home.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/LoginView.vue'),
        hidden: true
    }
];

// 这里的路由模拟了从后端接口中获取路由数据
// 管理员路由
const adminRoutes = [
    {
        path: '/permission',
        component: 'Layout',
        meta: {
            title: '权限页面',
            icon: 'Lock'
        },
        children: [
            {
                path: 'admin',
                name: 'PermissionAdmin',
                component: '../views/permission/Admin.vue',
                meta: {
                    title: '管理员专属页面'
                }
            }
        ]
    },
    {
        path: '/page',
        // component: {
        //     render: () => h(resolveComponent('router-view'))
        // },
        component: 'Layout',
        meta: {
            title: '页面装修',
            icon: 'Document'
        },
        children: [
            {
                path: 'list',
                component: '../views/pages/index.vue',
                meta: {
                    title: '页面列表'
                }
            },
            {
                path: 'component-lib',
                component: '../views/pages/lib.vue',
                meta: {
                    title: '组件库'
                }
            },
            {
                path: 'add',
                component: '../views/pages/add.vue',
                hidden: true,
                meta: {
                    title: '新增页面'
                }
            }
        ]
    },
    {
        path: '/goods',
        component: 'Layout',
        meta: {
            title: '商品管理',
            icon: 'Goods'
        },
        children: [
            {
                path: 'list',
                component: '../views/goods/index.vue',
                meta: {
                    title: '商品列表'
                }
            },
            {
                path: 'category',
                component: '../views/goods/category.vue',
                meta: {
                    title: '商品分类'
                }
            },
            {
                path: 'inventory',
                component: '../views/goods/inventory.vue',
                meta: {
                    title: '库存列表'
                }
            },
            {
                path: 'comments',
                component: '../views/goods/comments.vue',
                meta: {
                    title: '评论列表'
                }
            }
        ]
    },
    {
        path: '/order',
        component: 'Layout',
        meta: {
            title: '订单管理',
            icon: 'SoldOut'
        },
        children: [
            {
                path: 'list',
                component: '@/views/order/index.vue',
                meta: {
                    title: '订单列表'
                }
            },
            {
                path: 'refund',
                component: '../views/order/refund.vue',
                meta: {
                    title: '售后列表'
                }
            }
        ]
    },
    {
        path: '/member',
        component: 'Layout',
        meta: {
            title: '会员管理',
            icon: 'User'
        },
        children: [
            {
                path: 'list',
                component: '../views/member/index.vue',
                meta: {
                    title: '会员列表'
                }
            }
        ]
    },
    {
        path: '/activity',
        component: 'Layout',
        meta: {
            title: '活动管理',
            icon: 'Calendar'
        },
        children: [
            {
                path: 'list',
                component: '../views/activity/index.vue',
                meta: {
                    title: '活动列表'
                }
            },
            {
                path: 'calendar',
                component: '../views/activity/calendar.vue',
                meta: {
                    title: '活动日历'
                }
            },
            {
                path: 'coupon',
                component: '../views/activity/coupon.vue',
                meta: {
                    title: '优惠券'
                }
            }
        ]
    },
    {
        path: '/shop',
        component: 'Layout',
        meta: {
            title: '门店管理',
            icon: 'shop'
        },
        children: [
            {
                path: 'list',
                component: '../views/shop/index.vue',
                meta: {
                    title: '门店列表'
                }
            },
            {
                path: 'guide',
                component: '../views/shop/guide.vue',
                meta: {
                    title: '导购列表'
                }
            }
        ]
    },
    {
        path: '/setting',
        component: 'Layout',
        meta: {
            title: '系统设置',
            icon: 'setting'
        },
        children: [
            {
                path: 'freight',
                component: '../views/setting/freight.vue',
                meta: {
                    title: '运费设置'
                }
            },
            {
                path: 'admin',
                component: '../views/setting/admin.vue',
                meta: {
                    title: '管理员管理'
                }
            }
        ]
    }
];

// 运营者路由
const operatorRoutes: Array<RouteRecordRaw> = [
    {
        path: '/permission',
        component: Layout,
        meta: {
            title: '权限页面',
            icon: 'Lock'
        },
        children: [
            {
                path: 'operator',
                component: () => import('@/views/permission/Operator.vue'),
                meta: {
                    title: '运营者专属页面'
                }
            }
        ]
    },
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
                component: () => import('@/views/goods/index.vue'),
                meta: {
                    title: '商品列表'
                }
            },
            {
                path: 'category',
                component: () => import('@/views/goods/category.vue'),
                meta: {
                    title: '商品分类'
                }
            },
            {
                path: 'inventory',
                component: () => import('@/views/goods/inventory.vue'),
                meta: {
                    title: '库存列表'
                }
            },
            {
                path: 'comments',
                component: () => import('@/views/goods/comments.vue'),
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
                component: () => import('@/views/order/index.vue'),
                meta: {
                    title: '订单列表'
                }
            },
            {
                path: 'refund',
                component: () => import('@/views/order/refund.vue'),
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
                component: () => import('@/views/member/index.vue'),
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
                component: () => import('@/views/activity/index.vue'),
                meta: {
                    title: '活动列表'
                }
            },
            {
                path: 'calendar',
                component: () => import('@/views/activity/calendar.vue'),
                meta: {
                    title: '活动日历'
                }
            },
            {
                path: 'coupon',
                component: () => import('@/views/activity/coupon.vue'),
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
                component: () => import('@/views/shop/index.vue'),
                meta: {
                    title: '门店列表'
                }
            },
            {
                path: 'guide',
                component: () => import('@/views/shop/guide.vue'),
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
                component: () => import('@/views/setting/freight.vue'),
                meta: {
                    title: '运费设置'
                }
            },
            {
                path: 'admin',
                component: () => import('@/views/setting/admin.vue'),
                meta: {
                    title: '管理员管理'
                }
            }
        ]
    }
];

// 开发者路由
const developerRoutes: Array<RouteRecordRaw> = [
    {
        path: '/permission',
        component: Layout,
        meta: {
            title: '权限页面',
            icon: 'Lock'
        },
        children: [
            {
                path: 'developer',
                component: () => import('@/views/permission/Developer.vue'),
                meta: {
                    title: '开发者专属页面'
                }
            }
        ]
    },
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
                component: () => import('@/views/goods/index.vue'),
                meta: {
                    title: '商品列表'
                }
            },
            {
                path: 'category',
                component: () => import('@/views/goods/category.vue'),
                meta: {
                    title: '商品分类'
                }
            },
            {
                path: 'inventory',
                component: () => import('@/views/goods/inventory.vue'),
                meta: {
                    title: '库存列表'
                }
            },
            {
                path: 'comments',
                component: () => import('@/views/goods/comments.vue'),
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
                component: () => import('@/views/order/index.vue'),
                meta: {
                    title: '订单列表'
                }
            },
            {
                path: 'refund',
                component: () => import('@/views/order/refund.vue'),
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
                component: () => import('@/views/member/index.vue'),
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
                component: () => import('@/views/activity/index.vue'),
                meta: {
                    title: '活动列表'
                }
            },
            {
                path: 'calendar',
                component: () => import('@/views/activity/calendar.vue'),
                meta: {
                    title: '活动日历'
                }
            },
            {
                path: 'coupon',
                component: () => import('@/views/activity/coupon.vue'),
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
                component: () => import('@/views/shop/index.vue'),
                meta: {
                    title: '门店列表'
                }
            },
            {
                path: 'guide',
                component: () => import('@/views/shop/guide.vue'),
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
                component: () => import('@/views/setting/freight.vue'),
                meta: {
                    title: '运费设置'
                }
            },
            {
                path: 'admin',
                component: () => import('@/views/setting/admin.vue'),
                meta: {
                    title: '管理员管理'
                }
            }
        ]
    }
];

// 错误捕获路由
const errorRoutes = [
    // 404 页面必须放路由的最后
    {
        path: '/404',
        component: '../views/NotFound.vue',
        hidden: true
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        hidden: true
    }
];
export { baseRoutes, adminRoutes, operatorRoutes, developerRoutes, errorRoutes };
