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
    <div class="row">
    <div class="row_posters" onscroll="getScrollVal()">
      <div class="wrap">
        <RouterLink class="router" to="/work/mobility">
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
        </RouterLink>
      </div>
      <div class="wrap">
        <RouterLink class="router" to="/work/calxurro">
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
      </div>
      <div class="wrap">
        <RouterLink class="router" to="/work/mansamigues">
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
      </div>
      <div class="wrap">
        <RouterLink class="router" to="/work/cerealbox">
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
      </div>
      <div class="wrap">
        <RouterLink class="router r5" to="/work/breathe">
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
      </div>
      <div class="wrap">
        <RouterLink class="router r6" to="/work/pantera">
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
      </div>
      <div class="left_arrow scroll_button arrow" @click="scrollL()">
        <i class="fa-solid fa-caret-left"></i>      </div>
      <div class="right_arrow scroll_button arrow" @click="scrollR()">
        <i class="fa-sharp fa-solid fa-caret-right"></i>
      </div>
    </div>
  </div>
    <FooterComp />
  </section>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'

function scrollL() {
  let x = document.getElementsByClassName("row_posters")[0];
  let step = window.outerWidth / 2;
  x.scrollLeft -= step;
}

function scrollR() {
  let x = document.getElementsByClassName("row_posters")[0];
  let step = window.outerWidth / 2;
  x.scrollLeft += step;
}

function getScrollVal() {
  setTimeout(() => {
    let x = document.getElementsByClassName("row_posters")[0];
    let el = document.getElementsByClassName("left_arrow")[0];
    if (x.scrollLeft == 0) {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
    let el2 = document.getElementsByClassName("right_arrow")[0];
    let right = x.scrollWidth - (x.scrollLeft + x.clientWidth) + 1;
    if (right <= 2) {
      el2.style.display = "none";
    } else {
      el2.style.display = "flex";
    }
  }, 550);
}
getScrollVal()


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

.row {
  margin-bottom: 80px;
}


.row_posters {
  display: flex;
  align-items: center;
  overflow-x: scroll;
  transition: 500ms;
  scroll-behavior: smooth;
  z-index: 1;
}

.row_posters::-webkit-scrollbar {
  display: none;
}

.row_poster {
  object-fit: contain;
  height: 100%;
}

.wrap {
  display: inline-block;
  position: relative;
  width: fit-content;
  margin: 0 20px;
  cursor: pointer;
  transition: height 500ms;
  border-radius: 30px;
}

.wrap img {
  border-radius: 30px;
}

.wrap img:hover {
  border-radius: 30px;
}

.poster_title {
  font-family: "Cinzel", serif;
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #f0f0f0;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 2000ms 1000ms;
}
.wrap:hover .poster_title {
  opacity: 0;
  transition: opacity 100ms;
}

.poster_info {
  position: absolute;
  left: 5px;
  bottom: 50px;
  font-weight: 300;
  font-size: 0.75rem;
  width: 250px;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 100ms;
}
.wrap:hover .poster_info {
  opacity: 1;
  transition: opacity 2000ms;
}
.poster_info p {
  padding-top: 5px;
}
.scroll_button {
  position: absolute;
  height: 30%;
  width: 43px;
  background-color: #e3dcdc85;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}
.right_arrow {
  right: 0px;
  opacity: 0;
  visibility: hidden;
  transition: all 500ms;
  z-index: 99;
}
.left_arrow {
  left: 0px;
  opacity: 0;
  visibility: hidden;
  transition: all 500ms;
  z-index: 99;
}
.row_posters:hover .right_arrow {
  opacity: 1;
  visibility: visible;
}
.row_posters:hover .left_arrow {
  opacity: 1;
  visibility: visible;
}
.space {
  min-width: 20px;
}
.arrow i {
  font-size: 30px;
  background-color: transparent;
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
  z-index: 2;
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

