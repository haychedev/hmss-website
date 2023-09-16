<template>
    <section>
        <h3 v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}">our partnership</h3>
        <p>At HMSS, we understand that strategic partnerships and alliances are the foundation for
            success. We provide consulting services around the world through carefully selected
            local partners. The resulting synergies has enabled us to develop sustainable solutions
            adapted to local conditions. HMSS operates through partners in</p>
        <div class="flags">
            <img v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" :src=angola>
            <img v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        delay: 100,
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" :src=elsalvador>
            <img v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        delay: 200,
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" :src=ethiopia>
            <img v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        delay: 300,
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" :src=ghana>
            <img v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        delay: 400,
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" :src=guatemela>
            <img v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        delay: 500,
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" :src=honduras>
            <img v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        delay: 600,
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" :src=mexico>
            <img v-motion :initial="{
                opacity: 0,
                y: -100,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        delay: 700,
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}" :src=mozambique>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        angola: require('@/assets/angola.png'),
        elsalvador: require('@/assets/elsalvador.png'),
        ethiopia: require('@/assets/ethiopia.png'),
        ghana: require('@/assets/ghana.png'),
        guatemela: require('@/assets/guatemela.png'),
        honduras: require('@/assets/honduras.png'),
        mexico: require('@/assets/mexico.png'),
        mozambique: require('@/assets/mozambique.png'),
       
    })
}
</script>

<style scoped>

.flags{
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
}
section {
    text-align: center;
    padding-bottom: 100px;
    padding-top: 50px;
}

h3 {
    margin-bottom: 30px;
    font-family: Oswald;
    color: var(--dull-black);
    text-transform: capitalize;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 97.5%;
    /* 46.8px */
    letter-spacing: 0.48px;
    text-align: center;
}

p {
    color: var(--dull-black);
    font-size: 20px;
    text-align: center;
}

@media only screen and (max-width: 500px){
    p{
        font-size: 18px;
    }
}
</style>