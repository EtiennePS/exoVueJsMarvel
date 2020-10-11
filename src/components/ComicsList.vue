<template lang="pug">
extends ../views/EntityList.pug
block listedEntity
  p.text-gray-900(v-for="e in entities" :key="e.title") {{ e.title }}
</template>

<script>
import ComicService from "@/services/ComicService.js";
import EntityList from "@/components/EntityList.vue";

export default {
  name: "ComicsList",
  extends: EntityList,
  data() {
    return {
      service: new ComicService(),
      entityName: "Comic"
    };
  }
};
</script>
