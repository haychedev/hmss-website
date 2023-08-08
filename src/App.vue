<template>
  <Navigation/>
  <mainSection/>
  <!-- <hero/>
  <about/>
  <vision/>
  <social/>
  <cta/>
  <review/> -->
  <Footer/>

</template>

<script>

import Navigation from './components/Navigation.vue';
import mainSection from './pages/home/mainSection.vue';
// import hero from './pages/home/hero.vue';
// import about from './pages/home/about.vue';
// import vision from './pages/home/vision';
// import social from './pages/home/social';
// import cta from './pages/home/cta';
// import review from './pages/home/reviews';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    mainSection,
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
</style>
