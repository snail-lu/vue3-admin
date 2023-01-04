import request from '@/utils/request';
import { LoginFormDto } from '@/types/login';
import { adminRoutes } from '@/router/permission';

export function login(data: LoginFormDto) {
    const { username } = data;
    return request({
        method: 'POST',
        url: `/${username}/login`,
        data
    });
}

// 获取用户路由
export function getRoleRoutes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(adminRoutes);
        }, 300);
    });
}
