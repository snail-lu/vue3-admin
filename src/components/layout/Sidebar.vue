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
      <el-icon>
        <house />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item one</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isCollapse = ref(false);
const router = useRouter();

console.log(router, "router");
// const menuList = router.options.routes.filter(item => !item.hidden)
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
