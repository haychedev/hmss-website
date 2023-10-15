<template>
    <section>
        <div class="container">
            <div class="blogPost">
                <div class="blogImg">
                    <img :src=capeVerde>
                </div>
                <div class="blogTitle">
                    <p>A Visit to the Beautiful Exotic Cape Verde</p>
                    <a href="/visit-to-carpe-verde">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogImg">
                    <img :src=dakar>
                </div>
                <div class="blogTitle">
                    <p>A Quick Tour of Dakar</p>
                    <a href="/A-Quick-Tour-of-Dakar">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogImg">
                    <img :src=nigeria>
                </div>
                <div class="blogTitle">
                    <p>Travelling from Nigeria? You’ll be surprised
                        how little it costs to visit these countries!</p>
                    <a href="/travelling-from-Nigeria">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogImg">
                    <img :src=travelsolo>
                </div>
                <div class="blogTitle">
                    <p>Is it better to travel solo?</p>
                    <a href="/is-it-better-to-travel-solo">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>


            <div class="blogPost">
                <div class="blogImg">
                    <img :src=ngozi>
                </div>
                <div class="blogTitle">
                    <p>Meet Lolo Ngozi Ngoka who is passionate
                        about promoting tourism in Nigeria</p>
                    <a href="/meet-Ngozi-Ngoka">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
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

.blogImg{
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