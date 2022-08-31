import request from '@/request/index';
import { adminListRequestDto, adminUpdateRequestDto } from '@/types/admin';

const urls = {
    login: '/admin/list',
    register: '/admin/register',
    update: '/admin/update',
    delete: '/admin/delete'
};

// 管理员新增
export function addAdmin(data: adminUpdateRequestDto) {
    return request({
        url: urls.register,
        method: 'post',
        data
    });
}

// 管理员修改
export function updateAdmin(data: adminUpdateRequestDto) {
    return request({
        url: urls.update,
        method: 'post',
        data
    });
}

// 管理员列表
export function getAdminsList(data: adminListRequestDto) {
    return request({
        url: urls.login,
        method: 'post',
        data
    });
}

// 管理员删除
export function deleteAdmin(data: object) {
    return request({
        url: urls.delete,
        method: 'post',
        data
    });
}
