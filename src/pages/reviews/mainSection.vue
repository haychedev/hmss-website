<template>
<ReviewPage/>
<reviewSection/>

</template>
<script>


import reviewSection from '../home/reviewSection.vue'
import ReviewPage from './reviewPage.vue';
export default {
    components: { reviewSection, ReviewPage },
}

</script>
<style scoped></style>