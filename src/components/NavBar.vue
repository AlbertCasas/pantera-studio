<template>
  <div class="navbar">
    <div class="navbar-content">
        <RouterLink class="pantera-logo" to="/"><img src="https://i.ibb.co/G9rzx4Y/positivo.png" alt="pantera-logo"></RouterLink>
        <div class="navbar-buttons">
            <RouterLink class="button" to="/work">WORK</RouterLink>
            <RouterLink class="button" to="/studio">STUDIO</RouterLink>
            <RouterLink class="button" to="/contact">CONTACT</RouterLink>
        </div>
        <HamburgerMenu />
    </div>
  </div>
</template>

<script setup>
import HamburgerMenu from './HamburgerMenu.vue'

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
    gap: 80px;
    background-color: transparent;
}

.button {
    text-decoration: none;
    color: #0d0d0d;
    font-size: 20px;
    font-weight: bold;
}

.button:hover {
    color: #E61933;
}

.router-link-active {
    color: #E61933;
}

@media only screen and (max-width: 750px) {
.navbar-buttons {
    display: none;
}
}


</style>