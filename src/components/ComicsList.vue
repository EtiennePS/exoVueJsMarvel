<template lang="pug">
EntityList(
  :serviceName="serviceName"
  :entityName="entityName"
  :filtersData="filtersData"
  :initialPerPage="this.filtersData.limit"
)
  template(v-slot:filters)
    Filters(:orderByValues="orderByValues", :initialForm="filtersData" :isName="false" v-on:filters-submit="onFiltersSubmit")
      label(for="format") Format
      select(name="format")
        option(disabled="disabled" selected="selected" value="") Choose
        option(value="comic") Comic
        option(value="magazine") Magazine
        option(value="trade paperback") Trade paperback
        option(value="hardcover") Hardcover
        option(value="digest") Digest
        option(value="graphic novel") Graphic novel
        option(value="digital comic") Digital comic
        option(value="infinite comic") Infinite comic
      label(for="formatType") Format type
      select(name="formatType")
        option(disabled="disabled" selected="selected" value="") Choose
        option(value="comic") Comic
        option(value="collection") Collection
      label(for="noVariants") No variants
      select(name="noVariants")
        option(disabled="disabled" selected="selected" value="") Choose
        option(value="true") True
        option(value="false") False
      label(for="dateDescriptor") Date descriptor
      select(name="dateDescriptor")
        option(disabled="disabled" selected="selected" value="") Choose
        option(value="lastWeek") Last week
        option(value="thisWeek") This week
        option(value="nextWeek") Next week
        option(value="thisMonth") This month
      label(for="startYear") Start Year
      input(type="number" name="startYear")
      label(for="issueNumber") IssueNumber
      input(type="number" name="issueNumber")
      label(for="diamondCode") Diamond code
      input(type="string" name="diamondCode")
      label(for="digitalId") Digital id
      input(type="number" name="digitalId")
      label(for="upc") UPC
      input(type="text" name="upc")
      label(for="isbn") ISBN
      input(type="text" name="isbn")
      label(for="ean") EAN
      input(type="text" name="ean")
      label(for="issn") ISSN
      input(type="text" name="issn")
      label(for="hasDigitalIssue") Has digital issue
      input(type="text" name="hasDigitalIssue")
      label(for="modifiedSince") Modified since
      input(type="date" name="modifiedSince")
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
      filtersData: { limit: 20 },
      orderByValues: [
        { text: "Title", value: "title" },
        { text: "On sale date", value: "onsaleDate" }
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
