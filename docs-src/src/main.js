import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'highlight.js/styles/tokyo-night-dark.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import shell from 'highlight.js/lib/languages/shell';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import '@/style.css';
import { loadIcons } from '@/icons';
import App from '@/App.vue';
import HomeView from '@/views/HomeView.vue';
import UsageView from '@/views/UsageView.vue';
import PlaygroundView from '@/views/PlaygroundView.vue';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('shell', shell);

loadIcons();
const pinia = createPinia();

// Init router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { name: 'home', path: '/', component: HomeView },
        { name: 'usage', path: '/usage', component: UsageView },
        { name: 'playground', path: '/playground', component: PlaygroundView },
    ],
});

createApp(App)
    .use(router)
    .use(pinia)
    .component('fa', FontAwesomeIcon)
    .use(hljsVuePlugin)
    .mount('#app');
