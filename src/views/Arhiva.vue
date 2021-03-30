<template>
  <div id="xxi-saziv">
    <Header />

    <!-- Arhiva heading -->
    <b-container id="dokumenti-landing" fluid>
      <div class="spacer" style="height: 30vh"></div>
      <b-container class="position-relative py-3 px-3">
        <h1 class="heading underline text-break">Arhiva</h1>
        <h4 class="subheading">Ovdje možete pregledati prethodne sazive!</h4>
      </b-container>
    </b-container>

    <b-container class="my-5">
      <div role="navigation" class="my-3">
        <b-nav pills justified>
          <b-nav-item
            :active="arhiva[0].visible"
            @click="arhiva[0].visible = !arhiva[0].visible"
            class="px-1"
            >XX. saziv</b-nav-item
          >
          <b-nav-item
            :active="arhiva[1].visible"
            @click="arhiva[1].visible = !arhiva[1].visible"
            class="px-1"
            >XIX. saziv</b-nav-item
          >
          <b-nav-item
            :active="arhiva[2].visible"
            @click="arhiva[2].visible = !arhiva[2].visible"
            class="px-1"
            >XVIII. saziv</b-nav-item
          >
          <b-nav-item
            :active="arhiva[3].visible"
            @click="arhiva[3].visible = !arhiva[3].visible"
            class="px-1"
            >XVII. saziv</b-nav-item
          >
        </b-nav>
      </div>

      <br />

      <div class="content" v-for="item in arhiva" :key="item.id">
        <div class="mb-3 mt-4" v-if="item.visible">
          <h1>{{ item.name }}</h1>
          <br />
          <p>{{ item.content }}</p>
          <hr class="mt-5" />
        </div>
      </div>
    </b-container>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Xxi-saziv",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      arhiva: [
        {
          id: 1,
          name: "XX. saziv",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non faucibus ex, et maximus augue. Donec a tincidunt nibh. Cras tristique eleifend ligula a gravida. Fusce fringilla metus ac nulla fermentum dictum. Integer ac tempus orci. Etiam a eros porta, dapibus metus sit amet, sollicitudin augue.",
          visible: true,
        },
        {
          id: 2,
          name: "XIX. saziv",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non faucibus ex, et maximus augue. Donec a tincidunt nibh. Cras tristique eleifend ligula a gravida. Fusce fringilla metus ac nulla fermentum dictum. Integer ac tempus orci. Etiam a eros porta, dapibus metus sit amet, sollicitudin augue.",
          visible: true,
        },
        {
          id: 3,
          name: "XVIII. saziv",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non faucibus ex, et maximus augue. Donec a tincidunt nibh. Cras tristique eleifend ligula a gravida. Fusce fringilla metus ac nulla fermentum dictum. Integer ac tempus orci. Etiam a eros porta, dapibus metus sit amet, sollicitudin augue.",
          visible: true,
        },
        {
          id: 4,
          name: "XVII. saziv",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non faucibus ex, et maximus augue. Donec a tincidunt nibh. Cras tristique eleifend ligula a gravida. Fusce fringilla metus ac nulla fermentum dictum. Integer ac tempus orci. Etiam a eros porta, dapibus metus sit amet, sollicitudin augue.",
          visible: true,
        },
      ],
    };
  },
  methods: {
    displayThis: function () {
      let buttonId = this.id;

      console.log(buttonId);
    },
  },
};
</script>

<style scoped>
#dokumenti-landing {
  position: relative;
  min-height: 60vh;
}

#dokumenti-landing:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://images.pexels.com/photos/6344231/pexels-photo-6344231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.heading {
  font-size: 5rem;
  font-weight: 600;
  color: #fff;
}

@media only screen and (max-width: 768px) {
  .heading {
    font-size: 3rem;
  }
}

.subheading {
  color: #fff;
  text-shadow: 0 0 15px #000;
}

.underline {
  background-image: linear-gradient(120deg, #f8a85e 0%, #c99f2d 100%);
  background-repeat: no-repeat;
  background-size: 180px 0.2em;
  background-position: 0 88%;
}

.active {
  border-radius: 0;
  background-color: #0c4776 !important;
}
</style>