<template>
  <div>
    <NavBar />
    <div class="project-wrapper">
      <div class="project-header">
        <video
          class="video"
          autoplay
          muted
          loop
          id="video"
          ref="video"
          :srcObject.prop="video"
        >
          <source src="../assets/video/animation.mp4" />
        </video>
        <div class="main-text">
          <h1 class="main-title">BREATHE</h1>
          <p class="project-text">
            The warmth of the sun in the morning, the calm facing the sea, the
            feeling of breathing and connecting with oneself and the
            environment. Breathe is Paola's personal brand, yoga teacher
            offering a refuge where you can practice yoga, meet people and get
            to know your body in spaces connected with nature.
          </p>
          <p class="project-text">
            The image designed for Breathe has as its protagonist the sun and
            the spaces it illuminates, maintaining a clean and minimalist
            aesthetic where the important thing is the sensations experienced
            and the connection between the mind, the body and the environment.
          </p>
        </div>
      </div>
      <div class="img-grid">
        <img src="../assets/imgs/BREATHE/breathe-1.png" alt="breathe" />
        <img src="../assets/imgs/BREATHE/breathe-2.png" alt="breathe" />
        <img src="../assets/imgs/BREATHE/breathe-3.png" alt="breathe" />
        <img src="../assets/imgs/BREATHE/breathe-4.jpg" alt="breathe" />
      </div>
      <img v-if="!isMobile" src="../assets/imgs/BREATHE/breathe-5.jpg" alt="breathe" />
      <img v-if="isMobile" src="../assets/imgs/BREATHE/breathe-6.jpg" alt="breathe" />
    </div>
    <MovingArrows
      :left-path="'/magiccereal'"
      :goUpId="'breathe'"
      :right-path="'/pantera'"
    />
    <FooterComp id="footer" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
import MovingArrows from "../components/MovingArrows.vue";

export default {
  name: "BreatheView",
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
.video {
  width: 45%;
}

.img-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.img-grid img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 750px) {
  .video {
    width: 100%;
  }

  .img-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .img-small-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>