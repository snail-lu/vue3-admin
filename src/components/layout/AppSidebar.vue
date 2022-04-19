<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon>
        <document />
      </el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
export default defineComponent({
  name: "AppSidebar",
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
