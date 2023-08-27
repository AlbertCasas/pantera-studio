<template>
  <div>
    <NavBar />
    <div class="project-wrapper">
      <div class="project-header">
        <img
          class="main-img"
          src="../assets/imgs/MOBILITY/mobility-1.png"
          alt="mobility"
        />
        <div class="main-text">
          <h1 class="main-title">AJUNTAMENT DEL MASNOU</h1>
          <p class="project-text">
            As part of the Masnou Educational Project, one of the initiatives of
            the City Council is to provide tools to the citizens to travel in a
            sustainable way within the municipality.
          </p>
          <p class="project-text">
            With this premise we are commissioned to create a map of El Masnou
            that provides information on the distances and time required between
            the locations of interest on foot.
          </p>
          <p class="project-text">
            Teaming up with ALB Ecosystem, our job has been to identify points
            of interest, calculate distances and times and generate the graphic
            image of the project, inspired by metro maps.
          </p>
        </div>
      </div>
      <img v-if="!isMobile" src="../assets/imgs/MOBILITY/mobility-2.jpg" alt="mobility" />
      <img v-if="isMobile" src="../assets/imgs/MOBILITY/mobility-6.png" alt="mobility" />
      <img v-if="isMobile" src="../assets/imgs/MOBILITY/mobility-7.png" alt="mobility" />
      <img src="../assets/imgs/MOBILITY/mobility-3.jpg" alt="mobility" />
      <img src="../assets/imgs/MOBILITY/mobility-4.png" alt="mobility" />
      <img src="../assets/imgs/MOBILITY/mobility-5.png" alt="mobility" />
    </div>
    <MovingArrows
      :left-path="'/pointer'"
      :goUpId="'mobility'"
      :right-path="'/calxurru'"
    />
    <FooterComp id="footer" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
import MovingArrows from "../components/MovingArrows.vue";

export default {
  name: "MobilityView",
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
</style>