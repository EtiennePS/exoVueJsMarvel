<template lang="pug">
extends ../views/EntityList
block listedEntity
  //a(v-for="e in entities" :key="e.name" @click="goCharacterDetail(e.id)") {{e.name}}
  p.text-gray-900(v-for="e in entities" :key="e.name" @click="goCharacterDetail(e.id)") {{ e.name }}
</template>

<script>
import CharacterService from "@/services/CharacterService";
import EntityList from "@/components/EntityList";

export default {
  name: "CharacterList",
  components: { EntityList },
  extends: EntityList,
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
