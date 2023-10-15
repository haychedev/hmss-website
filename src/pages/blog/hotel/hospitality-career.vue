<template>
    <section>
        <div class="container">
            <h2 class="blog-heading">Are You Ready To Start An Exciting Career 
In Hospitality?</h2>
            <div class="blog-img">
                <img :src=hospitalityCareer>
            </div>
            <div class="blog-text">
                
                
                <p>
                    The Hospitality industry is one of the fastest growing in the world, which employs 
millions of people round-the-clock. Due to the rapid growth of this sector, there is a huge 
unmet demand for staff.
                <br>
                <br>
                More than ever before, now is the best time to consider a career in hospitality. There 
are several rewarding careers in hospitality, such as hotel managers, restaurant 
managers, managerial accountants, food and beverage mangers, chefs, maintenance 
engineers, front desk managers, housekeepers, menu planners etc.
                <br><br>
                Like any other industry, there is specialization in hospitality too. For instance, being a 
master chef, or store manager does not automatically qualify you to be a food and 
beverage (F&B) manager. In order to be an effective F&B manager, you must be trained 
in the specific skill set required for F&B. 
                <br><br>
                You probably submitted your CV to a hotel, or restaurant, because you did not hear 
from any of the other places to which you applied. Chances are that working in a hotel 
or restaurant was probably not your first choice. This is the vicious cycle that operates in 
the hospitality sector. Many young people approach working in a hospitality
establishment as temporary employment, which results in many hotels and restaurants 
operating as a “revolving door”, where employees come and go frequently. And for this 
reason, employers in the hospitality sector are reluctant to invest in staff training and 
development, which leads to poor, or substandard service, and thereby reinforcing the 
vicious cycle.
                <br><br>
                The Hayche Academy is finally breaking this cycle through our highly successful 
#StartACareerInHospitality campaign; over 10,000 youth currently enrolled across 11 
states! The primary goal of The Hayche Academy is to encourage and support the mass 
of unemployed youth to start careers in hospitality, and thereby provide a constant 
supply of qualified personnel to a rapidly growing hospitality industry. This ready pool of 
top-notch hospitality professionals are part of The Hayche Network of professionals, 
that is revolutionizing the way hospitality establishments source, and recruit labor.
<br><br>
The Hayche Academy will equip you with the necessary skills, and provide job 
placement opportunities upon completion of your training. Whether you plan to open up 
your own hotel, or wish to become a travel expert, a unique customer care personnel, 
an accountant or a world class chef, joining the Hayche network provides an excellent 
opportunity to showcase your skills to potential employers throughout the African 
continent.

<br><br>
Are you ready to start an exciting career in hospitality? Send your CV to 
<b>[info@hayche.net]</b>, with the following information
<br>
<br>
Telephone number(s)
<br>
Valid email
<br>
Area(s) of specialization
<br>
Years of experience (it’s ok if you have no experience at all)

<br><br>

Don’t be afraid to pursue your dreams. Start a career in hospitality today!

               

                </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        hospitalityCareer: require('@/assets/hospitalityCareer.jpg'),

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