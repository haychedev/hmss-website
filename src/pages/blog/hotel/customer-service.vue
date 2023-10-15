<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Are you in customer service? This is for 
you!</h2>
            <div class="blog-img">
                <img :src=customerService>
            </div>
            <div class="blog-text">
                
                
                <p>
                    Running a business positions you daily, to deal with customers, whether directly or 
indirectly. This offers a load of responsibility. Customer service attitude is an individual 
choice everyone has to make daily. The right attitude turns upset customers into happy 
customers. The right attitude changes negative customer experiences into positive 
customer experiences. Owing to digitalization, face to face interactions with customers 
has drastically reduced, telephone calls and messages have become the front liners. 
Providing good customer service is one of the most important factors that can 
differentiate one’s business from competitors. Since the majority of our interactions with 
customers are over the phone, here are six key points you need to consider:
                <br>
                <br>
                1. Smile even though you are on the telephone. When you smile, you automatically 
improve your vocal quality, and you will also sound pleasant and interested. Try 
it.
                <br><br>
                2. Sit or stand up straight. By sitting or standing up straight, you'll be more alert and 
pay better attention to what is being said.
                <br><br>
                3. Use a low voice pitch. A lower voice pitch will make you sound more mature and 
authoritative.
                <br><br>
                4. Match your speaking rate to the caller's. Let the caller set the tempo of the 
conversation. For Example, he or she may be in a hurry; In that case you should 
provide information more quickly.
<br><br>
5. Avoid extremes in volume. Find the balance. You don’t want to speak too loud 
and sound rude but you shouldn’t speak too softly either or you may sound timid 
or uncertain.
<br><br>
6. Avoid expressions such as "uh-huh" and "yeah." Such expressions make the 
speaker sound dull, indifferent and uninterested.
<br><br>
Remember to fill a telephone message form if you are taking messages for 
customers. It is important that you listen carefully and take written notes while 
speaking with the caller.


               

                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        customerService: require('@/assets/customer-service.jpg'),

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