import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store/index';
import { baseRoutes } from '@/router/permission';

const router = createRouter({
    history: createWebHistory('/vue3-ts-admin/'),
    routes: baseRoutes
});

// 导航守卫
router.beforeEach(async (to, from, next) => {
    // 根据登录状态决定路由方向
    const userInfo = store.state.userInfo;
    // 是否需要动态添加路由
    const addRoleRoutes = store.state.addRoleRoutes;
    if (userInfo) {
        if (to.path === '/login') {
            next('/');
        } else if (addRoleRoutes) {
            await store.dispatch('addRoutes');
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
