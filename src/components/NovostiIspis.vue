<template>
  <div id="novosti">
    <b-container>
      <b-row class="py-4">
        <b-col
          lg="4"
          md="6"
          v-for="novost in novosti"
          :key="novost.id"
          class="my-2"
        >
          <NovostItem
            :picture="novost.picture"
            :title="novost.title"
            :category="novost.category"
            :created_at="novost.created_at"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NovostItem from "@/components/NovostItem.vue";

export default {
  name: "NovostiIspis",
  components: {
    NovostItem,
  },
  props: ["novostiFiltered"],
  data() {
    return {
      novosti: undefined
    };
  },

  mounted() {
    // console.log(this.categories);
    this.novosti = this.novostiFiltered;

    // pravi hash oznacenih kategorija o onda dolazim obavjesti
  }
};
</script>

<style scoped>
.bold {
  font-weight: 600;
}
</style>