import '../assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Root component
import App from './App.vue';
const app = createApp(App);
app.use(createPinia());

// Router
import { router } from '@/router';
app.use(router);

app.mount('#app');
