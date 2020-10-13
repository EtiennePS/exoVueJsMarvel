<template lang="pug">
.comicDetail
  section(v-if="errored")
    section(v-if="is404")
      EntityNotFound(entityName="Comic")
    section(v-else) {{ errorMessage }}
  section(v-if="loading") 
    Spinner(height="20px" fill="grey") Loading...
  section(v-if="entity")
    h1 {{ entity.title }}
    label Description : 
    p {{ entity.description }}
</template>

<script>
import ComicService from "@/services/ComicService.js";
import Spinner from "@/components/icons/Spinner.vue";
import EntityNotFound from "@/components/EntityNotFound.vue";

export default {
  name: "ComicDetail",
  components: {
    Spinner,
    EntityNotFound
  },
  props: {
    passedEntity: { default: null },
    entityId: { type: Number, default: null }
  },
  data() {
    return {
      service: null,
      loading: false,
      errored: false,
      errorMessage: null,
      copyright: null,
      is404: false,
      entity: null
    };
  },
  computed: {
    getEntityId() {
      if (this.entityId) return this.entityId;
      if (this.$route.params.entityId) return this.$route.params.entityId;
      return null;
    }
  },
  methods: {
    updateEntity() {
      this.loading = true;
      this.service.getEntity(
        this.onUpdateSuccess,
        this.onUpdateFail,
        this.onUpdateDone,
        this.getEntityId
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
      this.is404 = code == 404;
    },
    onUpdateDone() {
      this.loading = false;
    }
  },
  mounted() {
    if (this.passedEntity) {
      this.entity = this.passedEntity;
    } else if (!this.passedEntity && this.getEntityId) {
      this.service = new ComicService();
      this.updateEntity();
    } else if (!this.passedEntity && !this.getEntityId) {
      this.errored = true;
      this.errorMessage =
        "The passedEntity or entityid must be provided too display details!";
    }
  }
};
</script>

<style scoped lang="scss"></style>
