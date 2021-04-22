<template>
  <div id="home">
    <Header />

    <LandingAnimation />

    <b-container fluid class="m-0 p-0">
      <b-container class="my-5">
        <b-row class="h-100">
          <b-col md="6" class="vert-align py-3">
            <img src="../assets/images/university-1.svg" alt="" />
          </b-col>
          <b-col md="6" class="vert-align py-3">
            <div>
              <h2 class="text-uppercase accent-color">
                <span style="font-weight: 600">O nama</span>
              </h2>
              <p>
                Studentski zbor je najviše predstavničko tijelo studenata
                Sveučilišta u Mostaru koje je odlukom Upravnog vijeća i Senata
                Sveučilišta utemeljeno 2000. godine. Tada je usvojen i Pravilnik
                o radu koji je ujedno temeljni akt Studentskog zbora, a iste
                godine održani su i prvi studentski izbori.
              </p>
            </div>
          </b-col>
        </b-row>

        <h2 class="text-uppercase text-center accent-color mt-5 pt-3">
          <span style="font-weight: 600">Ciljevi</span>
        </h2>
        <b-row class="text-center">
          <b-col md="4" class="py-3">
            <img
              src="../assets/images/university-2.svg"
              height="150px"
              class="mb-3"
            />
            <p>
              Studentski zbor, kao predstavničko tijelo mladih i socijalno
              osjetljivih ljudi, svake godine organizira brojne humanitarne
              projekte kojima nastoji pomoći lokalnoj zajednici i onima kojima
              je pomoć najpotrebnija, te iz godine u godinu nastojimo povećati
              broj studentskih projekata.
            </p>
          </b-col>

          <b-col md="4" class="py-3">
            <img
              src="../assets/images/university-3.svg"
              height="150px"
              class="mb-3"
            />
            <p>
              Glavni cilj Studentskog zbora jest štititi i promicati prava i
              interese studenata na razini njihovih fakulteta, ali i cijeloga
              Sveučilišta. Osim toga, zbor ima legitimitet zastupati sve
              studente Sveučilišta, a svoju legitimnost crpi iz studentskih
              izbora koji se provode na početku svake akademske godine sukladno
              načelima Pravilnika o Studentskom zboru.
            </p>
          </b-col>

          <b-col md="4" class="py-3">
            <img
              src="../assets/images/university-4.svg"
              height="150px"
              class="mb-3"
            />
            <p>
              Što se tiče osnove zadaće studentskih predstavnika u fakultetskom
              vijeću i drugim tijelima, ona podrazumijeva iznošenje prijedloga i
              mišljenja studenata, zastupanje njihovih interesa, te
              unaprijeđenje kvalitete studiranja i kontinuirani rad na
              poboljšanju studentskog standarda i njihovih prava.
            </p>
          </b-col>
        </b-row>

        <div class="brojevni-podaci">
          <b-row class="text-center">
            <b-col md="6" class="my-3">
              <h2 class="text-uppercase text-center accent-color">
                <span style="font-weight: 600">11000+</span>
              </h2>
              <p>studenata</p>
            </b-col>

            <b-col md="6" class="my-3">
              <h2
                class="text-uppercase text-center accent-color"
                style="font-weight: 600"
              >
                120+
              </h2>
              <p>uspješnih projekata</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="parallax-image"></div>
      <div class="separator bg-dark" style="height: 20px"></div>
    </b-container>

    <b-container id="ostaliFakulteti" fluid>
      <b-container class="py-5 text-center">
        <img src="@/assets/images/sum-logo.png" alt="Sveučilište u Mostaru" />
        <p class="mt-3 px-5">
          Sveučilište budućnosti, temeljeno na europskim vrijednostima
        </p>
        <h2
          class="text-uppercase text-center accent-color mt-5 mb-1"
          style="font-weight: 600"
        >
          Fakulteti
        </h2>
        <p class="mb-5">ostale sastavnice sveučilišta</p>

        <b-row>
          <b-col md="4">
            <p>
              <a href="#" class="text-dark">Građevinski fakultet</a>
            </p>
            <p><a href="#" class="text-dark">Medicinski fakultet</a></p>
            <p>
              <a href="#" class="text-dark"
                >Fakultet prirodoslovno-matematičkih i odgojnih znanosti</a
              >
            </p>
            <p><a href="#" class="text-dark">Pravni fakultet</a></p>
          </b-col>

          <b-col md="4">
            <p>
              <a href="#" class="text-dark"
                >Agronomski i prehambeno-tehnološki fakultet</a
              >
            </p>
            <p>
              <a href="#" class="text-dark">Akademija likovnih umjetnosti</a>
            </p>
            <p>
              <a href="#" class="text-dark"
                >Fakultet strojarstva, računarstva i elektrotehnike</a
              >
            </p>
          </b-col>

          <b-col md="4">
            <p><a href="#" class="text-dark">Ekonomski fakultet</a></p>
            <p>
              <a href="#" class="text-dark">Fakultet zdravstvenih studija</a>
            </p>
            <p><a href="#" class="text-dark">Farmaceutski fakultet</a></p>
            <p><a href="#" class="text-dark">Filozofski fakultet</a></p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <Sponzori />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LandingAnimation from "@/components/LandingAnimation.vue";
import Sponzori from "@/components/Sponzori.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    LandingAnimation,
    Sponzori,
  },
};
</script>

<style scoped>
.vert-align {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.parallax-image {
  width: 100%;
  max-width: 100%;
  height: 60vh;
  overflow: hidden;
  background-image: url("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;
}

#ostaliFakulteti {
  position: relative;
}

#ostaliFakulteti:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  background-image: url("../assets/images/sum-background.svg");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
</style>