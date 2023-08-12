<template>
    <div class="container">
        <section>
            <h1>under development</h1>
        </section>
    </div>
</template>
<script>


export default{}
</script>


<style scoped>
.container{
    height: 100vh;
    background: var(--dark-purple);
    display: flex;
    align-items: center;
    justify-content: center;
}

h1{
    font-family: Oswald;
    font-weight: 300;
    font-size: 90px;
    text-transform: capitalize;
    color: var(--light);
}

@media only screen and (max-width: 500px){
    h1{
        font-size: 30px;
    }
}
</style>