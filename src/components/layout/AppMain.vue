<template>
    <section class="app-main">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name: 'AppMain',
    setup() {
        const route = useRoute();
        const key = computed(() => {
            return route.path || 'home';
        });
        return {
            key
        };
    }
});
</script>

<style scoped>
.app-main {
    height: calc(100vh - 110px);
    width: 100%;
    position: relative;
    overflow-x: hidden;
    padding: 25px;
    box-sizing: border-box;
    overflow-y: auto;
    margin-top: 50px;
}

.root {
    min-height: calc(100vh - 160px);
}

.fixed-header + .app-main {
    padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
// .el-popup-parent--hidden {
// 	.fixed-header {
// 		padding-right: 15px;
// 	}
// }
</style>
