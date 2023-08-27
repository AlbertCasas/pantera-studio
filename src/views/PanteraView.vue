<template>
  <div>
    <NavBar />
    <div class="project-wrapper">
      <div class="project-header">
        <img
          class="main-img"
          src="../assets/imgs/TYPEFACE/pantera-1.png"
          alt="pantera"
        />
        <div class="main-text">
          <h1 class="main-title">PANTERA'S TYPEFACE</h1>
          <p class="project-text">
            For the design of our logo we developed a typeface inspired by the
            didonas, characterized by great contrast and serifs. The result has
            been an elegant uppercase typeface ideal for displays.
          </p>
        </div>
      </div>
      <img v-if="!isMobile" src="../assets/imgs/TYPEFACE/pantera-2.jpg" alt="pantera">
      <img v-if="isMobile" src="../assets/imgs/TYPEFACE/pantera-3.png" alt="pantera">
    </div>
    <MovingArrows
      :left-path="'/breathe'"
      :goUpId="'pantera'"
      :right-path="'/lepetitbuda'"
    />
    <FooterComp id="footer" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
import MovingArrows from "../components/MovingArrows.vue";

export default {
  name: "PanteraTypeface",
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