<template>
    <div class="hero-container">
        <section>
            <div class="hero-content">
                <h1>
                    hayche multi service
                    solutions (hmss)
                    <!-- <span>(hmss)</span>  -->
                </h1>
                <h3>
                    We inspire people-driven solutions.
                </h3>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "hero-section"
}
</script>

<style scoped>
.hero-container {
    display: flex;
    align-items: center;
    min-height: 650px;
    background: url("/src/assets/hero-image.png"), lightgray no-repeat;
    background-position: 80% 80%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    animation: bgMove1 5s infinite;
   transition: var(--transistion);
}

@keyframes bgMove1 {
  50% {background-position: center;}
}

.hero-content h1 {
    color: var(--dark-purple,);
    font-family: Oswald;
    font-size: 70px;
    font-style: normal;
    font-weight: 300;
    line-height: 110%;
    /* 98.112px */
    text-transform: uppercase;
    width: 80%;
}

/* .hero-content h1 span{
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
} */

.hero-content h3 {
    color: var(--dark-purple, #522888);
    font-family: Quicksand;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 10px;
}


/* media query for laptop screens */
@media only screen and (min-width: 1024px) {
    .hero-container {
    background-position: 80% 80%;
    animation: bgMove2 10s infinite;
   transition: var(--transistion);
}

@keyframes bgMove2 {
  50% {background-position: 50% 100%;}
}

}

/* media query for tablet screens */
@media only screen and (max-width: 990px) {
    .hero-content h1 {
    font-size: 60px;
}
.hero-content h3{
    font-size: 20px;
}
}


/* media query for phones */
@media only screen and (max-width: 768px) {

  
    .hero-content h1 {
    font-size: 45px;
    width: 100%; 
}

.hero-content{
    width: 100%;
}
}


/* media query for smaller devices */
@media only screen and (max-width: 500px){
    .hero-container {
   
   background: url("/src/assets/hero-mobile.png"), lightgray no-repeat;
   background-repeat: no-repeat;
   background-size: cover;
   /* background-size: 100% 100%; */
   background-position: 100% 100%;
   animation: bgMove 5s infinite;
   transition: var(--transistion);
}

@keyframes bgMove {
  50% {background-position: center;}
}
.hero-content h3{
    width: 90%;
    margin-top: 20px;
}
}
</style>