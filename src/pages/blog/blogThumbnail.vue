<template>
    <section>
        <h2>hayche blog categories</h2>
        <div class="container">
            <div class="container-box">

                <div class="img-box">
                    <img :src=tourism>
                    <a href="/blog/tourism">
                        <div class="label">
                            <h3>tourism <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>

                </div>

            </div>

            <div class="container-box">

                <div class="img-box">
                    <img :src=hotel>
                    <a href="/blog/hotel">
                        <div class="label">
                            <h3>hotel <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>
                </div>

            </div>

            <div class="container-box">

                <div class="img-box">
                    <img :src=food>
                    <a href="/blog/food">
                        <div class="label">
                            <h3>food <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>
                </div>

            </div>

            <div class="container-box">

                <div class="img-box">
                    <img :src=music>
                    <a href="">
                        <div class="label">
                            <h3>music <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>
                </div>

            </div>

            <div class="container-box">

                <div class="img-box">
                    <img :src=culture>
                    <a href="">
                        <div class="label">
                            <h3>culture <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>
                </div>

            </div>

            <div class="container-box">

                <div class="img-box">
                    <img :src=art>
                    <a href="">
                        <div class="label">
                            <h3>art <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>
                </div>

            </div>



            <div class="container-box">

                <div class="img-box">
                    <img :src=wellness>
                    <a href="">
                        <div class="label">
                            <h3>wellness <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>
                </div>

            </div>

            <div class="container-box">

                <div class="img-box">
                    <img :src=decor>
                    <a href="">
                        <div class="label">
                            <h3>interior decor <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>
                </div>

            </div>

            <div class="container-box">

                <div class="img-box">
                    <img :src=fashion>
                    <a href="">
                        <div class="label">
                            <h3>fashion <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        mega: require('@/assets/mega-hotels.png'),
        tourism: require('@/assets/tourism.jpg'),
        culture: require('@/assets/culture.jpg'),
        music: require('@/assets/music.jpg'),
        food: require('@/assets/food.jpg'),
        art: require('@/assets/art.jpg'),
        wellness: require('@/assets/wellness.jpg'),
        hotel: require('@/assets/hotel.jpg'),
        decor: require('@/assets/decor.jpg'),
        fashion: require('@/assets/fashion.jpg'),
    })
}
</script>
<style scoped>

section h2{
    font-family: Oswald;
    font-size: 40px;
    text-align: center;
    text-transform: capitalize;
    font-weight: 400;
    padding-top: 150px;
    padding-bottom: 50px;
}

.img-box {
    width: 500px;
    height: 300px;
    position: relative;
}

.img-box:nth-child(2) {
    border-top-right-radius: 30px 30px;
}

.img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3%;
}

.label h3 {
    font-family: Oswald;
    font-size: 30px;
    font-weight: 400;
    text-transform: capitalize;
    color: var(--light);
    padding: 20px;
    text-align: center;
    transition: all 0.5s ease;
}

i {
    font-size: 20px;
}

.label {
    background: var(--light-purple);
    position: absolute;
    bottom: 0px;
    text-align: center;
    right: 0%;
    /* border-bottom-left-radius: 10%; */
    transition: all 0.5s ease;
    /* width: 30%; */
}

.label:hover {
    background: var(--light);
}

.label:hover>h3 {
    color: var(--light-purple);
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    padding-bottom: 100px;
}

@media only screen and (max-width: 1500px) {
    .img-box {
        width: 450px;
        height: 300px;
        gap: 15px;
    }
}

@media only screen and (max-width: 450px) {
    .img-box {
        width: 350px;
        height: 200px;

    }

    .container {
        gap: 20px;
    }

    .label h3 {
        font-size: 20px;
    }
}

@media only screen and (max-width: 350px) {
    .img-box {
        width: 300px;
        height: 200px;

    }
}
</style>