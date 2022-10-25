<template>
  <div>
    <NavBar />
    <div class="mans-amigues">
      <div class="main-img">
        <img src="https://i.ibb.co/W0Gsj2p/Recurso-26.png" alt="main">
      </div>
      <div class="info">
        <div class="data">
          <p>Project: <span>Brand Identity</span></p>
          <p>Client: <span>Mans Amigues</span></p>
          <p>Year: <span>2021</span></p>
        </div>
        <div class="text">
          <p>Mans amigues is an association by and for suicide survivors dedicated to helping those who
          have suffered a loss by suicide. Aware of the cause, we continue to provide our design
          services to Mans Amigues, helping them with the graphic image of the association in both
          digital and printed media. One of our most enriching projects that allows us to help the kind
          people from Mans Amigues to help other people in difficult times.</p>
          <br><br>
          <p>Inspired by the philosophy of the association, that wounds are part of oneself, we use the art
          of kintsugi as a metaphor in the logo as well as representing the lines in the friendly hands
          they offer. Together with a turquoise as their main color, we aimed for a clean and calming
          feel through their image.</p>
        </div>
      </div>
      <div class="extra-imgs">
        <div class="small"></div>
        <div class="big"></div>
      </div>
      <div class="extra-imgs">
        <div class="small-2"></div>
        <div class="big-2"></div>
      </div>
      <div class="triptic">
        <img src="https://i.ibb.co/48N8D1r/TRYFOLD.png" alt="triptic">
      </div>
      <div class="cards">
        <img src="https://i.ibb.co/pJcRw4R/CARD.png" alt="cards">
      </div>
      <div class="arrows">
        <RouterLink to="/work/calxurro" class="arrow"><i class="fa-sharp fa-solid fa-caret-left"></i><span>&nbsp; PREVIOUS</span></RouterLink>
        <RouterLink to="/work/cerealbox" class="arrow"><span>NEXT &nbsp; </span><i class="fa-sharp fa-solid fa-caret-right"></i></RouterLink>
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
.mans-amigues {
    width: 86%;
    margin: 40px 7.3% 80px 7.3%;
  }

  .main-img {
    width: 100%;
    margin-bottom: 80px;
    border-radius: 30px;
  }

  .main-img img {
    width: 100%;
    border-radius: 30px;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    cursor: default;
  }

  .data p {
    font-size: 30px;
    font-weight: 400;
    line-height: 120%;
  }

  .data span {
    font-weight: bold;
  }

  .text {
    width: 57%;
    color: #0d0d0d;
  }

  .text p {
    font-size: 30px;
    font-weight: 400;
    line-height: 120%;
  }

  .extra-imgs {
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: auto 40px auto auto;
    grid-template-rows: auto;
    margin-bottom: 40px;
  }

  .small {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 30px;
    background-image: url("https://i.ibb.co/Rp20yb7/POS.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .big {
    border-radius: 30px;
    grid-column: 3/5;
    grid-row: 1/2;
    background-image: url("https://i.ibb.co/BsL7WM1/Recurso-27.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .small-2 {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 30px;
    background-image: url("https://i.ibb.co/7vffhkC/NEG.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  

  .big-2 {
    border-radius: 30px;
    grid-column: 3/5;
    grid-row: 1/2;
    background-image: url("https://i.ibb.co/fCjR3h6/Recurso-28.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .triptic {
    width: 100%;
    margin-bottom: 40px;
    border-radius: 30px;
  }

  .triptic img {
    width: 100%;
    border-radius: 30px;
  }

  .cards {
    width: 100%;
    margin-bottom: 80px;
    border-radius: 30px;
  }

  .cards img {
    width: 100%;
    border-radius: 30px;
  }

  .arrows {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .arrow {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: #0d0d0d;
  }

  .arrow span:hover {
    color: #E61933;
  }
</style>