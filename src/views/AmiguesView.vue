<template>
  <div>
    <NavBar />
    <div class="project-wrapper">
      <div class="project-header">
        <img
          class="main-img"
          src="../assets/imgs/MANSAMIGUES/mans-1.png"
          alt="mans"
        />
        <div class="main-text">
          <h1 class="main-title">MANS AMIGUES</h1>
          <p class="project-text">
            Mans amigues is an association by and for suicide survivors
            dedicated to helping those who have suffered a loss by suicide.
            Aware of the cause, we continue to provide our design services to
            Mans Amigues, helping them with the graphic image of the association
            in both digital and printed media. One of our most enriching
            projects that allows us to help the kind people from Mans Amigues to
            help other people in difficult times.
          </p>
          <p class="project-text">
            Inspired by the philosophy of the association, that wounds are part
            of oneself, we use the art of kintsugi as a metaphor in the logo as
            well as representing the lines in the friendly hands they offer.
            Together with a turquoise as their main color, we aimed for a clean
            and calming feel through their image.
          </p>
          <a
            class="pdf-link"
            href="/pdf/brand_guidelines_ma.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check the brand guidelines
          </a>
        </div>
      </div>
      <div class="flex-imgs">
        <div class="column-flex">
          <img src="../assets/imgs/MANSAMIGUES/mans-2.png" alt="mans" />
          <img src="../assets/imgs/MANSAMIGUES/mans-3.png" alt="mans" />
        </div>
        <img src="../assets/imgs/MANSAMIGUES/mans-7.png" alt="mans" />
      </div>
      <img src="../assets/imgs/MANSAMIGUES/mans-5.png" alt="mans" />
      <img src="../assets/imgs/MANSAMIGUES/mans-6.png" alt="mans" />
      
    </div>
    <MovingArrows
      :left-path="'/calxurru'"
      :goUpId="'mansamigues'"
      :right-path="'/magiccereal'"
    />
    <FooterComp id="footer" />
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
import MovingArrows from "../components/MovingArrows.vue";
// import MovingArrows from '../components/MovingArrows.vue'
</script>

<style scoped>
.flex-imgs {
  display: flex;
  align-items: stretch;
  gap: 16px;
}

.column-flex {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(50% - 8px);
}

.big-img {
  width: calc(50% - 8px);
}

.column-flex img {
  width: 100%;
  flex: 1; /* Distribute available height equally */
  object-fit: cover; /* Maintain aspect ratio */
}

/* Adjust styles for smaller screens as needed */
@media only screen and (max-width: 750px) {
  .flex-imgs {
    flex-direction: column-reverse;
    gap: 8px;
  }
  .column-flex {
    gap: 8px;
    width: 100%;
  }
  .column-flex img {
    height: 100%;
  }

  .big-img {
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