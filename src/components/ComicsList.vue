<template lang="pug">
EntityList(
  :service="service"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    p.text-gray-900 {{ entity.title }}
</template>

<script>
import ComicService from "@/services/ComicService";
import EntityList from "@/components/EntityList";

export default {
  name: "ComicsList",
  components: { EntityList },
  data() {
    return {
      service: new ComicService(),
      entityName: "Comic"
    };
  }
};
</script>
