<template lang="pug">
EntityList(
  :service="service"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    p.text-gray-900 {{ entity.title }}
</template>

<script>
import EntityList from "@/components/EntityList";
import MarvelService from "@/services/MarvelService";

export default {
  name: "ComicsList",
  components: { EntityList },
  data() {
    return {
      service: new MarvelService("comics"),
      entityName: "Comic"
    };
  }
};
</script>
