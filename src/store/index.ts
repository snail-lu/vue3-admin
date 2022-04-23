import { createStore } from 'vuex';
import { StateDto } from './../types/store';

// 创建一个新的 store 实例
export const store = createStore({
    state() {
        return {
            isCollapse: false,
        };
    },
    mutations: {
        changeCollapse(state: StateDto) {
            state.isCollapse = !state.isCollapse;
        },
    },
});
