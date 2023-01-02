<template>
  <div>
    <NavBar />
    <div class="mans-amigues">
      <div class="main-img">
        
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
          <br>
          <p>Inspired by the philosophy of the association, that wounds are part of oneself, we use the art
          of kintsugi as a metaphor in the logo as well as representing the lines in the friendly hands
          they offer. Together with a turquoise as their main color, we aimed for a clean and calming
          feel through their image.</p>
        </div>
      </div>
      <div class="extra-imgs">
        <img class="x1" src="https://i.ibb.co/Rp20yb7/POS.png" alt="mans-amigues">
        <img class="x2" src="https://i.ibb.co/BsL7WM1/Recurso-27.png" alt="">
        <img class="x3" src="https://i.ibb.co/7vffhkC/NEG.png" alt="">
        <img class="x4" src="https://i.ibb.co/fCjR3h6/Recurso-28.png" alt="">
      </div>
      <div class="triptic">
        <img src="https://i.ibb.co/48N8D1r/TRYFOLD.png" alt="triptic">
      </div>
      <div class="cards">
        <img src="https://i.ibb.co/fvVbrhK/05.jpg" alt="cards">
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
    height: 800px;
    border-radius: 30px;
    background-image: url('https://i.ibb.co/z7f3g0S/Recurso-95-2x-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
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
    display: grid;
    grid-template-columns: auto 40px auto auto;
    grid-template-rows: auto 40px auto;
    margin-bottom: 40px;
  }

  .x1 {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 30px;
    width: 100%;
  }

  .x2 {
    grid-column: 3/5;
    grid-row: 1/2;
    border-radius: 30px;
    width: 100%;
  }

  .x3 {
    grid-column: 1/2;
    grid-row: 3/4;
    border-radius: 30px;
    width: 100%;
  }

  .x4 {
    grid-column: 3/5;
    grid-row: 3/4;
    border-radius: 30px;
    width: 100%;
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

@media only screen and (max-width: 1650px) {
  .main-img {
    height: 550px;
  }

  .data p {
      font-size: 20px;
    }


  .text p {
      font-size: 20px;
    }
}


  @media only screen and (max-width: 1300px) {
    .main-img {
      height: 500px;
    }

    .info {
      flex-direction: column;
      gap: 40px;
    }

    .text {
      width: 100%;
    }
  }

    

  @media only screen and (max-width: 850px) {
    .mans-amigues {
      margin: 30px 7.3% 60px 7.3%;
    }

    .main-img {
      height: 850px;
      margin-bottom: 60px;
    }

    .info {
    margin-bottom: 60px;
    justify-content: unset;
    gap: 30px;
  }

    .data p {
      font-size: 18px;
    }

    .text p {
      font-size: 18px;
    }

    .extra-imgs {
      grid-template-columns: auto 30px auto auto;
      grid-template-rows: auto 30px auto;
      margin-bottom: 30px;
  }


  .triptic {
    margin-bottom: 30px;
  }

  .cards {
    margin-bottom: 60px;
  }

}
  

  @media only screen and (max-width: 650px) {
    
    .mans-amigues {
      margin: 20px 7.3% 40px 7.3%;
    }

    .main-img {
      height: 500px;
      border-radius: 20px;
      margin-bottom: 40px;
    }

    .info {
      margin-bottom: 40px;
      gap: 20px;
    }

    .data p {
      font-size: 16px;
    }

    .text p {
      font-size: 16px;
    }

    .extra-imgs {
    grid-template-columns: auto 20px auto;
    grid-template-rows: auto 20px auto 20px auto;
    margin-bottom: 20px;
  }

  .x1 {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 20px;
    width: 100%;
  }

  .x2 {
    grid-column: 1/4;
    grid-row: 5/6;
    border-radius: 20px;
    width: 100%;
  }

  .x3 {
    grid-column: 3/4;
    grid-row: 1/2;
    border-radius: 20px;
    width: 100%;
  }

  .x4 {
    grid-column: 1/4;
    grid-row: 3/4;
    border-radius: 20px;
    width: 100%;
  }

  .triptic {
    margin-bottom: 20px;
  }

  .cards {
    margin-bottom: 40px;
  }



    .arrow {
    font-size: 16px;
    }
  }
  
</style>