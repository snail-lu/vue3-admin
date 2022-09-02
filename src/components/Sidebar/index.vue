<template>
    <el-menu
        active-text-color="#ffffff"
        background-color="#01182a"
        class="sidebar-container"
        text-color="#fff"
        :collapse="collapse"
        :router="true"
        :default-active="activePath"
    >
        <template v-for="item in menu" :key="`${item.path}`">
            <MenuItem :menu="item" base-path="/" />
        </template>
    </el-menu>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
import MenuItem from './MenuItem.vue';

// 侧边导航折叠/展开控制
const store = useStore();
const collapse = computed(() => store.state.isCollapse);
const router = useRouter();

// 菜单数据
const menu = computed(() => {
    console.log(router.options.routes, 'routes');
    return router.options.routes;
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

:deep(.el-menu-item.is-active) {
    background-color: rgb(51, 126, 204);
}
</style>
