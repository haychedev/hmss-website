<template>
    <section class="cta-section">
        <div class="cta-container">
            <div class="cta-img" v-motion :initial="{
                opacity: 0,
                x: -50,
            }" :visibleOnce="{
    opacity: 1,
    x: 0,
    transition: {
        duration: 500,
        type: 'keyframes',
        ease: 'easeIn',
    },
}">
                <img :src=logo>
            </div>
            <div class="cta-text">
                <h3>Work with our team today
                    and help make a positive impact
                    with our innovative training, hospitality and
                    lifestyle services!</h3>
                <a class="cta-link" href="">sign up<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'cta-page',
    data: () => ({
        logo: require('@/assets/cta-img.png')
    })
}
</script>


<style scoped>

.cta-section{
    margin-top: 200px;
    margin-bottom: 100px;
    
}
.cta-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    min-height: 600px;
    flex-wrap: wrap;
    

}



.cta-img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
}
.cta-img{
    width: 40vw;
    height: 100%;
    
}

.cta-text{
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    
}

.cta-text h3 {
    font-family: Oswald;
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
    line-height: 119.5%;
    /* 47.8px */
    letter-spacing: 0.4px;
    margin-top: 50px;
   
}

.cta-link{
    color: var(--light-purple, #66369D);
font-family: Oswald;
font-size: 30px;
font-style: normal;
font-weight: 300;
line-height: 119.5%; /* 47.8px */
letter-spacing: 0.4px;
margin-top: 50px;
margin-bottom: 50px;
padding-bottom: 10px;
transition: all 3s ease;
}

.cta-link i{
    margin-left: 10px;
}

.cta-link:hover{
    border-bottom: 2px solid var(--light-purple);
    transition: all 3s ease;
}

/* media query for laptop screens */
@media only screen and (min-width: 1024px){}

/* media query for tablet screens */
@media only screen and (max-width: 990px){
    .cta-section{
    margin-top: 50px;
    margin-bottom: 50px;
}

.cta-link{

font-size: 25px;

}

.cta-text h3 {
   
   font-size: 25px;
   
}
}

/* media query for phones */
@media only screen and (max-width: 768px){
    .cta-container {
    display: flex;
    flex-direction: column;
}
    .cta-text h3 {
   
    font-size: 20px;
    
}
.cta-img{
    width: 100%;
}
.cta-text{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
    align-items: flex-end;
    
}

.cta-link{

font-size: 20px;

}
}

/* media query for smaller devices */
@media only screen and (max-width: 500px){
    .cta-section{
    margin-top: 50px;
    margin-bottom: 50px;
    
}
}
</style>