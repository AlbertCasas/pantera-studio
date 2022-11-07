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
    <div class="carousel">
      <swiper
        :slidesPerView="1.5"
        :modules="modules"
        :breakpoints="swiperOptions.breakpoints"
        class="mySwiper"
      >
        <swiper-slide class="s1"><RouterLink class="router mr" to="/work/mobility">
        <img class="router-img" src="https://i.ibb.co/5xCPn18/Recurso-83.png" alt="mobility-map">
        <div class="overlay">
          <div class="marquee">
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
            <h1>SUSTAINABLE MOBILITY MAP -</h1>
          </div>
        </div>
      </RouterLink></swiper-slide>
        <swiper-slide class="s2">
          <RouterLink class="router mr" to="/work/calxurro">
            <img class="router-img" src="https://i.ibb.co/T26ttdW/Recurso-79.png" alt="cal-xurro">
            <div class="overlay">
              <div class="marquee">
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
                <h1>CAL XURRU -</h1>
              </div>
            </div>
          </RouterLink>
        </swiper-slide>
        <swiper-slide class="s2">
          <RouterLink class="router mr" to="/work/mansamigues">
        <img class="router-img" src="https://i.ibb.co/y8J1nxj/Recurso-80.png" alt="mans-amigues">
        <div class="overlay">
          <div class="marquee">
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
            <h1>MANS AMIGUES -</h1>
          </div>
        </div>
      </RouterLink>
        </swiper-slide>
        <swiper-slide class="s2">
          <RouterLink class="router mr" to="/work/cerealbox">
        <img class="router-img" src="https://i.ibb.co/tsnvN9L/Recurso-81.png" alt="cereal-box">
        <div class="overlay">
          <div class="marquee">
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
            <h1>MAGIC CEREAL -</h1>
          </div>
        </div>
      </RouterLink>
        </swiper-slide>
        <swiper-slide class="s2">
          <RouterLink class="router mr" to="/work/breathe">
        <img class="router-img" src="https://i.ibb.co/Xj4JB7j/Recurso-59.png" alt="breathe">
        <div class="overlay">
          <div class="marquee">
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
            <h1>BREATHE -</h1>
          </div> 
        </div>
      </RouterLink>
        </swiper-slide>
        <swiper-slide>
          <RouterLink class="router " to="/work/pantera">
        <img class="router-img" src="https://i.ibb.co/Yh0cfVr/Recurso-82.png" alt="pantera-studio">
        <div class="overlay">
          <div class="marquee">
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
            <h1>PANTERA TYPEFACE -</h1>
          </div>
        </div>
      </RouterLink>
        </swiper-slide>
      </swiper>
    </div>
    
    <FooterComp />
  </section>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import "swiper/css";
import "swiper/css/pagination";

const swiperOptions = {
  breakpoints: {
    

    800: {
      slidesPerView: 2.5
    },

    1300: {
      slidesPerView: 3.5
    }

    
  }
}


</script>

<style lang="scss" scoped>

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

.carousel {
  background: #eee;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  position: relative;
  margin: 0 7.3% 80px 7.3%;
  z-index: 50;
}

.swiper {
  width: 100%;
  height: 100%;
  
}

.swiper-slide {
  height: 100%;
  
}

.router {
  height: 100%;
  position: relative;
  /* Center slide text vertically */
  display: flex;
  align-items: center;
  margin-right: 40px;
}


.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.overlay {
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 30px;
  position: absolute;
  top: 0;
  opacity: 0;
  overflow: hidden;
  width: 100%;
}

.overlay:hover {
  opacity: 1;
}

.marquee {
  animation: marquee 6s linear infinite;
  background-color: transparent;
  justify-content: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}

.marquee h1 {
  display: inline-block;
  color: white;
  font-size: 60px;
  font-weight: 900;
  background-color: transparent;
  white-space: nowrap;
  padding-left: 1rem;
}

.first {
  animation: firstslide 80s linear infinite;
}

@keyframes marquee {
  

  100% {
    -webkit-transform: translateX(-500%);
    transform: translateX(-500%);
  }
}


</style>

