<template>
  <div>
    <AppHeader />
    <div class="content">
      <AppSidebar />
      <div class="main">
        <AppBreadcrumb />
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppMain from "./AppMain.vue";
import AppSidebar from "./AppSidebar.vue";
import AppHeader from "./AppHeader.vue";
import AppBreadcrumb from "./AppBreadcrumb.vue";
</script>
<style lang="scss" scoped>
.content {
  display: flex;

  .main {
    flex: 1;
  }
}
</style>
