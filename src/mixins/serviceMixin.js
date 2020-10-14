export default {
  data() {
    return {
      service: null,
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
