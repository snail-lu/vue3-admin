import request from '../../../request/index';
import { goodsListRequestDto } from '../../../types/goods';

export function getGoodsList(data: goodsListRequestDto) {
    return request({
        method: 'POST',
        url: '/goods/list',
        data
    });
}
