import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

import BaseContainer from "./ui/BaseContainer.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);

app.use(ElementPlus);
app.mount("#app");
