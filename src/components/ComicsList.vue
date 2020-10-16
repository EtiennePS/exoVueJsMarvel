<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
)
  template(v-slot="{entity}")
    router-link(:to="{ name: 'ComicDetail', params: { entityId: entity.id }}")
      ComicDetail(:passedEntity="entity" :isShort="true")
</template>

<script>
import EntityList from "@/components/EntityList";
import ComicDetail from "@/components/ComicDetail";
import Enum from "@/enums/EnumServices";

export default {
  name: "ComicsList",
  components: {
    EntityList,
    ComicDetail
  },
  data() {
    return {
      serviceName: Enum.COMICS,
      entityName: "Comic"
    };
  },
  methods: {
    goToDetail: id => {
      console.log(id);
    }
  }
};
</script>
