<template>
    <!-- 存在子菜单 -->
    <el-sub-menu v-if="hasVisibleChildren" :index="routePath" :show-timeout="100" :hide-timeout="100">
        <template #title>
            <el-icon>
                <component :is="menu.meta?.icon ? menu.meta.icon : ''"></component>
            </el-icon>
            <span class="menu-txt">{{ menu?.meta?.title }}</span>
        </template>

        <!-- 递归渲染下级菜单 -->
        <template v-for="subItem in menu?.children" :key="subItem?.path">
            <SideBarItem v-if="!subItem?.hidden" :menu="subItem" :base-path="routePath" />
        </template>
    </el-sub-menu>

    <!-- 不存在子菜单 -->
    <el-menu-item :index="routePath" v-else>
        <el-icon v-if="menu?.meta?.icon">
            <component :is="menu.meta?.icon ? menu.meta.icon : ''"></component>
        </el-icon>
        <template #title><span class="menu-txt">{{ menu?.meta?.title }}</span></template>
    </el-menu-item>
    <!-- </div> -->
</template>

<script setup>
const props = defineProps({
    menu: Object,
    basePath: {
        type: String,
        default: ''
    }
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

<style lang="scss" scoped>
.menu-txt {
    user-select: none;
}
</style>
