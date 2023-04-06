<template>
    <div>
        <AppHeader />
        <div class="content">
            <Sidebar />
            <div class="main">
                <Breadcrumb />
                <AppMain />
            </div>
        </div>
    </div>
</template>

<script setup>
import AppMain from './AppMain.vue';
import Sidebar from '../Sidebar/SideBar.vue';
import AppHeader from './AppHeader.vue';
import Breadcrumb from './Breadcrumb.vue';
</script>
<style lang="scss" scoped>
.content {
    display: flex;

    .main {
        flex: 1;
        overflow-x: hidden;
        position: relative;
    }
}
</style>
