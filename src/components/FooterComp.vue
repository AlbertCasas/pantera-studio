<template>
  <div class="footer">
    <div class="footer-content">
        <div class="navbar-buttons">
            <RouterLink class="button" to="/work">WORK</RouterLink>
            <RouterLink class="button" to="/studio">STUDIO</RouterLink>
            <RouterLink class="button" to="/contact">CONTACT</RouterLink>
            <a href="https://www.instagram.com/_panterastudio/" target="_blank" class="icon"><i class="fa-brands fa-square-instagram"></i></a>
            <a href="https://www.behance.net/panterastudio" target="_blank" class="icon"><i class="fa-brands fa-square-behance"></i></a>
            <a href="https://www.linkedin.com/in/pantera-studio-89866423b/" target="_blank" class="icon"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <RouterLink class="pantera-logo" to="/"><img src="https://i.ibb.co/P4kVGGW/negativo.png" alt="pantera-logo"></RouterLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
*{
    background-color: #0d0d0d;
}

.footer {
    height: 100px;
    width: 100%;
    background-color: #0d0d0d;
}

.footer-content {
    height: 100px;
    display: flex;
    align-items: center;
    margin: 0 7.3%;
    justify-content: space-between;
    background-color: #0d0d0d;
}


.pantera-logo img {
    height: 60px;
    background-color: #0d0d0d;
}

.navbar-buttons {
    display: flex;
    gap: 80px;
    align-items: center;
}

.button {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
}

.button:hover {
    color: #E61933;
}

.router-link-active {
    color: #E61933;
}

.icon {
    color: white;
    font-size: 35px;
}

.icon i:hover {
    color: #E61933;
}


</style>