<template>
  <div class="header">
    <span class="title">后台管理系统</span>
    <div class="option flex-box flex-v-center">
      <i class="el-icon-full-screen" title="全屏" @click="handleFullScreen"></i>
      <el-dropdown @command="logout">
        <span class="el-dropdown-link" style="display: flex; align-items: center">
          <el-avatar
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            style="margin-right: 10px"
          ></el-avatar>
          <span>
            {{ userInfo.username || "admin"
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "AppHeader",
  setup() {
    const route = useRoute();
    const key = computed(() => {
      return route.path;
    });
    return {
      key,
    };
  },
});
</script>

<style scoped>
.app-main {
  height: calc(100vh - 120px);
  width: 100%;
  position: relative;
  overflow-x: hidden;
  background-color: #f0f0f0;
  padding: 25px;
  box-sizing: border-box;
  overflow-y: auto;
}
/* .root {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 30px;
  min-height: calc(100vh - 170px);
  box-sizing: border-box;
}
.fixed-header + .app-main {
  padding-top: 50px;
} */
</style>

<style lang="scss">
// fix css style bug in open el-dialog
// .el-popup-parent--hidden {
// 	.fixed-header {
// 		padding-right: 15px;
// 	}
// }
</style>
