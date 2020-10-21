<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
  :filtersData="filtersData"
  :initialPerPage="this.filtersData.limit"
)
  template(v-slot:filters)
    Filters(:orderByValues="orderByValues", :initialForm="filtersData" :isName="false" v-on:filters-submit="onFiltersSubmit")
  template(v-slot="{entity}")
    router-link(:to="{ name: 'StoryDetail', params: { entityId: entity.id }}")
      StoryDetail(:passedEntity="entity" :isShort="true")
</template>

<script>
import EntityList from "@/components/EntityList";
import Filters from "@/components/Filters";
import StoryDetail from "@/components/StoryDetail";
import Enum from "@/enums/EnumServices";

export default {
  name: "StoriesList",
  components: {
    EntityList,
    StoryDetail,
    Filters
  },
  data() {
    return {
      serviceName: Enum.STORIES,
      entityName: "Story",
      filtersData: { limit: 20 },
      orderByValues: [
        { text: "Id", value: "id" },
        { text: "Modified", value: "modified" }
      ]
    };
  },
  methods: {
    onFiltersSubmit(filtersData) {
      this.filtersData = filtersData;
    }
  }
};
</script>
