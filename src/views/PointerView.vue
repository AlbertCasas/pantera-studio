<template>
  <div>
    <NavBar />
    <div class="project-wrapper">
      <div class="project-header">
        <video
          class="video"
          autoplay
          :muted="isMuted"
          loop
          id="video"
          ref="video"
          :srcObject.prop="video"
        >
          <source src="../assets/video/pointer.mp4" />
        </video>
          <button @click="toggleMute">{{ isMuted ? 'Unmute' : 'Mute' }}</button>
        <div class="main-text">
          <h1 class="main-title">POINTER CRAFT BEER</h1>
          <p class="project-text">
            Label design for the new collection of Pointer, using a retro image
            starring animal characters inspired by cartoons from the 1930s,
            creating a casual and fun design which is what the founders and the
            noble art of drinking beer are all about.
          </p>
          <p class="project-text">
            Using an aged black and white and the combination of Westmeath and
            Swiss 721 for the typefaces, we wanted to keep a classic and vintage
            feel that works with the aesthetic chosen for the characters
            designed.
          </p>
        </div>
      </div>
      <div class="img-grid">
        <img src="../assets/imgs/POINTER/pointer-1.png" alt="pointer" />
        <img src="../assets/imgs/POINTER/pointer-2.png" alt="pointer" />
        <img src="../assets/imgs/POINTER/pointer-3.png" alt="pointer" />
        <img src="../assets/imgs/POINTER/pointer-4.png" alt="pointer" />
        <img src="../assets/imgs/POINTER/pointer-5.png" alt="pointer" />
        <img src="../assets/imgs/POINTER/pointer-6.png" alt="pointer" />
      </div>
      <div class="img-small-grid">
        <img src="../assets/imgs/POINTER/pointer-7.png" alt="pointer" />
        <img src="../assets/imgs/POINTER/pointer-8.png" alt="pointer" />
      </div>
      <img src="../assets/imgs/POINTER/pointer-9.png" alt="pointer" />
      <img src="../assets/imgs/POINTER/pointer-10.png" alt="pointer" />
      <img src="../assets/imgs/POINTER/pointer-11.png" alt="pointer" />
    </div>
    <MovingArrows
      :left-path="'/lepetitbuda'"
      :goUpId="'pointer'"
      :right-path="'/mobility'"
    />
    <FooterComp id="footer" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
import MovingArrows from "../components/MovingArrows.vue";

export default {
  components: {
    NavBar,
    FooterComp,
    MovingArrows,
  },
  data() {
    return {
      isMuted: true, // Initially muted
    };
  },
  methods: {
    toggleMute() {
      const video = this.$refs.video;
      this.isMuted = !this.isMuted;
      video.muted = this.isMuted;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.img-grid img {
  width: 100%;
  height: auto;
}

.img-small-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.img-small-grid img {
  max-width: 100%;
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
