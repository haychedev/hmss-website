<template>
    <main class="social-container">
        <section>
            <h2 class="social-heading" v-motion :initial="{
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
}">
                Organizations we work with
            </h2>
            <div class="social-images">
                <div class="social-image" v-motion :initial="{
                    opacity: 0,
                    y: -50,
                }" :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}">
                    <img :src=usaid>
                </div>
                <div class="social-image" v-motion :initial="{
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
}">
                    <img class="waho" :src=waho>
                </div>
                <div class="social-image" v-motion :initial="{
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
}">
                    <img :src=ashia>
                </div>
                <div class="social-image" v-motion :initial="{
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
}">
                    <img :src=esauhc>
                </div>
                <div class="social-image" v-motion :initial="{
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
}">
                    <img :src=gei>
                </div>
                <div class="social-image" v-motion :initial="{
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
}">
                    <img :src=northstar>
                </div>

            </div>
        </section>
    </main>
</template>

<script>

export default {
    name: 'Social-proof',
    data: () => ({
        usaid: require('@/assets/usaid.png'),
        waho: require('@/assets/waho.png'),
        ashia: require('@/assets/ashia.png'),
        esauhc: require('@/assets/esauhc.png'),
        gei: require('@/assets/gei.png'),
        northstar: require('@/assets/northstar.png'),
        ooad: require('@/assets/ooad.jpg'),

    })
}
</script>

<style scoped>
.social-container {
    margin-top: 100px;
    margin-bottom: 100px;

}

.social-heading {
    color: var(--dull-black);
    font-family: Oswald;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 97.5%;
    /* 46.8px */
    letter-spacing: 0.48px;
    text-align: center;
    margin-bottom: 100px;
}

.social-images {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
}

.social-image {
    width: 150px;
    height: 150px;

}

.social-image img {
    width: 100%;
    filter: grayscale(100%);
    transition: all 0.5s ease;
    mix-blend-mode: multiply;
}

.social-image img:hover {
    width: 100%;
    filter: grayscale(0%);
    transition: all 0.5s ease;
}

.waho {
    width: 30%;
}

/* media query for laptop screens */
@media only screen and (min-width: 1024px) {}

/* media query for tablet screens */
@media only screen and (max-width: 990px) {
    .social-heading {
        color: var(--dull-black);
        font-family: Oswald;
        font-size: 35px;
        font-style: normal;
        font-weight: 300;
        line-height: 97.5%;
        /* 46.8px */
        letter-spacing: 0.48px;
        text-align: center;
        margin-bottom: 100px;
    }
}

/* media query for phones */
@media only screen and (max-width: 768px) {}

/* media query for smaller devices */
@media only screen and (max-width: 500px) {
    .social-container {
        margin-top: 50px;
        margin-bottom: 50px;

    }

    .social-heading {
        font-size: 30px;


    }

}
</style>