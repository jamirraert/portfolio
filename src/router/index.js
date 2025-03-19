import { createWebHistory , createRouter } from 'vue-router'

import { Menus } from '@/menus.js'

import NotFoundView from '@/pages/NotFoundView.vue'

const routes = [
    ...Menus.map((menu) => {
        return {
            path: menu.path,
            name: menu.name,
            component: menu.component
        }
    }),
    {
        name: 'notfound', 
        path: '/:pathMatch(.*)*', 
        component: NotFoundView
    }
]



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router