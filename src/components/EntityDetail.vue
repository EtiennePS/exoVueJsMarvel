<template lang="pug">
.entityDetail
  section(v-if="errored")
    section(v-if="is404")
      EntityNotFound(v-bind:entityName="entityName")
    section(v-else) {{ errorMessage }}
  section(v-if="loading")
    Spinner(fill="red" height="30px" dur="1.0s")
    |  Loading...
  section(v-if="entity")
    slot(:entity="entity")
    div(v-if="copyright") {{ copyright }}
</template>

<script>
import Spinner from "@/components/IconSpinner";
import EntityNotFound from "@/components/EntityNotFound";
import serviceMixin from "@/mixins/serviceMixin";
import detailMixin from "@/mixins/detailMixin";

export default {
  name: "EntityDetail",
  mixins: [serviceMixin, detailMixin],
  components: {
    Spinner,
    EntityNotFound
  },
  data() {
    return {
      is404: false,
      entity: null
    };
  },
  methods: {
    updateEntity() {
      this.loading = true;
      this.service.getEntity(
        this.onUpdateSuccess,
        this.onUpdateFail,
        this.onUpdateDone,
        this.entityId
      );
    },
    onUpdateSuccess(data, copyright) {
      this.entity = data.results[0];
      this.copyright = copyright;
      this.errored = false;
      this.is404 = false;
    },
    onUpdateFail(message, code) {
      this.errored = true;
      this.errorMessage = message;
      this.is404 = code === 404;
    }
  },
  mounted() {
    if (this.passedEntity) {
      this.entity = this.passedEntity;
    } else if (!this.passedEntity && this.entityId) {
      this.updateEntity();
    } else if (!this.passedEntity && !this.entityId) {
      this.errored = true;
      this.errorMessage =
        "The passedEntity or entityid must be provided too display details!";
    }
  }
};
</script>
