import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from '@/router/'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

createApp(App)
    .use(PrimeVue, {
        preset: Aura
    })
    .use(router)
    .mount('#app')
