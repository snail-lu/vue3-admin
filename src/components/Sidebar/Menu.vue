<template>
  <el-menu
    active-text-color="#212121"
    background-color="#409EFF"
    class="sidebar-container"
    text-color="#fff"
    :collapse="collapse"
    :router="true"
  >
    <template v-for="item in menu" :key="`${item.path}`">
      <MenuItem :menu="item" base-path="" />
    </template>
  </el-menu>
</template>

<script setup>
import MenuItem from "./MenuItem";
import { Menu as IconMenu } from "@element-plus/icons-vue";

const props = defineProps({
  menu: Object,
  collapse: Boolean,
});

// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath, "handleOpen");
// };
</script>

<style lang="scss" scoped></style>
