import HomeView from '@/pages/HomeView.vue'
import AboutView from '@/pages/AboutView.vue'

export const Menus = [
    {
        name: 'home',
        path:'/', 
        component:HomeView, 
        text: 'Home',
        icon: 'pi pi-home'
    },
    {
        name: 'about', 
        path:'/about', 
        component: AboutView, 
        text: 'About',
        icon: 'pi pi-info-circle'
    },
]