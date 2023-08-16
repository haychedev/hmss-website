<template>
    <heroSection/>
    <aboutSection/>
    <visionSection/>
    <socialSection/>
    <ctaSection/>
    <reviewSection/>
    <reviewLink/>
</template>

<script>
import heroSection from './heroSection.vue'
import aboutSection from './aboutSection.vue'
import visionSection from './visionSection.vue'
import socialSection from './socialSection.vue';
import ctaSection from './ctaSection.vue';
import reviewSection from './reviewSection.vue';
import reviewLink from './reviewLink.vue';

export default {
  components: {
    heroSection,
    aboutSection,
    visionSection,
    socialSection,
    ctaSection,
    reviewSection,
    reviewLink
  },
};
</script>