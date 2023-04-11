import { errorRoutes } from '@/router/permission';
import router from '@/router/index';
import { transformRoutes } from '@/utils';
import _ from 'lodash';

// // 需要持久化的state放这里
// const modules = ['userInfo'];

// // 创建vuex持久化实例
// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
//     modules
// });

// 创建 store 实例
export const useCommonStore = defineStore(
    'common',
    () => {
        // 左侧导航是否折叠
        const isCollapsed = ref(false);
        // 修改左侧导航折叠状态
        const changeCollapse = () => {
            isCollapsed.value = !isCollapsed.value;
        };

        const userInfo = ref(null);
        // 保存用户信息
        const setUserInfo = (newUserInfo) => {
            userInfo.value = newUserInfo;
        };

        // 是否需要动态添加用户路由
        const needAddRoutes = ref(true);
        // 动态添加路由
        const addRoutes = () => {
            if (userInfo && userInfo.value.routes) {
                // 深拷贝路由数据，避免transform过程污染component属性
                const asyncRoutes = _.cloneDeep([...userInfo.value.routes, ...errorRoutes]);
                transformRoutes(asyncRoutes);
                asyncRoutes.forEach((routeItem) => {
                    router.addRoute(routeItem);
                });

                // 将动态添加路由标志置为空，避免重复动态添加路由
                needAddRoutes.value = false;
            }
        };

        // 重置标志位
        const resetNeedAddRoutes = () => {
            needAddRoutes.value = true;
        };

        return { isCollapsed, changeCollapse, userInfo, setUserInfo, needAddRoutes, addRoutes, resetNeedAddRoutes };
    },
    {
        persist: {
            // 自定义需要持久化的数据
            paths: ['userInfo', 'isCollapsed']
        }
    }
);
