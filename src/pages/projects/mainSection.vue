<template>
    <div class="container">
        <section class="intro">
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
                <h1>hayche development
                    <br> projects
                </h1>
            </div>
        </section>
    </div>
    <div class="text-box-container">
        <section class="text-box">
            <div class="text">
                <p>Monitoring and Evaluation of development activities provides government officials,
                    development managers, and civil society with better means for learning from past experience,
                    improving service delivery, planning and allocating resources, and demonstrating results as part
                    of accountability to key stakeholders.</p>
            </div>
            <div class="text">
                <p>Hayche Development Projects (HDev) supports organizations to integrate M&E as a
                    management tool rather than a donor requirement, and develops people-driven systems that
                    streamline the way information is collected in order to save people from becoming overwhelmed
                    and provide a clear and simple way of analyzing the information collected.</p>
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

    <section class="gbv-container">
        <h3>Monitoring and Evaluation of Gender-Based violence
            prevention efforts</h3>
        <div class="gbv-img">
            <img :src=img4>
        </div>
    </section>

    <section>
        <h5>Monitoring violence against key populations</h5>
        <br>
        <p>HDev developed on behalf of Linkages across the Continuum of HIV Services for Key
            Populations Affected by HIV Project (LINKAGES), a five-year cooperative agreement
            funded by the United States Agency for International Development (USAID) under the
            U.S. President's Emergency Plan for AIDS Relief (PEPFAR) and implemented by
            FHI360, a GBV screening tool in Spanish (Herramienta de Encuesta de VBG para
            Proveedores Directos De Servicios) for key populations (KP). The tool has helped to
            determine the number of cases of reported violence among KPs, the type of violence
            that occurred, and the services that KP victims receive (using GEND_GBV at PEPFAR
            supported sites); while ensuring that this information also allows for measurement of the
            percentage of victims who test for HIV as well as the percentage of those who test
            positive.
        </p>
        <br>
        <br>
        <h5>Evaluating the positive masculinity (+M) program</h5>
        <br>
        <p>HDev collaboratively developed the positive masculinity (+M) program in response to
            the now widely accepted evidence that efforts to end gender-based violence (GBV)
            must include work with men and boys. Ending GBV however requires coordinated work
            across many sectors. The +M program recognizes that a multisectoral response to the
            challenge of ending GBV needs to focus attention on the opportunities for and
            challenges of male engagement strategies. </p>
        <br>
        <p>The +M program approach is grounded in the understanding that masculinities are
            constructed by aligning notions of hegemonic (or toxic) masculinity with religious beliefs
            to produce religious masculinity. Thus, religious masculinity emerges as a form of
            masculinity that rejects traditional expectations of manhood that contradict religious
            doctrine. The +M program aims to replace hegemonic masculinity with positive
            masculinity as part of efforts at changing attitudes towards GBV, especially those
            founded on religious beliefs, and Christian youth organizations present the ideal
            environment to support the development of positive masculinity.</p>

        <br>
        <p>Our evaluation of the +M program is driven by our theory of change, which posits that
            correcting misperceptions surrounding the portrayal of women in scripture will result in a
            decrease in hegemonic (toxic) masculinity, or an increase in the desired behavior
            (positive masculinity). These sorts of evaluations are complex and have special design
            requirements.</p>

        <br>
        <p>The +M program is unique in that the theory of change and previous evaluations
            suggest that it affects multiple outcomes: gender attitudes, violence in relationships,
            sexual and reproductive health (SRH) behavior, and gendered division of tasks. It may
            also affect notions of masculinity by challenging long held religious beliefs.</p>
        <br>
        <p>Evidence on working with men and boys suggests that it is possible for interventions to
            be effective at shifting attitudes, and in some cases also shifting behaviors, in the short-term. Challenges
            remain in evaluating impact however, given the reliance on self-reported attitudinal change as a proxy for
            evaluating behavioral change. Furthermore,
            the +M program will need to run for a sufficiently long enough period in order to
            demonstrate a causal link between program implementation, and behavior change.</p>

        <br>
        <p>The program typically relies on “triangulation” to address the challenges inherent in self-reporting.
            Triangulation may include periodic surveys of significant others, women who
            interact with program participants, and other family members, (especially if participants
            are unpartnered). Though this can significantly add to program cost, it is an important
            aspect of demonstrating impact.
        </p>
        <br>
        <br>
        <br>
        <br>
        <h3 class="g-head">Hayche Development Projects hosted a
            session on Remote Monitoring as part of
            the gLOCAL Evaluation week, 2022</h3>
        <div class="img">
            <img :src=img5>
        </div>
        <p>For many years, project managers, especially those implementing programs in high-risk
            environments, have approached remote monitoring (RM) as a substitute for traditional
            M&E. However, RM is a robust and cost-effective approach that yields comparable, if
            not occasionally better results than traditional M&E. With the COVID19 pandemic, and
            many organizations compelled to withdraw or drastically reduce field staff, there has
            been a rush to implement remote monitoring with little preparation, often leading to
            mixed results.
        </p>
    </section>
</template>
<script>
export default {
    data: () => ({
        img1: require('@/assets/dev-plan.jpg'),
        img2: require('@/assets/dev-goal.jpg'),
        img3: require('@/assets/hdev.png'),
        img4: require('@/assets/gbv2.png'),
        img5: require('@/assets/glocal.png'),
    })
}
</script>
<style scoped>

h5{
    font-family: Oswald;
    font-weight: 300;
    font-size: 25px;
}
.gbv-container {
    padding-top: 100px;
    padding-bottom: 100px;
}

.gbv-container h3, .g-head {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 35px;
    font-family: Oswald;
}

.gbv-img img {
    width: 100%;
}

.container {
    height: 80vh;
    background: url('/src/assets/projects.png');
    background-repeat: no-repeat;
    animation: bgMove1 20s infinite;
}

@keyframes bgMove1 {
    50% {
        background-position: center;
    }
}


.img {
    width: 500px;
    height: 500px;
}

.img img {
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

.im{
    margin-top: 50px;
    margin-bottom: 50px;
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

}

@media only screen and (max-width: 500px) {
    .img {
        width: 300px;
        height: 200px;
    }

    .gbv-container h3, .g-head {
        font-size: 25px;
    }

    .im {
        width: 300px;
        height: 300px;
    }
}
</style>