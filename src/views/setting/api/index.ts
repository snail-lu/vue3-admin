import request from '@/request/index';
const urls = {
    login: '/admin/list',
    register: '/admin/register'
};

// 管理员新增
export function addAdmin(data) {
    return request({
        url: urls.register,
        method: 'post',
        data
    });
}

// 管理员列表
export function getAdminsList(data) {
    return request({
        url: urls.login,
        method: 'post',
        data
    });
}
