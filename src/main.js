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
import reviews from './pages/reviews/reviewPage.vue';

const routes = [
    { path: '/', component: home },
    { path: '/academy', component: academy },
    { path: '/digital', component: digital },
    { path: '/lifestyle', component: lifestyle },
    { path: '/projects', component: projects },
    { path: '/about', component: about },
    { path: '/contact', component: contact },
    { path: '/network', component: network },
    { path: '/reviews', component: reviews },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).use(MotionPlugin).use(VScrollLock).mount('#app')
