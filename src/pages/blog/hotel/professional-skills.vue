<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">5 Professional Skills a hospitality manager 
must possess</h2>
            <div class="blog-img">
                <img :src=manager>
            </div>
            <div class="blog-text">
                
                
                <p>
                    In running a business that requires you overseeing the administrative tasks that ensure 
the business runs efficiently and profitably, you have to step into different shoes. This 
requires several skills, tricks, acting on gut feelings and taking calculated risks. 
                <br>
                <br>
                In the present day, almost everyone is taking a step towards giving a better service and 
unforgettable experiences to their customers. Yet it’s not as easy as we might like to 
think, there are certain things you need to know to become, and remain competitive.
                <br><br>
                Hospitality management refers to the application of management concepts and 
structured leadership in the areas of accommodation, dining, and general guest 
services. From the largest hotels to the smallest cafeterias, all such businesses form an 
important part of the hospitality industry. Whereas commercial businesses focus 
primarily on selling products, it could be said that hospitality is more about selling 
services, experiences, and enjoyment.
                <br><br>
                A hospitality manager is one who so many people depend on. The guests depend on 
you to make their experience a pleasant one. Your staff depend on you for direction. 
And most of all, the owner expects you to meet revenue goals with No excuses. Here 
are the five professional skills every hospitality manager needs to remain relevant.
                <br><br>
              <b>1. Be versatile</b>   <br>
A hospitality manager is often expected to work with less supervision, as she will be 
directly handling every situation that arises, this makes it vital for her to possess the 
following skills;
<br><br>
Motivator: You’ve got to be a top-notch motivator. Hospitality management is all about 
putting the guest first and making them feel special, which is a team effort. As a guest 
gets passed from the front desk to the concierge to room service, your team needs to 
be united in creating a comfortable and seamless experience. That requires
organization and inspiring leadership from you.
<br><br>
Communicator: You need to be a stellar communicator. You have to actively talk to with 
your staff, and get them to open up to you in return. When you aren’t communicating, 
someone’s going to drop the ball, and your customer will be the one picking it up (and 
often attaching a complaint or bad review). You don’t want that.
<br><br>
Decisiveness: There’s no room for waffling in this business, so a good hospitality 
manager must be quick and decisive. Your staff and guests will be looking to you for 
guidance when problems arise. Do you see a guest complaining at the front desk about 
not getting a king-sized bed? Step in and offer a discount, or free room service to 
apologize for lacking an available king bed. Everyone feels happier and secure when 
someone is taking responsibility to solve a problem as soon as it arises.
<br><br>
<b>2. Good Branding skill </b> <br>
A good branding determines how products or services are valued and patronized by 
potential customers. What people buy is the brand. As most times this determines their
class and taste. This shows that your brand has a lot to do with people’s perception of 
your services. 
<br><br>
To achieve effective branding, so many things are to be considered, this involves the 
company’s image. The image should present a descriptive view of what your company 
represents. This should be likened to your value system and brevity in meeting the 
needs of your customers. 
<br><br>
Costumers are often willing to pay anything especially when they are getting the quality 
of services and comfort they desire.
<br><br>
<b>3. Good Strategic planning </b><br>
A popular saying attributed to Sir Winston Churchill is “he who fails to plan, plans to fail”. 
As important as oxygen is to life, so is a well-developed plan for any business. No 
matter how good your idea or business is, if you don’t have a clear plan on how to 
achieve it, it's still but a dream. You need to develop a long-term and short-term plan 
which will guide you in every phase of the business.
<br><br>
A plan is good but yet without strategies, it still looks impossible. A good plan can only 
produce a positive result only when it is backed-up with a well-articulated strategy. The 
market is quite big, busy and competitive, and only those with strong Strategic Planning 
Skills can survive it.
<br><br>
<b>4. Good Selling skill </b><br>
You are not in business if you are not selling anything. As a hospitality manager, you 
feel the heat at all times. Even if you have a sales team, you also need to sell your idea 
to investors especially when giving an elevator pitch concerning your business.
As a manager, you need to know about sales, to know when your sales team needs to 
be instructed and directed on the best ways you feel they should handle sales. It also 
increases your persuasive skills in convincing your customer's concerning your 
business and brand.
<br><br>
<b>5. Financial Skills</b><br>
For any business to survive there must be proper and effective handling of its finances. 
Having an accountant who handles issues related to numbers and balancing of the 
account books is necessary but yet, you need to have a basic understanding of how 
money works, profit, loss, expenditures, funding, and cash flow. This will save you from 
spending too much when you can optimize.
<br><br>
You need to be frugal in your spending. Develop a budget for each year, month and 
week. Ensure spending is within budget limits. Reduce cost as much as possible and 
avoid unnecessary expenses in order to remain competitive.


               

                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        manager: require('@/assets/manager.jpg'),

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