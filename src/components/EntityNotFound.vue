/* eslint-disable prettier/prettier */
<template lang="pug">
.entityNotFound
  h1 404
  p The {{ entityName }} you are looking for can't be found. Let's hope it hasn't been snapped!
  img.notFound(src="@/assets/img/404.jpg")
</template>

<script>
export default {
  name: "NotFound",
  props: {
    entityName: { type: String, default: "Entity" }
  }
};
</script>

<style scoped>
.entityNotFound {
  position: relative;
}
.entityNotFound h1 {
  font-size: 3em;
}
.entityNotFound p {
  width: 80%;
  margin: auto;
}
img.notFound {
  width: 30%;
  max-width: 400px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
