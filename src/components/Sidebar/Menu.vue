<template>
  <el-menu
    active-text-color="#212121"
    background-color="#409EFF"
    class="sidebar-container"
    text-color="#fff"
    :collapse="collapse"
    :router="true"
    :default-active="activePath"
  >
    <template v-for="item in menu" :key="`${item.path}`">
      <MenuItem :menu="item" base-path="" />
    </template>
  </el-menu>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import MenuItem from "./MenuItem";
import { Menu as IconMenu } from "@element-plus/icons-vue";

const props = defineProps({
  menu: Object,
  collapse: Boolean,
});

const route = useRoute();
const activePath = computed(() => {
  return route.path;
});
</script>

<style lang="scss" scoped>
::v-deep .el-menu-item.is-active {
  background-color: rgb(51, 126, 204);
}
</style>
