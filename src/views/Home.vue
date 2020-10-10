<template>
  <div class="home">
    <Character />
    <Comic />
  </div>
</template>

<script>
// @ is an alias to /src
import Character from "@/components/Character.vue";
import Comic from "@/components/Comic.vue";

export default {
  name: "Home",
  components: {
    Character,
    Comic
  }
};
</script>
