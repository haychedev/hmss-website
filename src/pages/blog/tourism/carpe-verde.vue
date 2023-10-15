<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">A Visit to the Beautiful Exotic Cape Verde</h2>
            <div class="blog-img">
                <img :src=capeVerde>
            </div>
            <div class="blog-text">
                
                
                <p>
                    When it comes to places to vacation, Cape Verde may not be one of the first
                destinations that comes to mind. Cape Verde is an archipelago off the mid-Atlantic
                (ocean), made up of a cluster of 10 volcanic islands. Its capital Praia is on the Island of
                Santiago, which is also the location of the country’s major airport. Cape Verde is a mere
                350 miles from Senegal, and close to Gambia and Mauritania.
                <br>
                <br>
                Cape Verde, officially known as the republic of Cabo Verde, is your best choice if you
                are looking for a vacation spot that offers tropical sunshine, miles of white-sand
                beaches and an unforgettable experience. It is said that the weather is pleasant all year
                round, which I found to be true; the temperature was 25 to 30 degrees Celsius with 17
                hours of sunshine, amazing right? The water is not always safe to swim in, however,
                relaxing on the beach watching the waves, and the currents rip across the surface was
                blissful. In addition to the amazing views, the lifestyle is relaxed, almost “stress-free”.
                Praia, where I spent most of my time during my visit to Cape Verde, has a vibrant
                nightlife, with clubs that play a variety of music that reflect the diversity of the continent.
                <br><br>
                Traveling in Africa is often a harrowing experience of multiple stops and long layovers;
                however, my flight to Cape Verde had one stop in Dakar, Senegal, where I opted to
                spend the night and catch a connecting flight to Praia the following day. My stay in
                Dakar was very interesting, which I shall talk about in another blog post. A round trip
                ticket from Nigeria to Cape Verde, depending on the time of the year, could cost about
                one thousand, five hundred (1,500) US Dollars.
                <br><br>
                On arrival in Praia, I was immediately struck by the ocean fresh scent of the air, I simply
                couldn’t get enough of the exhilarating feeling of breathing in such freshness. As
                always, I arrived at my hotel full of anticipation. As those of you who follow my blog
                posts already know my passion for hospitality, the hotel experience is always a very
                special one for me. I arrived at the Sol Hotel, a 4-star hotel located on the hills of
                Santiago. My fourth-floor room provided a beautiful view of the ocean; I was in heaven.
                <br><br>
                Breakfast at hotels is always for me, a good measure of the worth of a hotel, especially
                if it’s buffet style. The next morning, I was not disappointed. Breakfast was buffet style
                with an impressive selection of cold cuts, hot dishes, salads and pastries, with freshly
                brewed coffee, freshly squeezed juices and selection of tropical fruits. This was a great
                way to start my first day in Praia.
                <br><br>
                There are many exciting places to visit on the island of Praia, and though I had made a
                list before traveling, I was overwhelmed by the available choices when I actually got into town; so many
                awesome places that are not even listed in the online travel guides.
                While Praia is the main island, each island feels vastly different from the other, and
                features its own unique set of attractions and reasons to visit. Here are a few sites on
                the island of Praia that are definitely worth seeing.
                <br><br>
                Praia Archaeology Museum (Museu Ethnografico da Praia) is an ethnographic museum
                located in a historic part of the city in a 19th century building, and contains a selection of
                objects that represent the traditional uses and customs of the Cape Verdean people. A
                visit to the archaeological museum is a very enlightening and memorable experience.
                The National Library of Cape Verde is also a very important and interesting place that
                houses the country’s historical archives and also serves as a legal deposit.
                <br><br>
                Ponta do Lobo Lighthouse was built during the 19th century, and is one of the oldest
                lighthouses in the country. Visiting the lighthouse was one of the high points of my tour
                of Praia.
                <br><br>
                The Presidential palace is a public building in the center of Praia. It was formerly a
                residence of the Portuguese governor of Cape Verde (Cape Verde was colonized by the
                Portuguese). After Cape Verde gained independence in 1975, it became the
                presidential palace.
                <br><br>
                Quartel Jaime Mota is a historical building near the presidential palace, which allows
                you to see both within a short period. It was built as a military barracks, but after
                independence, it was renamed after Jaime Mota, a Cape Verdean militant who was
                killed in the old Guinea-Bissau. It is now being rehabilitated to house both a military
                museum and services of the ministry of Defense.
                <br><br>
                Casa do Reggae also known as the house of Reggae is a vibrant nightlife spot that
                celebrates African heritage with a beautiful view of the city from the east side. The
                people of Cape Verde are widely known for their love for music, which shapes their
                lifestyle. Most people of Cape Verde practice dancing during the day and then show off
                their dancing skills at night at the various nightclubs. Their unique music is known as
                morna, a lilting rhythmic form of music, with distinct African influences. You will likely
                hear morna at clubs, along with a variety of other musical genres.
                <br><br>
                Cape Verde doesn’t appear to have a varied cuisine. While I enjoyed the platters that
                were offered to me, they quickly became monotonous, and I began craving some good
                old Nigerian food (apologies to my delightful Cape Verdean hosts, and hostesses). So, I
                was directed to Africafe, a superb restaurant, located next to Hotel Santiago, that offers
                an impressive variety of African dishes.
                <br><br>
                Just a quick tip for Nigerians traveling to Cape Verde, remember to take extra spices
                especially pepper. Thank me later. ;)

                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        capeVerde: require('@/assets/capeVerde.jpg'),

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

.blog-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container {
    padding-top: 150px;
}

.blog-text{
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blog-text p{
    text-align: justify;
    width: 60vw;
    font-weight: 500;
}

@media only screen and (max-width: 800px){
    .blog-text p{
    width: 80vw;
}
}

</style>