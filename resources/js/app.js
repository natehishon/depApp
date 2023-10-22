import './bootstrap';
import { createApp } from "vue";
import Home from './views/Home.vue'
const app = createApp({
    components: {
        Home
    }
});

app.mount("#app");
