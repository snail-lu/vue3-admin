<template>
  <div class="breadcrumb-container">
    <el-icon :size="24"><expand /></el-icon>
    <!-- <el-icon><fold /></el-icon> -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route, "route");
</script>
<style lang="scss" scoped>
.breadcrumb-container {
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;

  .el-breadcrumb {
    margin-left: 20px;
  }
}
</style>
