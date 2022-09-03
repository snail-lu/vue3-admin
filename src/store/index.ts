import { createStore } from 'vuex';
import { StateDto } from './../types/store';
import VuexPersistence from 'vuex-persist';
import { errorRoutes } from '@/router/permission';
import router from '@/router/index';
import { transformRoutes } from '@/utils';
import _ from 'lodash';
import { getRoleRoutes } from '@/api/user';

// 需要持久化的state放这里
const modules = ['userInfo', 'roleRoutes'];
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
            roleRoutes: [],
            addRoleRoutes: true
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
        },
        // 动态添加路由
        addRoutes(state: StateDto, { roleRoutes }) {
            state.roleRoutes = roleRoutes;
            // 深拷贝路由数据，避免transform过程污染component属性
            const asyncRoutes = _.cloneDeep([...roleRoutes, ...errorRoutes]);
            transformRoutes(asyncRoutes);
            console.log(asyncRoutes, 'asyncRoutes');
            asyncRoutes.forEach((routeItem) => {
                router.addRoute(routeItem);
            });

            // 将动态添加路由标志置为空，避免重复动态添加路由
            state.addRoleRoutes = false;

            console.log(router.getRoutes(), 'all routes');
        }
    },
    actions: {
        // 动态添加路由
        async addRoutes(context) {
            let roleRoutes = context.state.roleRoutes;
            if (roleRoutes.length > 0) {
                context.commit('addRoutes', { roleRoutes });
            } else {
                roleRoutes = await getRoleRoutes();
                context.commit('addRoutes', { roleRoutes });
            }
        }
    },
    plugins: [vuexLocal.plugin]
});
