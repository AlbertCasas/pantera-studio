<template>
  <div>
    <NavBar />
    <div class="cal-xurro">
      <div class="main-img">
        
      </div>
      <div class="info">
        <div class="data">
          <p>Project: <span>Brand Identity</span></p>
          <p>Client: <span>Cal Xurro</span></p>
          <p>Year: <span>2022</span></p>
        </div>
        <div class="text">
          <p>Cal Xurru is the dream of two friends, Denis and Aleix, a business whose main attraction is
          the sale of churros, a food with a long tradition in Catalonia. However, like its founders, Cal
          Xurru is many things: a churrería, a roaster, a coffee shop… A place to expirience and enjoy
          both with family and friends.</p>
          <br>
          <p>Our goal has been to create a flexible image that can be adapted to the different aspects of
          the brand without losing a fun and playful essence. Using traditional colours, we kept a
          modern brand capable to change with the times and with whatever new adventure they
          embark on.</p>
        </div>
      </div>
      <div class="img-grid">
        <img class="x1" src="https://i.ibb.co/ZcrrJnS/Recurso-44.png" alt="xurro">
        <img class="x2" src="https://i.ibb.co/bd0427Y/Recurso-45.png" alt="xurro">
        <img class="x3" src="https://i.ibb.co/ChxGh1M/Recurso-47.png" alt="xurro">
        <img class="x4" src="https://i.ibb.co/rMLthfk/Recurso-41.png" alt="xurro">
        <img class="x5" src="https://i.ibb.co/rpV1dvN/Recurso-49.png" alt="xurro">
        <img class="x6" src="https://i.ibb.co/SdfG6RX/Recurso-43.png" alt="xurro">
        <img class="x7" src="https://i.ibb.co/f9trRSz/Recurso-48.png" alt="xurro">
        <img class="x8" src="https://i.ibb.co/tp5XCK2/Recurso-42.png" alt="xurro">
        <img class="x9" src="https://i.ibb.co/W3WLq6H/Recurso-46.png" alt="xurro">
      </div>
      <div class="mosaic">
        <img src="https://i.ibb.co/MDmGLkQ/Recurso-40.png" alt="mosaic">
        <img src="https://i.ibb.co/vwBL78H/3-Coffee-Cup-Mockups-2.jpg" alt="cups">
        <img src="https://i.ibb.co/Wf5Xb3V/Paper-Bag-1.jpg" alt="bag">
        <img src="https://i.ibb.co/jHdygG6/07.jpg" alt="cards">
      </div>
      <div class="arrows">
        <RouterLink to="/work/mobility" class="arrow"><i class="fa-sharp fa-solid fa-caret-left"></i><span>&nbsp; PREVIOUS</span></RouterLink>
        <RouterLink to="/work/mansamigues" class="arrow"><span>NEXT &nbsp; </span><i class="fa-sharp fa-solid fa-caret-right"></i></RouterLink>
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
.cal-xurro {
    width: 86%;
    margin: 40px 7.3% 80px 7.3%;
  }

  .main-img {
    width: 100%;
    height: 800px;
    margin-bottom: 80px;
    border-radius: 30px;
    background-image: url('https://i.ibb.co/2Sr8WWw/Recurso-53.png');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover; 
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

  .img-grid {
    width: 100%;
    display: grid;
    grid-template-columns: auto 40px auto 40px auto;
    grid-template-rows: auto 40px auto 40px auto;
    margin-bottom: 40px;
  }

  .x1 {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 30px;
    width: 100%;
  }

  .x2 {
    grid-column: 3/4;
    grid-row: 1/2;
    border-radius: 30px;
    width: 100%;
  }
  
  .x3 {
    grid-column: 5/6;
    grid-row: 1/2;
    border-radius: 30px;
    width: 100%;
  }

  .x4 {
    grid-column: 1/2;
    grid-row: 3/4;
    border-radius: 30px;
    width: 100%;
  }

  .x5 {
    grid-column: 3/4;
    grid-row: 3/4;
    border-radius: 30px;
    width: 100%;
  }

  .x6 {
    grid-column: 5/6;
    grid-row: 3/4;
    border-radius: 30px;
    width: 100%;
  }

  .x7 {
    grid-column: 1/2;
    grid-row: 5/6;
    border-radius: 30px;
    width: 100%;
  }

  .x8 {
    grid-column: 3/4;
    grid-row: 5/6;
    border-radius: 30px;
    width: 100%;
  }

  .x9 {
    grid-column: 5/6;
    grid-row: 5/6;
    border-radius: 30px;
    width: 100%;
  }

  .mosaic {
    width: 100%;
    border-radius: 30px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .mosaic img {
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
    .cal-xurro {
      margin: 30px 7.3% 60px 7.3%;
    }

    .main-img {
      height: 850px;
      background-image: url('https://i.ibb.co/rxjbzDh/tablet-xurru.png');
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

    .img-grid {
    grid-template-columns: auto 30px auto 30px auto;
    grid-template-rows: auto 30px auto 30px auto;
    margin-bottom: 30px;
  }

  
  .mosaic {
    margin-bottom: 60px;
    gap: 30px;
  }

  

  }


  @media only screen and (max-width: 650px) {
    .cal-xurro {
      margin: 20px 7.3% 40px 7.3%;
    }

    .main-img {
      height: 500px;
      background-image: url('https://i.ibb.co/F58x9rV/mobile-mobile.png');
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

    .img-grid {
    grid-template-columns: auto 20px auto 20px auto;
    grid-template-rows: auto 20px auto 20px auto;
    margin-bottom: 20px;
  }

    .img-grid img {
    border-radius: 20px;
  }

  .mosaic {
    gap: 20px;
    margin-bottom: 40px;
  }

  .mosaic img{
    border-radius: 20px;
  }

  .arrow {
    font-size: 16px;
    }
}


  
</style>