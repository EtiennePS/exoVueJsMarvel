<template lang="pug">
EntityDetail(
  :service="service"
  :entityName="entityName"
  :entityId="entityId"
  :passedEntity="passedEntity"
)
  template(v-slot="{entity}")
    h1 {{ entity.title }}
    label Description :
    p {{ entity.description }}
</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import MarvelService from "@/services/MarvelService";

export default {
  name: "ComicDetail",
  components: { EntityDetail },
  props: {
    passedEntity: { default: null },
    entityId: { type: String, default: null }
  },
  data() {
    return {
      service: new MarvelService("comics"),
      entityName: "Comic"
    };
  }
};
</script>

<style scoped lang="scss"></style>
