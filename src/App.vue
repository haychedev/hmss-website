<template>
  <Navigation/>
  
  <!-- <RouterView/> -->

  <!-- <RouterView v-slot="{ Component}">
    <transition name="fade" >
      <component :is="Component"></component>
    </transition>
  </RouterView> -->


  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>



  <Footer/>

</template>

<script>

import Navigation from './components/Navigation.vue';

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    // defence,
    // mainSection,
    // hero,
    // about,
    // vision,
    // social,
    // cta,
    // review,
    Footer,
  },

  
}
</script>

<style lang="scss">
  @import url(./assets/css/app.css);


  // route transitions

  // .route-enter-from{
  //   opacity: 0;
  //   transform: translateX(100px);
  // }

  // .route-enter-active{
  //   transition: all 0.3s ease-out;
  // }

  // .route-leave-to{
  //   opacity: 0;
  //   transform: translateX(-100px);
  // }

  // .route-leave-active{
  //   transition: all 0.3s ease-in;
  // }

  .scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
  // transform: translateX(100px);
}

</style>
