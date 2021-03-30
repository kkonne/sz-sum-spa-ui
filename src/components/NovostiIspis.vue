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
  props: ["categories"],
  data() {
    return {
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
            "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
};
</script>

<style scoped>
.bold {
  font-weight: 600;
}
</style>