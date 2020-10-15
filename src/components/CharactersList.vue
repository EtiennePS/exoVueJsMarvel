<template lang="pug">
EntityList(
  :service="service"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    p(@click="goCharacterDetail(entity)") {{entity.name}}
</template>

<script>
import CharacterService from "@/services/CharacterService";
import EntityList from "@/components/EntityList";

export default {
  name: "CharacterList",
  components: { EntityList },
  props: {
    entityId: Number
  },
  data() {
    return {
      service: new CharacterService(),
      entityName: "Character"
    };
  },
  methods: {
    goCharacterDetail: id => {
      //entityId = id;
      console.log(id);
    }
  }
};
</script>
