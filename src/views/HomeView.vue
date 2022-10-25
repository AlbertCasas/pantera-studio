<template>
  <section id="home">
    <NavBar />
    <div class="hero">
      <div class="main">
        <h1>WELCOME!</h1>
        <h1>WE HOPE YOU</h1>
        <h1>ENJOY YOUR STAY</h1>
      </div>
      <div class="secondary">
        <h2>DON'T HESITATE TO</h2>
        <h2>DROP A LINE</h2>
      </div>
      <div class="button">
        <RouterLink to="/contact"><button class="contact">CONTACT</button></RouterLink>
      </div>
    </div>
    <div class="work">
      <h1>WORK</h1>
    </div>
      <transition-group name="swipe" tag="div" class="transition-container" id="carousel">
        <img v-for="(picture) in pictures" :key="picture.src" :src="picture.src" alt="" class="image">
      <button class="previous" @click="previous"><i class="fa-sharp fa-solid fa-caret-left"></i></button>
      <button class="next" @click="next"><i class="fa-sharp fa-solid fa-caret-right"></i></button>
      </transition-group>
    <FooterComp />
  </section>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'

export default {
  name: 'HomeView',

  components: {
    NavBar,
    FooterComp
  },

  data() {
    return {
      pictures: [
        {
          src: 'https://i.ibb.co/5xCPn18/Recurso-83.png',
          name: 'picture1'
        },
        {
          src: 'https://i.ibb.co/T26ttdW/Recurso-79.png',
          name: 'picture2'
        },
        {
          src: 'https://i.ibb.co/y8J1nxj/Recurso-80.png',
          name: 'picture3'
        },
        {
          src: 'https://i.ibb.co/tsnvN9L/Recurso-81.png',
          name: 'picture4'
        },
        {
          src: 'https://i.ibb.co/Xj4JB7j/Recurso-59.png',
          name: 'picture5'
        },
        {
          src: 'https://i.ibb.co/Yh0cfVr/Recurso-82.png',
          name: 'picture6'
        }
      ]
    }
  },

}
</script>

<style scoped>
.hero {
  width: 86%;
  margin: 40px 7.3% 80px 7.3%;
  background-image: url('https://i.ibb.co/vqsk9Rv/Recurso-76.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  border-radius: 30px;
  animation: rotate 24s .5ms infinite;
  animation-timing-function:steps(1)
}

@keyframes rotate {
  0% {
    background-image: url('https://i.ibb.co/vqsk9Rv/Recurso-76.png');
  }


  16.6%{
    background-image: url('https://i.ibb.co/SyHrY3D/Recurso-71.png');
  }

  33.2% {
    background-image: url('https://i.ibb.co/qCCdqBb/Recurso-72.png');
  }

  49.8% {
    background-image: url('https://i.ibb.co/JswpY8p/Recurso-73.png');
  }

  66.4% {
    background-image: url('https://i.ibb.co/MM0Ch7j/Recurso-74.png');
  }

  83% {
    background-image: url('https://i.ibb.co/7KC8Tpk/Recurso-75.png');
  }

  100% {
    background-image: url('https://i.ibb.co/vqsk9Rv/Recurso-76.png');
  }
}

.main {
  background-color: transparent;
  margin-left: 40px;
}

h1 {
  background-color: transparent;
  font-size: 80px;
  font-weight: 900;
  line-height: 90%;
}

h2 {
  background-color: transparent;
  font-size: 50px;
  font-weight: bold;
  line-height: 90%;
}

.secondary {
  background-color: transparent;
  margin-left: 40px;
}

.button {
  background-color: transparent;
  margin-left: 40px;
}

.contact {
  height: 60px;
  width: 240px;
  text-align: center;
  border: none;
  background-color: #0d0d0d;
  color: white;
  font-size: 20px;
  font-weight: 900;
  border-radius: 15px;
}

.contact:hover {
  cursor: pointer;
  background-color: #E61933;
}

.work {
  margin: 0 7.3% 40px 7.3%;
}


.transition-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 80px;
}

/*
  Pointer events none, will prevent the draggind of an image, when you want to swipe.
*/

.image {
  z-index: 10;
  margin-left: 40px;
  border-radius: 30px;
}

.image:first-child {
  z-index: 5;
}

.image:last-child {
  z-index: 5;
}

.previous {
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 15;
  font-size: 50px;
  font-weight: bold;
  color: #0d0d0d;
  background-color: transparent;
  border: none;
}

.previous i {
  background-color: transparent;
}

.next {
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 15;
  font-size: 50px;
  font-weight: bold;
  color: #0d0d0d;
  background-color: transparent;
  border: none;
}

.next i {
  background-color: transparent;
}
</style>

