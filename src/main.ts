import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from '@/store/index';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import '@/styles/index.scss'; // global css

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(router);
app.use(store);
app.mount('#app');
