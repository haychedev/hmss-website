<template>
    <div class="review-container">
        <section>
            <div class="review-heading">
                <h3>hayche reviews</h3>
                <p>Receive reviews of your businesses in several locations straight in your inbox. You’ve worked hard enough
                    for this. Allow us monitor your growth & success.</p>
            </div>
            <div class="review-boxes">
                <div class="review-box">
                    <div class="reviewer-img">
                        <img :src=mega>
                    </div>
                    <div class="reviewer">
                        <h4>Mega Star Hotels & Suite</h4>
                    </div>
                    <div class="reviewer-text">
                        <p>Hayche Network has established custom quality control services and systems to help our clients
                            succeed. We perform surveys, audits.</p>
                    </div>
                </div>
                <div class="review-box">
                    <div class="reviewer-img">
                        <img :src=eko>
                    </div>
                    <div class="reviewer">
                        <h4>Eko Hotels & Suite</h4>
                    </div>
                    <div class="reviewer-text">
                        <p>Hayche Network has established custom quality control services and systems to help our clients
                            succeed. We perform surveys, audits.</p>
                    </div>
                </div>
                <div class="review-box">
                    <div class="reviewer-img">
                        <img :src=sheraton>
                    </div>
                    <div class="reviewer">
                        <h4>Sheraton Hilton Hotels</h4>
                    </div>
                    <div class="reviewer-text">
                        <p>Hayche Network has established custom quality control services and systems to help our clients
                            succeed. We perform surveys, audits.</p>
                    </div>
                </div>
            </div>
            <a href="" class="review-link">view more</a>
        </section>
    </div>
</template>

<script>
export default {
    name: "reviews-section",
    data: () => ({
        mega: require('@/assets/mega-hotels.png'),
        eko: require('@/assets/eko-hotels.png'),
        sheraton: require('@/assets/Sheraton-Hotels.png'),
    })
}
</script>

<style scoped>
.review-container {
    opacity: 0.8;
    background: var(--dark-purple, #522888);
}

.review-heading h3 {
    color: var(--light, #F8F8F8);
    font-family: Oswald;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 97.5%;
    /* 46.8px */
    letter-spacing: 0.48px;
    text-align: center;
    text-transform: capitalize;
    padding-top: 100px;
    padding-bottom: 30px;
}

.review-heading p{
    color: var(--light);
    text-align: center;
    letter-spacing: 0.5px;
    width: 80%;
    
}
.review-heading{
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.review-boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 50px;
    justify-content: center;
    align-items: center;
}

.review-box {
    width: 350px;
    height: 394px;
    background: #623D93;

    /* card shadow */
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}

.reviewer h4 {
    color: var(--light, #F8F8F8);
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 97.5%;
    /* 31.2px */
    letter-spacing: 0.32px;
}

.reviewer-text p {
    color: var(--light, #F8F8F8);
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.2px;
}

.reviewer-img img {
    border-radius: 50%;
}

.review-link {
    color: var(--light, #F8F8F8);
    font-family: Quicksand;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 83.5%;
    /* 20.04px */
    letter-spacing: -1.08px;
    text-decoration-line: underline;
    text-transform: capitalize;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
}
/* media query for laptop screens */
@media only screen and (min-width: 1024px){}

/* media query for tablet screens */
@media only screen and (max-width: 990px){}

/* media query for phones */
@media only screen and (max-width: 768px){}

/* media query for smaller devices */
@media only screen and (max-width: 500px){
    .review-heading p{
        width: 90%;
        font-size: 15px;
    }
}

</style>