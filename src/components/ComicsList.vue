<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
)
  template(v-slot:filters)
    Filters(:orderByValues="orderByValues", :isTitle="true")
  template(v-slot="{entity}")
    router-link(:to="{ name: 'ComicDetail', params: { entityId: entity.id }}")
      ComicDetail(:passedEntity="entity" :isShort="true")
</template>

<script>
import EntityList from "@/components/EntityList";
import Filters from "@/components/Filters";
import ComicDetail from "@/components/ComicDetail";
import Enum from "@/enums/EnumServices";

export default {
  name: "ComicsList",
  components: {
    EntityList,
    ComicDetail,
    Filters
  },
  data() {
    return {
      serviceName: Enum.COMICS,
      entityName: "Comic",
      orderByValues: [
        { text: "Title", value: "title" },
        { text: "On sale date", value: "onsaleDate" }
      ]
    };
  },
  methods: {
    goToDetail: id => {
      console.log(id);
    }
  }
};
</script>
