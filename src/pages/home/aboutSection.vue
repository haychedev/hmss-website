<template>
    <main class="about-container">
        <section class="about-section">
            <h2 class="about-text">
                Hayche Multi Service Solutions (HMSS)
                is a management consulting firm comprised of the following business units
            </h2>
            <img class="float-img hospitalityImg" :src=hospitality>
            <img class="float-img trainingImg" :src=training>
            <img class="float-img lifestyleImg" :src=lifestyle>
            
           <div class="arrow-img">
            <img  class="imgLeft" :src=arrowLeft>
            <img class="imgRight" :src=arrowRight>
           </div>
        </section>
    </main>
    <main class="units-container">
        <section class="units">
            <div class="unit-item academy">
                <h3 class="unit-title">
                    hayche academy
                </h3>
                <p class="unit-text">
                    Training and placement of competent
                    hospitality personnel,
                    By providing comprehensive...
                </p>
                <a href="" class="unit-btn">read more</a>

            </div>
            <div class="unit-item development">
                <h3 class="unit-title">
                    hayche development
                </h3>
                <p class="unit-text">
                    Monitoring and Evaluation of development 
activities provides government officials...
                </p>
                <a href="" class="unit-btn">read more</a>

            </div>
            <div class="unit-item digital">
                <h3 class="unit-title">
                    hayche digital
                </h3>
                <p class="unit-text">
                    Hayche Digital develops custom solutions 
that take into account cultural and geographic...
                </p>
                <a href="" class="unit-btn">read more</a>
            </div>
            <div class="unit-item lifestyle">
                <h3 class="unit-title">
                    hayche lifestyle
                </h3>
                <p class="unit-text">
                    Promoting tourism within Africa, Showcasing 
the African culture
                </p>
                <a href="" class="unit-btn">read more</a>
            </div>
            <div class="unit-item network">
                <h3 class="unit-title">
                    hayche network
                </h3>
                <p class="unit-text">
                    A platform where hospitality establishments, 
independent consultants, and job seekers can...
                </p>
                <a href="" class="unit-btn">read more</a>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "about-us",
    data: () => ({
        arrowLeft: require('@/assets/arrow-left.png'),
        arrowRight: require('@/assets/arrow-right.png'),
        hospitality: require('@/assets/hospitality.png'),
        lifestyle: require('@/assets/lifestyle.png'),
        training: require('@/assets/training.png'),
        
       
       
    })
}
</script>

<style scoped>

.float-img{
    position: absolute;
    width: 20%;
}
.hospitalityImg{
    left: 0;
    bottom: 0;
    margin-bottom: 50px;
}

.lifestyleImg{
   right: 50%;
   left: 50%;
}

.trainingImg{
    right: 0;
    bottom: 0;
    margin-bottom: 50px;
}
.about-section{
    position: relative;
}



.arrow-img{
   
    position: relative;
}

.arrow-img img{
    position: absolute;
    width: 10%;
}

.imgLeft{
    top: 0;
    left: 0;
}
.imgRight{
    top: 0;
    right: 0;
}


section{
    position: relative;
}
.about-container {
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.about-text {
    color: var(--dull-black, #333);
    text-align: center;
    font-family: Oswald;
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: capitalize;
    max-width: 700px;
}

.units-container {
    min-height: 600px;
    margin-top: 100px;
    margin-bottom: 100px;
}

.units {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
    align-items: center;
    justify-content: center;
}

.unit-item {
    width: 400px;
    height: 280px;
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;
    padding-left: 16px;
    background-position: 100% 100%;
    border-radius: 10px;
}

.academy {
    background: url("/src/assets/hayche-academy.png");
    background-repeat: no-repeat;
}

.development {
    background: url("/src/assets/hayche-development.png");
    background-repeat: no-repeat;
}

.digital {
    background: url("/src/assets/hayche-digital.png");
    background-repeat: no-repeat;
   
}

.lifestyle {
    background: url("/src/assets/hayche-lifestyle.png");
    background-repeat: no-repeat;
}

.network {
    background: url("/src/assets/hayche-network.png");
    background-repeat: no-repeat;
}

.unit-title {
    color: var(--light, #F8F8F8);
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}

.unit-text {
    color: var(--light, #F8F8F8);
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 10px;
    padding-bottom: 25px;
}

.unit-btn {
    color: var(--light, #F8F8F8);
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    text-transform: capitalize;
    transition: 0.5s ease;
}

.unit-btn:hover{
    color: var(--light-purple);
    transition: 0.5s ease;
}


/* media query for laptop screens */
@media only screen and (min-width: 1024px){}

/* media query for tablet screens */
@media only screen and (max-width: 990px){
    
}

/* media query for phones */
@media only screen and (max-width: 768px){
    .about-text {
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    max-width: 700px;
}
}

/* media query for smaller devices */
@media only screen and (max-width: 500px){
    .about-text {
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    max-width: 700px;
}
.float-img{
    
    width: 30%;
}

.units-container {
    min-height: 600px;
    margin-top: 10px;
    margin-bottom: 50px;
    padding: 10px;
}

.units {
    gap: 10px;
}

.hospitalityImg{
    left: 0;
    bottom: 0;
    margin-bottom: 80px;
}

.lifestyleImg{
   right: 50%;
   left: 50%;
}

.trainingImg{
    right: 0;
    bottom: 0;
    margin-bottom: 100px;
}


}


</style>