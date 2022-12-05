<template>
  <div>
    <NavBar />
    <div class="cereal">
      <div class="main-img">
      </div>
      <div class="info">
        <div class="data">
          <p>Project: <span>Magic Cereal</span></p>
          <p>Client: <span>Pantera Studio</span></p>
          <p>Year: <span>2021</span></p>
        </div>
        <div class="text">
          <p>We wanted to create a collection of different cereals since its a product with many fun
          opportunities regarding design. The project revolves around three thieves obsessed with
          some kind of relic for each one and their quest to steal it.</p>
          <br><br>
          <p>Inspired by creatures from the forest, the mascots and the overall design keep a colorful and
          fun aesthetic since it is a product mainly for children. Each mascot and relic represents a
          different flavor cereal.</p>
          <br><br>
          <p>The project has included the creation of the narrative around the product, the character
          design, the packaging design and a short spot for social media.</p>
        </div>
      </div>
      <div class="video">
        <!-- <div class="playing">
          <button class="play-pause" @click="play()">
            <i v-if="playing === true" @click="playing = !playing;" class="fa-solid fa-pause play-pause"></i>
            <i v-else @click="playing = !playing;" class="fa-solid fa-play play-pause"></i>
          </button>
        </div>
        <div class="sound">
          <button class="mute-unmute">
            <i v-if="muted === true" @click="muted = !muted" class="fa-solid fa-volume-high"></i>
            <i v-else @click="muted = !muted" class="fa-solid fa-volume-xmark"></i>
          </button>
        </div> -->
        <video autoplay muted loop controls id="video" ref="video" :srcObject.prop="video">
          <source src="../assets/video/Cereal-AV.mp4">
        </video>
      </div>
      <div class="grid">
        <img class="g1" src="https://i.ibb.co/GQ7CXCj/Recurso-24.png" alt="golden">
        <img class="g2" src="https://i.ibb.co/cwhv3tn/Recurso-25.png" alt="rainbow">
        <img class="g3" src="https://i.ibb.co/cFtn76S/Recurso-23.png" alt="moon">
      </div>
      <div class="boxes">
        <img class="b1" src="https://i.ibb.co/4JBH3Nx/Recurso-48.png" alt="golden">
        <img class="b2" src="https://i.ibb.co/gFXQ1RY/Recurso-49.png" alt="rainbow">
        <img class="b3" src="https://i.ibb.co/CV8TrMx/Recurso-47.png" alt="moon">
      </div>
      <div class="arrows">
        <RouterLink to="/work/mansamigues" class="arrow"><i class="fa-sharp fa-solid fa-caret-left"></i><span>&nbsp; PREVIOUS</span></RouterLink>
        <RouterLink to="/work/breathe" class="arrow"><span>NEXT &nbsp; </span><i class="fa-sharp fa-solid fa-caret-right"></i></RouterLink>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'


// const playing = ref(true);
// const muted = ref(true);
// const video = document.querySelector('#video')


// const play = () => {
//   this.$refs.video.play()
//   playing.value = true
// }
    
// const pause = () => {
//   this.$refs.video.pause()
//   playing.value = false
// }
  


</script>

<style scoped>
.cereal {
    width: 86%;
    margin: 40px 7.3% 80px 7.3%;
  }

  .main-img {
    width: 100%;
    margin-bottom: 40px;
    border-radius: 30px;
    height: 800px;
    background-image: url('https://i.ibb.co/XW1Fjbd/Recurso-99.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative; 
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

  .video {
    margin-bottom: 40px;
    width: 31.5%;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .playing {
    width: 100%;
    height: 100%;
  }

  .sound {
    width: 100%;
    height: 100%;
  }

  .play-pause {
    position: absolute;
    z-index: 99;
    background-color: transparent;
    cursor: pointer;
    font-size: 25px;
    color: #0d0d0d;
    bottom: 15px;
    left: 10px;
    border: none;
  }
  
  .mute-unmute {
    position: absolute;
    z-index: 99;
    background-color: transparent;
    cursor: pointer;
    font-size: 25px;
    color: #0d0d0d;
    bottom: 27px;
    right: 15px;
    border: none;
  }

  .mute-unmute i {
    background-color: transparent;
    
  }

  #video {
    border-radius: 30px;
    width: 100%;
    clip-path: inset(1px 1px);
  }

  .grid {
    width: 100%;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: auto 40px auto 40px auto;
  }

  .grid img {
    width: 100%;
    border-radius: 30px;
  }

  .g1 {
    grid-column: 1/2;
  }

  .g2 {
    grid-column: 3/4;
  }

  .g3 {
    grid-column: 5/6;
  }

  .boxes {
    background-color: #3067f2;
    width: 100%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  .boxes img {
    background-color: transparent;
    width: 80%;
  }

  .b1 {
    margin: 80px 0;
  }

  .b3 {
    margin: 80px 0;
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
    background-position: 65%;
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
    .main-img {
      height: 900px;
      border-radius: 20px;
    }

    .info {
    margin-bottom: 40px;
  }


    .data p {
      font-size: 18px;
    }

    .text p {
      font-size: 18px;
    }

    .grid {
    grid-template-columns: auto 20px auto 20px auto;
    margin-bottom: 20px;
  }

  #video {
    border-radius: 20px;
  }

  .grid img {
    border-radius: 20px;
  }

  .boxes {
    border-radius: 20px;
  }


  .b1 {
    margin: 40px 0;
  }

  .b3 {
    margin: 40px 0;
  }
}



@media only screen and (max-width: 650px)  {
  .cereal {
    margin: 40px 7.3% 40px 7.3%;
  }

  .main-img {
    background-position: rigth;
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
}

@media only screen and (max-width: 500px) {
  
  .main-img {
    background-image: url('https://i.ibb.co/fDNj2Qj/cereal-mobile.png');
    background-position: center;
  }

}
</style>