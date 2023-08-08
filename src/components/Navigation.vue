<template>
    <header class="desktop-nav" v-if="!mobileView">
        <div class="header-right">
            <div class="logo">
                <img class="logo-img" src="../assets/hayche-logo.png" alt="hayche logo">
            </div>
        </div>
        <div class="header-left">
            <ul class="nav-links">
                <li class="nav-link"><a href="">About</a></li>
                <li class="nav-link"><a href="">Services</a></li>
                <li class="nav-link"><a href="">Reviews</a></li>
                <li class="nav-link"><a href="">Contact</a></li>
                <li class="nav-link"><a href="">Blog</a></li>
            </ul>
        </div>
    </header>
    <MobileNavigationMenu :class="{ 'open': showNav }" />
    <div class="mobile-nav" v-if="mobileView" @click="showNav = !showNav">
        <div class="mobile-nav-logo" @click="showNav = !showNav">
            <img class="logo-img" src="../assets/hayche-logo.png" alt="hayche logo">
        </div>
        <div id="nav-icon" class="nav-icon">
            <i class="fas fa-bars"></i>
        </div>

    </div>
</template>

<script>

import MobileNavigationMenu from './mobileNavigationMenu.vue';

export default {
    name: "Navigation-Bar",
    //     data: () => {
    // return {
    //   mobileView: true,
    //   showNav: false
    // };
    data: () => ({
        mobileView: true,
        showNav: false,
    }),
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 990;
        }
    },
    components: { MobileNavigationMenu },
    created() {
        this.handleView();
        window.addEventListener('resize', this.handleView);
    },
    // components: { MobileNavigation,}
}
</script>

<style scoped>
.mobile-nav {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #111111a4;
    width: 100%;
    height: 80px;
    padding: 0 10px;
    z-index: 999;
    
}

#nav-icon {
    cursor: pointer;
}

#nav-icon i {
    font-size: 25px;
    color: var(--light);
}

.desktop-nav {
    display: flex;
    flex-direction: row;
    padding: 20px 100px;
    justify-content: space-between;
    align-items: center;
    background: #111111a4;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;

}

.logo-img {
    height: 55px;
}

.nav-links {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    gap: 78px;
}

.nav-link a {
    color: var(--light);
    transition: 0.5s all ease;
}

.nav-link a:hover {
    color: var(--light-purple);
    transition: 0.5s all ease;
}

.open {
    /* transform: translate(0px); */
    opacity: 100;
    z-index: 9999;
}
</style>