import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/style.css';
import library from '@/icons';
import App from '@/App.vue';
import HomeView from '@/views/HomeView.vue';
import APIReferenceView from '@/views/APIReferenceView.vue';
import PlaygroundView from '@/views/PlaygroundView.vue';

const pinia = createPinia();

// Init router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { name: 'home', path: '/', component: HomeView },
        { name: 'api', path: '/api', component: APIReferenceView },
        { name: 'playground', path: '/playground', component: PlaygroundView },
    ],
});

createApp(App)
    .use(pinia)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .mount('#app');
