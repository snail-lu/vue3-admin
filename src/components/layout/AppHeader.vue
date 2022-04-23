<template>
  <div class="header-container">
    <!-- 系统标题 -->
    <div class="box-l">
      <img class="logo" src="../../assets/logo.png" />
      <span class="title">后台管理系统</span>
    </div>

    <!-- 用户信息 -->
    <div class="box-r">
      <el-icon
        class="fullscreen-icon"
        :size="24"
        color="#ffffff"
        @click="handleFullScreen"
      >
        <full-screen />
      </el-icon>
      <el-dropdown @command="logout">
        <span class="el-dropdown-link" style="display: flex; align-items: center">
          <el-avatar
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            style="margin-right: 10px"
          ></el-avatar>
          <span>
            {{ userInfo.userName || ""
            }}<el-icon>
              <arrow-down />
            </el-icon>
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

<script lang="ts" setup>
import { computed, ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
// 只使用组件的api需要手动引入组件，样式已在main.ts中引入
import { ElMessageBox } from "element-plus";

const userInfo = reactive({
  userName: "admin",
});

const isFullScreen = ref(false);

// 全屏事件
function handleFullScreen() {
  let element = document.documentElement;
  if (isFullScreen.value) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }
  isFullScreen.value = !isFullScreen.value;
}

const router = useRouter();
// 登出
function logout() {
  ElMessageBox.confirm("确定退出登录吗", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(
    () => {
      // 清空本地缓存，并重定向到登录页
      localStorage.clear();
      router.replace("/login");
    },
    () => {}
  );
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 60px;
  background-color: #242f42;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .box-l {
    display: flex;
    align-items: center;
    padding-left: 20px;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    .title {
      height: 60px;
      line-height: 60px;
      font-size: 24px;
    }
  }

  .box-r {
    display: flex;
    align-items: center;
    color: #fff;
    padding-right: 20px;

    .fullscreen-icon {
      margin-right: 10px;
    }
  }
}
</style>
