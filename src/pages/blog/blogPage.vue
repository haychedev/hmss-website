<template>
    

    <blogThumbnail />
</template>


<script>

import blogThumbnail from './blogThumbnail.vue'

export default {
  components: {
    blogThumbnail,
},
data: () => ({
        mega: require('@/assets/mega-hotels.png'),
    })
};

</script>

<style scoped>


@media only screen and (max-width: 500px) {
   
}
</style>