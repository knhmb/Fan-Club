import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./route";
import BaseContainer from "./ui/BaseContainer.vue";
import BaseCard from "./ui/BaseCard.vue";

import "element-plus/theme-chalk/display.css";
import "vue3-carousel/dist/carousel.css";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-card", BaseCard);

app.use(ElementPlus);
app.use(router);
app.mount("#app");
