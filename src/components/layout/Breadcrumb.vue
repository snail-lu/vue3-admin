<template>
  <div class="breadcrumb-container">
    <el-icon :size="24">
      <expand />
    </el-icon>
    <!-- <el-icon><fold /></el-icon> -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in list" :key="item.path">{{
        item.meta.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
// 筛选出配置了title的路由
const list = route.matched.filter((item) => item.meta && item.meta.title);
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
