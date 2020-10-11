<script>
export default {
  abstract: true,
  name: "EntityList",
  data() {
    return {
      entityName: "Entity",
      entities: null,
      loading: false,
      errored: false,
      errorMessage: null,
      copyright: null,
      service: null, //To redefine in child components
      perPage: 50,
      currentPage: 1,
      totalResult: 0
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.totalResult / this.perPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.perPage + 1;
    },
    endIndex() {
      if (this.entities && this.entities.length) {
        return this.startIndex + this.entities.length - 1;
      } else {
        return this.startIndex;
      }
    },
    isFirstPage() {
      return this.currentPage == 1;
    },
    isLastPage() {
      return this.currentPage == this.totalPage;
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
          limit: this.perPage,
          offset: this.startIndex - 1
        }
      );
    },
    onUpdateSuccess(data, copyright) {
      this.entities = data.results;
      this.copyright = copyright;
      this.errored = false;
      this.totalResult = data.total;
      this.currentPage = data.offset / this.perPage + 1;
    },
    onUpdateFail(message) {
      this.errored = true;
      this.errorMessage = message;
    },
    onUpdateDone() {
      this.loading = false;
    },
    nextPage() {
      if (!this.isLastPage) {
        this.currentPage++;
        this.updateEntities();
      }
    },
    previousPage() {
      if (!this.isFirstPage) {
        this.currentPage--;
        this.updateEntities();
      }
    }
  },
  mounted() {
    this.updateEntities();
  }
};
</script>
