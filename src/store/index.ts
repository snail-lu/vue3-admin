import { createStore } from 'vuex';
import { StateDto } from './../types/store';
import VuexPersistence from 'vuex-persist';

// 创建vuex持久化实例
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

// 创建 store 实例
export const store = createStore({
    state() {
        return {
            userInfo: null,
            isCollapse: false
        };
    },
    mutations: {
        // 修改左侧导航啦折叠状态
        changeCollapse(state: StateDto) {
            state.isCollapse = !state.isCollapse;
        },
        // 存储登录用户信息
        setUserInfo(state: StateDto, { userInfo }) {
            state.userInfo = userInfo;
        }
    },
    plugins: [vuexLocal.plugin]
});
