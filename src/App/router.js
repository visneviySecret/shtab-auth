import { createRouter, createWebHistory } from 'vue-router'

import Profile from '/src/Pages/profile.vue'
import SignIn from '/src/Pages/signin.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Profile,
        meta: { requiresAuth: true },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true },
    },
    { path: '/login', name: 'SignIn', component: SignIn },
]

const isAuthenticated = true

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !isAuthenticated) {
        return {
            name: 'login',
        }
    }
    if (to.name === 'Home') {
        return {
            name: 'login',
        }
    }
})

export default router
