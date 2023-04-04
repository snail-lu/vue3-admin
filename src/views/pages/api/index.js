import request from '@/utils/request';
import { goodsListRequestDto } from '../../../types/goods';

export function getGoodsList(data: goodsListRequestDto) {
    return request({
        method: 'POST',
        url: '/goods/list',
        data
    });
}
