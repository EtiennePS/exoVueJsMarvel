<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    ComicDetail(:passedEntity="entity" :isShort="true")
</template>

<script>
import EntityList from "@/components/EntityList";
import ComicDetail from "@/components/ComicDetail";
import { SERVICES_NAMES } from "@/enums/EnumServices";

export default {
  name: "ComicsList",
  components: { 
    EntityList, 
    ComicDetail 
  },
  data() {
    return {
      serviceName: SERVICES_NAMES.COMICS,
      entityName: "Comic"
    };
  }
};
</script>
