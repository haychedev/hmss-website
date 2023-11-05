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
import blogPage from './pages/blog/blogMain.vue';
import toc from './pages/toc/mainSection.vue';
import privacy from './pages/privacy/privacyPage.vue';
import whoWeAre from './pages/who we are/mainSection.vue';
import ourTeam from './pages/team/mainSection.vue';
import tourism from './pages/blog/tourism/mainSection.vue';
import food from './pages/blog/food/mainSection.vue';
import carpeVerde from './pages/blog/tourism/carpe-verde.vue';
import travelling from './pages/blog/tourism/travelling-from-nigeria.vue';
import travelSolo from './pages/blog/tourism/travel-solo.vue';
import dakarTour from './pages/blog/tourism/dakarTour.vue';
import NgoziNgoka from './pages/blog/tourism/ngozi-ngoka.vue';
import hotel from './pages/blog/hotel/mainSection.vue';
import skills from './pages/blog/hotel/professional-skills.vue';
import customerRight from './pages/blog/hotel/customer-right.vue';
import customerService from './pages/blog/hotel/customer-service.vue';
import customerService2 from './pages/blog/hotel/customer-service2.vue';
import hospitalityCareer from './pages/blog/hotel/hospitality-career.vue';
import phoneEtiquette from './pages/blog/hotel/phoneEtiquette.vue';
import chefBlack from './pages/blog/food/chefBlack.vue';
import defensePdf from './pages/who we are/defense-pdf.vue'



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
    { path: '/blogPage', component: blogPage },
    { path: '/t&c', component: toc },
    { path: '/privacy', component: privacy },
    { path: '/who-we-are', component: whoWeAre },
    { path: '/our-team', component: ourTeam },
    { path: '/blog/tourism', component: tourism },
    { path: '/blog/food', component: food },
    { path: '/Meet-Chef-Black', component: chefBlack },
    { path: '/visit-to-carpe-verde', component: carpeVerde },
    { path: '/A-Quick-Tour-of-Dakar', component: dakarTour },
    { path: '/is-it-better-to-travel-solo', component: travelSolo },
    { path: '/travelling-from-Nigeria', component: travelling },
    { path: '/meet-Ngozi-Ngoka', component: NgoziNgoka },
    { path: '/blog/hotel', component: hotel },
    { path: '/5-Professional-Skills-a-hospitality-manager-must-possess', component: skills },
    { path: '/Are-you-in-customer-service-This-is-for-you', component: customerService },
    { path: '/Is-the-customer-really-always-right', component: customerRight },
    { path: '/Customer-service-is-all-about-the-customer', component: customerService2 },
    { path: '/Are-you-using-the-right-phone-etiquette-for-your-business-image', component: phoneEtiquette },
    { path: '/Are-You-Ready-To-Start-An-Exciting-Career-In-Hospitality', component: hospitalityCareer },
    { path: '/defense-pdf', component: defensePdf },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).use(MotionPlugin).use(VScrollLock).mount('#app')
