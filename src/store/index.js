import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { errorRoutes } from '@/router/permission';
import router from '@/router/index';
import { transformRoutes } from '@/utils';
import _ from 'lodash';

// 需要持久化的state放这里
const modules = ['userInfo'];

// 创建vuex持久化实例
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules
});

// 创建 store 实例
export const store = createStore({
    state() {
        return {
            userInfo: null,
            isCollapse: false,
            addRoleRoutes: true
        };
    },
    mutations: {
        // 修改左侧导航啦折叠状态
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse;
        },
        // 存储登录用户信息
        setUserInfo(state, { userInfo }) {
            state.userInfo = userInfo;
        },
        // 动态添加路由
        addRoutes(state, { roleRoutes }) {
            // 深拷贝路由数据，避免transform过程污染component属性
            const asyncRoutes = _.cloneDeep([...roleRoutes, ...errorRoutes]);
            transformRoutes(asyncRoutes);
            asyncRoutes.forEach((routeItem) => {
                router.addRoute(routeItem);
            });

            // 将动态添加路由标志置为空，避免重复动态添加路由
            state.addRoleRoutes = false;
        },
        // 清空用户路由
        clearRoutes(state) {
            state.addRoleRoutes = true;
        }
    },
    actions: {
        // 动态添加路由
        async addRoutes(context) {
            let roleRoutes = context.state.userInfo.routes;
            if (roleRoutes.length > 0) {
                context.commit('addRoutes', { roleRoutes });
            }
        }
    },
    plugins: [vuexLocal.plugin]
});
