import request from '../../../request/index';
import { LoginFormDto } from '../../../types/login';

export function login(data: LoginFormDto) {
    return request({
        method: 'POST',
        url: '/login',
        data
    });
}
