<template>
    <section>
        <h2 class="heading">
            our story
        </h2>

        <!-- <div class="header-img">
            <img :src=img1>
        </div> -->

        <div class="videoContainer">
            <iframe
                src="https://player.vimeo.com/video/879456619?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                style="position:absolute;top:0;left:0;width:100%;height:100%;" title="hayche"></iframe>
        </div>

        <div class="context">
            <p>Hayche embodies the visionary dream of its founder and CEO, Aisha Yusuf. In 2012, she laid the foundation for
                the Hayche Network, initially conceived as a specialized hospitality management and recruitment agency. Our
                primary focus was on training and supplying top-tier industry professionals to the ever-evolving Hospitality
                sector.</p>
            <div v-show="isShowing">
                <p>Within three years, the Hayche Network had grown to encompass over eleven thousand members. These ranged
                    from
                    highly experienced individuals in the hospitality industry, including general managers, food and
                    beverage
                    directors, chefs, and supervisors, to those with no little or no experience. From this diverse talent
                    pool,
                    we are able to quickly select and deploy candidates to various roles, thereby fostering an efficient
                    recruitment process.</p>

                <p>However, a noticeable disparity emerged, with a significant number of network members lacking any
                    industry
                    experience. To address this gap, Aisha Yusuf conceived the Hayche Academy. Its mission is to prepare
                    individuals for a rewarding career in the hospitality sector. The synergy between Hayche Academy and The
                    Network creates an integrated human resource service, empowering our clients with effective HR
                    management
                    solutions.</p>

                <p>By 2016, Hayche had successfully undertaken HR management for a diverse portfolio of hospitality
                    establishments throughout Nigeria. In response to this growth, we developed two essential tools: the
                    Candidate Evaluation Mobile App (CEMA) and the Human Resource Information System (HaycheR). CEMA
                    revolutionized candidate assessment by capturing both quantitative and qualitative data, evaluating
                    experience, skills, knowledge, and work styles. Meanwhile, HaycheR became a central hub for employee
                    data,
                    payroll management, recruitment processes, benefits administration, and attendance tracking.</p>

                <p>Expanding our digital capabilities, we developed various mobile apps to support our clients in
                    streamlining
                    administrative processes, minimizing fraud, and realizing significant productivity gains by reducing the
                    overreliance on paper. This led to the establishment of the Hayche Digital business unit, dedicated to
                    the
                    development of mobile data solutions.</p>

                <p>In 2017, Hayche successfully secured a contract to conduct organizational capacity assessments (OCA) for
                    civil society organizations across Nigeria. This endeavour prompted the development of the
                    Organizational
                    Capacity Assessment Mobile App (OCAM) to facilitate the assessment process. Subsequently, Hayche
                    identified
                    a prevailing weakness among these organizations in monitoring and evaluation (M&E). To address this, we
                    entered into a strategic partnership with Ai Data Management Solutions, enabling us to provide M&E
                    support
                    to CSOs and non-profit organizations. This collaboration culminated in the formation of the Hayche
                    Development (HDev) business unit, dedicated to supporting non-profits, and government ministries to
                    integrate M&E as a management tool, rather than a donor requirement.</p>

                <p>Hayche Lifestyle (HL) is committed to empowering women and girls, promoting wellness and African culture,
                    and
                    encouraging professional cultural exchange.</p>

                <p>A major initiative of HL is the Train Tough Smart Safe (TTSS), a violence risk reduction program that
                    teaches
                    young girls and women to avoid becoming victims of sexual violence.


                    <!-- <a href="/defense-pdf">
                        Download TTSS program info
                    </a> -->
                    <!-- <a href="https://www.docdroid.net/file/download/suBR05D/womens-self-defense-1-pdf.pdf" download="women.pdf">Download TTSS program info</a> -->

                    <a href="/public/files/Womens self defense (1).pdf" download>
                        <button class="btn btn-primary">Download</button>
                    </a>




                </p>

                <p>TTSS is not merely a program; it's a transformative initiative that empowers women and girls to take
                    charge
                    of their own safety and well-being. Through dedicated training and continuous support, TTSS aims to
                    create a
                    world where women and girls can confidently face the challenges posed by violence and emerge stronger
                    and
                    more resilient.</p>

                <p>Currently available in Abuja and Enugu. TTSS extends an open invitation to trainers interested in
                    expanding
                    its reach to other locations. Interested individuals are required to undergo comprehensive training and
                    certification. Upon successful completion, certified instructors gain access to the TTSS curriculum and
                    receive ongoing support to ensure adherence to program methodology, and approach.</p>

                <p>Our managing director Andrew Igbo, a seasoned martial arts expert developed TTSS in collaboration with
                    martial arts instructors, and security experts in various countries. Mr. Igbo has over three decades of
                    experience in training and teaching martial arts and self-defense to diverse populations worldwide.</p>
            </div>


            <button @click="isShowing ^= true">read more</button>

        </div>
    </section>

    <teamSection id="teamSection" />
</template>
<script>

import teamSection from '../team/mainSection.vue'
export default {
    data: () => ({
        img1: require('@/assets/logo-mockup.png'),
        isShowing: false,

    }),
    components: { teamSection }

}

</script>
<style scoped>
.heading {
    font-family: Oswald;
    font-size: 35px;
    font-weight: normal;
    text-transform: capitalize;
    text-align: center;
    padding: 20px 0;
    color: var(--dull-black);
    padding-top: 100px;
}

.videoContainer {
    width: 100%;
    position: relative;
    height: 500px;
}

.header {
    padding-top: 150px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header h2 {
    font-family: Oswald;
    font-size: 30px;
    font-weight: 400;
    color: var(--dull-black);
    text-align: center;
    margin-bottom: 30px;
}

.header-img {
    width: 85vw;
    height: 400px;
}

.header-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.context {
    margin-top: 50px;
    margin-bottom: 50px;
}

.context p {
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: justify;
    padding: 0px 20px;
}

.context p a {
    color: var(--light-purple);
}

.business-units h2 {
    color: var(--dull-black);
    font-family: Oswald;
    font-size: 23px;
    font-weight: normal;
    text-align: center;
}

.units {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.unit {
    width: 300px;
    height: 200px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    filter: grayscale(0.6);
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: 0.5s all ease;
    color: var(--light);
}

.unit:hover {
    filter: grayscale(0);
}

.unit h3 {
    font-size: 18px;
    text-transform: capitalize;
    background: #0000002c;
    padding: 10px;
}

.Hdev {
    background: url('/src/assets/hayche-development.png');
}

.HA {
    background: url('/src/assets/hayche-academy.png');
}

.HLife {
    background: url('/src/assets/hayche-lifestyle.png');
}

.HN {
    background: url('/src/assets/hayche-network.png');
}

.HD {
    background: url('/src/assets/hayche-digital.png');
}

.unit a {
    color: var(--light);
}

.our {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 100px;
    background: var(--light-purple);
}

.our-comp {
    /* border: 1px solid red; */
    background: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 400px;
    padding: 20px;
}

.our-comp p,
.our-comp h3 {
    text-align: center;
    color: var(--dull-black);
}

.our-comp h3 {
    font-family: Oswald;
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
}

.our-comp p {
    font-size: 18px;
    font-weight: 500;
}

.our-comp i {
    font-size: 40px;
    margin-bottom: 20px;
    color: var(--light-purple);
}

.anchor {
    margin-top: 50px;
    padding-bottom: 50px;
}


.anchor h2 {
    font-family: Oswald;
    font-size: 25px;
    font-weight: 400;
    color: var(--dull-black);
    text-align: center;

}

.anchors {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 50px;
}

.anchor-comp {
    text-align: center;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 1px 3px 1px 3px rgba(34, 34, 34, 0.1);
    transition: all 1s ease;
}



.anchor-comp:hover {
    border: 1px solid var(--light-purple);
    transition: all 1s ease;
}

.anchor-comp h3 {
    text-transform: capitalize;
    font-family: Oswald;
    font-size: 22px;
    font-weight: 400;
    color: var(--light-purple);
}

.anchor-comp i {
    font-size: 40px;
    margin-bottom: 20px;
    color: var(--light-purple);
}

button {
    background: inherit;
    padding: 10px 10px;
    border: none;
    cursor: pointer;
    border-bottom: 1px solid var(--dark-purple);
    margin-top: 20px;
    text-transform: capitalize;
    font-weight: 500;
}


@media only screen and (max-width: 800px) {
    .header-img {
        width: 90vw;
        height: 200px;
    }

    .header h2 {
        font-size: 25px;
    }

    .unit {
        width: 350px;
        height: 200px;
    }
}

@media only screen and (max-width: 500px) {
    .our {
        padding: 30px;
    }

    .header-img {
        width: 95vw;
        height: 200px;
    }

    .videoContainer {
        height: 300px;
    }
}
</style>