<template>
    <section class="header">
        <h2>Hayche Multi Service Solutions (HMSS) is a consulting firm duly registered in Nigeria
            with RC 1530243.</h2>
        <div class="header-img">
            <img :src=img1>
        </div>
    </section>
    <section class="business-units">
        <h2> HMSS is comprised of the following business units:</h2>
        <div class="units">
            <div class="unit Hdev">
                <h3>HDev</h3>
                <a href="/hayche-projects">learn more</a>
            </div>
            <div class="unit HA">
                <h3>Hayche Academy</h3>
                <a href="/hayche-academy">learn more</a>
            </div>
            <div class="unit HLife">
                <h3>Hayche Lifestyle</h3>
                <a href="/hayche-lifestyle">learn more</a>
            </div>
            <div class="unit HN">
                <h3>Hayche Network</h3>
                <a href="https://hayche-website.pages.dev/" target="_blank">learn more</a>
            </div>
            <div class="unit HD">
                <h3>Hayche digital</h3>
                <a href="/hayche-digital">learn more</a>
            </div>
        </div>
    </section>
    <section class="our">
        <div class="our-comp">
            <i class="fa fa-eye" aria-hidden="true"></i>
            <h3>Our Vision</h3>
            <p>To inspire people-driven solutions.</p>
        </div>
        <div class="our-comp">
            <i class="fa fa-bullseye" aria-hidden="true"></i>
            <h3>Our Mission</h3>
            <p>To recognize and maximize individual human potential</p>
        </div>
    </section>
    <section class="anchor">
        <h2>Our services are anchored on three key components:</h2>
        <div class="anchors">
            <div class="anchor-comp">
            <h3>relationships</h3>
            <p>We understand the importance of good, strong, lasting business
                relationships. Our approach focuses on building relationships with our clients, vendors,
                and other business leaders, by connecting with them on a deeper level, and
                demonstrating that we genuinely care.</p>
        </div>
        <div class="anchor-comp">
            <h3>careers</h3>
            <p>The Hayche Academy’s highly successful #StartACareerInHospitality
                campaign encourages and supports the mass of unemployed youth to start careers in
                hospitality, and thereby provide a constant supply of qualified personnel to a rapidly
                growing hospitality industry.</p>
        </div>
        <div class="anchor-comp">
            <h3>results</h3>
            <p>We adhere strictly to the principles of results-based management, or RBM,
                which is defined as orienting all action and use of resources towards achieving clearly
                defined and demonstrable results. RBM increases transparency and accountability,
                allowing our services to complement one another and avoid overlap and waste.</p>
        </div>
        </div>
    </section>
</template>
<script>

export default {
    data: () => ({
        img1: require('@/assets/logo-mockup.png'),

    })

}

</script>
<style scoped>
.header {
    padding-top: 150px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header h2 {
    font-family: Oswald;
    font-size: 30px;
    font-weight: 400;
    color: var(--dull-black);
    text-align: center;
    margin-bottom: 30px;
}

.header-img {
    width: 85vw;
    height: 400px;
}

.header-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.business-units h2 {
    color: var(--dull-black);
    font-family: Oswald;
    font-size: 23px;
    font-weight: normal;
    text-align: center;
}

.units {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.unit {
    width: 300px;
    height: 200px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    filter: grayscale(0.6);
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: 0.5s all ease;
    color: var(--light);
}

.unit:hover {
    filter: grayscale(0);
}

.unit h3 {
    font-size: 18px;
    text-transform: capitalize;
    background: #0000002c;
    padding: 10px;
}

.Hdev {
    background: url('/src/assets/hayche-development.png');
}

.HA {
    background: url('/src/assets/hayche-academy.png');
}

.HLife {
    background: url('/src/assets/hayche-lifestyle.png');
}

.HN {
    background: url('/src/assets/hayche-network.png');
}

.HD {
    background: url('/src/assets/hayche-digital.png');
}

.unit a {
    color: var(--light);
}

.our {
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 100px;
    background: var(--light-purple);
}

.our-comp {
    /* border: 1px solid red; */
    background: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 400px;
    padding: 20px;
}

.our-comp p,
.our-comp h3 {
    text-align: center;
    color: var(--dull-black);
}

.our-comp h3 {
    font-family: Oswald;
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
}

.our-comp p {
    font-size: 18px;
    font-weight: 500;
}

.our-comp i {
    font-size: 40px;
    margin-bottom: 20px;
    color: var(--light-purple);
}

.anchor{
    margin-top: 50px;
}


.anchor h2{
    font-family: Oswald;
    font-size: 25px;
    font-weight: 400;
    color: var(--dull-black);
    text-align: center;
    
}

.anchors{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 50px;
}

.anchor-comp{
    text-align: center;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 1px 3px 1px 3px rgba(34, 34, 34, 0.1);
    transition: all 1s ease;
}

.anchor-comp:hover{
    border: 1px solid var(--light-purple);
    transition: all 1s ease;
}
.anchor-comp h3{
    text-transform: capitalize;
    font-family: Oswald;
    font-size: 22px;
    font-weight: 400;
}



@media only screen and (max-width: 800px) {
    .header-img {
        width: 85vw;
        height: 200px;
    }

    .header h2 {
        font-size: 25px;
    }

    .unit {
        width: 350px;
        height: 200px;
    }
}
</style>