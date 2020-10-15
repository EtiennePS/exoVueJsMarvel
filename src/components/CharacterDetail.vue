<template lang="pug">
EntityDetail(
  :serviceName="serviceName"
  :entityName="entityName"
  :entityId="entityId"
  :passedEntity="passedEntity"
)
  template(v-slot="{entity}")
    h1 {{ entity.name }}
    label Description :
    p {{ entity.description }}
</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import { SERVICES_NAMES } from "@/enums/EnumServices";

export default {
  name: "CharacterDetail",
  components: { EntityDetail },
  data() {
    return {
      serviceName: SERVICES_NAMES.CHARACTERS
    };
  }
};
</script>
