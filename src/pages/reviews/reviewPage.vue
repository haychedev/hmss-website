<template>
    <div class="container">
        <section>
            <div class="wrapper">
                <h1 class="heading" v-motion :initial="{
                opacity: 0,
                x: -100,
            }" :enter="{
    opacity: 1,
    x: 0,
    transition: {
        type: 'spring',
        stiffness: '100',
        delay: 100,
    },
}">
                    Hayche Review System
                </h1>
                <p>As part of the review process, medals are awarded to each establishment reviewed, which provides a quick
                    visual indication of the performance of that establishment.
                   
                </p>
                <h3>
                    The medal system is as follows:</h3>
            </div>
            <div class="review-infos">

                <div class="review-info">
                    <div class="info-img">
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                    </div>
                    <div class="info-text">
                        <p>
                            Exceptional (loved it, will certainly recommend and patronize again, and again)
                        </p>
                    </div>
                </div>

                <div class="review-info">
                    <div class="info-img">
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <!-- <img :src=medal> -->
                    </div>
                    <div class="info-text">
                        <p>
                            Very Good (Liked it, will recommend)
                        </p>
                    </div>
                </div>


                <div class="review-info">
                    <div class="info-img">
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <!-- <img :src=medal>
                        <img :src=medal> -->
                    </div>
                    <div class="info-text">
                        <p>
                            Good (willing to give it another chance)
                        </p>
                    </div>
                </div>


                <div class="review-info">
                    <div class="info-img">
                        <img :src=medal>
                        <img :src=medal>
                        <!-- <img :src=medal>
                        <img :src=medal>
                        <img :src=medal> -->
                    </div>
                    <div class="info-text">
                        <p>
                            Just ok (could be better)
                        </p>
                    </div>
                </div>

                <div class="review-info">
                    <div class="info-img">
                        <img :src=medal>
                        <!-- <img :src=medal>
                        <img :src=medal>
                        <img :src=medal>
                        <img :src=medal> -->
                    </div>
                    <div class="info-text">
                        <p>
                            Bad (Not in a hurry to patronize again)
                        </p>
                    </div>
                </div>


                <div class="review-info">
                    <div class="info-img">
                       <h3>0</h3>
                    </div>
                    <div class="info-text">
                        <p>
                           Terrible (Will never patronize again, or recommend to anyone)
                        </p>
                    </div>
                </div>

            </div>
        </section>

    </div>

    
</template>
<script>

export default {
   
    data: () => ({
        medal: require('@/assets/hayche-medal.png'),

    })
}
</script>
<style scoped>
.container {
    /* height: 100vh; */
    padding-top: 100px;
    margin-bottom: 50px;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.heading {
    font-size: 60px;
    font-family: Oswald;
    font-weight: 400;
    color: var(--dull-black);
    margin-top: 50px;
    margin-bottom: 25px;
}

.wrapper p {
    width: 80%;
    margin-top: 10px;
    text-align: center;
}

.review-info {
    display: flex;
    gap: 30px;
    /* align-items: center; */
    /* justify-content: center; */
}

.info-img img {
    width: 30px;
    mix-blend-mode: multiply;
}

.review-infos{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

.info-text p {
    width: 50vw;
}

.margin{
    margin-top: 100px;
}

.info-img h3{
    color: red;
    font-size: 30px;
}

.wrapper h3{
    font-size: 20px;
    font-weight: 400;
    margin-top: 50px;
}



@media only screen and (max-width: 990px) {
    .heading {
    font-size: 70px;

}
}

@media only screen and (max-width: 768px) {
    .heading {
    font-size: 50px;

}
.review-info {
    display: flex;
    gap: 30px;
    flex-direction: column;
    box-shadow: var(--box-shadow);
    padding: 30px;
    /* align-items: center; */
    /* justify-content: center; */
}

}

@media only screen and (max-width: 500px){
    .heading {
    font-size: 30px;

}


.wrapper p {
    width: 100%;
    margin-top: 10px;
    text-align: center;
}


.info-text p {
    width: 80vw;
}
}
</style>