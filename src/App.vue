<template>
    <el-config-provider :locale="zhCn">
        <router-view />
    </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
}
</style>
