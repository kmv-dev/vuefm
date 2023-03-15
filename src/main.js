import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import BaseButton from "@/components/ui/BaseButton/index.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);

app.use(store);
app.use(router);
app.mount("#app");
