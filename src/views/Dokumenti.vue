<template>
  <div id="xxi-saziv">
    <Header />

    <!-- Dokumenti heading -->
    <b-container id="dokumenti-landing" fluid>
      <div class="spacer" style="height: 30vh"></div>
      <b-container class="position-relative py-3 px-3">
        <h1 class="heading underline text-break">Dokumenti</h1>
        <h4 class="subheading">
          Pregledajte i preuzmite bitne dokumente za studente i ostale!
        </h4>
      </b-container>
    </b-container>

    <!-- Dokumenti ispis -->
    <b-container class="my-5">
      <div v-for="dokument in dokumenti" :key="dokument.id">
        <h3 class="bold">{{ dokument.naslov }}</h3>
        <br />
        <p>{{ dokument.opis }}</p>
        <br />
        <div v-for="doc in dokument.docs" :key="doc.ime">
          <p>- {{ doc.ime }}</p>
        </div>

        <hr class="my-4" />
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
  methods: {
    scrollIntoView(event) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
  },
  data() {
    return {
      dokumenti: [
        {
          id: 1,
          naslov: "Plan i program",
          opis:
            "Plan i program rada za akademsku 2020/2021. možete pogledati ovdje:",
          docs: [
            {
              ime: "Plan i program",
            },
          ],
        },
        {
          id: 2,
          naslov: "Sjednice XXI. saziva",
          opis:
            "Ovdje možete pronaći izvješća sa sjednica XXI. saziva Predsjedništva saziva Studentskog zbora Sveučilišta u Mostaru. Napominjemo da su ovo skraćene verzije zapisnika koje je usvojilo Predsjedništvo. Za sve upite stojimo na raspolaganju.",
          docs: [
            {
              ime: "Izvješće sa I. radne sjednice",
            },
            {
              ime: "Izvješće sa I. online sjednice",
            },
            {
              ime: "Izvješće sa II. radne sjednice",
            },
            {
              ime: "Izvješće sa III. radne sjednice",
            },
            {
              ime: "Izvješće sa IV. radne sjednice",
            },
          ],
        },
        {
          id: 3,
          naslov: "Troškovnik",
          opis:
            "Troškovnik za listopad, studeni,prosinac i siječanj možete pogledati ovdje:",
          docs: [
            {
              ime: "Troškovnik",
            },
          ],
        },
        {
          id: 4,
          naslov: "Planirani proračun 2020/2021",
          opis:
            "Planirani proračun za akademsku 2020/2021 možete pogledati ovdje:",
          docs: [
            {
              ime: "Planirani proračun 2020/2021",
            },
          ],
        },
      ],
    };
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
  background-image: url("https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-position: top;
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

.bold {
  font-weight: 600;
}
</style>