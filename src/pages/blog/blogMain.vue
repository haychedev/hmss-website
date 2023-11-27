<template>
    <section class="container">
        <!-- <h2 class="heading">blog posts</h2> -->
        <div class="blogContainer">
            <div class="blogPost">
                <h2>tourism</h2>
                <div class="blogContents">
                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=capeVerde>
                        </div>
                        <p><a href="/visit-to-carpe-verde">A Visit to the Beautiful Exotic Cape Verde</a></p>
                    </div>

                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=dakar>
                        </div>
                        <p><a href="/A-Quick-Tour-of-Dakar">A Quick Tour of Dakar</a></p>
                    </div>

                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=nigeria>
                        </div>
                        <p><a href="/travelling-from-Nigeria">Travelling from Nigeria? You’ll be surprised how little it
                                costs to visit these
                                countries!</a></p>
                    </div>

                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=travelsolo>
                        </div>
                        <p><a href="/is-it-better-to-travel-solo">Is it better to travel solo?</a></p>
                    </div>
                </div>

                <div class="blogContent">
                    <div class="blogContent-img">
                        <img :src=ngozi>
                    </div>
                    <p class="ngText"><a href="/meet-Ngozi-Ngoka">Meet Lolo Ngozi Ngoka who is passionate
                            <br> about promoting tourism in Nigeria</a></p>
                </div>
            </div>

            <!-- hotel -->

            <div class="blogPost">
                <h2>hotel</h2>
                <div class="blogContents">
                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=manager>
                        </div>
                        <p><a href="/5-Professional-Skills-a-hospitality-manager-must-possess">5 Professional Skills a
                                hospitality manager must possess</a></p>
                    </div>

                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=customerService>
                        </div>
                        <p><a href="/Are-you-in-customer-service-This-is-for-you">Are you in customer service? This is for
                                you!</a></p>
                    </div>

                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=customerRight>
                        </div>
                        <p><a href="/Is-the-customer-really-always-right">Is the customer really always right?</a></p>
                    </div>

                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=customerService2>
                        </div>
                        <p><a href="/Customer-service-is-all-about-the-customer">Customer service is all about the
                                customer</a></p>
                    </div>

                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=phoneEtiquette>
                        </div>
                        <p><a href="/Are-you-using-the-right-phone-etiquette-for-your-business-image">Are you using the
                                right phone etiquette for your business image?</a></p>
                    </div>

                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=hospitalityCareer>
                        </div>
                        <p><a href="/Are-You-Ready-To-Start-An-Exciting-Career-In-Hospitality">Are You Ready To Start An
                                Exciting Career In Hospitality?</a></p>
                    </div>
                </div>
            </div>



            <!-- food -->
            <div class="blogPost">
                <h2>food</h2>
                <div class="blogContents">
                    <div class="blogContent">
                        <div class="blogContent-img">
                            <img :src=chefBlack>
                        </div>
                        <p><a href="/Meet-Chef-Black">Meet Chef Black, the Nigerian Chef keen
                                <br> on Changing the Global Perception of
                                <br> Nigerian Food</a></p>
                    </div>

                </div>


            </div>

        </div>




    </section>
</template>
<script>
export default {
    data: () => ({
        capeVerde: require('@/assets/capeVerde.jpg'),
        dakar: require('@/assets/dakar.jpg'),
        nigeria: require('@/assets/nigeria.jpg'),
        travelsolo: require('@/assets/travel-solo.jpg'),
        ngozi: require('@/assets/ngozi.jpg'),

        manager: require('@/assets/manager.jpg'),
        customerRight: require('@/assets/customer-right.jpg'),
        customerService: require('@/assets/customer-service.jpg'),
        customerService2: require('@/assets/customer-service-2.jpg'),
        phoneEtiquette: require('@/assets/phoneEtiquette.jpg'),
        hospitalityCareer: require('@/assets/hospitalityCareer.jpg'),

        chefBlack: require('@/assets/chefBlack.jpg'),

    }),


}
</script>
<style scoped>
.container {
    padding-top: 150px;
    padding-bottom: 50px;
}

.blogContent-img {
    width: 230px;
    height: 150px;
    margin-bottom: 10px;
}

.blogContent-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}



.blogContent p {
    width: 80%;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
}



.blogContent p:hover {
    text-decoration: underline;
    transition: all 0.5s ease;
}

.blogContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    flex-direction: row;
    width: 100%;
    justify-content: center;

}

.blogPost {
    width: 500px;
    /* border: 1px solid pink; */
}

.blogContents {
    display: flex;
    flex-direction: row;
    gap: 5px;
    /* border: 1px solid red; */
    width: 100%;
    flex-wrap: wrap;
}


.blogContent {
    flex: 1;
    /* border: 1px solid yellow; */

}

.blogPost h2 {
    font-family: Oswald;
    font-size: 20px;
    margin-bottom: 15px;
    text-transform: capitalize;
    font-weight: 400;
    border-bottom: 1px solid;
    border-color: var(--dark-purple);
    padding-bottom: 10px;
    width: 10%;
}

@media only screen and (max-width: 1219px) {
    .blogPost {
        width: 100%;
    }

    .blogContent {
        width: 45%;
    }
}

@media only screen and (max-width: 500px) {
    .blogContent-img {
        width: 200px;
    }
}

@media only screen and (max-width: 430px) {
    .blogContents {
        flex-direction: column;
    }

    .blogContent {
        width: 100%;
    }

    .blogContent-img {
        width: 100%;
    }
}</style>