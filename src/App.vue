<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/characters">Character</router-link> |
    <router-link to="/comics">Comic</router-link> |
    <router-link to="/series">Series</router-link> |
    <router-link to="/events">Events</router-link> |
    <router-link to="/creators">Creators</router-link> |
    <router-link to="/stories">Stories</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
