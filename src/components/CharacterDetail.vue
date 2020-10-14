<template lang="pug">
extends ../views/EntityDetail
block detailEntity
  h1 {{ entity.name }}
  label Description :
  p {{ entity.description }}
</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import CharacterService from "@/services/CharacterService";

export default {
  name: "CharacterDetail",
  extends: EntityDetail,
  data() {
    return {
      service: new CharacterService()
    };
  }
};
</script>
