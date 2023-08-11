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
            <div class="objectiveImg">
                <img :src=img2>
            </div>
            <div class="objectiveText">
                <h1>our goal</h1>
                <p>Supporting organizations in the integration of M&E as a
                    management tool rather than a donor requirement.</p>

            </div>
        </section>
        <section class="objectiveContainer">
            <div class="objectiveText">
                <h1>our objective</h1>
                <p>Develop monitoring and evaluating (M&E) frameworks that integrate international evaluation policy and M&E
                    guidelines</p>
                <br>
                <p>Develop M&E data management systems</p>
            </div>
            <div class="objectiveImg">
                <img :src=img1>
            </div>

        </section>
    </div>
    <section>
        <br>
        <br>
        <p>HDev has extensive experience developing gender-based violence(GBV) screening tools. HDev developed on behalf of
            Linkages across the Continuum of HIV Services for Key Populations Affected by HIV Project (LINKAGES), a
            five-year cooperative agreement funded by the United States Agency for International Development (USAID) under
            the U.S. President's Emergency Plan for AIDS Relief (PEPFAR) and implemented by FHI360, a bi-lingual GBV
            screening tool for key populations (KP). The tool has helped to determine the number of cases of reported
            violence among KPs, the type of violence that occurred, and the services that KP victims receive (using GEND_GBV
            at PEPFAR supported sites); while ensuring that this information also allows for measurement of the percentage
            of victims who test for HIV as well as the percentage of those who test positive.</p>
        <br>
        <p>HDev developed on behalf of LINKAGES, the client tracking system (CTS), a comprehensive M&E data management tool.
            The CTS incorporates the variables required for reporting against each of the PEPFAR core indicators. These
            variables are derived from the PEPFAR MER Indicator Reference Guide so as to ensure that data collection and
            reporting are in line with PEPFAR guidelines, and thereby minimizing compliance risks.</p>
        <br>
        <br>
        <div class="img">
            <img :src=img3>
        </div>
        <p>The Prevention Services screen of the Client Tracking System (CTS) allows for data to be captured for the PEPFAR
            indicators, KP_PREV; HTC_TST; GEND_GBV; GEND_NORM, and PP_PREV. Clicking on the icon next to an indicator code
            provides an overview of that indicator.</p>
    </section>
</template>
<script>
export default {
    data: () => ({
        img1: require('@/assets/dev-plan.jpg'),
        img2: require('@/assets/dev-goal.jpg'),
        img3: require('@/assets/hdev.png'),
    })
}
</script>
<style scoped>
.container {
    height: 80vh;
    background: url('/src/assets/projects.png');
}

.img {
    width: 500px;
    height: 500px;
}

.img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.intro {
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

.text-box-container {
    background: var(--dark-purple);
}

.text-box {
    display: flex;
    background: var(--light);
    margin: 0 30px;
    padding: 50px;
    gap: 30px;
}


.objectiveImg {
    width: 400px;
    height: 410px;
    /* border: 1px solid red; */
}

.objectiveImg img {
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
    margin-bottom: 100px;

}

.objectiveText {
    width: 500px;
}

.wrapper {
    background: var(--dark-purple);
    padding-top: 50px;
    padding-bottom: 50px;
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

.objectiveText p {
    color: var(--light, #F8F8F8);
    font-family: Quicksand;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 102.2%;
    /* 24.528px */

}

@media only screen and (max-width: 500px) {
    .objectiveText p {
        font-size: 15px;
    }


    .objectiveText h1 {
        font-size: 30px;
    }

    .text-box {
        margin: 0 10px;
        flex-direction: column;

    }

    .sectionTitle h1 {
        font-size: 30px;
    }

    .text p {
        font-size: 15px;
    }

}

@media only screen and (max-width: 1126px) {
    .sectionTitle h1 {
        color: var(--light, #F8F8F8);
        text-align: center;
        font-family: Oswald;
        font-size: 50px;
        font-style: normal;
        font-weight: 300;
        line-height: 102.2%;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 500px){
        .img{
            width: 300px;
            height: 400px;
        }
    }
}</style>