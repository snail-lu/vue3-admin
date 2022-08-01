<template>
    <Menu :menu="menuList" :collapse="isCollapse" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Menu from './Menu.vue';

// 侧边导航折叠/展开控制
const store = useStore();
const isCollapse = computed(() => store.state.isCollapse);
const router = useRouter();

const menuList = computed(() => {
    return router.options.routes[0].children;
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
</style>
