<template>
  <div>
    <NavBar />
    <div class="mobility">
      <div class="main-img">
        
      </div>
      <div class="info">
        <div class="data">
          <p>Project: <span>Sustainable Mobility Map</span></p>
          <p>Client: <span>Ajuntament del Masnou</span></p>
          <p>Year: <span>2022</span></p>
        </div>
        <div class="text">
          <p>As part of the Masnou Educational Project, the City Council&#39;s objective was to promote
            different initiatives to Encourage citizens to travel in a sustainable way within the
            municipality. One of these initiatives was to provide tools that would allow this goal.</p>
          <br>
          <p>With this premise we are commissioned to create a map of Masnou that provides information
              on the distances and time required between the main locations of the town on foot.</p>
          <br>
          <p>Our work, in collaboration with ALB Ecosystem, has been to identify points of interest,
            calculate distances and times and generate the graphic image of the project, inspired by
            metro maps. This initiative is based on the principles of Agenda 2030 of the EU, which
            promotes and encourages mobility in cities by walking, avoiding public transport, reducing
            the risks of agglomerations and improving public health.</p>
        </div>
      </div>
      <div class="map">
        <img src="https://i.ibb.co/rp6wYpy/Recurso-6.png" alt="map">
      </div>
      <div class="extra-imgs">
        <div class="x1">
          <img src="https://i.ibb.co/GvzjWXf/Recurso-4.png" alt="Recurso-4" border="0">
        </div>
        <div class="x2">
          <img src="https://i.ibb.co/8bsY27K/06.jpg" alt="triptic">
        </div>
        <div class="x3">
          <img src="https://i.ibb.co/7pjTx1t/IMG-20220918-WA0007.jpg" alt="IMG-20220918-WA0007" border="0">
        </div>
      </div>
      <div class="arrows">
        <RouterLink to="/work/pointer" class="arrow"><i class="fa-sharp fa-solid fa-caret-left"></i><span>&nbsp; PREVIOUS</span></RouterLink>
        <RouterLink to="/work/calxurro" class="arrow"><span>NEXT &nbsp; </span><i class="fa-sharp fa-solid fa-caret-right"></i></RouterLink>
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
  .mobility {
    width: 86%;
    margin: 40px 7.3% 80px 7.3%;
  }

  .main-img {
    width: 100%;
    height: 800px;
    margin-bottom: 80px;
    border-radius: 30px;
    background-image: url('https://i.ibb.co/FmYC9Lc/Recurso-85.png');
    background-position: right;
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

  .map {
    width: 100%;
    border-radius: 30px;
    margin-bottom: 40px;
  }

  .map img {
    width: 100%;
    border-radius: 30px;
  }

  .extra-imgs {
    width: 100%;
    display: grid;
    grid-template-columns: auto 40px auto;
    grid-template-rows: auto 40px auto;
    margin-bottom: 80px;
  }

  .x1 {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 30px;
  }

  .x1 img{
    width: 100%;
    border-radius: 30px;
  }

  .x2 {
    grid-column: 3/4;
    grid-row: 1/2;
    border-radius: 30px;
  }

  .x2 img{
    width: 100%;
    border-radius: 30px;
  }
  

  .x3 {
    border-radius: 30px;
    grid-column: 1/4;
    grid-row: 3/4;
    
  }

  .x3 img {
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

    .extra-imgs {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: auto 40px auto;
    grid-template-rows: auto 40px auto;
    
  }

  .small {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 30px;
    height: auto;
  }

  .small img{
    width: 100%;
    height: auto;
    border-radius: 30px;
  }
  

  .big {
    border-radius: 30px;
    grid-column: 1/2;
    grid-row: 3/4;
    height: auto;
  }

  .big img {
    width: 100%;
    height: auto;
    border-radius: 30px;
  }
  }

  @media only screen and (max-width: 850px) {
    .mobility {
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

    .map {
      margin-bottom: 30px;
    }


    .extra-imgs {
    grid-template-columns: auto 30px auto;
    grid-template-rows: auto 30px auto;
    margin-bottom: 60px;
  }

  }

  @media only screen and (max-width: 650px) {
    .mobility {
    margin: 20px 7.3% 40px 7.3%;
  }

    .main-img {
      height: 500px;
      background-image: url('https://i.ibb.co/T4wjxHW/Recurso-97.png');
      background-position: center;
      margin-bottom: 40px;
      border-radius: 20px;
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

    .map {
      margin-bottom: 20px;
    }

    .map img {
      border-radius: 20px;
    }

    .extra-imgs {
    grid-template-columns: auto 20px auto;
    grid-template-rows: auto 20px auto;
    margin-bottom: 40px;
  }

  .x1 img{
    border-radius: 20px;
  }

  .x2 img{
    border-radius: 20px;
  }

  .x3 img {
    border-radius: 20px;
  }

    .arrow {
    font-size: 16px;
    }

  }


</style>