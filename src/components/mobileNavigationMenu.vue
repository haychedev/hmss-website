<template>
    <div class="mobileMenu">
        <ul class="mobile-nav-links">
            <!-- <li><a href="/about" class="mobile-nav-link">about</a></li> -->
            <li  @click="active = !active" :aria-pressed="active ? 'true' : 'false'" class="mobile-nav-link">business units</li>
            <ul :class="{ big: active }"  class="biz-items">
                <a href="/hayche-projects"><li class="biz-item">hayche Dev</li></a>
               <a href="/hayche-academy"><li class="biz-item">hayche academy</li></a>
              
               <a href="/hayche-digital"><li class="biz-item">hayche digital</li></a>
               <a href="/hayche-lifestyle"><li class="biz-item">hayche lifestyle</li></a>
               <a href="https://hayche-website.pages.dev/" target="blank"><li class="biz-item">hayche network</li></a>
              
            </ul>
            <li><a href="/#reviews" class="mobile-nav-link">reviews</a></li>
            <li><a href="/contact" class="mobile-nav-link">contact</a></li>
            <li><a href="/blog" class="mobile-nav-link">blog</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    data: () => ({
       
        active: false
    }),
};
</script>

<style>
.biz-items{
    margin-top: 0;
    list-style-type: none;
    display: none;
    flex-direction: column;
    gap: 30px;
    margin-top: -20px;
    color: var(--light);
    
}
.biz-item{
    color: var(--light);
    font-size: 16px;
    text-transform: capitalize;
}
.big{
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* display: block;
    margin-top: -10px; */
}

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
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    padding-bottom: 20px;
}

.mobile-nav-link:hover{
    text-decoration: underline;
}
</style>