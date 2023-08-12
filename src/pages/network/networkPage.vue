<template>
    <div class="container">
        <section class="header" v-motion :initial="{
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
            <h3>hayche network</h3>
        </section>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
.container{
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--dark-purple);
}
.header h3{
    font-size: 90px;
    color: var(--light);
    font-family: oswald;
    text-transform: capitalize;
    font-weight: 300;
}


@media only screen and (max-width: 500px){
    .header h3{
        font-size: 50px;
    }
}
</style>