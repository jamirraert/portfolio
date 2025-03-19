<script setup>
    import { reactive } from 'vue'

    import { Menus } from '@/menus.js'
    import { RouterLink } from 'vue-router'

    import Menubar from 'primevue/menubar';

    const formattedMenus = Menus.map((menu) => ({
        label: menu.text,
        icon: menu.icon, 
        route: menu.name
    }))

    const items = reactive(formattedMenus)
</script>
<template>
    <Menubar :model="items" class="bg-red-300">
        <template #item="{item, props}">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="{ name: item.route }" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </template>
    </Menubar>
</template>