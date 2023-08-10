<template>
    <div class="container">
        <section>
            <div class="sectionTitle">
                <h1>hayche lifestyle</h1>
            </div>
        </section>
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
    <section class="objectiveContainer">
       
        <div class="objectiveText">
            <h1>our objective</h1>
            <p>Development of comprehensive data management
                solutions with Geographic Information System (GIS)
                capabilities</p>
            <br>Development of comprehensive data management
            solutions with Geographic Information System (GIS)
            capabilities
        </div>
        <div class="objectiveImg"></div>
    </section>
</template>
<script>

</script>
<style scoped>
.container {
    height: 80vh;
    background: url('/src/assets/lifestyle-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
    padding-top: 50px;
    padding-bottom: 50px;
    background: var(--dark-purple);
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

@media only screen and (max-width: 1126px) {
    .sectionTitle h1 {

        font-size: 50px;

    }
}
</style>