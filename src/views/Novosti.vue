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
            @click="updateCategory"
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
            @click="updateCategory"
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
            @click="updateCategory"
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
            @click="updateCatefgry"
            >Zabava</b-button
          ></b-col
        >
      </b-row>
    </b-container>

    <NovostiIspis :novostiFiltered="novosti" />

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
        { category: "kultura", value: true },
        { category: "edukacija", value: true },
        { category: "sport", value: true },
        { category: "zabava", value: true },
      ],

      novosti: [
        {
          id: 1,
          title: "Studenti SUM-a po prosjeku najbolji u Europi",
          content: "Lorem ipsum et la sole gene",
          category: "zabava",
          created_at: "14.3.2021.",
          picture:
            "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 2,
          title: "Studentski zbor organizira malonogometni turnir",
          content: "Lorem ipsum et la sole gene",
          category: "sport",
          created_at: "3.3.2021.",
          picture:
            "https://images.pexels.com/photos/3571065/pexels-photo-3571065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: 3,
          title:
            "Na državnom natjecanju iz matematike oba finalista studenti FPMOZ-a",
          content: "Lorem ipsum et la sole gene",
          category: "edukacija",
          created_at: "21.2.2021.",
          picture:
            "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 4,
          title: "Studenti SUM-a po prosjeku najbolji u Europi",
          content: "Lorem ipsum et la sole gene",
          category: "zabava",
          created_at: "14.3.2021.",
          picture:
            "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 5,
          title: "Studentski zbor organizira malonogometni turnir",
          content: "Lorem ipsum et la sole gene",
          category: "sport",
          created_at: "3.3.2021.",
          picture:
            "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 6,
          title:
            "Na državnom natjecanju iz matematike oba finalista studenti FPMOZ-a",
          content: "Lorem ipsum et la sole gene",
          category: "edukacija",
          created_at: "21.2.2021.",
          picture:
            "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 7,
          title: "Studenti SUM-a po prosjeku najbolji u Europi",
          content: "Lorem ipsum et la sole gene",
          category: "zabava",
          created_at: "14.3.2021.",
          picture:
            "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 8,
          title: "Studentski zbor organizira malonogometni turnir",
          content: "Lorem ipsum et la sole gene",
          category: "sport",
          created_at: "3.3.2021.",
          picture:
            "https://images.pexels.com/photos/3571065/pexels-photo-3571065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: 9,
          title:
            "Na državnom natjecanju iz matematike oba finalista studenti FPMOZ-a",
          content: "Lorem ipsum et la sole gene",
          category: "edukacija",
          created_at: "21.2.2021.",
          picture:
            "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    };
  },
  methods: {
    updateCategory(){
      console.log("Josip Leko")
    }

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