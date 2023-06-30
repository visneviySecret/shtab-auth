import { createApp } from 'vue'
import './style.css'
import App from './App/index.vue'
import store from './store'
import router from './App/router'

createApp(App).use(store).use(router).mount('#app')
