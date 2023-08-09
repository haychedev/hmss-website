<template>
    <div class="container">
        <section class="heading">
            <div class="sectionTitle">
                <h1>hayche academy</h1>
            </div>
        </section>
    </div>
    <div class="contentContainer">
        <div class="contentBox">
            <h3>Hayche Digital develops custom solutions that take into account cultural and geographic diversity
                that have a special impact on organizational communications, change processes and work
                practices, and that reflect the varying societal and infrastructural conditions in which our solutions
                are deployed.</h3>
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
                <div class="solutionImg"></div>
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
                <div class="solutionImg"></div>
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
                <div class="solutionImg"></div>
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
                <div class="solutionImg"></div>
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
                <div class="solutionImg"></div>
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
            <div class="usaidImg"></div>
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

</script>
<style scoped>
.container {
    height: 80vh;
    background: var(--dark-purple);
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
}

.objectiveText {
    width: 500px;
}

.solutionsContainer {
    padding-top: 50px;
}

.solutionsContainer h3 {
    text-align: center;
    margin-bottom: 50px;
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
    border: 1px solid red;
}

.solutionText {
    width: 500px;
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
    border: 1px solid red;
}
</style>