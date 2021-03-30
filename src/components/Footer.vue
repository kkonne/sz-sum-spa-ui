<template>
  <div id="footer">
    <b-container fluid class="bg-dark pt-5 pb-1 text-light text-center">
      <b-container>
        <b-row>
          <b-col lg="4" class="mt-1 mb-3 text-lg-left">
            <h2 class="text-uppercase"><b>Studentski Zbor</b></h2>
            <div class="d-inline-flex">
              <img
                src="@/assets/images/facebook-icon.svg"
                height="30px"
                alt="Facebook"
                class="mr-4"
              />
              <img
                src="@/assets/images/instagram-icon.svg"
                height="30px"
                alt="Instagram"
                class="mr-4"
              />
              <img
                src="@/assets/images/twitter-icon.svg"
                height="30px"
                alt="Twitter"
                class="mr-4"
              />
              <img
                src="@/assets/images/youtube-icon.svg"
                height="30px"
                alt="Youtube"
                class="mr-4"
              />
            </div>
          </b-col>

          <b-col lg="8 text-lg-left">
            <b-row>
              <b-col md="2" class="my-2">
                <b-link to="/"><b>Naslovna</b></b-link>
              </b-col>

              <b-col md="2" class="my-2">
                <div class="mb-2">
                  <b-link to="/novosti"><b>Novosti</b></b-link>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Kultura</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Edukacija</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Sport</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Zabava</a>
                </div>
              </b-col>

              <b-col md="2" class="my-2">
                <div class="mb-2">
                  <b-link to="/xxi-saziv"><b>XXI. saziv</b></b-link>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Predsjedništvo</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Studentski pravobranitelj</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Međunarodna suradnja</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Studenti strani državljani</a>
                </div>
              </b-col>

              <b-col md="2" class="my-2">
                <div class="mb-2">
                  <b-link to="/arhiva"><b>Arhiva</b></b-link>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">XX. saziv</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">XIX.saziv</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">XVIII. saziv</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">XVII. saziv</a>
                </div>
              </b-col>

              <b-col md="2" class="my-2">
                <div class="mb-2">
                  <b-link to="/dokumenti"><b>Dokumenti</b></b-link>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Obrasci za projekte</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Pravilnici</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Poslovnik</a>
                </div>
                <div class="mt-1">
                  <a class="text-muted" href="#">Statut sveučilišta</a>
                </div>
              </b-col>

              <b-col md="2" class="my-2">
                <div class="mb-2">
                  <b-link to="/kontakt"><b>Kontakt</b></b-link>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <p class="small text-muted text-center mt-4">
          Studentski Zbor 2021 © Sva prava pridržana
        </p>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #fff;
  text-decoration: none;
}
</style>