<template>
    <section class="header">
        <h2>Hayche Multi Service Solutions (HMSS) is a consulting firm duly registered in Nigeria
        with RC 1530243.</h2>
        <div class="header-img">
            <img :src=img1>
        </div>
    </section>
    <section class="business-units">
        <h2> HMSS is comprised of the following business units:</h2>
        <div class="units">
            <div class="unit Hdev">
                <h3>HDev</h3>
                <a href="/hayche-projects">learn more</a>
            </div>
            <div class="unit HA">
                <h3>Hayche Academy</h3>
                <a href="/hayche-academy">learn more</a>
            </div>
            <div class="unit HLife">
                <h3>Hayche Lifestyle</h3>
                <a href="/hayche-lifestyle">learn more</a>
            </div>
            <div class="unit HN">
                <h3>Hayche Network</h3>
                <a href="https://hayche-website.pages.dev/" target="_blank">learn more</a>
            </div>
            <div class="unit HD">
                <h3>Hayche digital</h3>
                <a href="/hayche-digital">learn more</a>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    data: () => ({
        img1: require('@/assets/logo-mockup.png'),
        
    })

}

</script>
<style scoped>
    .header{
        padding-top: 150px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .header h2{
        font-family: Oswald;
        font-size: 30px;
        font-weight: 400;
        color: var(--dull-black);
        text-align: center;
        margin-bottom: 30px;
    }

    .header-img{
        width: 85vw;
        height: 400px;
    }

    .header-img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .business-units h2{
        color: var(--dull-black);
        font-family: Oswald;
        font-size: 23px;
        font-weight: normal;
        text-align: center;
    }

    .units{
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
.unit{
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

.unit:hover{
    filter: grayscale(0);
}

.unit h3{
    font-size: 18px;
    text-transform: capitalize;
    background: #0000002c;
    padding: 10px ;
}

.Hdev{
    background: url('/src/assets/hayche-development.png');
}

.HA{
    background: url('/src/assets/hayche-academy.png');
}

.HLife{
    background: url('/src/assets/hayche-lifestyle.png');
}

.HN{
    background: url('/src/assets/hayche-network.png');
}

.HD{
    background: url('/src/assets/hayche-digital.png');
}

.unit a{
    color: var(--light);
}


@media only screen and (max-width: 800px){
    .header-img{
        width: 85vw;
        height: 200px;
    }

    .header h2{
        font-size: 25px;
    }

    .unit{
    width: 350px;
    height: 200px;
    }
}
</style>