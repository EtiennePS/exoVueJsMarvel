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
    router-link(:to="{ name: 'SerieDetail', params: { entityId: entity.id }}")
      SerieDetail(:passedEntity="entity" :isShort="true")
</template>

<script>
import EntityList from "@/components/EntityList";
import Filters from "@/components/Filters";
import SerieDetail from "@/components/SerieDetail";
import Enum from "@/enums/EnumServices";

export default {
  name: "SerieList",
  components: {
    EntityList,
    SerieDetail,
    Filters
  },
  data() {
    return {
      serviceName: Enum.SERIES,
      entityName: "Serie",
      filtersData: { limit: 20 },
      orderByValues: [
        { text: "Title", value: "title" },
        { text: "Modified", value: "modified" },
        { text: "Start Year", value: "startYear" }
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
