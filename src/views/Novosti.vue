<template>
  <div id="novosti">
    <Header />

    <b-container id="novosti-landing" fluid>
      <div class="spacer" style="height: 30vh"></div>
      <b-container class="position-relative py-3 px-3">
        <h1 class="heading underline">Novosti</h1>
        <h4 class="subheading text-wrap">
          Najnovije novosti na razini Sveučilišta u Mostaru
        </h4>
      </b-container>
    </b-container>

    <b-container>
      <b-row class="mt-2">
        <b-col md="3" class="my-2"
          ><b-button
            block
            squared
            size="lg"
            :variant="
              this.category_selected[0].value
                ? 'secondary'
                : 'outline-secondary'
            "
            class="text-uppercase"
            @click="addCategory"
            >Kultura</b-button
          ></b-col
        >
        <b-col md="3" class="my-2"
          ><b-button
            block
            squared
            size="lg"
            :variant="
              this.category_selected[1].value
                ? 'secondary'
                : 'outline-secondary'
            "
            class="text-uppercase"
            @click="addCategory"
            >Edukacija</b-button
          ></b-col
        >
        <b-col md="3" class="my-2"
          ><b-button
            block
            squared
            size="lg"
            :variant="
              this.category_selected[2].value
                ? 'secondary'
                : 'outline-secondary'
            "
            class="text-uppercase"
            @click="addCategory"
            >Sport</b-button
          ></b-col
        >
        <b-col md="3" class="my-2"
          ><b-button
            block
            squared
            size="lg"
            :variant="
              this.category_selected[3].value
                ? 'secondary'
                : 'outline-secondary'
            "
            class="text-uppercase"
            @click="addCategory"
            >Zabava</b-button
          ></b-col
        >
      </b-row>
    </b-container>

    <NovostiIspis :categories="category_selected" />

    <b-container>
      <b-row class="justify-content-around">
        <b-col md="3" class="my-4">
          <b-button
            block
            squared
            size="lg"
            variant="outline-secondary"
            class="text-uppercase"
            >Učitaj više...</b-button
          >
        </b-col>
      </b-row>
    </b-container>

    <Sponzori />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NovostiIspis from "@/components/NovostiIspis.vue";
import Sponzori from "@/components/Sponzori.vue";

export default {
  name: "Novosti",
  components: {
    Header,
    Footer,
    NovostiIspis,
    Sponzori,
  },
  data() {
    return {
      category_selected: [
        { category: "kultura", value: false },
        { category: "edukacija", value: false },
        { category: "sport", value: false },
        { category: "zabava", value: false },
      ],
    };
  },
  methods: {
    addCategory(event) {
      let buttonCategory = event.target.innerHTML.toLowerCase();

      this.category_selected.forEach((element) => {
        if (buttonCategory === element.category) {
          element.value = !element.value;
        }
      });
    },
  },
};
</script>

<style scoped>
#novosti-landing {
  position: relative;
  min-height: 60vh;
}

#novosti-landing:before {
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
</style>