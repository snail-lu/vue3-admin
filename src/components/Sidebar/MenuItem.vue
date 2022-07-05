<template>
  <!-- 存在子菜单 -->
  <el-sub-menu v-if="menu.children" :index="`${basePath}/${menu.path}`">
    <template #title>
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>{{ menu.meta?.title }}</span>
    </template>
    <template v-for="subItem in menu.children" :key="subItem.path">
      <MenuItem :menu="subItem" :base-path="`${basePath}/${menu.path}`" />
    </template>
  </el-sub-menu>

  <!-- 不存在子菜单 -->
  <el-menu-item :index="`${basePath}/${menu.path}`" v-else>
    <el-icon>
      <icon-menu />
    </el-icon>
    <span>{{ menu.meta?.title }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { Menu as IconMenu } from "@element-plus/icons-vue";
const props = defineProps({
  menu: Object,
  basePath: String,
});
</script>

<style lang="scss" scoped></style>
