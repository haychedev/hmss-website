<template>
    <div class="container">
        <section class="intro">
            <div class="sectionTitle">
                <h1>hayche development
                    <br> projects
                </h1>
            </div>
        </section>
    </div>
    <div class="text-box-container">
        <section class="text-box">
            <div class="text">
                <p>Hayche Development Projects (HDev) supports
                    organizations to integrate M&E as a management tool
                    rather than a donor requirement, and develops
                    people-driven systems that streamline the way
                    information is collected in order to save people from
                    becoming overwhelmed and provide a clear and simple
                    way of analyzing the information collected</p>
            </div>
            <div class="text">
                <p>Hayche Development Projects (HDev) supports
                    organizations to integrate M&E as a management tool
                    rather than a donor requirement, and develops
                    people-driven systems that streamline the way
                    information is collected in order to save people from
                    becoming overwhelmed and provide a clear and simple
                    way of analyzing the information collected</p>
            </div>
        </section>
    </div>
    <div class="wrapper">
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
    </div>
</template>
<script>

</script>
<style scoped>
.container {
    height: 80vh;
    background: var(--dark-purple);
}

.intro {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
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

.text-box-container {
    background: var(--dark-purple);
}

.text-box {
    display: flex;
    background: var(--light);
    margin: 0 100px;
    padding: 50px;
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

.wrapper{
    background: var(--dark-purple);
}
</style>