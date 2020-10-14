export default {
  data() {
    return {
      service: null,
      loading: false,
      errored: false,
      errorMessage: null,
      copyright: null,
      entityName: "Entity"
    };
  },
  methods: {
    onUpdateDone() {
      this.loading = false;
    }
  }
};
