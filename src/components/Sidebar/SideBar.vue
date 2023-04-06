<template>
    <el-menu v-if="menu && menu.length > 0" active-text-color="#ffffff" background-color="#011825" class="sidebar-container"
        text-color="#fff" :collapse="isCollapsed" :router="true" :default-active="activePath">
        <template v-for="item in menu" :key="item?.path">
            <SideBarItem :menu="item" v-if="!item?.hidden" />
        </template>
    </el-menu>
</template>

<script setup>
import SideBarItem from './SideBarItem.vue';
import { baseRoutes } from '@/router/permission';

// 侧边导航折叠/展开控制
const store = useStore();
const isCollapsed = computed(() => store.state.isCollapse);
const menu = computed(() => {
    return baseRoutes.concat(store.state.userInfo?.routes);
});

// 当前激活的菜单
const route = useRoute();
const activePath = computed(() => {
    return route.path;
});
</script>

<style lang="scss" scoped>
.sidebar-container {
    height: calc(100vh - 60px);
    overflow-y: scroll;
    flex-shrink: 0;

    &:not(.el-menu--collapse) {
        width: 260px;
        min-height: 400px;
    }
}

::-webkit-scrollbar {
    display: none;
}

:deep(.el-sub-menu .el-menu-item) {
    background-color: #00080c;
}

:deep(.el-menu-item.is-active) {
    background-color: rgb(51, 126, 204);
}
</style>
