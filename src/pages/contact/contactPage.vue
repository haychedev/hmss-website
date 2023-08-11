<template>
  <div class="container">
    <section class="header">
      <h3>contact us</h3>
    </section>
  </div>
  <section class="contactBoxes">
    <a href="tel:+2347033166217">
      <div class="contactBox">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <p>+234 0 (703) 316 6217</p>
      </div>
    </a>
    <a href="mailto:info@hayche.net">
      <div class="contactBox">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <p>info@hayche.net</p>
      </div>
    </a>
    <a href="">
      <div class="contactBox">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p>Abuja
          <br>plot 550 Cadestral, Zone 06 Mabushi District.
        </p>
      </div>
    </a>

  </section>
  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15759.138615254877!2d7.440996689820148!3d9.083372655680598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splot%20550%20Cadestral%2C%20Zone%2006%20Mabushi%20District!5e0!3m2!1sen!2sng!4v1691783308518!5m2!1sen!2sng"
      width="5000" height="450" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
  height: 50vh;
  background: url('/src/assets/contactBg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;


}

h3 {
  color: var(--light);
  font-family: oswald;
  font-size: 90px;
  font-weight: 300;
  text-transform: capitalize;
}

.contactBoxes {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 50px;
}

.contactBox {
  padding: 10px 10px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 300px;
  height: 200px;
}

.contactBox:hover {
  border: 1px solid var(--light-purple);
  transition: var(--transition);
}

.contactBox p {
  text-align: center;
}

i {
  font-size: 30px;
  color: var(--light-purple);
}

@media only screen and (max-width: 500px) {
  .header h3 {
    font-size: 50px;
  }

  .contactBoxes {
    gap: 30px;
  }

  .container {
    height: 30vh;
  }

  .contactBoxes {
    gap: 30px;
  }

  iframe{
    width: 100vw;
  }
}</style>