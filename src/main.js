import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NewsView from './views/NewsView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'NewsView',
            component: NewsView
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')