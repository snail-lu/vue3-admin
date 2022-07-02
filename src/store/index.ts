import { createStore } from 'vuex';
import { StateDto } from './../types/store';

// 创建 store 实例
export const store = createStore({
    state() {
        return {
            isCollapse: false,
            isLogined: false
        };
    },
    mutations: {
        // 修改左侧导航啦折叠状态
        changeCollapse(state: StateDto) {
            state.isCollapse = !state.isCollapse;
        },
        // 修改登录状态
        changeLoginStatus(state: StateDto) {
            state.isLogined = !state.isLogined;
        }
    }
});
