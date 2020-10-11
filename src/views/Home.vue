<template>
  <div class="home">
    <Character />
    <ComicsList />
  </div>
</template>

<script>
// @ is an alias to /src
import Character from "@/components/Character.vue";
import ComicsList from "@/components/ComicsList.vue";

export default {
  name: "Home",
  components: {
    Character,
    ComicsList
  }
};
</script>
