<template>
    <div id="reviews" class="review-container">
        <section>
            <div class="review-heading">
                <h3 v-motion :initial="{
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
}">hayche reviews</h3>
                <!-- <p>Receive reviews of your businesses in several locations straight in your inbox. You’ve worked hard enough
                    for this. Allow us monitor your growth & success.</p> -->
            </div>
            <div class="review-boxes">

                <div class="review-box" v-motion :initial="{
                    opacity: 0,
                    x: -50,
                }" :visibleOnce="{
    opacity: 1,
    x: 0,
    transition: {
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}">
                    <div class="review-medals">
                        
                        <img :src=medal>
                        <img :src=medal>
                    </div>
                    <div class="reviewer-img">
                        <img :src=Kilimanjaro>
                    </div>
                    <div class="reviewer">
                        <h4>Kilimanjaro</h4>
                    </div>
                    <div class="reviewer-text">
                        <p>I wasn't very impressed with the overall experience at Kilimanjaro, though I quite enjoyed the
                            food.</p>
                    </div>
                    <div class="reviewer-name">
                        <p>Chisom Winifred</p>
                    </div>
                </div>


                <div class="review-box" v-motion :initial="{
                    opacity: 0,
                    y: -50,
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
                    <div class="review-medals">
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                    </div>
                    <div class="reviewer-img">
                        <img :src=pyramid>
                    </div>
                    <div class="reviewer">
                        <h4>La Pyramide patisserie</h4>
                    </div>
                    <div class="reviewer-text">
                        <p>Very good, liked it we recommend.</p>
                    </div>
                    <div class="reviewer-name">
                        <p>Aisha / Andrew</p>
                    </div>
                </div>


                <div class="review-box" v-motion :initial="{
                    opacity: 0,
                    x: 50,
                }" :visibleOnce="{
    opacity: 1,
    x: 0,
    transition: {
        delay: 200,
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}">
                    <div class="review-medals">
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                    </div>
                    <div class="reviewer-img">
                        <img :src=roundabout>
                    </div>
                    <div class="reviewer">
                        <h4>the Roundabout</h4>
                    </div>
                    <div class="reviewer-text">
                        <p>Very good, liked it, will recommend.</p>
                    </div>
                    <div class="reviewer-name">
                        <p>Aisha / Andrew</p>
                    </div>
                </div>


                
                <div class="review-box" v-motion :initial="{
                    opacity: 0,
                    y: -50,
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
                    <div class="review-medals">
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                    </div>
                    <div class="reviewer-img">
                        <img :src=roots>
                    </div>
                    <div class="reviewer">
                        <h4>roots restaurant and cafe</h4>
                    </div>
                    <div class="reviewer-text">
                        <p>I enjoyed my time at Roots Restaurant, especially for bringing in rich African culture and heritage in an environment that is welcoming, clean and comforting.</p>
                    </div>
                    <div class="reviewer-name">
                        <p>Chisom Winifred</p>
                    </div>
                </div>



            </div>
           
        </section>
    </div>
</template>

<script>
export default {
    name: "reviews-section",
    data: () => ({
        mega: require('@/assets/mega-hotels.png'),
        eko: require('@/assets/eko-hotels.png'),
        sheraton: require('@/assets/Sheraton-Hotels.png'),
        medal: require('@/assets/hayche-medal.png'),
        Kilimanjaro: require('@/assets/kilimanjaro.png'),
        pyramid: require('@/assets/la-pyramid.png'),
        roots: require('@/assets/roots.png'),
        roundabout: require('@/assets/the-roundabout.png'),

    })
}
</script>

<style scoped>
.review-container {
    opacity: 0.8;
    background: var(--dark-purple, #522888);
}

.reviewer-name {
    color: var(--light);
}

.review-heading h3 {
    color: var(--light, #F8F8F8);
    font-family: Oswald;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 97.5%;
    /* 46.8px */
    letter-spacing: 0.48px;
    text-align: center;
    text-transform: capitalize;
    padding-top: 100px;
    padding-bottom: 30px;
}

.review-heading p {
    color: var(--light);
    text-align: center;
    letter-spacing: 0.5px;
    width: 80%;

}

.review-heading {
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.review-boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 50px;
    justify-content: center;
    align-items: center;
}

.review-box {
    width: 350px;
    height: 394px;
    background: #623D93;

    /* card shadow */
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    position: relative;
}

.reviewer h4 {
    color: var(--light, #F8F8F8);
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 97.5%;
    /* 31.2px */
    letter-spacing: 0.32px;
    text-transform: capitalize;
}

.reviewer-text p {
    color: var(--light, #F8F8F8);
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.2px;
}

.reviewer-img img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.review-medals {
    position: absolute;
    top: 0;
    right: 10px;
}

.review-medals img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    mix-blend-mode: multiply;
}



/* media query for laptop screens */
@media only screen and (min-width: 1024px) {}

/* media query for tablet screens */
@media only screen and (max-width: 990px) {}

/* media query for phones */
@media only screen and (max-width: 768px) {}

/* media query for smaller devices */
@media only screen and (max-width: 500px) {
    .review-heading p {
        width: 90%;
        font-size: 15px;
    }
}
</style>