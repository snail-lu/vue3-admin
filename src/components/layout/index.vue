<template>
  <div>
    <AppHeader />
    <div class="main">
      <AppSidebar />
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppMain from "./AppMain.vue";
import AppSidebar from "./AppSidebar.vue";
import AppHeader from "./AppHeader.vue";
</script>
<style lang="scss" scoped>
.main {
  display: flex;
}
</style>
