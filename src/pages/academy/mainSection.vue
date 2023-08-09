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
                <img :src= goalImg>
            </div>
            <div class="objectiveText">
                <h1>our goal</h1>
                <p>Development of comprehensive data management
                    solutions with Geographic Information System (GIS)
                    capabilities</p>
                <br> <p>Development of comprehensive data management
                solutions with Geographic Information System (GIS)
                capabilities</p>
            </div>
        </section>
        <section class="objectiveSection obj">
            <div class="objectiveText">
                <h1>our objective</h1>
                <p>Development of comprehensive data management
                    solutions with Geographic Information System (GIS)
                    capabilities</p>
                <br>
                <p>Development of comprehensive data management
                solutions with Geographic Information System (GIS)
                capabilities</p>
            </div>
            <div class="objectiveImg">
                 <img :src= goalImg>
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
            <img :src= howImg>
        </div>
        <div class="how-to-text">
            <p>To take an assessment, visit our site, enter your name in the appropriate field(s), and proceed to take any
                of the self-guided assessments that evaluate skill levels in 15 areas</p>
            <ul>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
                <li>basic computer skills</li>
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

.goalImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.objectiveImg img{
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
.objectiveText p{
color: var(--light, #F8F8F8);
font-family: Quicksand;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 102.2%; /* 24.528px */

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
.northstar-text h3{
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

.how-to-img img{
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
    .obj{
    flex-direction: row-reverse;    
    }
    .objectiveSection{
        justify-content: left;
    }
    .obj{
        justify-content: left;
    }
}

@media only screen and (max-width: 500px){
    .note p {
    width: 100%;
}

.obj{
    flex-direction: row-reverse;
}
.container{
    background-position: center;
}

.sectionTitle h1 {
    font-size: 80px;
}

.northstar-text h3{
    font-size: 30px;
    margin-bottom: 10px;
}
.northstar-text p{
    font-size: 18px;
}

.northstar-info{
    background-position: 90% 30%;
}

}
</style>