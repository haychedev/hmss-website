<template>
<main class="vision-container">
    <section class="vision-section">
        <h2 class="vision-heading">
            our 
            <br>vision
        </h2>
        <p class="vision-text">
            To inspire people-driven <br>
solutions...
        </p>
    </section>
</main>
</template>

<script>
export default{
    name: "our-vision"
}
</script>

<style scoped>
.vision-container{
    min-height: 600px;
    background: url('/src/assets/vision-bg.png') ;
    background-repeat: no-repeat;
    object-fit: contain;
    background-size: cover;   
    margin-top: 150px;
    margin-bottom: 150px;
    background-attachment: fixed;
}

.vision-section{
    display: flex;
    flex-direction: column;
    gap: 200px;
    justify-content: center;
    
    
}
.vision-heading{
    color: var(--light, #F8F8F8);
text-align: right;
font-family: Oswald;
font-size: 100px;
    font-style: normal;
    font-weight: 400;
line-height: 92.2%; 
margin-top: 50px;

}

.vision-text{
    color: var(--light, #F8F8F8);
font-family: Quicksand;
font-size: 35px;
font-style: normal;
font-weight: 500;
line-height: 120%; /* 62.4px */
letter-spacing: 2px;
margin-top: 50px;
margin-bottom: 100px;
}


/* media query for laptop screens */
@media only screen and (min-width: 1024px){

}

/* media query for tablet screens */
@media only screen and (max-width: 990px){

}

/* media query for phones */
@media only screen and (max-width: 768px){

}

/* media query for smaller devices */
@media only screen and (max-width: 500px){
    .vision-container{
    /* min-height: 600px; */
    background: url('/src/assets/vision-bg.png') ;
    background-repeat: no-repeat;
    object-fit: contain;
    background-size: cover;   
    background-position: center center;
    margin-top: 150px;
    margin-bottom: 150px;
}



.vision-heading{
    color: var(--light, #F8F8F8);
text-align: right;
font-family: Oswald;
font-size: 100px;
    font-style: normal;
    font-weight: 400;
line-height: 50%; 
margin-top: 50px;

}

.vision-text{
    color: var(--light, #F8F8F8);
font-family: Quicksand;
font-size: 30px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 62.4px */
letter-spacing: 2px;
margin-top: 50px;
margin-bottom: 100px;
width: 80%;
}
}


</style>