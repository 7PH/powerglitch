import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/style.css';
import library from '@/icons';
import App from '@/App.vue';

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .component('fa', FontAwesomeIcon)
    .mount('#app');
