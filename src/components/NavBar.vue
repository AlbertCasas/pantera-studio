<template>
  <div class="navbar">
    <div class="navbar-content">
      <RouterLink class="pantera-logo" to="/"
        ><img src="https://i.ibb.co/G9rzx4Y/positivo.png" alt="pantera-logo"
      /></RouterLink>
      <div class="navbar-buttons">
        <RouterLink class="button" to="/about">ABOUT</RouterLink>
        <div class="navbar-buttons">
          <a href="#footer" class="button" @click="scrollToFooter">CONTACT</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToFooter(event) {
      event.preventDefault(); // Prevent default anchor behavior
      const footerElement = document.querySelector("#footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};

</script>

<style scoped>
.navbar {
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
}

.navbar-content {
  height: 100px;
  display: flex;
  align-items: center;
  margin: 0 7.3%;
  justify-content: space-between;
}

.pantera-logo img {
  height: 60px;
  background-color: transparent;
}

.navbar-buttons {
  display: flex;
  gap: 64px;
  background-color: transparent;
}

.button {
  text-decoration: none;
  color: #0d0d0d;
  font-size: 24px;
  font-weight: 900;
}

.button:hover {
  color: #e61933;
}

.router-link-active {
  color: #e61933;
}
@media only screen and (max-width: 1000px) {
  .button {
    font-size: 16px;
  }
}

@media only screen and (max-width: 750px) {
  .navbar-buttons {
    gap: 32px;
  }
  .button {
    font-size: 16px;
    font-weight: 900;
  }
}
</style>