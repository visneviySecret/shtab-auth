import { createRouter, createWebHistory } from 'vue-router'

import Profile from '/src/Pages/profile.vue'
import SignIn from '/src/Pages/signin.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true },
    },
    { path: '/login', name: 'SignIn', component: SignIn },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from) => {
    if (to.name === 'Home') {
        return {
            name: 'SignIn',
        }
    }
})

export default router
