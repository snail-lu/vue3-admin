<template>
  <el-menu active-text-color="#ffffff" background-color="#01182a" class="sidebar-container" text-color="#fff"
    :collapse="collapse" :router="true" :default-active="activePath" ref="sidemenu">
    <template v-for="item in menu" :key="`${item.path}`">
      <MenuItem :menu="item" base-path="" />
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import MenuItem from "./MenuItem.vue";

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
:deep(.el-menu-item.is-active) {
  background-color: rgb(51, 126, 204);
}
</style>
