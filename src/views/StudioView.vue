<template>
  <div>
    <NavBar />
    <div class="studio">
      <img src="@/assets/imgs/hector-photo.jpg" alt="hector-photo" class="photo">
      <div class="text">
        <p>I’m Hèctor, a graphic designer from Barcelona working as Pantera Studio who aims to make the world a little better and earn some €€€ in the process.</p>
        <p> I love to bring to life your ideas (crazy or not) and transform them into images and stories.</p>
        <p> I’m here to help, so don’t hesitate to ask! I’m a really nice person, or so they say.</p>
      </div>
    </div>
    <FooterComp id="footer" />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'
</script>

<style scoped>
.studio {
  width: 86%;
  margin: 32px 7.3% 64px 7.3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

p {
  font-size: 24px;
  font-weight: 500;
}

.photo {
  width: 45%;
}



@media only screen and (max-width: 1500px) {
  p {
  font-size: 16px;
}
}
@media only screen and (max-width: 1000px) {
p {
  font-size: 14px;
}

}

@media only screen and (max-width: 750px) {
.photo {
  width: 100%;
}
.text {
  width: 100%;
}
.studio {
  flex-direction: column;
  gap: 24px;
}
}
</style>