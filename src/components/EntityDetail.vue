<script>
import Spinner from "@/components/IconSpinner";
import EntityNotFound from "@/components/EntityNotFound";
import serviceMixin from "@/mixins/serviceMixin";

export default {
  name: "EntityDetail",
  mixins: [serviceMixin],
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
      this.is404 = code === 404;
    }
  },
  mounted() {
    if (this.passedEntity) {
      this.entity = this.passedEntity;
    } else if (!this.passedEntity && this.getEntityId) {
      this.updateEntity();
    } else if (!this.passedEntity && !this.getEntityId) {
      this.errored = true;
      this.errorMessage =
        "The passedEntity or entityid must be provided too display details!";
    }
  }
};
</script>
