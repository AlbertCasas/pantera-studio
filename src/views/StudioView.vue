<template>
  <div>
    <NavBar />
    <div class="studio">
      <div class="text">
        <p>We are a design studio in the business of solving problems. Through graphic design and communication we create better design to improve ourselves, the brands we work with and, ultimately, our world.</p>
        <br><br>
        <p>We strive to help people to develop their business through the mighty power of creativity and strategy to accomplish their goals and dreams, to create the place where they want to be. </p>
        <br><br>
        <p>In order to achieve it, we work closely with our clients, building strong relationships for a better understanding of their problems and to find the solution that adapts to them since every person and business has different needs. </p>
        <br><br>
        <p>We are lucky to work on what we love and for that we are passionate about what we do and seek to improve and grow every day. We believe that design and images are a universal language and we use them to communicate our ideas.</p>
        
      </div>
      
    </div>
    <FooterComp />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'
</script>

<style scoped>
.studio {
  width: 86%;
  margin: 40px 7.3% 80px 7.3%;
}

.text {
  width: 55%;
  cursor: default;
}

.text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
}

@media only screen and (max-width: 900px) {
  .text p {
    font-size: 18px;
  }
}

@media only screen and (max-width: 750px) {
  .studio {
    margin: 40px 7.3% 40px 7.3%;
  }

  .text {
    width: 100%;
  }
}
</style>