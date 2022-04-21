<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "AppMain",
  setup() {
    const route = useRoute();
    const key = computed(() => {
      return route.path || "home";
    });
    return {
      key,
    };
  },
});
</script>

<style scoped>
.app-main {
  height: calc(100vh - 110px);
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
