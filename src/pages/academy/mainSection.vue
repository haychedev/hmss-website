<template>
    <div class="container">
        <section class="heading">
            <div class="sectionTitle">
                <h1>hayche academy</h1>
            </div>
        </section>
    </div>
    <div class="objectiveContainer">
        <section class="objectiveSection">
            <div class="goalImg">
                <img :src=goalImg>
            </div>
            <div class="objectiveText">
                <h1>our goal</h1>
                <p>Training and placement of hospitality personnel</p>

                <p>By providing comprehensive training and mentorship opportunities, we can help personnel develop the
                    skills and confidence they need to excel in the hospitality industry.</p>
                <p>Additionally, a strong recruitment and placement process can ensure that candidates are matched with the
                    right positions based on their skills and experience. Overall, our goal is to help individuals build
                    successful careers in hospitality while also meeting the needs of businesses in the industry.</p>
            </div>
        </section>
        <section class="objectiveSection obj">
            <div class="objectiveText">
                <h1>our objective</h1>
                <p class="p-head"><b>Workforce Development</b></p>
                
                <p>By investing in skills and abilities of our employees, we 
can create a more engaged and motivated workforce.</p>
<br>
<p class="p-head"><b>Training</b></p>
<p>We offer comprehensive program covering all aspects 
of hospitality.</p>
<br>
<p class="p-head"><b>Placement of competent hospitality personnels</b></p>
<p>We match candidates with the right positions based on
skills</p>
            </div>
            <div class="objectiveImg">
                <img :src=objImg>
            </div>
        </section>
    </div>
    <div class="northstar-info">
        <section class="northstar-section">
            <div class="northstar-text">
                <h3>Our Partnership with northstar</h3>
                <p>The Hayche Academy in partnership with Northstar, provides online, self-guided assessments that evaluate
                    skill levels in 15 areas. Individuals who undergo proctored assessments at the Hayche Academy computer
                    labs located in Abuja, and Enugu will receive certificates and/or digital badges when they pass the
                    assessments.</p>
            </div>
        </section>
    </div>
    <section class="how-to">
        <div class="how-to-img">
            <img :src=howImg>
        </div>
        <div class="how-to-text">
            <p>To take an assessment, visit our site, enter your name in the appropriate field(s), and proceed to take any
                of the self-guided assessments that evaluate skill levels in 15 areas</p>
            <ul>
                <li>basic computer skills</li>
                <li>intetnet services</li>
                <li>using email</li>
                <li>windows</li>
                <li>mac os</li>
                <li>microsoft word</li>
                <li>microsoft excel</li>
                <li>microsoft powerpoint</li>
                <li>google docs</li>
                <li>social media</li>
                <li>information literacy</li>
                <li>career search skills</li>
                <li>your digital footprint</li>
                <li>supporting k-12 distance learning</li>
                <li>accessing telehealth appointments</li>
            </ul>
        </div>
    </section>
    <section class="note">
        <p>Please note that in order to be awarded a certificate and/or digital badge when you pass the assessment, you must
            undergo proctored assessment at the Hayche Academy computer labs located in Abuja, and Enugu. Alternately, a
            remote proctored assessment may be arranged</p>
    </section>
</template>
<script>
export default {
    data: () => ({
        goalImg: require('@/assets/academygoal.jpg'),
        objImg: require('@/assets/academicobjective.jpg'),
        howImg: require('@/assets/howtoimg.jpg'),




    })
}
</script>
<style scoped>
.how-to-text ul li{
    text-transform: capitalize;
}

.container {
    height: 80vh;
    background: url('/src/assets/hayche-academy-page.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 100%;
}

.heading {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    height: 100%;
    width: 100%;
}

.sectionTitle h1 {
    color: var(--light, #F8F8F8);
    text-align: center;
    font-family: Oswald;
    font-size: 90px;
    font-style: normal;
    font-weight: 300;
    line-height: 102.2%;
    /* 98.112px */
    text-transform: uppercase;
}


.objectiveContainer {

    background: var(--dark-purple);
}

.objectiveSection {
    display: flex;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 100px;
    padding-bottom: 100px;
    color: var(--light);
}


.goalImg {
    width: 400px;
    height: 410px;
    /* border: 1px solid red; */
}

.goalImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.objectiveImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.objectiveImg {
    width: 400px;
    height: 410px;
    /* border: 1px solid red; */
}

.objectiveText {
    width: 500px;
}

.objectiveText h1 {
    color: var(--light, #F8F8F8);
    font-family: Oswald;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 102.2%;
    /* 49.056px */
    text-transform: uppercase;
    margin-bottom: 30px;
}

.objectiveText p {
    color: var(--light, #F8F8F8);
    font-family: Quicksand;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 102.2%;
    margin-bottom: 10px;
    /* 24.528px */

}

.northstar-info {
    height: 50vh;
    /* border: 1px solid red; */
    background: url("/src/assets/northstarbg.png");
    /* background-position: 100% 100%; */
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
}

.northstar-section {
    display: flex;
    height: 100%;
}

.northstar-text {
    align-self: flex-end;
    margin-bottom: 30px;
    color: var(--light);

}

.northstar-text h3 {
    font-size: 40px;
    font-family: Oswald;
    font-weight: 300;
    margin-bottom: 30px;
}


.how-to {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 50px;
}

.how-to-img {
    width: 400px;
    height: 500px;
    /* border: 1px solid red; */
}

.how-to-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center center;
}

.how-to-text {
    width: 500px;
}

.how-to-text ul {
    margin-left: 20px;
    margin-top: 30px;
    list-style-type: decimal;
}

.note {
    margin-top: 100px;
}

.note p {
    width: 70%;
}

@media only screen and (max-width: 1126px) {
    .obj {
        flex-direction: row-reverse;
    }

    .objectiveSection {
        justify-content: left;
    }

    .obj {
        justify-content: left;
    }
}

@media only screen and (max-width: 500px) {
    .note p {
        width: 100%;
    }

    .obj {
        flex-direction: row-reverse;
    }

    .container {
        background-position: center;
    }

    .sectionTitle h1 {
        font-size: 80px;
    }

    .northstar-text h3 {
        font-size: 30px;
        margin-bottom: 10px;
    }

    .northstar-text p {
        font-size: 15px;
    }

    .northstar-info {
        background: url('/src/assets/northstar-mobile-bg.png');
    }

    .objectiveText p {
        font-size: 15px;
    }


    .objectiveText h1 {
        font-size: 30px;
    }

    .northstar-info {
        height: 70vh;
    }

    .objectiveText {
        width: 100%;

    }

    .objectiveText p {
        width: 100%;

    }
}

@media only screen and (max-width: 1126px) {
    .sectionTitle h1 {
        color: var(--light, #F8F8F8);
        text-align: center;
        font-family: Oswald;
        font-size: 50px;
        font-style: normal;
        font-weight: 300;
        line-height: 102.2%;
        text-transform: uppercase;
    }

}</style>