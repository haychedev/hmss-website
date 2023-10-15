<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Are you using the right phone etiquette for
                your business image?</h2>
            <div class="blog-img">
                <img :src=phoneEtiquette>
            </div>
            <div class="blog-text">


                <p>
                    I had a long day at work today, had to stop over at my go-to restaurant in the southeast
                    for my favorite local dish, ‘ofa akwu’. As I queued up waiting my patiently, I noticed this
                    creative flyer with a bold message similar to the Hayche Empower program. Finally, a
                    partner in my industry, I was immediately excited. I bought my ‘ofa akwu’ with rice and
                    freshly fried plantain, packaged to go. Dinner was set. I got home exhausted but I
                    couldn’t stop thinking of the flyer details and how I would like to connect and partner
                    with their campaign. The partnership opportunities were limitless. I checked the flyer,
                    45mins before COB so I called a number boldly displayed, it was quite an experience.
                    <br>
                    <br>
                    After the 5th ring, a lady picked up the call. She was totally distracted and kept talking to
                    someone else about food. I patiently waited and as she returned to the call, the first
                    thing she said was “eh yes, can I help you?’ I replied, “Hi, I’m Aisha, I found a flyer and I
                    would like to know more about your program.” “Oh okay, oya come to the office naa”
                    she replied in an irritated tone. I went on to add “I would like to discuss business
                    opportunities and partnerships with your firm. Who do I speak to about that please? Can
                    you redirect me” She uninterestingly said “when you come, someone will talk to you. Is
                    that all?” she bellowed. I said yes and she hung up. I was saddened. This is a business
                    that has been set up for profit and untrained staff can ruin the brand reputation. What if
                    that’s what your staff do to your clients? Well, you’ll never know if you don’t train them.
                    Sign up to the Hayche Network for staff training options.
                    <br><br>
                    Many businesses have lost out on new clients, great opportunities and partnership from
                    wrong phone etiquette. Quick tips to remember:
                    <br><br>
                    1. When you take a call, smile. I know it’s a call, they can’t see you but please,
                    smile. Why? For the reason that, even though you are on the phone, when you smile,
                    you automatically improve your vocal quality, You heard right. Try it. Guess what, you
                    will also sound pleasant and interested. Try it.
                    <br><br>
                    2. Sit or stand up straight. Remember to breath. It’s easy to tell if you are stressed
                    from the tone of your voice, and your body positioning plays a significant role here. If
                    you slouch, you’ll sound dull but if you stand straight, you’ll project confidence. Try it. By
                    sitting or standing up straight, you'll be and sound more alert and pay better attention to
                    what is being said.

                    <br><br>
                    3. Use a low voice pitch. There are certain situations that may require you to match
                    your tone to that of the caller. We teach the application of this style of emotional
                    intelligence at ‘The Hayche Academy’. When it doubt, use a lower voice pitch, this will
                    make you sound more mature and authoritative.

                    <br><br>
                    In matching your speaking tone to the caller's. Let the caller set the tempo of the
                    conversation. For Example, he or she may be in a hurry, In that case you should
                    provide information more quickly and it any case, try to avoid extremes volume. Find the
                    balance. You don’t want to speak too loud and sound rude but you shouldn’t speak too
                    softly either or you may sound timid or uncertain. Remember, breath.
                    <br><br>

                    4. My personal favorite, please try to avoid expressions such as "uh-huh" and
                    "yeah." Such expressions make the speaker sound dull, indifferent and uninterested.
                    Trust me, it is bad for business. Stay professional. Maybe I’ll write about how to be a
                    professional next week. Let me know if you would like to read about that. If not, what
                    would you like to read about?

                    <br><br>
                    Oh, one more tip. If you are taking the call for a third party, remember to fill a call
                    message form especially if you are taking messages for customers. Listen carefully and
                    take written notes while speaking with the caller.

                    <br><br>
                    Try out these tips, teach your employees, colleagues and friends. Thank me later for the
                    quick #HaycheTips.
                    Till next time!
                    Ms. H.




                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        phoneEtiquette: require('@/assets/phoneEtiquette.jpg'),

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