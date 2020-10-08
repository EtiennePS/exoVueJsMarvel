<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Character/>
  </div>
</template>

<script>
// @ is an alias to /src
import Character from "@/components/Character.vue";

export default {
  name: "Home",
  components: {
    Character
  }
};
</script>
