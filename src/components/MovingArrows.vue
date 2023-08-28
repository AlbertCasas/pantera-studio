<template>
  <div class="arrow-wrapper">
    <button class="arrow" @click="goToPath(leftPath)">
      <img src="@/assets/imgs/left-arrow.png" alt="left-arrow" />
    </button>
    <button class="go-up" @click="scrollToTop">GO UP!</button>
    <button class="arrow" @click="goToPath(rightPath)">
      <img src="@/assets/imgs/right-arrow.png" alt="right-arrow" />
    </button>
  </div>
</template>

<script>
export default {
  name: "MovingArrows",
  props: {
    leftPath: String,
    goUpId: String,
    rightPath: String,
  },
  methods: {
    goToPath(path) {
      if (path) {
        this.$router.push(path);
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
button {
  border: none;
}
.arrow-wrapper {
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}
.arrow {
  cursor: pointer;
}
.go-up {
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
}

@media only screen and (max-width: 750px) {
  .arrow-wrapper {
    margin-bottom: 24px;
  }
}
</style>