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
                <h1>hayche digital</h1>
            </div>
            <button class="action-btn">request a digital solution now!</button>
        </section>
    </div>
    <div class="contentContainer">
        <div class="contentBox">
            <p>Hayche Digital develops custom solutions that take into account cultural and geographic diversity
                that have a special impact on organizational communications, change processes and work
                practices, and that reflect the varying societal and infrastructural conditions in which our solutions
                are deployed.</p>
        </div>
        <section class="objectiveContainer">
            <div class="objectiveImg">
                <img :src=img7>
            </div>
            <div class="objectiveText">
                <h1>our objective</h1>
                <p>Development of comprehensive data management
                    solutions with Geographic Information System (GIS)
                    capabilities</p>
                <br>
                <p>Development of competency-based training materials and modules in English
                    French, and Spanish.</p>
                <br>
            </div>
        </section>
    </div>
    <div class="solutionsContainer">
        <section>
            <h3>our solutions</h3>
            <div class="solutions">
                <div class="solution">
                    <div class="solutionImg">
                        <img :src=img1>
                    </div>
                    <div class="solutionText">
                        <h4>Candidate Evaluation Mobile App (CEMA)</h4>
                        <p v-show="isShowing">The candidate evaluation mobile app allows for capturing quantitative and
                            qualitative responses. The
                            integrated categories are designed to measure experience, skills, knowledge, and work style to
                            assist recruiter in determining the most qualified candidate for a position as well as provide
                            professional development feedback to internal candidates.</p>
                        <button @click="isShowing ^= true">read more</button>

                    </div>
                </div>

                <div class="solution">
                    <div class="solutionImg">
                        <img :src=img2>
                    </div>
                    <div class="solutionText">
                        <h4>Data Quality Assessment (DQA)</h4>
                        <p v-show="isShowing2">Anyone may use this DQA Checklist mobile app to determine whether or not a
                            more thorough DQA might be
                            necessary. The app provides a quick and convenient rating system that assigns a numerical value
                            to
                            each of the five aspects of data quality assessed.
                            <br>
                            <br>
                            The rating system is based on a 5-point Likert scale that allows assessor to express her/his
                            agreement or disagreement with specific statements related to each aspect of data quality
                            following
                            an assessment. The score obtained in each of the five aspects of data quality are combined to
                            produce an overall score.
                        </p>
                        <button @click="isShowing2 ^= true">read more</button>
                    </div>
                </div>

                <div class="solution">
                    <div class="solutionImg">
                        <img :src=img3>
                    </div>
                    <div class="solutionText">
                        <h4>Mobile Electric Medical Record (MEMR)</h4>
                        <p v-show="isShowing3">In the simplest terms, an electronic medical record (EMR) is a digitized
                            version of hospitals and
                            clinics paper records. EMRs replace the use of paper at health facilities for storing patients'
                            records and keeping medical practitioners up to date on progress of a patient's treatment.
                            <br>
                            <br>
                            The Hayche Digital Mobile EMR differs from a traditional EMR in that it is deployed through a
                            mobile
                            data collection (MDC) platform. By using a mobile EMR, any health facility is able to leverage a
                            robust platform that is faster, cheaper, generates higher quality data, and is easier to
                            integrate
                            with existing systems.
                            <br>
                            <br>
                            The Enugu State Agency for Universal Health Coverage (ESAUHC) has deployed the Hayche Digital
                            EMR
                            Mobile to 300 primary health centers in Enugu state to support the efficient implementation of
                            the
                            Enugu State Universal Health Coverage Scheme (ESUHCS).
                        </p>

                        <button @click="isShowing3 ^= true">read more</button>
                    </div>
                </div>

                <div class="solution">
                    <div class="solutionImg">
                        <img :src=img4>
                    </div>
                    <div class="solutionText">
                        <h4>Organizational Capacity Assessment Mobile (OCAM) app</h4>

                        <p v-show="isShowing4">The Organizational Capacity Assessment Mobile (OCAM) app is used to assess,
                            and rate organizational
                            capability in five key areas: governance, organizational management, program management, human
                            resources management, and financial management.
                            <br>
                            The rating system, based on a 5-point Likert scale allows assessor to express her/his agreement
                            or
                            disagreement with a particular statement by assigning a numerical value to the statement. The
                            rating
                            serves as a quick and convenient indicator of possible gaps, and weaknesses in specific aspects
                            of
                            the five key areas
                            <br>
                            OCAM is a customized version of the Organizational Capacity Assessment (OCA) tool developed by
                            USAID
                            / JSI Research & Training Institute, Inc. / FHI360

                        </p>

                        <button @click="isShowing4 ^= true">read more</button>
                    </div>
                </div>

                <div class="solution">
                    <div class="solutionImg">
                        <img :src=img5>
                    </div>
                    <div class="solutionText">
                        <h4>once toolbox</h4>
                        <p v-show="isShowing5">Once is a suite of utilities developed by Hayche Digital for the hospitality
                            industry, and includes
                        <ul>
                            <li>Guest management mobile app</li>
                            <li>Hotel Audit and Assessment Metrics</li>
                            <li> Inventory control mobile app</li>
                            <li>Restaurant Audit and Assessment Metrics</li>
                            <li>Smart Server (F&B order processing and control mobile app)</li>
                        </ul>
                        </p>
                        <button @click="isShowing5 ^= true">read more</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <SocialSection/>
    <section>
        <div class="usaidSection">
            <div class="usaidImg">
                <img :src=img6>
            </div>
            <div class="usaidText">
                <h4>Hayche Digital conducts geographical information systems (GIS) training</h4>
                <p>Hayche Digital in collaboration with USAID/Nigeria Program Office (PRO) conducted a 4-day GIS training,
                    facilitated by USAID/Nigeria Monitoring, Evaluation, and Learning (MEL) Support Activity. This was a
                    hybrid training conducted simultaneously in-person, and virtually, with close to 100 participants</p>
                <br>
                <p>The Training consisted of a combination of theory and practical applications of GIS through
                    scenarios anchored in everyday GIS use. The theory session covered the fundamentals of GIS,
                    and commonly used terminology, while the hands-on session took participants through
                    importing, Shapefiles, creating, and manipulating layers, and generating thematic maps for print
                    and web</p>
                <br>
                <p>The sessions were anchored by Hayche Digital excellent instructors, Olatunde Opeyemi Ayoola,
                    and Owoeye Success Toluwalogo.</p>
            </div>
        </div>
    </section>
</template>
<script>
import SocialSection from '../home/socialSection.vue';

export default {
    data: () => ({
        img1: require('@/assets/solution-img-1.png'),
        img2: require('@/assets/solution-img-2.png'),
        img3: require('@/assets/solution-ing-3.png'),
        img4: require('@/assets/solution-img-4.png'),
        img5: require('@/assets/solution-img-5.png'),
        img6: require('@/assets/usaid.png'),
        img7: require('@/assets/digital-img.jpg'),
        isShowing: false,
        isShowing2: false,
        isShowing3: false,
        isShowing4: false,
        isShowing5: false,
    }),
    components: { SocialSection }
}
</script>
<style scoped>
.container {
    height: 80vh;
    background: url('/src/assets/digital.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    animation: bgMove1 20s infinite;
    /* transform: var(--transistion); */
}

@keyframes bgMove1 {
    50% {
        background-position: right;
    }
}


.heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.action-btn {
    padding: 10px 30px;
    text-transform: capitalize;
    cursor: pointer;
    background: var(--light);
    font-weight: 500;
    transition: 0.5s ease all;
    /* color: var(--light); */
}

.action-btn:hover{
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

.contentContainer {
    background: var(--dark-purple);
    padding-bottom: 50px;
}

.contentBox {
    background: var(--light);
    padding: 80px;
    margin: 0 100px;
    margin-bottom: 50px;
}

.contentBox p {
    font-size: 20px;
}

.objectiveImg {
    width: 400px;
    height: 410px;

}

.objectiveImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.objectiveContainer {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: var(--light);
    margin-top: 50px;
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

.solutionsContainer {
    padding-top: 50px;
}

.solutions {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    /* align-items: center; */
}

.solutionsContainer h3 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 50px;
    font-family: Oswald;
    font-weight: 300;
    text-transform: capitalize;
}

.solution {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 50px;
    justify-content: center;
    margin-bottom: 100px;
    /* border: 1px solid red; */
    width: 40vw;
    padding: 20px;
    /* overflow: hidden; */
    /* box-shadow: var(--box-shadow); */
    box-shadow: 1px 3px 1px 3px rgba(34, 34, 34, 0.1);
}

.solutionImg {
    width: 250px;
    height: 150px;
    /* border: 1px solid red; */
}

.solutionImg img {
    width: 100%;
    height: 100%;
}

.solutionText {
    width: 100%;
}

.solutionText ul {
    margin-left: 30px;
    margin-top: 20px;
}

.solutionText h4 {
    /* color: var(--light, #F8F8F8); */
    /* text-align: center; */
    font-size: 30px;
    margin-bottom: 30px;
    font-family: Oswald;
    font-weight: 300;
    text-transform: capitalize;
}

.usaidSection {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 50px;
    margin-bottom: 100px;
}

.usaidImg {
    width: 200px;
    height: 200px;
    /* border: 1px solid red; */
}

.usaidImg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.usaidText h4 {
    font-family: Oswald;
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
    margin-bottom: 20px;
    /* line-height: 110%; */
}

button {
    background: inherit;
    padding: 10px 10px;
    border: none;
    cursor: pointer;
    border-bottom: 1px solid var(--dark-purple);
    margin-top: 20px;
    text-transform: capitalize;
    font-weight: 500;
}

@media only screen and (max-width: 1126px) {
    .sectionTitle h1 {

        font-size: 50px;

    }

    .contentBox {
        margin: 0 30px;
        padding: 50px;
    }
}

@media only screen and (max-width: 800px) {
    .solution {
        /* justify-content: left; */
    }
}

@media only screen and (max-width: 500px) {
    .contentBox {
        margin: 0 20px;
        padding: 50px 30px;
    }

    .objectiveText h1 {

        font-size: 30px;
        font-style: normal;

    }

    .objectiveText p {

        font-size: 15px;
        /* font-style: normal; */

    }

    .solution {
        /* justify-content: left; */
        width: 100vw;
        padding: 20px;
    }

    .usaidSection {
        width: 100%;
    }

    .usaidText h4 {
        font-size: 25px;
    }

    .solutions {
        display: flex;
        flex-direction: column;
       
    }
}</style>