<template>
    <div class="mobileMenu">
        <ul class="mobile-nav-links">
            <li><a href="" class="mobile-nav-link">about</a></li>
            <li><a href="" class="mobile-nav-link">services</a></li>
            <li><a href="" class="mobile-nav-link">reviews</a></li>
            <li><a href="" class="mobile-nav-link">contact</a></li>
            <li><a href="" class="mobile-nav-link">blog</a></li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>

<style>
.mobileMenu{
    position: absolute;
    height: 100vh;
    background-color: var(--light-purple);
    width: 80%;
    opacity: 0;
    z-index: -100;
    transition: var(--transistion);
}

.mobile-nav-links{
    display: flex;
    flex-direction: column;
    gap: 30px;
   margin-left: 50px; 
    list-style-type: none;
    margin-top: 100px;

}

.mobile-nav-link{
    color: var(--light);
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    padding-bottom: 20px;
}

.mobile-nav-link:hover{
    text-decoration: underline;
}
</style>