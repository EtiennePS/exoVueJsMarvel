<template lang="pug">
.comic
  h1.font-sans.text-2xl Comics
  p(v-if="errored") {{ errorMessage }}
  p(v-if="loading") Chargement...
  div(v-else)
    button(@click="updateComics") Update
    p.text-gray-900(v-for="c in comics" :key="c.title") {{ c.title }}
    div(v-if="copyright") {{ copyright }}
</template>

<script>
import ComicService from "@/services/ComicService.js";

export default {
  name: "Comic",
  data() {
    return {
      comics: null,
      loading: false,
      errored: false,
      errorMessage: null,
      copyright: null,
      service: new ComicService()
    };
  },
  methods: {
    updateComics() {
      this.loading = true;
      this.service.getAllComics(
        this.onUpdateSuccess,
        this.onUpdateFail,
        this.onUpdateDone
      );
    },
    onUpdateSuccess(result, copyright) {
      this.comics = result;
      this.copyright = copyright;
      this.errored = false;
    },
    onUpdateFail(message) {
      this.errored = true;
      this.errorMessage = message;
    },
    onUpdateDone() {
      this.loading = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
button:hover {
  @apply bg-blue-700;
}
</style>
