<template>
  <div>
    <NavBar />
    <div class="pantera">
      <div class="main-img">
      </div>
      <div class="info">
        <div class="data">
          <p>Project: <span>Pantera Typeface</span></p>
          <p>Client: <span>Pantera Studio</span></p>
          <p>Year: <span>2021-2022</span></p>
        </div>
        <div class="text">
          <p>For the design of our logo we developed a typeface inspired by the didonas, characterized
          by great contrast and serifs. The result has been an elegant uppercase typeface ideal for
          displays.</p>
        </div>
      </div>
        <div class="secondary-img">
        <img src="https://i.ibb.co/bzJdkYR/Recurso-50.png" alt="main">
      </div>
      <div class="arrows">
        <RouterLink to="/work/breathe" class="arrow"><i class="fa-sharp fa-solid fa-caret-left"></i><span>&nbsp; PREVIOUS</span></RouterLink>
        <RouterLink to="/work/pointer" class="arrow"><span>NEXT &nbsp; </span><i class="fa-sharp fa-solid fa-caret-right"></i></RouterLink>
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
.pantera {
    width: 86%;
    margin: 40px 7.3% 80px 7.3%;
  }

  .main-img {
    width: 100%;
    margin-bottom: 40px;
    border-radius: 30px;
    height: 800px;
    background-image: url('https://i.ibb.co/94nK9RC/Recurso-52.png');
    background-position: center;
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

  .secondary-img {
    width: 100%;
    margin-bottom: 80px;
    border-radius: 30px;
  }

  .secondary-img img {
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
    .pantera {
      margin: 30px 7.3% 60px 7.3%;
    }

    .main-img {
      height: 800px;
      background-image: url('https://i.ibb.co/rxPPCXm/tablet-pantera.png');
      margin-bottom: 30px;
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

    .secondary-img {
      margin-bottom: 60px;
    }

    
  }

  @media only screen and (max-width: 650px) {
    .pantera {
    margin: 20px 7.3% 40px 7.3%;
  }

  .main-img {
    height: 500px;
    margin-bottom: 20px;
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

    .secondary-img {
      margin-bottom: 40px;
    }

    .secondary-img img {
      border-radius: 20px;
    }

    .arrow {
    font-size: 16px;
    }

  }

</style>