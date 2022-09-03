import request from '@/utils/request';
import { LoginFormDto } from '@/types/login';
import { adminRoutes } from '@/router/permission';

export function login(data: LoginFormDto) {
    return request({
        method: 'POST',
        url: '/admin/login',
        data
    });
}

// 获取用户路由
export function getRoleRoutes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(adminRoutes);
        }, 1000);
    });
}
