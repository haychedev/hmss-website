<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Customer service is all about the customer</h2>
            <div class="blog-img">
                <img :src=customerService2>
            </div>
            <div class="blog-text">
                
                
                <p>
                    Sometime ago on twitter, newly appointed Director General, Abia State Marketing and 
Quality Management Agency, Sam Hart (@hartng) narrated a story of how he went to 
Lagos to do some heavy duty shopping for a new building he had just finished. He had 
come to shop for bathroom fittings and other related things. However, he said he spent 
such a long time choosing the ones he wanted that the customer service persons that 
initially surrounded him got tired and impatient and gradually fizzled out, save for one 
particular guy who remained, walking about with him and even entertaining him with his 
good natured humor.
                <br>
                <br>
                After about an hour or so, he made a purchase of well over 5 million Naira and at the 
point of payment, found out that the customer reps earned incentives if they hit a 
particular target for the day, meaning that the guy that stuck around with him had just hit 
a gold mine, much to the chagrin of his colleagues. Well, he said after he left, he made 
sure to keep in contact with the manager of the store until the rep was paid his full 
commission.
                <br><br>
                I’m sure at that point, those other customer reps wished they had waited patiently with 
him too. Patience is one of the vital keys to good customer service personnel.
Now last week, in his quest to promote his new role as DG of the Agency, same Sam 
Hart posted pictures of some made in Abia products with the contacts of the goods 
attached, but as usual, people kept asking “how much?” and this ticked him off as he 
started lamenting, “but it’s on the fliers I posted naw?”
                <br><br>
                This caught my eye and I thought that a trained customer service personnel would have 
still provided the requested information, despite the fact that it was already on the first 
post. 
                <br><br>
                The goal of a customer service person should be to always leave a customer well 
satisfied because customers are the major drivers of hospitality businesses. Every 
customer is a walking advert of any business. The way they’re treated will determine 
whether they’ll return and/or recommend the product or service to others. 
Treating them nicely will easily help them make that recommendation, and the greatest 
feedback one can receive in the hospitality industry is a repeated patronage of the 
business.
<br><br>
Ensure your customer care persons are adequately trained to maneuver even the most 
difficult of situations and you’ll find yourself smiling to the bank for a long, long time.
<br><br>
The Hayche academy the flagship of the Hayche network provides a professional 
training ground and the opportunity to learn the key rudiments of customer service. 
Whether you own your own hospitality establishment, or you wish to become a unique 
customer service personnel, signing up to the Hayche Academy is a wise choice as it 
propels your chance of success.


               

                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        customerService2: require('@/assets/customer-service-2.jpg'),

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