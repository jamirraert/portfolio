import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from '@/router/'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import Ripple from 'primevue/ripple';
import Skeleton from 'primevue/skeleton';

const app = createApp(App)
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    app.component('Skeleton', Skeleton)
    app.directive('ripple', Ripple)
    app.use(router)
    app.mount('#app')
