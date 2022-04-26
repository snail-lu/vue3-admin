<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="rgb(50, 65, 87)"
    class="sidebar-container"
    text-color="#eeeeee"
    :collapse="isCollapse"
    :router="true"
  >
    <template v-for="item in menuList" :key="item.path">
      <template v-if="item.children">
        <el-sub-menu>
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>{{ item.meta?.title }}</span>
          </template>
          <!-- 二级菜单 -->
          <template v-for="subItem in item.children" :key="`${item.path}${subItem.path}`">
            <template v-if="subItem.children">
              <el-sub-menu>
                <template #title>
                  <el-icon>
                    <caret-right />
                  </el-icon>
                  <span>{{ subItem.meta?.title }}</span>
                </template>
                <!-- 三级菜单 -->
                <el-menu-item
                  v-for="threeItem in subItem.children"
                  :key="`${item.path}${subItem.path}/${threeItem.path}`"
                  :index="`${item.path}${subItem.path}/${threeItem.path}`"
                >
                  <el-icon>
                    <caret-right />
                  </el-icon>
                  <span>{{ threeItem.meta?.title }}</span>
                </el-menu-item>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="`${item.path}/${subItem.path}`">
                <el-icon>
                  <caret-right />
                </el-icon>
                <span>{{ subItem.meta?.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="item.path">
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { useStore } from "vuex";

// 侧边导航折叠/展开控制
const store = useStore();
const isCollapse = computed(() => store.state.isCollapse);
const router = useRouter();

const menuList = computed(() => {
  return router.options.routes[0].children;
});
</script>

<style lang="scss" scoped>
.sidebar-container {
  height: calc(100vh - 60px);
  overflow-y: scroll;

  &:not(.el-menu--collapse) {
    width: 260px;
    min-height: 400px;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
