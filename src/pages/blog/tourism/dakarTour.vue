<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">A Quick Tour of Dakar</h2>
            <div class="blog-img">
                <img :src=dakar>
            </div>
            <div class="blog-text">


                <p>
                    Lately, I’m doing a lot of traveling through West Africa, and in the process, rediscovering
                    a vibrant region with beautiful people, rich history, exotic foods, and lifestyle. Read
                    about <a href="/capeVerde">my trip to Cape Verde here</a>. My latest rediscovery is Dakar, Senegal. Though I
                    have traveled to Dakar many times, I still get a rush of excitement each time I visit.
                    Perhaps it has something to do with the fact that my ancestors are from Senegal, but
                    that’s a story for another time.
                    <br>
                    <br>
                    In Dakar, it is typical to see long continuous markets on the roadside that offer ripe
                    tropical fruits and assortment of clothing, mostly used clothing also known as “feugue-diaye”. In the
                    market, amid the dust, and smoke from open fires cooking a variety of
                    foods, women are typically dressed in their large boubous made from native fabrics.
                    French, occasionally mixed with Wolof is predominantly spoken in Senegal, so it is often
                    a challenge, and a huge relief to find English speakers.
                    <br><br>
                    When planning your next vacation to Dubai or to Europe consider visiting Dakar, which
                    offers a variety of beautiful vacation spots and amenities; here are a few:
                    <br><br>
                    Beaches of Dakar- The beaches in Senegal, especially those in Dakar are known to be
                    very distinct with their unmatched golden sands. The beaches are perfect for relaxing
                    and rejuvenating, as you soak up the sun and cool off in the fresh water.
                    <br><br>
                    Dakar’s Mamelles – These are two hills in the city’s western peninsula, a lighthouse was
                    built on one in 1864, though it has been converted into a stylish restaurant bar. The
                    other holds the tallest statue in Africa, the African Renaissance monument which stands
                    at an impressive 49 meters. The statue features the figure of a man, woman and a child
                    pointing towards the Atlantic Ocean, this is a perfect spot to get pictures of the amazing
                    views across the Peninsula.
                    <br><br>
                    The Lac Rose (Pink Lake) – This is also referred to as the Dead Sea and it is known for
                    its high salt content, it is 30km north-east Dakar. The lake is separated from the Atlantic
                    Ocean by a narrow corridor of dunes.
                    <br><br>
                    Arts – Dakar is a hub for African art, it holds the largest and oldest contemporary Art
                    show in Africa: the Dakar Biennale, the event holds for a whole month (between May
                    and June) in venues across the city to showcase the best of African Art.
                    <br><br>
                    The Markets - Dakar has been a major trading post for centuries, and is today known for
                    its vibrant markets. Marche Sandanga is Dakar’s oldest and largest market which I recommend you visit if
                    you have an adventurous spirit; I ended up buying things I did
                    not know I needed. There is also the Marche HLM, a hub for very beautiful and colorful
                    fabrics.
                    <br><br>
                    Ile Goree – is a small island located off the coast of Dakar, and is one of the most
                    historic spots in Senegal; a visit to Goree Island should be on the top of your list. Goree
                    Island was the largest slave-trading center between the 15th and 19th century Atlantic
                    slave Trade.
                    <br><br>
                    Food – Dakar has a wide variety of foods that suggest foreign influences. Because of its
                    proximity to the water, fish, and seafood are staples. Tip for Nigerians, Accara/Akara
                    (bean cake) can be found there at different hours of the day.
                    <br><br>
                    There are other highly recommended spots in Dakar such as the IFAN Museum of
                    African Arts and Galerie Arte which offer insights into the heritage of the continent.
                    There is also Village des Arts, a creative space for artists to work on and exhibit their
                    craft to the public. I hope to schedule a group visit to Dakar to spend more time
                    exploring all of its touristic treasures. Leave a comment if you’ll like to be part of this trip
                    and we shall get back to you about possible travel dates.

                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        dakar: require('@/assets/dakar.jpg'),

    })
}
</script>
<style scoped>
.blog-heading {
    text-align: center;
    font-family: Oswald;
    font-weight: 400;
    font-size: 30px;
    color: var(--dull-black);
    padding-bottom: 20px;
}

.blog-img {
    height: 400px;
}

.blog-text p a {
    color: var(--dark-purple);
    text-decoration: underline;
}
.blog-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container {
    padding-top: 150px;
}

.blog-text {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blog-text p {
    text-align: justify;
    width: 60vw;
    font-weight: 500;
}

@media only screen and (max-width: 800px) {
    .blog-text p {
        width: 80vw;
    }
}
</style>