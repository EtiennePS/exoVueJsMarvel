<template>
  <div class="character">
    <h1>Characters</h1>
    <p v-if="errored">Erreur lors de l'appel à l'API Marvel!</p>
    <div v-if="loading">Chargement...</div>
    <div v-else>
      <button @click="updateCharacters">Update</button>
      <div v-for="character in characters" :key="character.name">
        {{ character.name }}
      </div>
      <strong v-if="copyright">{{ copyright }}</strong>
    </div>
  </div>
</template>

<script>
import ax from 'axios'
import jsmd5 from 'js-md5'
export const axios = ax
export const md5 = jsmd5
export default {
  name: "Character",
  data () {
    return {
      characters: null,
      loading: false,
      errored: false,
      copyright: null
    };
  },
  methods: {
    updateCharacters() {
      this.loading = true;
      var date = Date.now();
      var hash = md5(date + process.env.VUE_APP_PRIVATE_API_KEY + process.env.VUE_APP_PUBLIC_API_KEY);
      var url="https://gateway.marvel.com:443/v1/public/characters?apikey=" + process.env.VUE_APP_PUBLIC_API_KEY
        + "&ts=" + date + "&hash=" + hash;
      axios
      .get(url)
      .then(response => {
        this.characters = response.data.data.results;
        this.loading = false;
        this.copyright = response.data.attributionText;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => this.loading = false)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
