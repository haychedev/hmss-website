<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Travelling from Nigeria? You’ll be surprised
                how little it costs to visit these countries!</h2>
            <div class="blog-img">
                <img :src=nigeria>
            </div>
            <div class="blog-text">


                <p>
                    The hospitality industry relies heavily on travel. Travelers spend money on hotel
                    accommodation, food, entertainment, and sightseeing.
                    <br>
                    <br>
                    You keep postponing that much deserved vacation with your girlfriend / boyfriend,
                    spouse, or family when you think of how much it would cost to vacation in Europe or
                    America, or even Dubai. The good news is that you can take that vacation now, and it
                    will cost you far less than you imagine!
                    <br><br>
                    As the fastest growing hospitality network in Africa, we promote inter-Africa travel and
                    tourism. Contrary to prevailing notions, Africa still remains a favorite travel destination
                    that offers per square mile, the greatest diversity in culture, comfort, leisure, food, and
                    entertainment, and best of all, it’s so affordable!
                    <br><br>
                    Today, for Nigerian travelers, we reveal the secret of African destinations you can
                    explore for less than five hundred thousand (500,000) Naira. While these countries are
                    geographically close to Nigeria, they offer an unforgettable experience of endless
                    adventures, rich history, beautiful scenery and friendly people. Comparatively, a
                    vacation in any one of these countries provides the best value for your money.
                    <br><br>
                    You must be wondering, “for less than five hundred thousand (500,000) Naira, how can
                    I purchase a flight ticket, and still have funds left for hotel accommodation?” Since
                    these travel destinations are all in West Africa, travel by road is the most cost-effective
                    option, which can be done in relative safety and comfort. Most of the highways
                    connecting West African countries are quite good, and there are also a number of
                    reliable and comfortable bus services that connect the countries.
                    <br><br>
                    You may be scratching your head and wondering, “how am I ever going to save up five
                    hundred thousand (500,000) Naira”? The answer is, “an adventure fund” You don’t have
                    to wait to win the lottery, the idea of an adventure fund is to help you set aside some
                    money for your vacation. An adventure fund <b>link</b> can
                    make your travel dreams a reality. So, for less than five hundred thousand (500,000)
                    Naira, here are the West African countries you can visit.
                    <br><br>
                    
                    <b>1. Ghana:</b> Ghana is a beautiful country that boasts many tourist destinations such as
                    national parks, museums, beaches and canopy walkways. The transport fare from Lagos to Accra is between
                    forty, and fifty thousand (40, 000 – 50, 000) Naira. Affordable
                    hotels range from twenty-five to forty-five thousand (25, 000 - 45, 000) Naira a night for
                    a single room, while the average cost of a plate of food in a standard restaurant is about
                    four thousand (4,000) Naira.

                    <br><br>
                    <b>2. Cameroon:</b>
                     Cameroon is a buzzing country with large industrious cities
                    complemented by vast areas of mountains, rain forest and beaches. There are over 230
                    local languages complementing the English and French speaking regions. Nigeria and
                    Cameroon share a border in Ikom local government in Cross river state. From the
                    border in Ikom to Bermenda in Cameroon costs between seven to 10 thousand (7, 000
                    – 10, 000) Naira. Affordable hotels range from, twenty-five to forty-five thousand (25,
                    000 - 45, 000) Naira a night for a single room, while the average cost of a plate of food
                    in a standard restaurant is five thousand (5,000) Naira.
                    <br><br>
                    <b>3. Togo:</b> Togo is known for its palm-lined beaches and hilltop villages. In the capital,
                    Lomé, is situated the multistory Grand Marché bazaar and the Fetish Market, offering
                    traditional talismans and remedies relating to the vodun (voodoo) religion. The most
                    affordable way to get from Nigeria to Togo is a bus ride that departs from Lagos, and
                    costs between twenty, and thirty thousand (20, 000 – 30, 000) Naira. Affordable hotels
                    in Lomé range from, twenty-five to forty-five thousand (25, 000 - 45, 000) Naira a night
                    for a single room, while the average cost of a plate of food in a standard restaurant is
                    three thousand (3,000) Naira.
                    <br><br>
                    <b>4. Benin republic:</b> Benin republic is relatively small and has only a few large cities that
                    invite travelers to explore museums, beautiful architecture and fascinating markets.
                    From Mile 2 in Lagos to Seme border takes about an hour and 40 minutes, and costs
                    between ten, and fifteen thousand (10, 000 – 15, 000) Naira. Affordable hotels range
                    from, twenty to thirty thousand (20, 000 - 30, 000) Naira a night for a single room, while
                    the average cost of a plate of food in a standard restaurant is two thousand (2,000)
                    Naira.
                    <br><br>
                    Now you are ready for that long-awaited vacation; enjoy!
                    <br><br>
                    While visas are not required for travel through Central / West Africa, be sure to carry
                    your Nigerian passport, vaccination card, and a bit of cash (you may not be able to use
                    your bank, or local credit cards)!
                    <br><br>
                    It is advisable to purchase franc CFA before leaving Nigeria. The West African franc
                    CFA is accepted in eight West African countries. Visit any local bank or ‘bureau de
                    change’ to purchase franc CFA.


                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        nigeria: require('@/assets/nigeria.jpg'),

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