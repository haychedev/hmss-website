<template>
    <div class="container">
        <section class="heading">
            <div class="sectionTitle">
                <h1>hayche digital</h1>
            </div>
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
            <div class="objectiveImg"></div>
            <div class="objectiveText">
                <h1>our objective</h1>
                <p>Development of comprehensive data management
                    solutions with Geographic Information System (GIS)
                    capabilities</p>
                <br>Development of comprehensive data management
                solutions with Geographic Information System (GIS)
                capabilities
            </div>
        </section>
    </div>
    <div class="solutionsContainer">
        <section>
            <h3>our solutions</h3>
            <div class="solution">
                <div class="solutionImg">
                    <img :src= img1>
                </div>
                <div class="solutionText">
                    <h4>Candidate Evaluation Mobile App (CEMA)</h4>
                    <p>The candidate evaluation mobile app allows for capturing quantitative and
                        qualitative responses. The integrated categories are designed to measure
                        experience, skills, knowledge, and work style to assist recruiter in determining
                        the most qualified candidate for a position as well as provide professional
                        development feedback to internal candidates.</p>
                </div>
            </div>

            <div class="solution">
                <div class="solutionImg">
                    <img :src= img2>
                </div>
                <div class="solutionText">
                    <h4>Candidate Evaluation Mobile App (CEMA)</h4>
                    <p>The candidate evaluation mobile app allows for capturing quantitative and
                        qualitative responses. The integrated categories are designed to measure
                        experience, skills, knowledge, and work style to assist recruiter in determining
                        the most qualified candidate for a position as well as provide professional
                        development feedback to internal candidates.</p>
                </div>
            </div>

            <div class="solution">
                <div class="solutionImg">
                    <img :src= img3>
                </div>
                <div class="solutionText">
                    <h4>Candidate Evaluation Mobile App (CEMA)</h4>
                    <p>The candidate evaluation mobile app allows for capturing quantitative and
                        qualitative responses. The integrated categories are designed to measure
                        experience, skills, knowledge, and work style to assist recruiter in determining
                        the most qualified candidate for a position as well as provide professional
                        development feedback to internal candidates.</p>
                </div>
            </div>

            <div class="solution">
                <div class="solutionImg">
                    <img :src= img4>
                </div>
                <div class="solutionText">
                    <h4>Candidate Evaluation Mobile App (CEMA)</h4>
                    <p>The candidate evaluation mobile app allows for capturing quantitative and
                        qualitative responses. The integrated categories are designed to measure
                        experience, skills, knowledge, and work style to assist recruiter in determining
                        the most qualified candidate for a position as well as provide professional
                        development feedback to internal candidates.</p>
                </div>
            </div>

            <div class="solution">
                <div class="solutionImg">
                    <img :src= img5>
                </div>
                <div class="solutionText">
                    <h4>Candidate Evaluation Mobile App (CEMA)</h4>
                    <p>The candidate evaluation mobile app allows for capturing quantitative and
                        qualitative responses. The integrated categories are designed to measure
                        experience, skills, knowledge, and work style to assist recruiter in determining
                        the most qualified candidate for a position as well as provide professional
                        development feedback to internal candidates.</p>
                </div>
            </div>
        </section>
    </div>
    <section>
        <div class="usaidSection">
            <div class="usaidImg">
                <img :src= img6>
            </div>
            <div class="usaidText">
                <h4>Hayche Digital conducts geographical information systems (GIS) training</h4>
                <p>Hayche Digital in collaboration with USAID/Nigeria Program Office (PRO) conducted a 4-day GIS training,
                    facilitated by USAID/Nigeria Monitoring, Evaluation, and Learning (MEL) Support Activity. This was a
                    hybrid training conducted simultaneously in-person, and virtually, with close to 100 participants</p>
                <br>
                <p>Hayche Digital in collaboration with USAID/Nigeria Program Office (PRO) conducted a 4-day GIS training,
                    facilitated by USAID/Nigeria Monitoring, Evaluation, and Learning (MEL) Support Activity. This was a
                    hybrid training conducted simultaneously in-person, and virtually, with close to 100 participants</p>
                <br>
                <p>Hayche Digital in collaboration with USAID/Nigeria Program Office (PRO) conducted a 4-day GIS training,
                    facilitated by USAID/Nigeria Monitoring, Evaluation, and Learning (MEL) Support Activity. This was a
                    hybrid training conducted simultaneously in-person, and virtually, with close to 100 participants</p>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    data: () => ({
        img1: require('@/assets/solution-img-1.png'),
        img2: require('@/assets/solution-img-2.png'),
        img3: require('@/assets/solution-ing-3.png'),
        img4: require('@/assets/solution-img-4.png'),
        img5: require('@/assets/solution-img-5.png'),
        img6: require('@/assets/usaid.png'),
    })
}
</script>
<style scoped>
.container {
    height: 80vh;
    background: url('/src/assets/digital.png');
    background-position: center;
    background-size: cover;
}

.heading {
    display: flex;
    align-items: center;
    justify-content: center;
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

.contentContainer {
    background: var(--dark-purple);
    padding-bottom: 50px;
}

.contentBox {
    background: var(--light);
    padding: 100px;
    margin: 0 100px;
    margin-bottom: 50px;
}

.objectiveImg {
    width: 400px;
    height: 410px;
    border: 1px solid red;
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

.objectiveText h1{
    color: var(--light, #F8F8F8);
font-family: Oswald;
font-size: 40px;
font-style: normal;
font-weight: 300;
line-height: 102.2%; /* 49.056px */
text-transform: uppercase;
margin-bottom: 30px;
}
.solutionsContainer {
    padding-top: 50px;
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
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 50px;
    justify-content: center;
}

.solutionImg {
    width: 250px;
    height: 150px;
    /* border: 1px solid red; */
}

.solutionImg img{
    width: 100%;
    height: 100%;
}
.solutionText {
    width: 500px;
}

.solutionText h4{
    /* color: var(--light, #F8F8F8); */
    /* text-align: center; */
    font-size: 30px;
    margin-bottom: 30px;
    font-family: Oswald;
    font-weight: 300;
    text-transform: capitalize;
}

.usaidSection{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 100px;
    margin-bottom: 100px;
}

.usaidImg{
    width: 200px;
    height: 200px;
    /* border: 1px solid red; */
}

.usaidImg img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.usaidText h4{
    font-family: Oswald;
font-size: 30px;
font-style: normal;
font-weight: 300;
margin-bottom: 20px;
/* line-height: 110%; */
}

@media only screen and (max-width: 1126px){
    .sectionTitle h1 {
   
    font-size: 50px;
   
}
.contentBox{
    margin: 0 30px;
    padding: 50px;
}
}
@media only screen and (max-width: 800px){
    .solution{
    justify-content: left;
}
}
@media only screen and (max-width: 500px){
    .contentBox{
    margin: 0 20px;
    padding:50px 30px;
}
.objectiveText h1{

font-size: 30px;
font-style: normal;

}
.objectiveText p{

font-size: 15px;
/* font-style: normal; */

}
.solution{
    justify-content: left;
}

.usaidSection{
    width: 100%;
}

.usaidText h4{
    font-size: 25px;
}
}

</style>