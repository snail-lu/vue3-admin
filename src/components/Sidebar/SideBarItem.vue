<template>
    <!-- 存在子菜单 -->
    <el-sub-menu v-if="!menu?.hidden && hasVisibleChildren" :index="routePath">
        <template #title>
            <el-icon>
                <component :is="menu.meta?.icon ? menu.meta.icon : ''"></component>
            </el-icon>
            <span>{{ menu?.meta?.title }}</span>
        </template>
        <template v-for="subItem in menu?.children" :key="subItem?.path">
            <SideBarItem :menu="subItem" :base-path="routePath" v-if="!subItem.hidden" />
        </template>
    </el-sub-menu>

    <!-- 不存在子菜单 -->
    <el-menu-item :index="routePath" v-else-if="!menu?.hidden">
        <el-icon v-if="menu?.meta?.icon">
            <component :is="menu.meta?.icon ? menu.meta.icon : ''"></component>
        </el-icon>
        <span>{{ menu?.meta?.title }}</span>
    </el-menu-item>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    menu: Object,
    basePath: String
});

// 是否有子菜单
const hasVisibleChildren = computed(() => {
    const children = props.menu?.children;
    return children && children.length > 0 && children.some((item) => !item.hidden);
});

const routePath = computed(() => {
    const reg = /^\//g;
    if (reg.test(props.menu?.path)) {
        return `${props.basePath}${props.menu?.path}`;
    } else {
        return `${props.basePath}/${props.menu?.path}`;
    }
});
</script>

<style lang="scss" scoped></style>
