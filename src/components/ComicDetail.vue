<template lang="pug">
EntityDetail(
  :serviceName="serviceName"
  :entityName="entityName"
  :entityId="entityId"
  :passedEntity="passedEntity"
)
  template(v-slot="{entity}")
    h1 {{ entity.title }}
    label Description :
    p {{ entity.description }}
</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import { SERVICES_NAMES } from "@/enums/EnumServices";

export default {
  name: "ComicDetail",
  components: { EntityDetail },
  props: {
    passedEntity: { default: null },
    entityId: { type: String, default: null }
  },
  data() {
    return {
      serviceName: SERVICES_NAMES.COMICS,
      entityName: "Comic"
    };
  }
};
</script>

<style scoped lang="scss"></style>
