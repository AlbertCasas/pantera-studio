<template>
    <div class="hamburger" :class="{
        'active': active
    }" @click.prevent="toggleBurger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
    <div class="menu" :class="{
        'active': active}">
        <RouterLink class="burger-button first" to="/work">WORK</RouterLink>
        <RouterLink class="burger-button" to="/studio">STUDIO</RouterLink>
        <RouterLink class="burger-button" to="/contact">CONTACT</RouterLink>
        <div class="icons">
            <a href="https://www.instagram.com/_panterastudio/" target="_blank" class="icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.behance.net/panterastudio" target="_blank" class="icon"><i class="fa-brands fa-behance"></i></a>
            <a href="https://www.linkedin.com/in/pantera-studio-89866423b/" target="_blank" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const emit = defineEmits([
    "toggleBurger"
])

const active = ref(false)

const toggleBurger = () => {
    active.value = !active.value
    emit("toggleBurger")
}

</script>

<style scoped>
.hamburger {
    background-color: white;
    cursor: pointer;
    display: none;
    position: relative;
}

.bar {
    display: block;
    width: 23px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #0d0d0d;
}

.menu {
    display: none;
    background-color: #0d0d0d;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    gap: 80px;
    position: absolute;
    top: 100px;
    right: 0;
    z-index: 99;
    box-shadow: 1px 2px 4px black;
    text-align: center;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding-top: 80px;
}

.burger-button {
    background-color: #0d0d0d;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
}


.icons {
    display: flex;
    gap: 40px;
    background-color: #0d0d0d;
    justify-content: center;
    margin-top: 160px;
}

.icons i {
    background-color: #0d0d0d;
    color: white;
    font-size: 25px;
}

.icon {
    text-decoration: none !important;
}





@media only screen and (max-width: 750px) {

    .hamburger {
        display: block;
        padding: 1rem;
    }

    .hamburger.active {
        background-color: white;
    }

    .menu.active {
        display: flex;
    }

    .hamburger.active .bar:nth-child(2){
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1){
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3){
        transform: translateY(-8px) rotate(-45deg);
    }
}


</style>