<template lang="pug">
.entityList
  h1.font-sans.text-2xl {{ entityName }}
  p(v-if="errored") {{ errorMessage }}
  p(v-if="loading")
    Spinner(fill="orange" height="30px" dur="1.0s")
    |  Loading...
  div(v-else).isLoad
    div.filters
      slot(name="filters")
    div.entities
      slot(v-for="e in entities" :entity="e")
    Paginate(
      :perPage="filtersData.limit"
      :currentPage="currentPage"
      :total="totalResult"
      :entityName="entityName"
      v-on:page-change="callbackPaginate")
    div(v-if="copyright") {{ copyright }}

</template>

<script>
import Paginate from "@/components/Paginate";
import Spinner from "@/components/IconSpinner";
import serviceMixin from "@/mixins/serviceMixin";

export default {
  name: "EntityList",
  mixins: [serviceMixin],
  components: {
    Paginate,
    Spinner
  },
  props: {
    filtersData: Object
  },
  data() {
    return {
      entities: null,
      currentPage: 1,
      totalResult: 0
    };
  },
  computed: {
    startIndex() {
      return (this.currentPage - 1) * this.filtersData.limit + 1;
    }
  },
  methods: {
    updateEntities() {
      this.loading = true;
      this.service.getList(
        this.onUpdateSuccess,
        this.onUpdateFail,
        this.onUpdateDone,
        {
          offset: this.startIndex - 1,
          ...this.filtersData
        }
      );
    },
    onUpdateSuccess(data, copyright) {
      this.entities = data.results;
      console.log
      this.copyright = copyright;
      this.errored = false;
      this.totalResult = data.total;
      this.currentPage = data.offset / this.filtersData.limit + 1;
    },
    onUpdateFail(message) {
      this.errored = true;
      this.errorMessage = message;
    },
    callbackPaginate(pageNumber) {
      this.currentPage = pageNumber;
      this.updateEntities();
    }
  },
  mounted() {
    this.updateEntities();
  },
  watch: {
    filtersData: function() {
      this.offset = 0;
      this.updateEntities();
    }
  }
};
</script>
