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
          <source src="../assets/video/Cereal-AV.mp4" />
        </video>
        <div class="main-text">
          <h1 class="main-title">JUST FOR FUN!</h1>
          <p class="project-text">
            We wanted to create a collection of different cereals since it's a
            product with many fun opportunities regarding design. The project
            revolves around three thieves obsessed with some kind of relic for
            each one and their quest to steal it.
          </p>
          <p class="project-text">
            Inspired by creatures from the forest, the mascots and the overall
            design keep a colorful and fun aesthetic since it is a product
            mainly for children. Each mascot and relic represents a different
            flavor cereal.
          </p>
          <p class="project-text">
            The project has included the creation of the narrative around the
            product, the character design, the packaging design and an animation
            for social media.
          </p>
        </div>
      </div>
      <div class="img-grid">
        <img src="../assets/imgs/CEREAL/cereal-1.png" alt="cereal" />
        <img src="../assets/imgs/CEREAL/cereal-2.png" alt="cereal" />
        <img src="../assets/imgs/CEREAL/cereal-3.png" alt="cereal" />
        <img src="../assets/imgs/CEREAL/cereal-4.png" alt="cereal" />
        <img src="../assets/imgs/CEREAL/cereal-5.png" alt="cereal" />
        <img src="../assets/imgs/CEREAL/cereal-6.png" alt="cereal" />
      </div>
    <img src="../assets/imgs/CEREAL/cereal-7.png" alt="cereal" />
    <img src="../assets/imgs/CEREAL/cereal-8.png" alt="cereal" />
    <img src="../assets/imgs/CEREAL/cereal-9.png" alt="cereal" />
    </div>
    <MovingArrows
      :left-path="'/mansamigues'"
      :goUpId="'magiccereal'"
      :right-path="'/breathe'"
    />
    <FooterComp id="footer" />
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
import MovingArrows from "../components/MovingArrows.vue";
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