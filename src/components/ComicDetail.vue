<template lang="pug">
extends ../views/EntityDetail.pug
block detailEntity
  h1 {{ entity.title }}
  label Description : 
  p {{ entity.description }}
</template>

<script>
import EntityDetail from "@/components/EntityDetail.vue";
import ComicService from "@/services/ComicService.js";

export default {
  name: "ComicDetail",
  extends: EntityDetail,
  data() {
    return {
      service: new ComicService()
    };
  }
};
</script>

<style scoped lang="scss"></style>
