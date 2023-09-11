import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import {  MotionPlugin  } from '@vueuse/motion'

import {  VScrollLock  } from 'v-scroll-lock'

import home from './pages/home/mainSection.vue';
import academy from './pages/academy/mainSection.vue';
import digital from './pages/digital/mainSection.vue';
import lifestyle from './pages/lifestyle/mainSection.vue';
import projects from './pages/projects/mainSection.vue';
import about from './pages/about/aboutPage.vue';
import contact from './pages/contact/contactPage.vue';
import network from './pages/network/networkPage.vue';
import reviews from './pages/reviews/mainSection.vue';
import blog from './pages/blog/blogPage.vue';
import toc from './pages/toc/mainSection.vue';
import privacy from './pages/privacy/privacyPage.vue';

const routes = [
    { path: '/', component: home },
    { path: '/hayche-academy', component: academy },
    { path: '/hayche-digital', component: digital },
    { path: '/hayche-lifestyle', component: lifestyle },
    { path: '/hayche-projects', component: projects },
    { path: '/about', component: about },
    { path: '/contact', component: contact },
    { path: '/hayche-network', component: network },
    { path: '/reviews', component: reviews },
    { path: '/blog', component: blog },
    { path: '/t&c', component: toc },
    { path: '/privacy', component: privacy },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).use(MotionPlugin).use(VScrollLock).mount('#app')
