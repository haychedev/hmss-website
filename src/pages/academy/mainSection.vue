<template>
    <div class="container">
        <section class="heading">
            <div class="sectionTitle" v-motion :initial="{
                opacity: 0,
                x: -100,
            }" :enter="{
    opacity: 1,
    x: 0,
    transition: {
        type: 'spring',
        stiffness: '100',
        delay: 100,
    },
}">
                <h1>hayche academy</h1>
            </div>
            <button class="action-btn">sign up</button>
        </section>
    </div>
    <div class="objectiveContainer">
        <section class="objectiveSection">
            <div class="goalImg">
                <img :src=goalImg>
            </div>
            <div class="objectiveText">
                <h1>our goal</h1>
                <h5>Training and placement of hospitality personnel</h5>

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
                <h5 class="p-head">Workforce Development</h5>

                <p>By investing in skills and abilities of our employees, we
                    can create a more engaged and motivated workforce.</p>
                <br>
                <h5>Training</h5>
                <p>We offer comprehensive program covering all aspects
                    of hospitality.</p>
                <br>
                <h5>Placement of competent hospitality personnels</h5>
                <p>We match candidates with the right positions based on
                    skills</p>
            </div>
            <div class="objectiveImg">
                <img :src=objImg>
            </div>
        </section>
    </div>

    <section class="info">
        <p>Hayche Academy (HA) specializes in preparing individuals for a career in the hospitality
            industry. The Academy together with The Network, provide an integrated human
            resource service that supports our clients in the effective management of human
            resources. No matter the type of facility, managing human resources effectively is
            essential to productivity, and profitability. We help bars, clubs, hotels, restaurants, and
            practically any business to identify the best candidates for various positions as well as
            assist with training programs, payroll, and benefits packages.</p>

        <br>
        <br>

        <p>HA has established a convenient, scalable hospitality training and skills certification
            model that is industry driven, sector specific, nationally recognized and promotes career
            ladders. The Hospitality industry remains one of the fastest growing in the world, which
            employs millions of people round-the-clock. Due to the rapid growth of this sector, there
            is a huge unmet demand for staff.</p>

        <br>
        <br>

        <div class="jobseekers">
            <div class="jobseeker">
                <img :src=jobseekers2>
            </div>
        </div>

        <p>Many jobseekers submit their CV to a hotel, or restaurant, because they may not have
            received a response from the other places to which they applied. Chances are that
            working in a hotel or restaurant was perhaps not their first choice. This is the vicious
            cycle that operates in the hospitality sector. Many young people approach working in a
            hospitality establishment as temporary employment, which results in many hotels and
            restaurants operating as a “revolving door”, where employees come and go frequently.
            This high turnover is the reason employers in the hospitality sector remain reluctant to
            invest in staff training and development, which leads to poor, or substandard service,
            and thereby reinforcing the vicious cycle. Hayche Academy is breaking this cycle
            through our successful #StartACareerInHospitality campaign; over 5,000 youth currently
            enrolled across several states!</p>

        <br>
        <br>

        <p>The goal of the <span>#StartACareerInHospitality</span> campaign is to encourage and support the
            mass of unemployed youth to start careers in hospitality, and thereby provide a constant
            supply of qualified personnel to a rapidly growing hospitality industry. This ready pool of
            hospitality professionals are part of The Hayche Network of professionals, that is
            revolutionizing the way hospitality establishments source, and recruit labor.
        </p>


        <br>
        <br>

        <div class="virtualclasses">
            <div class="virtualclass">
                <img :src=virtualclass>
            </div>
        </div>

        <h3>The Hayche virtual classroom/community</h3>

        <p>The Hayche virtual classroom / community is comprised of Hayche Network hospitality
            experts, who ensure that trainees receive adequate mentoring and answers whenever
            they have questions. The virtual classroom / community setting is able to provide a
            sophisticated degree of interaction that fosters exploration and learning of content
            interactively through face-to-face communication that utilizes features available on most
            mobile devices.</p>


        <br>
        <br>

        <h3>Hayche Academy workforce development program</h3>

        <p>The objective of Hayche Academy workforce development program is to create
            economic prosperity for individuals, businesses, and communities.</p>
        <br>
        <p>The program focuses on an individual’s ability to grow their skills and develop the tools
            they need for business success. In other words, our program trains individuals to be
            more productive and prosperous in the workplace, which benefits both the employer
            and the employee,</p>




    </section>

    <div class="northstar-info">
        <section class="northstar-section">
            <div class="northstar-text">
                <h3>Our Partnership with Northstar</h3>
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
            remote proctored assessment may be arranged.</p>
    </section>
</template>
<script>
export default {
    data: () => ({
        goalImg: require('@/assets/academygoal.jpg'),
        objImg: require('@/assets/academicobjective.jpg'),
        howImg: require('@/assets/howtoimg.jpg'),
        jobseekers: require('@/assets/jobseekers.jpg'),
        jobseekers2: require('@/assets/jobseekers2.jpg'),
        virtualclass: require('@/assets/virtualclass.jpg'),




    })
}
</script>
<style scoped>
.info h3 {
    font-family: Oswald;
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 30px;
}

p span {
    color: var(--light-purple);
}

.info {
    margin-top: 100px;
    margin-bottom: 100px;
}

.how-to-text ul li {
    text-transform: capitalize;
}

.container {
    height: 80vh;
    background: url('/src/assets/hayche-academy-page.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 80%;
    animation: bgMove1 10s infinite;
}

@keyframes bgMove1 {
    50% {
        background-position: 50% 50%;
    }
}

.heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    height: 100%;
    gap: 30px;
    width: 100%;
}

button {
    padding: 10px 30px;
    text-transform: capitalize;
    cursor: pointer;
    background: var(--light);
    font-weight: 500;
    transition: 0.5s ease all;
    /* color: var(--light); */
}

button:hover{
    background: var(--dark-purple);
    color: var(--light);
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

.obj {
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

.jobseekers, .virtualclass {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.jobseeker, .virtualclass {
    margin: 50px 0px;
    width: 90vw;
    height: 50vh;


}

.jobseeker img, .virtualclass img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
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

.objectiveText h5 {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 500;

}

.objectiveText p {
    color: var(--light, #F8F8F8);
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
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
    animation: bgMove5 10s infinite;
}

@keyframes bgMove5 {
    50% {
        background-position: 50% 50%;
    }
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

li {
    list-style-type: none;
    margin-bottom: 10px;
}

.note {
    margin-top: 100px;
}

.note p {
    width: 70%;
}

@media only screen and (max-width: 1126px) {


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
        flex-direction: row-reversee;
        flex-wrap: wrap;
        /* flex-direction: row; */
    }

    .container {
        background-position: center;
        animation: bgMove6 20s infinite;
    }

    @keyframes bgMove6 {
        50% {
            background-position: 100%;
        }
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

}
</style>