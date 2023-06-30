import { createStore } from 'vuex'
import { Response, Profile } from '../entites/User/types'
import { signIn, getUserProfile } from '../entites/User/api'

const store = createStore({
    state: {
        user: null,
        isAuthenticated: false,
    },
    getters: {
        getUser(state) {
            return state.user
        },
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        updateUser(state, payload) {
            state.user = payload
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload
        },
    },
    actions: {
        async signin(context, payload) {
            const response: Awaited<Response> = await signIn(payload)

            if (response) {
                const profile = await getUserProfile(response.token)
                context.commit('setIsAuthenticated', true)
                context.commit('setUser', profile)
            } else {
                throw new Error('Не можем выполнить запрос на вход')
            }
        },
        async signout(context) {
            context.commit('setUser', null)
            context.commit('setIsAuthenticated', false)
        },
    },
})

export default store
