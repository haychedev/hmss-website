<template>
    <section class="container">
        <h2>meet the hayche team</h2>
        <div class="teams">

            <div class="team">
                <div class="team-img">
                    <img :src=aisha>
                </div>
                <h3>Aisha Yusuf</h3>
                <h4>Founder and CEO</h4>
                <p>Aisha Yusuf is the Group CEO of Hayche Multi-Service Solutions company and the
                    Founder of the of Hayche lifestyle Network, a network of lifestyle professionals.
                    She is a multi-industry, multi-disciplinary leader who has improved operations in
                    several organizations and businesses as a Strategic communications/PR specialist
                    as well as a hospitality consultant.</p>
            </div>

            <div class="team">
                <div class="team-img">
                    <img :src=celeste>
                </div>
                <h3>Cabur Celeste Castro </h3>
                <h4>Director, South Africa</h4>
                <p>Cabur is the HMSS director for South Africa; she is based in Maputo Mozambique.
                    She is fluent in English, and Portuguese</p>
            </div>

            <div class="team">
                <div class="team-img">
                    <!-- <img :src=celeste> -->
                </div>
                <h3>Lorna Enow </h3>
                <h4>Director, Central Africa</h4>
                <p>Lorna Enow is a dynamic individual who speaks fluent English and French. As the HMSS Director of Central
                    Africa, Lorna plays a pivotal role in developing digital products for francophone clients, overseeing
                    the entire software development lifecycle. She ensures the successful delivery of digital products,
                    meets client needs, and manages development teams with precision and expertise.</p>
            </div>

            <div class="team">
                <div class="team-img">
                    <img :src=latina>
                </div>
                <h3>Emily Igbo-Perez </h3>
                <h4>Coordinator, Central, and Latin
                    America</h4>
                <p>Emily Igbo-Perez is the HMSS Central America coordinator based in Guatemala.
                    She was born and raised in New York. She enjoys traveling the world and serving
                    others. She joined the HMSS team in 2020.


                </p>
            </div>
            <div class="team">
                <div class="team-img">
                    <img :src=sarah>
                </div>
                <h3>Sarah David </h3>
                <h4>Administrative Support</h4>
                <p>Sarah David is a vibrant and ambitious individual who is currently pursuing her
                    undergraduate studies while actively engaging in the realm of administrative support.
                    Sarah exemplifies the synergy between academic growth and practical experience.

                </p>
            </div>

            <div class="team">
                <div class="team-img">
                    <!-- <img :src=sarah> -->
                </div>
                <h3> Daniel Solomon Bloch </h3>
                <h4>Director, East Africa</h4>
                <p>Danny is the HMSS director for East Africa; he is based in Addis Ababa, Ethiopia
                    He is fluent in Amharic.

                </p>
            </div>

            <div class="team">
                <div class="team-img">
                    <img :src=igbo>
                </div>
                <h3>Andrew</h3>
                <!-- <h4>team role</h4> -->

                <p>Andrew brings many years of international experience to the organization. He is
                    responsible for operations, and for providing technical support to HMSS clients. He
                    oversees the development, and deployment of mobile data solutions. He developed,
                    and instructs <a href="/hayche-lifestyle#defence-section"><b>“Train Tough, Smart, Safe”
                            (TTSS),</b></a> a violence risk reduction program
                    that trains women and girls to avoid becoming victims of violence. </p>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: () => ({
        aisha: require('@/assets/aisha.png'),
        celeste: require('@/assets/celeste.png'),
        latina: require('@/assets/latina.png'),
        sarah: require('@/assets/sarah.png'),
        igbo: require('@/assets/igbo.png'),

    }),
}
</script>
<style scoped>
.container {
    padding-top: 100px;
    padding-bottom: 50px;
}

.container h2 {
    font-family: Oswald;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    text-transform: capitalize;
    color: var(--dull-black);
    margin-bottom: 50px;
}

.teams {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.team {
    width: 350px;
    height: 550px;
    box-shadow: 1px 3px 1px 3px rgba(34, 34, 34, 0.1);
    display: flex;
    flex-direction: column;
    padding: 10px;
    filter: grayscale(0.7);
    gap: 10px;
    transition: all 1s ease;
    padding-top: 20px;
}

.team:hover {
    filter: grayscale(0);
}

.team-img {
    width: 330px;
    height: 180px;
    transition: all 1s ease;
}

.team-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s ease;
    /* border-radius: 50%; */

}

.team p {
    font-size: 16px;

}

.team p a {
    text-decoration: underline;
}

.team:first-child {
    /* flex: 0 0 100%; */
}

/* .team:not(:first-child){
    flex: 1;
} */

.team h3 {
    font-family: Oswald;
    font-size: 30px;
    text-transform: capitalize;
    font-weight: 400;
    color: var(--dull-black);
    /* margin: 3px 0; */
}


.team h4 {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 500;
    color: var(--dull-black);
    padding-bottom: 10px;
    transition: all 1s ease;
    /* margin-bottom: 20px; */
}

.team:hover.team h4 {
    border-bottom: 1px solid var(--light-purple);
    transition: all 1s ease;

}



@media only screen and (max-width: 500px) {
    .team {
        /* justify-content: center; */
        height: 530px;
    }
}</style>