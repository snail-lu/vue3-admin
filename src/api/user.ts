import request from '@/utils/request';
import { LoginFormDto } from '@/types/login';
import { adminRoutes, operatorRoutes, developerRoutes } from '@/router/permission';

export function login(data: LoginFormDto) {
    const { username } = data;
    return request({
        method: 'POST',
        url: `/${username}/login`,
        data
    });
}

// 获取用户路由
export function getRoleRoutes(roleType: number | string) {
    const roleRoutesMap = {
        1: adminRoutes,
        2: operatorRoutes,
        3: developerRoutes
    };
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(roleRoutesMap[roleType]);
        }, 300);
    });
}
