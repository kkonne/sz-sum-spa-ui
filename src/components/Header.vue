<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="transparent" fixed="top">
      <b-navbar-brand to="/">Studentski Zbor</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            class="text-uppercase mx-1"
            to="/"
            :active="$route.name == 'Home'"
            >Naslovna</b-nav-item
          >
          <b-nav-item
            class="text-uppercase mx-1"
            to="/novosti"
            :active="$route.name == 'Novosti'"
            >Novosti</b-nav-item
          >
          <b-nav-item
            class="text-uppercase mx-1"
            to="/xxi-saziv"
            :active="$route.name == 'Xxi-saziv'"
            >Xxi. saziv</b-nav-item
          >
          <b-nav-item
            class="text-uppercase mx-1"
            to="/arhiva"
            :active="$route.name == 'Arhiva'"
            >Arhiva</b-nav-item
          >
          <b-nav-item
            class="text-uppercase mx-1"
            to="/dokumenti"
            :active="$route.name == 'Dokumenti'"
            >Dokumenti</b-nav-item
          >
          <b-nav-item
            class="text-uppercase mx-1"
            to="/kontakt"
            :active="$route.name == 'Kontakt'"
            >Kontakt</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#header {
  font-weight: 600;
}

nav {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
</style>