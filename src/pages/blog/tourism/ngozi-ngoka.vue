<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Meet Lolo Ngozi Ngoka who is passionate 
about promoting tourism in Nigeria</h2>
            <div class="blog-img">
                <img :src=ngozi>
            </div>
            <div class="blog-text">
                
                
                <p>
                    The global growth of inbound travel represents an unprecedented opportunity to 
increase Nigeria’s travel and tourism exports. According to the United Nations World 
Tourism Organization (UNWTO), international visitors spent an estimated 1.2 trillion 
USD globally on travel and tourism in 2013, and in the same year, Nigeria’s tourism 
receipts were reported at 616 million USD! In 2015, Nigeria’s total receipts from tourism 
was reported at 472 million USD, which represents a 21% decline from the 600 million 
USD reported in 2014. (Source: World Tourism Organization, Yearbook of Tourism 
Statistics, Compendium of Tourism Statistics and data files.)
                <br>
                <br>
                With so much potential earnings at stake, governments around the world are trying to 
lure travelers to their countries with facilitative policies and aggressive marketing. As 
incomes around the world continue to rise and the demand for travel and tourism 
continues to grow, so too, will the competition for international arrivals and spending. 
Few industries have the job-creating potential seen with the travel and tourism industry, 
so focusing Nigeria’s efforts on boosting travel and tourism could yield tremendous 
dividends. Now meet Lolo Ngozi Ngoka, who is an ardent advocate for Nigerian tourism, 
and is committed to enticing global travelers to discover Nigeria, and thereby increase 
Nigeria’s tourism revenue.
                <br><br>
                1. For How many years now have you been at the forefront of promoting travel and 
tourism in Nigeria, and what are the major challenges?
                <br><br>
                2. You are the Vice President of the Federation of Tourism Association of Nigeria 
(FTAN), Southeast Zone, tell us briefly what the association does, and some of its major 
achievements?
                <br><br>
                3. You were recently appointed Director General (DG) of the Imo State Tourism Board, 
what would be your first order of business?
<br><br>
4. According to the United Nations World Tourism Organization (UNWTO), international 
visitors spent an estimated 1.2 trillion USD globally on travel and tourism in 2013! What 
measures would you advocate for Imo state, and indeed, all Nigerian states to increase 
revenue from tourism?

               

                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        ngozi: require('@/assets/ngozi.jpg'),

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