<template>
  <div>
    <NavBar />
    <div class="studio">
      <div class="text main">
        <div class="intro">
          <p>We are a design studio based in Barcelona, with a flexible team capable of adapting to every project needs. Our goal is to help you solve any issues your bussiness may face through design and creative thinking.</p>
        </div>
        <div class="video">
          <video autoplay muted loop id="video">
          <source src="../assets/video/pantera_studio_video.mp4">
        </video>
        </div>
      </div>
      <div class="services">
        <h1>OUR SERVICES</h1>
        <div class="services-content">
          <div class="print">
            <div class="list">
              <h2>PRINT</h2>
              <ul>
                <li>Branding</li>
                <li>Illustration</li>
                <li>Editorial</li>
                <li>Packaging</li>
              </ul>
            </div>
            <img src="https://i.ibb.co/dk4pMXS/print.png" alt="print">
          </div>
          <div class="digital">
            <div class="list">
              <h2>DIGITAL</h2>
              <ul>
                <li>Web design</li>
                <li>Web development</li>
                <li>Motion design</li>
              </ul>
            </div>
            <img src="https://i.ibb.co/2W7zbMs/digital.png" alt="digital">
          </div>
        </div>
        <div class="text services-option">
          <p>We do many things so, if you don't see what you're looking for listed above, don't hesitate to reach out.</p>
        </div>
        <div class="process">
          <h1>THE PROCESS</h1>
          <div class="explanation">
            <p>We have designed a 7 steps process to take any project forward. Although, depending on the different services we offer, the process has variations, there is common ground in the way we do things.</p>
          </div>
          <div class="steps">
            <div class="step1 step">
              <h2>1.0</h2>
              <div class="info">
                <h2>DISCOVERY SESSION</h2>
                <p>We start by meeting face-to-face or online to find out if we are a good fit to work together, to get to know your company, the scope of the project, the challenges you have encountered and to better understand your current situation and goals.</p>
              </div>
            </div>
            <div class="step2 step">
              <h2>2.0</h2>
              <div class="info">
                <h2>EXPLORATION</h2>
                <p>With the information discovered in the first meeting, we carry out internal competitor and market research to find out what will work for the project, will make you stand out from the competition and sell your services or products.</p>
              </div>
            </div>
            <div class="step3 step">
              <h2>3.0</h2>
              <div class="info">
                <h2>CONCEPT DEVELOPMENT</h2>
                <p>From the internal exploration and brainstorming carried out, we will design and suggest a couple directions your project can go, visually-wise. These suggestions will serve as a starting point to align the visual direction of your project before we start with the overall design.</p>
              </div>
            </div>
            <div class="step4 step">
              <h2>4.0</h2>
              <div class="info">
                <h2>CENCEPT DESIGN</h2>
                <p>Following your choice on the visual direction you want your project to take and the feedback that you provide on it, we will start the full design of your project. Including all the design elements necessary to achieve the look and feel desired.</p>
              </div>
            </div>
            <div class="step5 step">
              <h2>5.0</h2>
              <div class="info">
                <h2>CONCEPT REFINEMENT</h2>
                <p>Following your feedback on the design proposed, we will work together to align the final image of the project with your vision. In order to nail the design according to what you exactly want, this part of the process includes two revisions.</p>
              </div>
            </div>
            <div class="step6 step">
              <h2>6.0</h2>
              <div class="info">
                <h2>DELIVERY</h2>
                <p>Once the final design is agreed upon, in this final phase, we will send you all the necessary material designed for your project.</p>
              </div>
            </div>
            <div class="step7 step">
              <h2>7.0</h2>
              <div class="info">
                <h2>PROJECT LAUNCH</h2>
                <p>You’re ready to launch your project!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'
</script>

<style scoped>
.studio {
  width: 86%;
  margin: 40px 7.3% 80px 7.3%;
}

.main {
  display: flex;
  width: 100%;
  margin-bottom: 40px;
}

.intro {
  width: 58%;
  margin-right: 40px;
  align-self: center;
}

.video {
  width: 42%;
  border-radius: 30px;
}

#video {
  width: 100%;
  border-radius: 30px;
  clip-path: inset(1px 1px);
}

.text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
}

.services {
  width: 100%;
}

.services h1 {
  font-size: 80px;
  font-weight: 900;
  line-height: 90%;
  margin-bottom: 40px;
}

.services-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.print {
  width: calc(50% -20px);
  display: flex;
}

.print img {
  width: 40%;
  padding: 40px;
  align-self: center;
}

.digital img {
  width: 40%;
  padding: 40px;
  align-self: center;
}

.digital {
  width: calc(50% -20px);
  display: flex;
}

.list {
  margin-right: 40px;
}

.list h2 {
  font-size: 40px;
  font-weight: bold;
  line-height: 90%;
  margin-bottom: 40px;
}

.list ul {
  list-style-type: none;
}

.list li {
  font-size: 30px;
  margin-bottom: 40px;
}

.services-option {
  width: 60%;
  margin-bottom: 80px;
}

.process {
  width: 100%;
}

.process h1 {
  font-size: 80px;
  font-weight: 900;
  line-height: 90%;
  margin-bottom: 40px;
}

.explanation {
  width: 60%;
  margin-bottom: 40px;

}

.explanation p {
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
}

.steps {
  display: grid;
  grid-template-columns: auto 40px auto;
  grid-template-rows: auto 40px auto 40px auto 40px auto;
}

.steps h2 {
  font-size: 40px;
  font-weight: bold;
  line-height: 90%;
  margin-bottom: 40px;
}

.step {
  display: flex;
  gap: 40px;
}

.step p {
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
}

.step1 {
  grid-column: 1/2;
  grid-row: 1/2;
}

.step2 {
  grid-column: 3/4;
  grid-row: 1/2;
}

.step3 {
  grid-column: 1/2;
  grid-row: 3/4;
}

.step4 {
  grid-column: 3/4;
  grid-row: 3/4;
}

.step5 {
  grid-column: 1/2;
  grid-row: 5/6;
}

.step6 {
  grid-column: 3/4;
  grid-row: 5/6;
}

.step7 {
  grid-column: 1/2;
  grid-row: 7/8;
}

@media only screen and (max-width: 900px) {
  .text p {
    font-size: 18px;
  }
}

@media only screen and (max-width: 750px) {
  .studio {
    margin: 40px 7.3% 40px 7.3%;
  }

  .text {
    width: 100%;
  }
}
</style>