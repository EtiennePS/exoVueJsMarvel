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
    router-link(:to="{ name: 'CharacterDetail', params: { entityId: entity.id }}")
      CharacterDetail(:passedEntity="entity" :isShort="true")
</template>

<script>
import EntityList from "@/components/EntityList";
import Filters from "@/components/Filters";
import CharacterDetail from "@/components/CharacterDetail";
import Enum from "@/enums/EnumServices";

export default {
  name: "CharacterList",
  components: { EntityList, CharacterDetail, Filters },
  props: {
    entityId: Number
  },
  data() {
    return {
      serviceName: Enum.CHARACTERS,
      entityName: "Character",
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
