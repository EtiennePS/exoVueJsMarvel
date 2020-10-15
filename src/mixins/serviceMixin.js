import MarvelService from "@/services/MarvelService";

export default {
  props: {
    serviceName: String,
    entityName: {
      default: "Entity",
      type: String
    }
  },
  data() {
    return {
      service: new MarvelService(this.serviceName),
      loading: false,
      errored: false,
      errorMessage: null,
      copyright: null
    };
  },
  methods: {
    onUpdateDone() {
      this.loading = false;
    }
  }
};
