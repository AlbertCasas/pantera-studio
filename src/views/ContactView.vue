<template>
  <div>
    <NavBar />
    <div class="contact">
      <div class="form">
        <div class="box">
          <div class="name-email">
            <input type="text" name="name" placeholder="Name" v-model="name">
            <input type="email" name="email" placeholder="Email" v-model="email">
          </div>
          <input type="text" name="subject" placeholder="Subject" v-model="subject">
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" v-model="message"></textarea>
          <div class="err-msg-send">
            <p v-if="errorMsg" class="err-msg">{{ errorMsg }}</p>
            <button @click.prevent="sendMessage" class="button" type="submit">SEND</button>
          </div>
        </div>
        </div>
      <div class="text">
        <p>Hi! If you have a project, collaboration or inquiry in mind that we can help you with, <span>DROP US A LINE</span>.</p>
        <p>If we can't, at least we'll point you in the right direction to the best of our knowledge. <br> <span>WE ARE KIND PEOPPLE</span>.</p>
        <p>hello.panterastudio@gmail.com</p>
        <p>+34 695 664 603</p>
        <p>Flos i Calcat, 17, 19-B <br>El Masnou, 08320 <br>Barcelona</p>
        <div class="icons">
          <a href="https://www.instagram.com/_panterastudio/" target="_blank" class="icon"><i class="fa-brands fa-square-instagram"></i></a>
          <a href="https://www.behance.net/panterastudio" target="_blank" class="icon"><i class="fa-brands fa-square-behance"></i></a>
          <a href="https://www.linkedin.com/in/pantera-studio-89866423b/" target="_blank" class="icon"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'
import {ref} from 'vue'

const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const errorMsg = ref("")

</script>

<style scoped>
.contact {
  width: 86%;
  margin: 40px 7.3% 80px 7.3%;
  display: flex;
  gap: 40px;
}

.form {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.box {
  background-color: #0d0d0d;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  border-radius: 30px;
  margin-bottom: 40px;
}

.box input {
  height: 40px;
  border-radius: 15px;
  font-size: 30px;
  padding: 1rem;
}


.box textarea {
  border-radius: 15px;
  font-size: 30px;
  padding: 1rem;
}

.name-email {
  background-color: #0d0d0d;
  display: flex;
  gap: 40px;
}

.name-email input {
  width: 450px;
}

.err-msg-send {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background-color: #0d0d0d;
}

.button {
  height: 52px;
  width: 232px;
  text-align: center;
  border: none;
  background-color: #0d0d0d;
  color: white;
  font-size: 20px;
  font-weight: 900;
  border-radius: 15px;
  justify-self: flex-end;
  cursor: pointer;
  border: 4px solid white;
}

.button:hover {
  border: 4px solid #E61933;
  color: #E61933;
}

.text {
  cursor: default;
}

.text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 40px;
}

.text span {
  font-weight: 900;
}

.icons {
    color: #0d0d0d;
    font-size: 40px;
}

.icons a {
  text-decoration: none;
  margin-right: 40px;
  color: #0d0d0d;
}

.icons i:hover {
    color: #E61933;
}


</style>