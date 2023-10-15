<template>
    <section>
        <div class="container">
            <div class="blogPost">
                <div class="blogImg">
                    <img :src=chefBlack>
                </div>
                <div class="blogTitle">
                    <p>Meet Chef Black, the Nigerian Chef keen
                        on Changing the Global Perception of
                        Nigerian Food</p>
                    <a href="/Meet-Chef-Black">read here <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>


        </div>
    </section>
</template>

<script>

export default {
    data: () => ({
        chefBlack: require('@/assets/chefBlack.jpg'),
        
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