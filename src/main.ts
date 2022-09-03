import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from '@/store/index';
import * as ElIcons from '@element-plus/icons-vue';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import '@/styles/index.scss'; // global css

const app = createApp(App);
// 注册所有el-icons图标
for (const name in ElIcons) {
    app.component(name, (ElIcons as any)[name]);
}
app.use(router);
app.use(store);
app.mount('#app');
