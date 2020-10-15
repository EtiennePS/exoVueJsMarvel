export default {
  props: {
    service: Object,
    entityName: {
      default: "Entity",
      type: String
    }
  },
  data() {
    return {
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
