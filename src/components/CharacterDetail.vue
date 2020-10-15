<template lang="pug">
EntityDetail(
  :service="service"
  :entityName="entityName"
  :entityId="entityId"
  :passedEntity="passedEntity"
)
  template(v-slot="{entity}")
    h1 {{ entity.name }}
    label Description :
    p {{ entity.description }}
</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import MarvelService from "@/services/MarvelService";

export default {
  name: "CharacterDetail",
  components: { EntityDetail },
  data() {
    return {
      service: new MarvelService("characters")
    };
  }
};
</script>
