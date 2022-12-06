<template>
  <div>
    <NavBar />
    <div class="breathe">
      <div class="main-img">
      </div>
      <div class="info">
        <div class="data">
          <p>Project: <span>Brand Identity</span></p>
          <p>Client: <span>Breathe</span></p>
          <p>Year: <span>2021-2022</span></p>
        </div>
        <div class="text">
          <p>The warmth of the sun in the morning, the calm facing the sea, the feeling of breathing and
          connecting with oneself and the environment. Breathe is the result of all this and much more,
          a refuge where you can practice yoga, meet people and get to know your body in spaces
          connected with nature.</p>
          <br>
          <p>The image designed for Breathe has as its protagonist the sun and the spaces it illuminates,
          maintaining a clean and minimalist aesthetic where the important thing is the sensations
          experienced and the connection between the mind, the body and the environment.</p>
        </div>
      </div>
      <div class="flex">
        <img class="f1" src="https://i.ibb.co/NsGW8NR/Recurso-68.png" alt="breathe">
        <img class="f2" src="https://i.ibb.co/7rHjML5/Recurso-67.png" alt="breathe">
      </div>
      <div class="secondary-img">
      </div>
      <div class="arrows">
        <RouterLink to="/work/cerealbox" class="arrow"><i class="fa-sharp fa-solid fa-caret-left"></i><span>&nbsp; PREVIOUS</span></RouterLink>
        <RouterLink to="/work/pantera" class="arrow"><span>NEXT &nbsp; </span><i class="fa-sharp fa-solid fa-caret-right"></i></RouterLink>
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
.breathe {
    width: 86%;
    margin: 40px 7.3% 80px 7.3%;
  }

  .main-img {
    width: 100%;
    margin-bottom: 40px;
    border-radius: 30px;
    height: 800px;
    background-image: url('https://i.ibb.co/tLgs9cx/Recurso-131.png');
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

  .flex {
    width: 100%;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: auto 40px auto;
  }

  .f1 {
    grid-column: 1/2;
  }

  .f2 {
    grid-column: 3/4;
  }

  .flex img {
    width: 100%;
    border-radius: 30px;
  }


  .secondary-img {
    width: 100%;
    margin-bottom: 80px;
    border-radius: 30px;
    background-image: url('https://i.ibb.co/s537CGC/04.jpg');
    height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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

    .secondary-img {
      height: 550px;
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

    .secondary-img {
      height: 500px;
    }

  }

  @media only screen and (max-width: 850px) {
    .breathe {
      margin: 30px 7.3% 60px 7.3%;
    }

    .main-img {
      height: 800px;
      background-image: url('https://i.ibb.co/1RBPMpf/Recurso-129.png');
      background-position-y: 30%;
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

    .flex {
      grid-template-columns: auto 30px auto;
      margin-bottom: 30px;
    }

    .secondary-img {
      height: 450px;
      margin-bottom: 60px;
    }

    
  }

  @media only screen and (max-width: 650px) {
    .breathe {
    margin: 20px 7.3% 40px 7.3%;
  }

  .main-img {
    height: 500px;
    border-radius: 20px;
    margin-bottom: 20px;
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


    .arrow {
    font-size: 16px;
    }

    .flex {
      grid-template-columns: auto 20px auto;
      margin-bottom: 20px;
    }

    .flex img {
      border-radius: 20px;
    }

    .secondary-img {
      height: 230px;
      margin-bottom: 40px;
      border-radius: 20px;
    }

  }


</style>