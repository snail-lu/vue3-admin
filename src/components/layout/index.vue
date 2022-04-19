<template>
  <div>
    <!-- <AppHeader /> -->
    <div class="main">
      <!-- <AppSidebar /> -->
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppSidebar from "./AppSidebar.vue";
export default {
  name: "Layout",
};
</script>
<style scoped></style>
