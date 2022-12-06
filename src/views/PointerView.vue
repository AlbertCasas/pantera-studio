<template>
<div>
    <NavBar />
    <div class="pointer">
        <div class="main-img"></div>
        <div class="info">
            <div class="data">
                <p>Project: <span>Label Design</span></p>
                <p>Client: <span>Pointer Craft Beer</span></p>
                <p>Year: <span>2022</span></p>
            </div>
            <div class="text">
                <p>
                    The name comes from the pointer dog breed, related to hunting,
                    especially in England. For the design of the labels, we used the
                    imagery related to this primal activity to develop a retro image
                    protagonized by animal characters inspired by cartoons from the
                    1930s, creating a casual and fun design which is what the noble art
                    of drinking beer is all about.
                </p>
                <br /><br />
                <p>
                    Using an aged black and white and the combination of Westmeath and
                    Swiss 721 as the fonts used we wanted to give a classic and vintage
                    feel that works with the characters designed to represent the
                    different kinds of beer, creating a cohesive image across the
                    design.
                </p>
            </div>
        </div>
        <div class="small-grid">
            <img class="sg1" src="https://i.ibb.co/2ZPnL7v/Recurso-159.png" alt="westmeath">
            <img class="sg2" src="https://i.ibb.co/jGrSmrV/Recurso-158.png" alt="swiss">
        </div>
        <div class="big-grid">
            <img class="bg1 bg" src="https://i.ibb.co/QKD70G1/Sin-t-tulo-1-03.png" alt="cartoon">
            <img class="bg2 bg" src="https://i.ibb.co/KhdPCKR/Sin-t-tulo-1-02.png" alt="cartoon">
            <img class="bg3 bg" src="https://i.ibb.co/qgnjZKF/Sin-t-tulo-1-04.png" alt="cartoon">
            <img class="bg4 bg" src="https://i.ibb.co/9rwWkLG/Sin-t-tulo-1-06.png" alt="cartoon">
            <img class="bg5 bg" src="https://i.ibb.co/Lv8yW7p/Sin-t-tulo-1-05.png" alt="cartoon">
            <img class="bg6 bg" src="https://i.ibb.co/3d4kbRJ/Sin-t-tulo-1-07.png" alt="cartoon">
        </div>
        <div class="big-images">
            <img class="bi" src="https://i.ibb.co/1z7kqJm/01.jpg" alt="bottles">
            <img class="bi" src="https://i.ibb.co/QF5smXz/03.jpg" alt="bottles">
            <img class="bi" src="https://i.ibb.co/YBxRb64/02.jpg" alt="bottles">
        </div>
        <div class="arrows">
            <RouterLink to="/work/pantera" class="arrow"
            ><i class="fa-sharp fa-solid fa-caret-left"></i
            ><span>&nbsp; PREVIOUS</span></RouterLink
            >
            <RouterLink to="/work/mobility" class="arrow"
            ><span>NEXT &nbsp; </span
            ><i class="fa-sharp fa-solid fa-caret-right"></i
            ></RouterLink>
        </div>
        </div>
    <FooterComp />
</div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import FooterComp from "../components/FooterComp.vue";
</script>

<style scoped>
.pointer {
  width: 86%;
  margin: 40px 7.3% 80px 7.3%;
}

.main-img {
  width: 100%;
  height: 800px;
  margin-bottom: 40px;
  border-radius: 30px;
  background-image: url("https://i.ibb.co/d7XqF38/DESKTOP.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  cursor: default;
}

.data p {
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
}

.data span {
  font-weight: bold;
}

.text {
  width: 57%;
  color: #0d0d0d;
}

.text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
}

.small-grid {
    width: 100%;
    display: grid;
    grid-template-columns: auto 40px auto;
    margin-bottom: 40px;
}

.sg1 {
    grid-column:1/2;
    width: 100%;
    border-radius: 30px;
}

.sg2 {
    grid-column:3/4;
    width: 100%;
    border-radius: 30px;
}

.big-grid {
    width: 100%;
    display: grid;
    grid-template-columns: auto 40px auto 40px auto;
    grid-template-rows: auto 40px auto;
    margin-bottom: 40px;
}

.bg {
    width: 100%;
    border-radius: 30px;
}

.bg1 {
    grid-column:1/2;
    grid-row: 1/2;
}

.bg2 {
    grid-column: 3/4;
    grid-row: 1/2;
}

.bg3 {
    grid-column: 5/6;
    grid-row: 1/2;
}

.bg4 {
    grid-column:1/2;
    grid-row: 3/4;
}

.bg5 {
    grid-column:3/4;
    grid-row: 3/4;
}

.bg6 {
    grid-column:5/6;
    grid-row: 3/4;
}

.big-images {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 80px;
}

.bi {
    width: 100%;
    border-radius: 30px;
}

.arrows {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.arrow {
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #0d0d0d;
}

.arrow span:hover {
  color: #e61933;
}

@media only screen and (max-width: 1650px) {
  .main-img {
    height: 550px;
  }

  .data p {
      font-size: 20px;
    }


  .text p {
      font-size: 20px;
    }
  }


  @media only screen and (max-width: 1300px) {
    .main-img {
      height: 500px;
    }

    
    .info {
      flex-direction: column;
      gap: 40px;
    }

    .text {
      width: 100%;
    }

    
  }

  @media only screen and (max-width: 850px) {

    .pointer {
      margin: 30px 7.3% 60px 7.3%;
    }

    .main-img {
      height: 800px;
      background-image: url('https://i.ibb.co/hHkqj7q/TABLET.png');
    }

    .info {
    margin-bottom: 60px;
    justify-content: unset;
    gap: 30px;
  }

    .data p {
      font-size: 18px;
    }

    .text p {
      font-size: 18px;
    }

    .small-grid {
    grid-template-columns: auto;
    grid-template-rows: auto 30px auto;
    margin-bottom: 30px;
}

.sg1 {
    grid-column:1/2;
    grid-row: 1/2;
}

.sg2 {
    grid-column:1/2;
    grid-row: 3/4;
}

.big-grid {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 30px auto 30px auto 30px auto 30px auto 30px auto;
    margin-bottom: 30px;
}



.bg1 {
    grid-column:1/2;
    grid-row: 1/2;
}

.bg2 {
    grid-column: 1/2;
    grid-row: 3/4;
}

.bg3 {
    grid-column: 1/2;
    grid-row: 5/6;
}

.bg4 {
    grid-column:1/2;
    grid-row: 7/8;
}

.bg5 {
    grid-column:1/2;
    grid-row: 9/10;
}

.bg6 {
    grid-column:1/2;
    grid-row: 11/12;
}

.big-images {
    gap: 30px;
    margin-bottom: 60px;
}


    
  }

  @media only screen and (max-width: 650px) {
    .pointer {
    margin: 20px 7.3% 40px 7.3%;
  }

    .main-img {
      height: 500px;
      background-image: url('https://i.ibb.co/k14d9YX/MOBILE.png');
      border-radius: 20px;
    }

    .info {
      margin-bottom: 40px;
      gap: 20px;
    }

    .data p {
      font-size: 16px;
    }

    .text p {
      font-size: 16px;
    }

    .small-grid {
    grid-template-columns: auto;
    grid-template-rows: auto 20px auto;
    margin-bottom: 20px;
    }

    .small-grid img {
      border-radius: 20px;
    }

    .big-grid {
    grid-template-rows: auto 20px auto 20px auto 20px auto 20px auto 20px auto;
    margin-bottom: 20px;
}


    .bg {
    border-radius: 20px;
}

.big-images {
  gap: 20px;
  margin-bottom: 40px;
}

    .arrow {
    font-size: 16px;
    }

  }
</style>
