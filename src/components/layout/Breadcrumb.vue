<template>
    <div class="breadcrumb-container">
        <el-icon :size="20" v-if="isCollapsed" @click="changeCollapse" style="cursor: pointer">
            <expand />
        </el-icon>
        <el-icon :size="20" v-else @click="changeCollapse" style="cursor: pointer">
            <fold />
        </el-icon>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in list" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script setup>
import { useCommonStore } from '../../store';
const route = useRoute();
// 获取当前路由栈
const list = computed(() => {
    return route.matched.filter((item) => item.meta && item.meta.title);
});

// 侧边导航折叠/展开控制
const store = useCommonStore();
const isCollapsed = computed(() => store.isCollapsed);
const changeCollapse = () => store.changeCollapse();
</script>
<style lang="scss" scoped>
.breadcrumb-container {
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 20px;
    border-bottom: 1px solid #dadada;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    z-index: 10;
    position: absolute;
    width: 100%;
    background-color: #fff;

    .el-breadcrumb {
        margin-left: 20px;
    }
}
</style>
