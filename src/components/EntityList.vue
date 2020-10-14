<script>
import Paginate from "@/components/Paginate.vue";
import Spinner from "@/components/icons/Spinner.vue";

export default {
  abstract: true,
  name: "EntityList",
  components: {
    Paginate,
    Spinner
  },
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
    startIndex() {
      return (this.currentPage - 1) * this.perPage + 1;
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
    callbackPaginate(pageNumber) {
      this.currentPage = pageNumber;
      this.updateEntities();
    }
  },
  mounted() {
    this.updateEntities();
  }
};
</script>
