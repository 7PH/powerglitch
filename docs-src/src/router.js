import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import UsageView from '@/views/UsageView.vue';
import PlaygroundView from '@/views/PlaygroundView.vue';


export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { name: 'home', path: '/', component: HomeView },
        { name: 'usage', path: '/usage', component: UsageView },
        { name: 'playground', path: '/playground', component: PlaygroundView },
    ],
});
