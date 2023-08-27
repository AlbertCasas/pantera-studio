<template>
  <div>
    <NavBar />
    <div class="project-wrapper">
      <div class="project-header">
        <img
          class="main-img"
          src="../assets/imgs/CALXURRU/xurru-1.png"
          alt="xurru"
        />
        <div class="main-text">
          <h1 class="main-title">CAL XURRU</h1>
          <p class="project-text">
            Cal Xurru is the dream of two friends, Denis and Aleix, a business
            whose main attraction is the sale of churros, a food with a long
            tradition in Catalonia. However, like its founders, Cal Xurru is
            many things: a churrería, a roaster, a coffee shop, a bar… A place
            to experience and enjoy both with family and friends.
          </p>
          <p class="project-text">
            Our goal has been to create a modular visual system that can be
            adapted to the different aspects of the brand without losing its
            playful essence. Using traditional colors, we kept a modern brand
            capable of changing with the times and with whatever new adventure
            they embark on.
          </p>
        </div>
      </div>
      <div class="img-grid">
        <img src="../assets/imgs/CALXURRU/xurru-2.png" alt="xurru" />
        <img src="../assets/imgs/CALXURRU/xurru-3.png" alt="xurru" />
        <img src="../assets/imgs/CALXURRU/xurru-4.png" alt="xurru" />
        <img src="../assets/imgs/CALXURRU/xurru-5.png" alt="xurru" />
        <img src="../assets/imgs/CALXURRU/xurru-6.png" alt="xurru" />
        <img src="../assets/imgs/CALXURRU/xurru-7.png" alt="xurru" />
        <img src="../assets/imgs/CALXURRU/xurru-8.png" alt="xurru" />
        <img src="../assets/imgs/CALXURRU/xurru-9.png" alt="xurru" />
        <img src="../assets/imgs/CALXURRU/xurru-10.png" alt="xurru" />
      </div>
      <img src="../assets/imgs/CALXURRU/xurru-11.png" alt="xurru" />
      <img src="../assets/imgs/CALXURRU/xurru-12.png" alt="xurru" />
      <img src="../assets/imgs/CALXURRU/xurru-13.png" alt="xurru" />
      <img src="../assets/imgs/CALXURRU/xurru-14.png" alt="xurru" />
    </div>
    <MovingArrows
      :left-path="'/mobility'"
      :goUpId="'calxurru'"
      :right-path="'/mansamigues'"
    />
    <FooterComp id="footer" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
import MovingArrows from "../components/MovingArrows.vue";

export default {
  name: "PetitBuda",
  components: {
    NavBar,
    FooterComp,
    MovingArrows,
  },
  data() {
    return {
      isMobile: window.innerWidth < 750,
    };
  },
  mounted() {
    // Add event listener for window resize
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // Remove event listener when component is unmounted
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 750;
    },
  },
};
</script>

<style scoped>
.img-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.img-grid img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 750px) {
  .img-grid {
    gap: 8px;
  }
}
</style>