import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

// Pages
import Home from './pages/home/Home.vue'
import Articles from './pages/articles/Articles.vue'
import About from './pages/about/About.vue'
import Contact from './pages/contact/Contact.vue'
import OneArticle from './pages/articles/OneArticle.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home
        },
        {
            path: '/articles', component: Articles
        },
        {
            path: '/about', component: About
        },
        {
            path: '/contact', component: Contact
        },
        {
            path: '/article/:articleID', component: OneArticle, name: 'Article'
        }
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
