<template>
    <section>
        <div class="footer-container">
            <div class="footer-left">
                <div class="footer-logo">
                    <img :src=logo>
                </div>
                <div class="footer-text">
                    <p>
                        We inspire people-driven
                        solutions.
                    </p>
                </div>
                <div class="footer-socials">
                    <a href=""><img :src=instagram></a>
                    <a href=""><img :src=whatsapp></a>
                    <a href=""><img :src=facebook></a>
                </div>
            </div>
            <div class="footer-right">
                <div class="footer-section">

                    <h3>company</h3>
                    <ul class="footer-links">
                        <li><a href="" class="footer-link">about us</a></li>
                        <li><a href="" class="footer-link">team</a></li>
                        <li><a href="" class="footer-link">blog</a></li>
                    </ul>

                </div>
                <div class="footer-section">

                    <h3>support</h3>
                    <ul class="footer-links">
                        <li><a href="" class="footer-link">contact us</a></li>
                        <li><a href="" class="footer-link">email</a></li>
                        <li><a href="" class="footer-link">speak with support</a></li>
                    </ul>

                </div>
                <div class="footer-section">

                    <h3>legal</h3>
                    <ul class="footer-links">
                        <li><a href="" class="footer-link">privacy policy</a></li>
                        <li><a href="" class="footer-link">terms of service</a></li>
                        
                    </ul>

                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2023 hayche multi service solutions(HMSS)</p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'footer-section',
    data: () => ({
        logo: require('@/assets/hayche-logo.png'),
        instagram: require('@/assets/Instagram.png'),
        whatsapp: require('@/assets/Whatsapp.png'),
        facebook: require('@/assets/Facebook.png'),
    })
}
</script>
<style scoped>
.footer-container {
    display: flex;
    flex-direction: row;


}

.footer-logo {
    height: 70px;
    width: 70px;
}

.footer-text {
    margin-bottom: 20px;
}

.footer-socials {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.footer-logo img {
    width: 100%;
}



.footer-right {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex: 1;
    flex-wrap: wrap;
}

.footer-section{
    width: 150px;
}

.footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-section h3{
    margin-bottom: 10px;
    color: var(--darker-black, #111);
font-family: Oswald;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
}

.footer-link{
    color: var(--dull-black, #333);
font-family: Quicksand;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
transition: all 0.5s ease;
}

.footer-link:hover{
    color: var(--light-purple);
    transition: all 0.5s ease;
}

section{
    margin-top: 100px;
    margin-bottom: 80px;
}

.copyright{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--light-purple);
    margin-top: 50px;
    padding: 30px;
    text-transform: capitalize;
}

/* media query for laptop screens */
@media only screen and (min-width: 1024px){}

/* media query for tablet screens */
@media only screen and (max-width: 990px){}

/* media query for phones */
@media only screen and (max-width: 768px){
    .footer-container{
        flex-direction: column;
        gap: 30px;
    }
    .footer-right{
        justify-content: space-between;
        gap: 30px;
    }
    .copyright{
    padding: 20px;
    text-align: center;
    
    
}
}

/* media query for smaller devices */
@media only screen and (max-width: 500px){}
</style>