<template>
  <div id="xxi-saziv">
    <Header />

    <!-- Xxi saziv heading -->
    <b-container id="dokumenti-landing" fluid>
      <div class="spacer" style="height: 30vh"></div>
      <b-container class="position-relative py-3 px-3">
        <h1 class="heading underline text-break">XXI. saziv</h1>
        <h4 class="subheading">Pregledajte najnoviji saziv!</h4>
      </b-container>
    </b-container>

    <b-container class="my-5">
      <h1 class="bold text-uppercase font-italic">{{ saziv.naslov }}</h1>
      <p class="small text-muted font-italic">najnoviji saziv</p>

      <p>{{ saziv.studentski_pravobranitelj }}</p>

      <div
        class="predsjednistvo"
        v-for="clan in saziv.predsjednistvo"
        :key="clan.id"
      >
        <div class="my-5">
          <h4>{{ clan.name }}</h4>
          <p class="font-italic">- {{ clan.uloga }}</p>
          <p>{{ clan.email }}</p>
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
      saziv: {
        naslov: "XXI. saziv",
        predsjednistvo: [
          {
            id: 0,
            name: "Marija Barun",
            uloga: "Predsjednica Studentskog Zbora",
            email: "marija_barun123@outlook.com",
          },
          {
            id: 1,
            name: "Laura Bogdan",
            uloga: "Zamjenica predsjednice Studentskog Zbora",
            email: "laura.bogdan@student.fsre.ba",
          },
          {
            id: 2,
            name: "Emili Ibrulj",
            uloga: "3. član senata",
            email: "emili.ibrulj@ff.sum.ba",
          },
          {
            id: 3,
            name: "Ivan Mucić",
            uloga: "APTF - Predsjednik",
            email: "ivan.mucic@aptf.sum.ba",
          },
        ],
        studentski_pravobranitelj:
          "Studentski pravobranitelj Studentski pravobranitelj Sveučilišta u Mostaru temelji svoj rad na načelima nezavisnosti, ravnopravnosti i povjerljivosti.\nStudentski pravobranitelj:\n1. prima pritužbe studenata koje se odnose na njihova prava I raspravlja o njima s nadležnim tijelima Sveučilišta\n2. savjetuje studente o ostvarivanju njihovih prava\n3. sudjeluje u stegovnim postupcima radi zaštite studentskih prava\n4. komunicira s nadležnim tijelima Sveučilišta radi ostvarivanja studentskih prava\n5. obavlja druge poslove koji se odnose na ostvarivanje i zaštitu studentskih prava.\nStudentski pravobranitelj Studentskog zbora Sveučilišta u Mostaru je Antonija Boras (predstavnica SZ Pravnog fakulteta i član Predsjedništva SZ), a kontakt je studentskipravobranitelj.mo@gmail.com.\nStudenti upoznajte i borite se za svoja prava! Svi propisi koji vrijede na našem Sveučilištu se nalaze na http://sve-mo.ba/propisi-sveucilista/",
      },
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
  background-image: url("https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
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