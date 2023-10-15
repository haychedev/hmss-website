<template>
    <section>
        <div class="container">
            <div class="blogPost">
                <div class="blogImg">
                    <img :src=manager>
                </div>
                <div class="blogTitle">
                    <p>5 Professional Skills a hospitality manager
                        must possess</p>
                    <a href="/5-Professional-Skills-a-hospitality-manager-must-possess">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogImg">
                    <img :src=customerService>
                </div>
                <div class="blogTitle">
                    <p>Are you in customer service? This is for
                        you!</p>
                    <a href="/Are-you-in-customer-service-This-is-for-you">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogImg">
                    <img :src=customerRight>
                </div>
                <div class="blogTitle">
                    <p>Is the customer really always right?</p>
                    <a href="/Is-the-customer-really-always-right">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogImg">
                    <img :src=customerService2>
                </div>
                <div class="blogTitle">
                    <p>Customer service is all about the customer</p>
                    <a href="/Customer-service-is-all-about-the-customer">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>


            <div class="blogPost">
                <div class="blogImg">
                    <img :src=phoneEtiquette>
                </div>
                <div class="blogTitle">
                    <p>Are you using the right phone etiquette for
                        your business image?</p>
                    <a href="/Are-you-using-the-right-phone-etiquette-for-your-business-image">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogImg">
                    <img :src=hospitalityCareer>
                </div>
                <div class="blogTitle">
                    <p>Are You Ready To Start An Exciting Career
                        In Hospitality?</p>
                    <a href="/Are-You-Ready-To-Start-An-Exciting-Career-In-Hospitality">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data: () => ({
        manager: require('@/assets/manager.jpg'),
        customerRight: require('@/assets/customer-right.jpg'),
        customerService: require('@/assets/customer-service.jpg'),
        customerService2: require('@/assets/customer-service-2.jpg'),
        phoneEtiquette: require('@/assets/phoneEtiquette.jpg'),
        hospitalityCareer: require('@/assets/hospitalityCareer.jpg'),
    })
}

</script>
<style scoped>
.container {
    padding-top: 150px;
    padding-bottom: 100px;
    display: flex;
    gap: 70px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.blogPost {
    /* border: 1px solid red; */
    width: 400px;
    height: 450px;
}

.blogTitle p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
}

.blogImg {
    height: 300px;
    margin-bottom: 20px;
}

.blogImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blogTitle a {
    color: var(--light-purple);
    font-size: 18px;
    text-transform: capitalize;
    /* margin-top: 20px; */
    text-align: center;
}
</style>