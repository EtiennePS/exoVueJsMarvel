<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    p.text-gray-900 {{ entity.title }}
</template>

<script>
import EntityList from "@/components/EntityList";
import { SERVICES_NAMES } from "@/enums/EnumServices";

export default {
  name: "ComicsList",
  components: { EntityList },
  data() {
    return {
      serviceName: SERVICES_NAMES.COMICS,
      entityName: "Comic"
    };
  }
};
</script>
