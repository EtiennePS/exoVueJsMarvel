<template lang="pug">
EntityList(
  :service="service"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    p(@click="goCharacterDetail(entity)") {{entity.name}}
</template>

<script>
import EntityList from "@/components/EntityList";
import MarvelService from "@/services/MarvelService";

export default {
  name: "CharacterList",
  components: { EntityList },
  props: {
    entityId: Number
  },
  data() {
    return {
      service: new MarvelService("characters"),
      entityName: "Character"
    };
  },
  methods: {
    goCharacterDetail: id => {
      console.log(id);
    }
  }
};
</script>
