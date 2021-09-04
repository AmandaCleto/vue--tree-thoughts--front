import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/contexts';

const app = createApp(App);

/* plugins */
app.use(router);
app.use(store);

/* mount */
app.mount('#app');