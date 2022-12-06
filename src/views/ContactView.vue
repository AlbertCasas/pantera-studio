<template>
  <div>
    <NavBar />
    <div class="contact">
      <div class="form">
        <div class="box">
          <input class="name" type="text" name="name" placeholder="Name" v-model="name">
          <input class="email" type="email" name="email" placeholder="Email" v-model="email">
          <input class="subject" type="text" name="subject" placeholder="Subject" v-model="subject">
          <textarea class="message" name="message" id="message" cols="30" rows="10" placeholder="Message" v-model="message"></textarea>
          <p v-if="errorMsg" class="err-msg">{{ errorMsg }}</p>
          <button @click.prevent="sendMessage" class="button" type="submit">SEND</button>
        </div>
      </div>
      <div class="text">
        <p>Hi! If you have a project, collaboration or inquiry in mind that we can help you with, <br> <span>DROP US A LINE</span>.</p>
        <p>If we can't, at least we'll point you in the right direction to the best of our knowledge. <br> <span>WE ARE KIND PEOPPLE</span>.</p>
        <p>hello.panterastudio@gmail.com</p>
        <p>+34 695 664 603</p>
        <p>Flos i Calcat, 17, 19-B <br>El Masnou, 08320 <br>Barcelona</p>
        <div class="icons">
          <a href="https://www.instagram.com/_panterastudio/" target="_blank" class="icon"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.behance.net/panterastudio" target="_blank" class="icon"><i class="fa-brands fa-behance"></i></a>
          <a href="https://www.linkedin.com/in/pantera-studio-89866423b/" target="_blank" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
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
import projectFirestore from "../Firebase/Firebaseconfig"

const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const errorMsg = ref("")

const sendMessage = () => {
    if(name.value === "" || email.value === "" || subject.value === "" || message.value === ""){
        errorMsg.value ="Please, complete the empty fields"
        setTimeout(() => {
            errorMsg.value = null
        }, 5000)
    }else{
        const newMessage = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        projectFirestore.collection('userMessages').add(newMessage)
        errorMsg.value = "Thank you for your message!"
        setTimeout(() => {
            errorMsg.value = null
        }, 5000)
        name.value = "",
        email.value = "",
        subject.value = "",
        message.value = ""
    }
}

</script>

<style scoped>
.contact {
  width: 86%;
  margin: 40px 7.3% 80px 7.3%;
  display: flex;
  gap: 40px;
}

.form {
  width: calc(60% - 20px);
  display: flex;
  flex-direction: column;
}

.box {
  width: 100%;
  background-color: #0d0d0d;
  display: grid;
  grid-template-columns: 40px calc(50% - 60px) 40px calc(50% - 60px) 40px;
  grid-template-rows: 40px auto 40px auto 40px auto 40px auto 40px;
  border-radius: 30px;
}

.name {
  grid-column: 2/3;
  grid-row: 2/3;
}

.email {
  grid-column: 4/5;
  grid-row: 2/3;
}

.subject {
  grid-column: 2/5;
  grid-row: 4/5;
}

.message {
  grid-column: 2/5;
  grid-row: 6/7;
}

.err-msg {
  grid-column: 2/3;
  grid-row: 8/9;
}

.button {
  grid-column: 4/5;
  grid-row: 8/9;
}

.box input {
  height: 40px;
  border-radius: 15px;
  font-size: 25px;
  padding: 1rem;
  border: none;
}

.box input:focus {
  border: none;
  outline: none;
}


.box textarea {
  border-radius: 15px;
  font-size: 25px;
  padding: 1rem;
  border: none;
  outline: none;
}


.button {
  height: 60px;
  width: 240px;
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

.err-msg {
  background-color: #0d0d0d;
  color: white;
  font-size: 23px;
}

.text {
  cursor: default;
  width: calc(40% - 20px);
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
    font-size: 25px;
}

.icons a {
  text-decoration: none;
  margin-right: 40px;
  color: #0d0d0d;
}

.icons i:hover {
    color: #E61933;
}

@media only screen and (max-width: 1650px) {
  .contact {
    flex-direction: column-reverse;
  }

  .form {
    width: 100%;
  }

  .box input {
    padding: .7rem;
    font-size: 20px;
  }

  .box textarea {
    padding: .7rem;
    font-size: 20px;
    height: 200px;
  }

  .text {
    width: 100%;
  }

  .text p {
    font-size: 20px;
    margin-bottom: 20px;
    }

}

@media only screen and (max-width: 850px) {
  .contact {
    gap: 30px;
  }

  .box {
    grid-template-columns: 30px calc(50% - 45px) 30px calc(50% - 45px) 30px;
    grid-template-rows: 30px auto 30px auto 30px auto 30px auto 30px auto 30px;
  }

  .name {
  grid-column: 2/5;
  grid-row: 2/3;
}

.email {
  grid-column: 2/5;
  grid-row: 4/5;
}

.subject {
  grid-column: 2/5;
  grid-row: 6/7;
}

.message {
  grid-column: 2/5;
  grid-row: 8/9;
}

.err-msg {
  grid-column: 2/3;
  grid-row: 10/11;
}

.button {
  grid-column: 4/5;
  grid-row: 10/11;
}

  .box input {
    font-size: 20px;
  }

  .box textarea {
    font-size: 20px;
  }

  .err-msg {
    font-size: 15px;
  }

  .text p {
    font-size: 18px;
    margin-bottom: 15px;
  }


}

@media only screen and (max-width: 550px) {
  .contact {
    margin: 40px 7.3% 40px 7.3%;
    gap: 20px;
  }

  .box {
    grid-template-columns: 20px calc(50% - 30px) 20px calc(50% - 30px) 20px;
    grid-template-rows: 20px auto 20px auto 20px auto 20px auto 20px auto 20px;
    border-radius: 20px;
  }

  .box input {
    height: 20px;
    border-radius: 10px;
  }

  .box textarea {
    border-radius: 10px;
    height: 150px;
  }

  .button {
    height: 40px;
    width: 140px;
    font-size: 15px;
  }

  .text p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .icons {
    font-size: 20px;
  }

}

</style>