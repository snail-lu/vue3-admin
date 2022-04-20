<template>
  <div class="header-container">
    <!-- 系统标题 -->
    <div class="box-l">
      <img class="logo" src="../../assets/logo.png" />
      <span class="title">后台管理系统</span>
    </div>

    <!-- 用户信息 -->
    <div class="box-r">
      <el-icon @click="handleFullScreen" :size="30" color="#ffffff">
        <full-screen
      /></el-icon>
      <el-dropdown @command="logout">
        <span class="el-dropdown-link" style="display: flex; align-items: center">
          <el-avatar
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            style="margin-right: 10px"
          ></el-avatar>
          <span>
            {{ userInfo.userName || "" }}<el-icon><arrow-down /></el-icon>
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
import { useRoute } from "vue-router";
// 只使用组件的api需要手动引入组件，样式已在main.ts中引入
import { ElMessageBox, ElIcon } from "element-plus";

const route = useRoute();
const key = computed(() => {
  return route.path;
});

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
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen();
    }
  }
  isFullScreen.value = !isFullScreen.value;
}

function logout() {
  // ElPopconfirm('确定退出登录吗?', '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' })
  //   .then(() => {
  //     // 利用接口登出
  //     // that.logoutLogin();
  //     // 利用本地登出
  //     // localStorage.clear()
  //     // that.$router.go(0)
  //   })
  //   .catch(() => {
  //     this.$message({ type: 'info', message: '已取消退出' })
  //   })
  ElMessageBox.confirm("测试");
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
  }
}
</style>
