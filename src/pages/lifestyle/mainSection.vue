<template>
    <div class="container">
        <section>
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
                <h1>hayche lifestyle</h1>
            </div>
        </section>
    </div>
    <section class="objectiveContainer">
        <div class="objectiveImg">
            <img :src=img2>
        </div>
        <div class="objectiveText">
            <h1>our goal</h1>
            <p>Showcase and promote African lifestyle</p>
        </div>
    </section>
    <section class="objectiveContainer">

        <div class="objectiveText">
            <h1>our objective</h1>
          
            <p>Promoting wellness, tourism and showcasing the African culture.</p>
              
            
        </div>
        <div class="objectiveImg">
            <img :src=img1>
        </div>
    </section>
    <DefenceSection/>

</template>
<script>
import DefenceSection from '../defence/defence-section.vue';

export default{
    data: () => ({
        img1: require('@/assets/africa.jpg'),
        img2: require('@/assets/africa-culture.jpg'),
    }),
    components: { DefenceSection }
}
</script>
<style scoped>
.container {
    height: 80vh;
    background: url('/src/assets/lifestyle-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    animation: bgMove1 20s infinite;
}

@keyframes bgMove1 {
    50% {
        background-position: 100%;
    }
}


section {
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


.objectiveImg {
    width: 400px;
    height: 410px;
   
   
}

.objectiveImg img{
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
    padding-top: 50px;
    padding-bottom: 50px;
    background: var(--dark-purple);
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

@media only screen and (max-width: 1126px) {
    .sectionTitle h1 {

        font-size: 50px;

    }
}
</style>