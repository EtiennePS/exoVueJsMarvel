<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    router-link(:to="{ name: 'CharacterDetail', params: { entityId: entity.id }}")
      CharacterDetail(:passedEntity="entity" :isShort="true")
</template>

<script>
import EntityList from "@/components/EntityList";
import CharacterDetail from "@/components/CharacterDetail";
import Enum from "@/enums/EnumServices";

export default {
  name: "CharacterList",
  components: { EntityList, CharacterDetail },
  props: {
    entityId: Number
  },
  data() {
    return {
      serviceName: Enum.CHARACTERS,
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
