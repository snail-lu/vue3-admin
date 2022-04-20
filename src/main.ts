import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as ElIcons from "@element-plus/icons-vue";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";

const app = createApp(App);
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name]);
}
app.use(router);
app.mount("#app");
