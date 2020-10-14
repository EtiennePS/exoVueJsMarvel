<template lang="pug">
extends ../views/EntityList
block listedEntity
  p.text-gray-900(v-for="e in entities" :key="e.name") {{ e.name }}
</template>

<script>
import CharacterService from "@/services/CharacterService";
import EntityList from "@/components/EntityList";

export default {
  name: "CharacterList",
  components: { EntityList },
  extends: EntityList,
  data() {
    return {
      service: new CharacterService(),
      entityName: "Character"
    };
  }
};
</script>
