<template>
  <div class="breadcrumb-container">
    <el-icon :size="24" v-if="isCollapse" @click="changeCollapse">
      <expand />
    </el-icon>
    <el-icon :size="24" v-else @click="changeCollapse">
      <fold />
    </el-icon>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in list" :key="item.path">{{
        item.meta.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

const route = useRoute();
// 筛选出配置了title的路由
const list = computed(() => {
  console.log(route, "route");
  return route.matched.filter((item) => item.meta && item.meta.title);
});

// 侧边导航折叠/展开控制
const store = useStore();
const isCollapse = computed(() => store.state.isCollapse);
const changeCollapse = () => store.commit("changeCollapse");
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
