<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="rgb(50, 65, 87)"
    class="sidebar-container"
    default-active="2"
    text-color="#eeeeee"
    :collapse="isCollapse"
  >
    <el-menu-item index="1">
      <el-icon><house /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <el-icon>
        <document />
      </el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const isCollapse = ref(false);
const router = useRouter();
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 260px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
}

::-webkit-scrollbar {
  display: none;
}
</style>
