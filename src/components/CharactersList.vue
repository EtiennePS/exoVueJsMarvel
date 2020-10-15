<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    p(@click="goCharacterDetail(entity)") {{entity.name}}
</template>

<script>
import EntityList from "@/components/EntityList";
import { SERVICES_NAMES } from "@/enums/EnumServices";

export default {
  name: "CharacterList",
  components: { EntityList },
  props: {
    entityId: Number
  },
  data() {
    return {
      serviceName: SERVICES_NAMES.CHARACTERS,
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
