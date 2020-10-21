<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
  :filtersData="filtersData"
  :initialPerPage="this.filtersData.limit"
)
  template(v-slot:filters)
    Filters(:orderByValues="orderByValues", :initialForm="filtersData" :isName="true" v-on:filters-submit="onFiltersSubmit")
  template(v-slot="{entity}")
    router-link(:to="{ name: 'EventDetail', params: { entityId: entity.id }}")
      EventDetail(:passedEntity="entity" :isShort="true")
</template>

<script>
import EntityList from "@/components/EntityList";
import Filters from "@/components/Filters";
import EventDetail from "@/components/EventDetail";
import Enum from "@/enums/EnumServices";

export default {
  name: "EventsList",
  components: {
    EntityList,
    EventDetail,
    Filters
  },
  data() {
    return {
      serviceName: Enum.EVENTS,
      entityName: "Event",
      filtersData: { limit: 20 },
      orderByValues: [
        { text: "Name", value: "name" },
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
