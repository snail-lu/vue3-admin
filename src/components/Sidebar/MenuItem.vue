<template>
    <!-- 存在子菜单 -->
    <el-sub-menu v-if="menu.children && !menu.hidden" :index="`${basePath}/${menu.path}`">
        <template #title>
            <el-icon>
                <component :is="menu.meta?.icon ? menu.meta.icon : ''"></component>
            </el-icon>
            <span>{{ menu.meta?.title }}</span>
        </template>
        <template v-for="subItem in menu.children" :key="subItem.path">
            <MenuItem :menu="subItem" :base-path="`${basePath}/${menu.path}`" v-if="!subItem.meta.hidden" />
        </template>
    </el-sub-menu>

    <!-- 不存在子菜单 -->
    <el-menu-item :index="`${basePath}/${menu.path}`" v-else-if="!menu.hidden">
        <el-icon>
            <component :is="menu.meta?.icon ? menu.meta.icon : ''"></component>
        </el-icon>
        <span>{{ menu.meta?.title }}</span>
    </el-menu-item>
</template>

<script setup>
const props = defineProps({
    menu: Object,
    basePath: String
});
</script>

<style lang="scss" scoped></style>
