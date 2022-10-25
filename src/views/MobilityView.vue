<template>
  <div>
    <NavBar />
    <div class="mobility">
      <div class="main-img">
        <img src="https://i.ibb.co/FmYC9Lc/Recurso-85.png" alt="main">
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
          <br><br>
          <p>With this premise we are commissioned to create a map of Masnou that provides information
              on the distances and time required between the main locations of the town on foot.</p>
          <br><br>
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
        <div class="small"></div>
        <div class="big"></div>
      </div>
      <div class="arrows">
        <RouterLink to="/work/pantera" class="arrow"><i class="fa-sharp fa-solid fa-caret-left"></i><span>&nbsp; PREVIOUS</span></RouterLink>
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

  .map {
    width: 100%;
    border-radius: 30px;
  }

  .map img {
    width: 100%;
    border-radius: 30px;
    margin-bottom: 40px;
  }

  .extra-imgs {
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: auto 40px auto auto;
    grid-template-rows: auto;
    margin-bottom: 80px;
  }

  .small {
    grid-column: 1/2;
    grid-row: 1/2;
    border-radius: 30px;
    background-image: url("https://i.ibb.co/GvzjWXf/Recurso-4.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  

  .big {
    border-radius: 30px;
    grid-column: 3/5;
    grid-row: 1/2;
    background-image: url("https://i.ibb.co/7pjTx1t/IMG-20220918-WA0007.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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