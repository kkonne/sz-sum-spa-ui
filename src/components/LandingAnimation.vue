<template>
  <div id="landinganimation">
    <b-container fluid class="text-light vh-100 m-0 p-0" id="landing">
      <div class="hats">
        <img src="@/assets/images/university-hat.svg" alt="Ide" />
        <img src="@/assets/images/university-hat.svg" alt="Ide" />
        <img src="@/assets/images/university-hat.svg" alt="Ide" />
        <img src="@/assets/images/university-hat.svg" alt="Ide" />
        <img src="@/assets/images/university-hat.svg" alt="Ide" />
        <img src="@/assets/images/university-hat.svg" alt="Ide" />
        <img src="@/assets/images/university-hat.svg" alt="Ide" />
        <img src="@/assets/images/university-hat.svg" alt="Ide" />
      </div>

      <div class="main-title vh-100">
        <div class="text-center">
          <h1 class="heading text-uppercase text-break text-shadow">
            <b class="text-shadow">Studentski Zbor</b>
          </h1>

          <h3 class="text-shadow">Powered by SUM</h3>
        </div>
      </div>

      <svg
        class="page-separator"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1000 400"
        style="enable-background: new 0 0 1000 400"
        xml:space="preserve"
      >
        <path
          class="page-separator-path"
          id="XMLID_1_"
          d="M0,400c0,0,110.2-101.1,270.6-57.1s200,18.7,234.3,8.2c34.3-10.4,127.6-16.7,198.5,14.8S942.8,381,1000,268.3
	c0,95.5,0,131.7,0,131.7H0z"
        />
      </svg>
      
      <div class="cover-div"></div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LandingAnimation",
};
</script>

<style scoped>
#landinganimation {
  background-image: url('https://images.unsplash.com/photo-1498079022511-d15614cb1c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80');
  content: " ";
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.hats {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: -50px;
}

.text-shadow {
  text-shadow: 0 0 20px rgba(0,0,0, 1);
}

.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hats img {
  animation: hat 7s linear infinite;
  width: 50px;
}

.page-separator {
  bottom: 0;
  margin-bottom: -1px;
  position: absolute;
}

.page-separator-path {
  fill: #fff;
}

@keyframes hat {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateY(-80vh);
    opacity: 0;
  }
}

.hats img:nth-child(1) {
  animation-delay: 2s;
  width: 30px;
}
.hats img:nth-child(2) {
  animation-delay: 3s;
}
.hats img:nth-child(3) {
  animation-delay: 1s;
  width: 60px;
}
.hats img:nth-child(4) {
  animation-delay: 4s;
  width: 35px;
}
.hats img:nth-child(5) {
  animation-delay: 6s;
}
.hats img:nth-child(6) {
  animation-delay: 1.5s;
  width: 20px;
}
.hats img:nth-child(7) {
  animation-delay: 4.5s;
  width: 40px;
}

@media only screen and (max-width: 768px) {
  .heading {
    font-size: 3rem;
  }
}

.cover-div {
  position: absolute;
  bottom: -50px;
  height: 50px;
  min-width:99vw;
  max-width: 100vw;
  overflow: hidden;
  background-color: #fff;
}
</style>