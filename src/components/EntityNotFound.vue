<template lang="pug">
.entityNotFound
  h1 404
  p The {{ entityName }} you are looking for can't be found. Let's hope it hasn't been snapped!
</template>

<script>
export default {
  name: "NotFound",
  props: {
    entityName: { type: String, default: "Entity" }
  }
};
</script>
