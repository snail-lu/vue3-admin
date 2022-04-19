import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as ElIcons from "@element-plus/icons-vue";

const app = createApp(App);
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name]);
}
app.use(router);
app.mount("#app");
