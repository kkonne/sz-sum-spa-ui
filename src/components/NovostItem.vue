<template>
  <div id="item">
    <img :src="picture" :alt="title + ' slika'" width="100%" />
    <div class="d-flex justify-content-between mt-1">
      <div class="p accent-color bold font-italic text-uppercase">
        {{ category }}
      </div>
      <div class="h6 accent-color bold font-italic text-uppercase">
        {{ created_at }}
      </div>
    </div>
    <h4 class="font-weight-bold">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "NovostItem",
  props: ["picture", "title", "category", "created_at"],
};
</script>

<style>
</style>