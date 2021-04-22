<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,400;0,600;0,800;1,200;1,400;1,600;1,800&display=swap");

#app {
  font-family: Raleway, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.accent-color {
  color: #0c4776;
}

.accent-color-bg {
  background-color: #0c4776 !important;
}
</style>
