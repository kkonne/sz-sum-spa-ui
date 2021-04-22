<template>
  <div id="footer">
    <b-container fluid class="bg-dark pt-5 pb-1 text-light text-center">
      <b-container>
        <b-row align-h="between">
          <b-col lg="5" class="mt-1 mb-3 text-lg-left">
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

          <b-col lg="5 text-lg-left">
            <b-row>
              <b-col md="6" class="my-md-2 mt-4">
                
                <div class="mb-2">
                  <b-link to="/"><b>Naslovna</b></b-link>
                </div>
                <div class="mb-2">
                  <b-link to="/novosti"><b>Novosti</b></b-link>
                </div>
                <div class="mb-2">
                  <b-link to="/xxi-saziv"><b>XXI. saziv</b></b-link>
                </div>

              </b-col>

              <b-col md="6" class="my-md-2">
                
                <div class="mb-2">
                  <b-link to="/arhiva"><b>Arhiva</b></b-link>
                </div>
                <div class="mb-2">
                  <b-link to="/dokumenti"><b>Dokumenti</b></b-link>
                </div>
                <div class="mb-2">
                  <b-link to="/kontakt"><b>Kontakt</b></b-link>
                </div>
              </b-col>

              


              
              <b-col md="2" class="my-2">
                
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