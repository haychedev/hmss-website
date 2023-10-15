<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Meet Chef Black, the Nigerian Chef keen 
on Changing the Global Perception of 
Nigerian Food</h2>
            <div class="blog-img">
                <img :src=chefBlack>
            </div>
            <div class="blog-text">
                
                
                <p>
                    While culinary excellence may not be the first thing that comes to mind when one thinks 
of Nigeria, yet in recent years, a number of extremely talented, and creative individuals 
are raising the standard of the Nigerian culinary industry.
                <br>
                <br>
                Surprisingly, the Nigerian kitchen is at the heart of a new revolution, where food is no 
longer just about taste, but has become a medium through which the brightest and most 
innovative can give maximum expression to their creativity.
                <br><br>
                One such culinary genius, so to speak, is an individual professionally known as “Chef 
Black”, with whom we recently had the pleasure of sitting down to a frank and revealing 
interview. Read on.
                </p>

                <br><br>
                <h3>Who is Chef Black?</h3>
                <br>
                <p>I am a continental cuisine chef, a food photographer, food videographer, restaurant 
consultant, restaurant owner at “Sabor del Amor” and I'm a food stylist. My passion for 
cooking was generated from the joy that lies in the heart of many as a result of 
maximum satisfaction and deliciousness derived after eating a dish cooked or 
orchestrated by myself. Sharing my knowledge, talent and experience has always been 
my legacy, as life must always be about giving. I also take part in other curricular 
activities such as singing, playing of musical instrument, visual arts such as pencil and 
charcoal art, landscape painting and sculpting. </p>
<br>
<p>
    <b>There is a common saying that chefs are not high-income earners especially in 
Nigeria, Do you agree with this?</b>
<br>
The answer to this question will be relative to the food enterprise. Some food 
enterprises understand the value and importance of chefs, so they are able to 
appreciate their chefs accordingly and create a proper welfare platform. Sadly, not all 
food enterprises appreciate their chef as much. Some either just take for granted or 
completely do not understand the value and importance of chefs and as a result totally 
mismanage their chefs and pay them less than their value.
On the flip side, some kitchen cooks with little experience and no culinary education 
claim to be chefs when they aren’t, and some food enterprises discover this and take 
advantage by paying them little.
<br>
<br>
<b>Do you think chefs deserve more acknowledgements in Nigeria?</b>
<br>
Yes of course. A lot of chefs are doing very well in creativity and contributing positively 
to the economy. A lot more jobs have been created in Nigeria as a result of some 
freelance chefs we have today. Commercial cooking chefs and pastry chefs have won 
outstanding culinary awards and competitions across the globe. One proof that Nigerian 
Chefs need all the accolades they can get is the job well done in presenting our 
“Nigerian jollof rice” to the world today, other dishes too like “Ayamase” or “Ofada 
sauce”, Eforiro and many more Nigerian dishes.
<br>
<br>
<b>Is there a chef you admire the most? Who and why?</b>
<br>
That would be Nancy Silverton. She is the co-owner of Pizzeria and Osteria Mozza in 
LA, Newport Beach and Singapore, as well as Mozza2Go and Chi Spacca in LA. She 
also founded the world-renowned La Brea Bakery and Campanile Restaurant, an 
institution that Angelenos cherished for decades. Nancy has worked with some of the 
nation’s most notable chefs including in the kitchens of Jonathan Waxman at Michael’s 
Restaurant and Wolfgang Puck at Spago. Additionally, she has served as a mentor to 
numerous others who have gone on to become award-winning chefs and restaurant 
owners themselves.
<br>
<br>
In 2014, she received the highest honor given by the James Beard Foundation for 
“Outstanding Chef” as well as listed as one of the Most Innovative Women in Food and 
Drink by Fortune and Food and Wine Magazine. In early 2015, Nancy launched Nancy’s 
Fancy, a line of premium gelato and sorbetto which will be sold in supermarkets 
nationwide. Additionally, she is the author of nine cookbooks including “The Mozza 
Cookbook”, and the newly released “Mozza at Home.”
<br>
<br>
<b>What is your favorite cuisine? How many different types of cuisine are you 
capable of producing?</b>
<br>
Italian cuisine has always been my favorite. I have always loved everything that involves 
the use of pasta. This cuisine lays so much emphasis on authenticity in flavor and 
deliciousness in a dish. How many different types of cuisines am I capable of 
producing? Hahahaha! Pardon me, I am capable of cooking anything in the world 
literally and I say this with pride.
<br>
<br>
<b>What has been the most difficult challenge in your career?</b>
<br>
I learnt how to make the perfect “Ofada sauce” also known as “Ayamase” from a street 
Nigerian cook “Mama Put”. To my surprise I learnt a lot more than what would have 
been hard to teach in most culinary schools in the world today. I have had to hide my 
name and my achievements temporarily for my desperation of more and full detailed 
acquisition of more culinary skills and knowledge from so many chefs. Acquiring the 
level and amount of culinary knowledge and experience I have right now had a 
ridiculous price I had to pay at the beginning stage of my career after culinary school. I 
have had to buy and wear the apron of humility while interning and learning from chefs 
in various forms cuisines in different food enterprises over the years. 
<br>
<br>
<b>At what point did you decide to start a career in hospitality and why?</b>
<br>
I was serving in Lagos during my NYSC year, where I grabbed the opportunity to 
acquire the culinary skills I have always dreamed of having. My passion for cooking was 
generated from the joy that lies in the heart of many as a result of maximum satisfaction 
and deliciousness derived after eating a dish cooked or orchestrated by myself. My only 
brother was my first trigger in discovering my love for cooking and the joy it gave me 
watching everyone around me stay fulfilled with bliss.

</p>


            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        chefBlack: require('@/assets/chefBlack.jpg'),

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
    flex-direction: column;
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