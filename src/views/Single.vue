<template>
  <div id="novost-single">
    <Header />

    <b-container id="novost-single-landing" fluid v-if="novostSlika">
      <div class="spacer" style="height: 40vh"></div>
      <b-container class="position-relative py-3 px-3">
        <h4
          class="subheading text-wrap underline text-uppercase bold font-italic"
        >
          Zabava
        </h4>
      </b-container>
    </b-container>

    <b-container id="novost-single-landing-nopic" class="bg-dark py-5" fluid v-else>
      <b-container>
        <br><br>
        <h4 class="subheading text-wrap underline text-uppercase bold font-italic position-absolute mt-1">
          Zabava
        </h4>
      </b-container>
    </b-container>

    <b-container class="my-5">
      <div class="content mb-5">
        <h1 style="font-size: 4rem">
          Naslov novosti
        </h1>

        <h5 class="text-uppercase font-italic text-muted my-3">
          Objavljeno 16.3.2021.
        </h5>

        <p style="font-size: 2rem" class="font-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero
          enim sed faucibus turpis in eu mi bibendum.<br />Quisque non tellus
          orci ac auctor augue. Enim sit amet venenatis urna cursus eget nunc
          scelerisque. Diam donec adipiscing tristique risus nec. Mi quis
          hendrerit dolor magna eget. Porttitor massa id neque aliquam
          vestibulum morbi blandit cursus. Vitae sapien pellentesque habitant
          morbi tristique. Duis tristique sollicitudin nibh sit amet. Feugiat in
          ante metus dictum.<br />Auctor neque vitae tempus quam pellentesque
          nec.
        </p>
      </div>

      <b-link to="/novosti" class="text-dark"
        ><h5>
          <img
            src="../assets/images/left-arrow.png"
            alt="Back"
            height="32px"
            style="margin-bottom: 5px"
          />
          <span class="bold ml-1">Natrag na novosti</span>
        </h5></b-link
      >
    </b-container>

    <Sponzori />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sponzori from "@/components/Sponzori.vue";

export default {
  name: "Single",
  components: {
    Header,
    Footer,
    Sponzori,
  },
  data() {
    return {
      novostSlika: false
    };
  },
  methods: {},
};
</script>

<style scoped>
#novost-single-landing {
  position: relative;
  min-height: 60vh;
}

#novost-single-landing:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.subheading {
  color: #fff;
  text-shadow: 0 0 15px #000;
  font-size: 2.5rem;
}

.underline {
  background-image: linear-gradient(120deg, #f8a85e 0%, #c99f2d 100%);
  background-repeat: no-repeat;
  background-size: 100px 0.4em;
  background-position: 0 108%;
}

.bold {
  font-weight: 600;
}
</style>