<template>
  <el-menu
    active-text-color="#212121"
    background-color="#409EFF"
    class="sidebar-container"
    text-color="#fff"
    :collapse="collapse"
    :router="true"
    :default-active="activePath"
    ref="sidemenu"
  >
    <template v-for="item in menu" :key="`${item.path}`">
      <MenuItem :menu="item" base-path="" />
    </template>
  </el-menu>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
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

// const sidemenu = ref(null);
// console.log(sidemenu.value, "sidemenu");
// sidemenu.value.open("/goods");
</script>

<style lang="scss" scoped>
::v-deep .el-menu-item.is-active {
  background-color: rgb(51, 126, 204);
}
</style>
