<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Is it better to travel solo?</h2>
            <div class="blog-img">
                <img :src=travelsolo>
            </div>
            <div class="blog-text">
                
                
                <p>
                    Recently, I travelled to Lomé, Benin Republic to participate in a week-long health 
conference. I was quite excited about the trip (I’m always excited about travelling), and 
equally excited about the conference; I’m very concerned about the health issues that 
affect West Africans. I got to my room, and absolutely loved it! My room was cozy with 
large windows that overlooked the beach, and the ocean. I opened a window, and felt 
the rush of the warm ocean breeze on my skin, it was incredibly relaxing. I stood by the 
window for a while, took a deep breath, and just knew that this would be another 
wonderful trip!
                <br>
                <br>
                The following morning, I started the day with the hotel’s delightful breakfast buffet, 
featuring choice selection of fresh tropical fruits, freshly baked pastries still warm from 
the oven (croissants are my absolute favorites), an ample selection of cold cuts, and hot 
dishes. I felt almost intoxicated from the aroma of the freshly brewed coffee (I was told it 
came from Kenya!). After a “royal” breakfast, I headed off to the conference hall.
Day one of the conference was insightful, with knowledgeable speakers, who addressed 
health issues of great concern to majority of us West Africans. With day one concluded, 
I was glad to get back to my room, kick off the high heels I had been in all day, stretch 
out on the bed and relax for a bit.
                <br><br>
                Not feeling sufficiently relaxed on the bed, I went over to the window to savor the ocean 
view, and breeze, and recapture that feeling of relaxation I felt the day I arrived. This 
time, while standing at the window, I suddenly had a revelation, “wouldn’t it be nice to 
share this view and experience with someone”? I’m sure there have been times in your 
life when you watched a movie alone, attended an event, or simply witnessed 
something breathtaking, that you didn’t in that instant wish you could share that
experience with someone?
                <br><br>
                I sat back down on the bed, took out my phone, and started going though my contacts. 
As I scrolled through my long list of contacts, I was performing a rapid mental 
assessment, “which of my friends could I ask on such short notice to come out here”? I 
had now scrolled through A, B C, D, E F G, and getting a bit desperate, then H, I, and I 
stopped right there! I stopped at a name that brought back a flood of memories of 
childhood, and adulthood fun and adventures; yes, she was the most likely friend willing 
and able to travel on short notice.
                <br><br>
                I called my friend up, and with the excitement in my voice (I wasn’t faking it), told her 
how much fun I was having, just practically next door to her (she stays in Lagos), and 
how it would be so awesome if she could get over here right away. Much as I had hoped, she didn’t hesitate too long, and the very next morning she got on a bus, 
purchased an ECOWAS Travel Certificate and arrived Lomé in just a few hours. We 
had a memorable time! 
<br><br>
Sometimes, we may travel alone out of necessity, however, my advice is that you not 
miss any opportunity of sharing a travel experience with a companion. Granted, it’s not 
always easy (and most times, not financially feasible) for many of us to simply take off 
on an unplanned trip. But oftentimes in life, some of the most fun we’ve had has been 
the result of a spontaneous decision. So, here are some points to consider.
                <br><br>
                1. When thinking of a travel companion, it is unlikely that your friends who are 
married with children will be disposed to take off on short notice. Friends who are 
struggling financially will be less willing to undertake a trip just for fun. So, this narrows 
down your choice of travel companion to friends unencumbered by family 
responsibilities, who love travel and adventure, and have some disposable income, or 
an adventure fund. [include link to post about adventure fund]
                <br><br>
                2. Work trips don’t always have to be all work and no play. Incorporate some fun 
activities in your work trip; the work always ends before the trip does. Yeah, that's some 
wordplay by the rapper within. Take advantage of that window of opportunity between 
when work ends and when you fly out.
                <br><br>
                3. If you must travel alone, stack up your itinerary with fun activities, understand it's 
your responsibility to make your trip fun and be mentally prepared for the experience –
prepared enough to avoid any regrets. 
                <br><br>
                I'll love to hear your travel experiences, so leave a comment below. Till I come your way 
next time with more exciting stories and adventures!

              

                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        travelsolo: require('@/assets/travel-solo.jpg'),

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