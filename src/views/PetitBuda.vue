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
          <source src="../assets/video/petit-buda.mp4" />
        </video>
        <div class="main-text">
          <h1 class="main-title">LE PETIT BUDA</h1>
          <p class="project-text">
            Dedicated to the creation of new clothes from discarded fabrics and
            materials, Le Petit Buda reworks, customizes and fixes used clothes
            to give them a new life, reducing waste and achieving sustainability
            through creativity.
          </p>
          <p class="project-text">
            We’ve bet on a bold and funky design in line with the company’s
            values, highlighting the craftsmanship and creativity of the
            manufacturing process.
          </p>
          <a
            class="pdf-link"
            href="/pdf/brand_guidelines_lpb.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHECK THE BRAND GUIDELINES
          </a>
        </div>
      </div>
      <img
        v-if="!isMobile"
        src="../assets/imgs/PETITBUDA/buda-1.jpg"
        alt="petit-buda"
      />
      <img
        v-if="!isMobile"
        src="../assets/imgs/PETITBUDA/buda-2.jpg"
        alt="petit-buda"
      />
      <img
        v-if="isMobile"
        src="../assets/imgs/PETITBUDA/buda-9.png"
        alt="petit-buda"
      />
      <img
        v-if="isMobile"
        src="../assets/imgs/PETITBUDA/buda-10.png"
        alt="petit-buda"
      />
      <img
        v-if="isMobile"
        src="../assets/imgs/PETITBUDA/buda-11.png"
        alt="petit-buda"
      />
      <img
        v-if="isMobile"
        src="../assets/imgs/PETITBUDA/buda-12.png"
        alt="petit-buda"
      />
      <img
        v-if="isMobile"
        src="../assets/imgs/PETITBUDA/buda-13.png"
        alt="petit-buda"
      />
      <img
        v-if="!isMobile"
        src="../assets/imgs/PETITBUDA/buda-3.jpg"
        alt="petit-buda"
      />
      <img
        v-if="isMobile"
        src="../assets/imgs/PETITBUDA/buda-16.png"
        alt="petit-buda"
      />
      <img
        v-if="!isMobile"
        src="../assets/imgs/PETITBUDA/buda-4.jpg"
        alt="petit-buda"
      />
      <img
        v-if="isMobile"
        src="../assets/imgs/PETITBUDA/buda-15.jpg"
        alt="petit-buda"
      />
      <img src="../assets/imgs/PETITBUDA/buda-5.jpg" alt="petit-buda" />
      <img
        v-if="!isMobile"
        src="../assets/imgs/PETITBUDA/buda-6.jpg"
        alt="petit-buda"
      />
      <img src="../assets/imgs/PETITBUDA/buda-7.jpg" alt="petit-buda" />
      <img src="../assets/imgs/PETITBUDA/buda-8.jpg" alt="petit-buda" />
    </div>
    <MovingArrows
      :left-path="'/pantera'"
      :goUpId="'lepetitbuda'"
      :right-path="'/pointer'"
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
.video {
  width: 45%;
}

@media only screen and (max-width: 750px) {
  .video {
    width: 100%;
  }
}
.pdf-link {
  display: block;
  margin-top: 16px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;

  color: inherit;
  text-decoration: none;
  &:hover {
  color: #e61933;
  }
}

.pdf-link:hover {
  text-decoration: none;
}
</style>
