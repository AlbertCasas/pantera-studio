<template>
  <section id="home">
    <NavBar />
    <div class="project-grid">
      <div class="img-grid">
        <div v-for="(image, index) in images" :key="index" class="image-container">
          <router-link :to="image.url"><img :src="image.img" alt="Image" class="zoomable-image" /></router-link>
          <div class="overlay"></div>
        </div>
      </div>
    </div>
    
    <FooterComp id="footer" />
  </section>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'
import lePetitBuda from '@/assets/imgs/HOME/lepetitbuda.png'
import pointer from '@/assets/imgs/HOME/pointer.png'
import ajuntamentMasnou from '@/assets/imgs/HOME/ajuntamentmasnou.png'
import calXurru from '@/assets/imgs/HOME/calxurru.png'
import mansAmigues from '@/assets/imgs/HOME/mans-amigues.jpg'
import magicCereal from '@/assets/imgs/HOME/magic-cereal.png'
import breath from '@/assets/imgs/HOME/breath2.png'
import pantera from '@/assets/imgs/HOME/pantera.png'


export default {
  components: {
    NavBar,
    FooterComp,
  },
  data () {
    return {
    images: [
      {img: lePetitBuda, url: "/lepetitbuda"},
      {img: pointer, url: "/pointer"},
      {img: ajuntamentMasnou, url: "/mobility"},
      {img: calXurru, url: "/calxurru"},
      {img: mansAmigues, url: "/mansamigues"},
      {img: magicCereal, url: "/magiccereal"},
      {img: breath, url: "/breathe"},
      {img: pantera, url: "/pantera" }
    ]
    }
  },
}
</script>

<style lang="scss" scoped>
.project-grid {
  margin: 32px 7.3%;
}

.img-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.zoomable-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.zoomable-image:hover {
  transform: scale(1.05);
  filter: brightness(70%);
}


@media only screen and (max-width: 750px) {
  .img-grid {
    grid-template-columns: 1fr;
  }
}

</style>

