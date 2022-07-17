<template>
    <el-config-provider :locale="locale">
        <router-view />
    </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
    components: {
        ElConfigProvider
    },
    setup() {
        return {
            locale: zhCn
        };
    }
});
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
