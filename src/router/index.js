import { createRouter, createWebHistory } from 'vue-router';
import { useCommonStore } from '@/store/index';
import { baseRoutes } from '@/router/permission';

const router = createRouter({
    history: createWebHistory('/vue3-admin/'),
    routes: baseRoutes
});

// 导航守卫
router.beforeEach(async (to, from, next) => {
    // 根据登录状态决定路由方向
    const store = useCommonStore();
    const userInfo = store.userInfo;
    // 是否需要动态添加路由
    const addRoleRoutes = store.addRoleRoutes;
    if (userInfo) {
        if (to.path === '/login') {
            next('/');
        } else if (addRoleRoutes) {
            await store.addRoleRoutes();
            next({ ...to, replace: true });
        } else {
            next();
        }
    } else if (to.path === '/login') {
        next();
    } else {
        // 未登录用户进入到登录页
        next({ path: 'login' });
    }
});

export default router;
