import { createApp } from 'vue';
import { createPinia } from 'pinia';
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
import { router } from '@/router.js';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('shell', shell);

loadIcons();
const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .component('fa', FontAwesomeIcon)
    .use(hljsVuePlugin)
    .mount('#app');
